
"use client";

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc, onSnapshot, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

// Hardcoded superadmins
const SUPERADMIN_EMAILS = ['canalfladez@gmail.com', 'rcorreas@gmail.com'];

interface UserProfile {
  email: string | null;
  role: 'user' | 'admin' | 'superadmin';
  firstName: string;
  lastName: string;
  username: string;
  photoURL: string | null;
  dob: any;
  isBlocked?: boolean;
}

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists() && docSnap.data().isBlocked) {
          const isSuperAdmin = user.email && SUPERADMIN_EMAILS.includes(user.email);
          if (!isSuperAdmin) {
             await auth.signOut();
             setUser(null);
             setUserProfile(null);
          } else {
             setUser(user);
          }
        } else {
          setUser(user);
        }
      } else {
        setUser(null);
        setUserProfile(null);
      }
      // Moved loading to a more central place in the second useEffect
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (user) {
      const userDocRef = doc(db, 'users', user.uid);
      
      const handleSuperAdmin = async () => {
        const docSnap = await getDoc(userDocRef);
        if (!docSnap.exists()) {
          // If superadmin logs in but has no user doc, create one.
          await setDoc(userDocRef, {
              email: user.email,
              role: 'superadmin',
              createdAt: serverTimestamp(),
              isBlocked: false,
          });
        } else if (docSnap.data().role !== 'superadmin') {
          // Ensure DB role is also superadmin
          await setDoc(userDocRef, { role: 'superadmin' }, { merge: true });
        }
      };
      
      const isSuperAdmin = user.email && SUPERADMIN_EMAILS.includes(user.email);
      if (isSuperAdmin) {
        handleSuperAdmin();
      }

      const unsubscribeSnapshot = onSnapshot(userDocRef, (docSnap) => {
        if (docSnap.exists()) {
          const profileData = docSnap.data();
          const effectiveRole = (user.email && SUPERADMIN_EMAILS.includes(user.email)) ? 'superadmin' : profileData.role || 'user';
          
          if (profileData.isBlocked && effectiveRole !== 'superadmin') {
            auth.signOut();
            setUserProfile(null);
            setUser(null);
          } else {
            setUserProfile({
              email: profileData.email || null,
              role: effectiveRole,
              firstName: profileData.firstName || '',
              lastName: profileData.lastName || '',
              username: profileData.username || '',
              photoURL: profileData.photoURL || null,
              dob: profileData.dob || null,
              isBlocked: profileData.isBlocked || false,
            });
          }
        } else {
          // If doc doesn't exist for a normal user, they might be new.
          setUserProfile(null);
        }
        setLoading(false);
      }, (error) => {
        console.error("Error fetching user profile:", error);
        setUserProfile(null);
        setLoading(false);
      });
      
      return () => unsubscribeSnapshot();
    } else {
      setLoading(false);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, userProfile, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
