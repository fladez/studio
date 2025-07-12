
"use client";

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
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
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists() && docSnap.data().isBlocked) {
          await auth.signOut(); // Force sign out if blocked
          setUser(null);
          setUserProfile(null);
        } else {
          setUser(user);
        }
      } else {
        setUser(null);
        setUserProfile(null);
      }
      if (loading) setLoading(false);
    });

    return () => unsubscribeAuth();
  }, [loading]);

  useEffect(() => {
    if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const unsubscribeSnapshot = onSnapshot(userDocRef, (docSnap) => {
            if (docSnap.exists()) {
                const profileData = docSnap.data();

                // Override role if user is a superadmin
                const isSuperAdmin = user.email && SUPERADMIN_EMAILS.includes(user.email);
                const effectiveRole = isSuperAdmin ? 'superadmin' : profileData.role || 'user';
                
                const profile: UserProfile = {
                    email: profileData.email || null,
                    role: effectiveRole,
                    firstName: profileData.firstName || '',
                    lastName: profileData.lastName || '',
                    username: profileData.username || '',
                    photoURL: profileData.photoURL || null,
                    dob: profileData.dob || null,
                    isBlocked: profileData.isBlocked || false,
                };
                
                if (profile.isBlocked && !isSuperAdmin) { // Superadmins cannot be blocked
                    auth.signOut();
                } else {
                    setUserProfile(profile);

                    // If a superadmin's role in DB is not 'superadmin', update it.
                    if (isSuperAdmin && profileData.role !== 'superadmin') {
                       setDoc(userDocRef, { role: 'superadmin' }, { merge: true });
                    }
                }
            } else {
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
