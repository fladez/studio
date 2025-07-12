
"use client";

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc, onSnapshot, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

const SUPERADMIN_EMAILS = ['canalfladez@gmail.com', 'rcorreas@gmail.com'];

interface UserProfile {
  id: string;
  email: string | null;
  role: 'user' | 'admin' | 'superadmin';
  firstName: string;
  lastName: string;
  username: string;
  photoURL: string | null;
  dob: any;
  createdAt: any;
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
    const unsubscribeAuth = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      if (!authUser) {
        setUserProfile(null);
        setLoading(false);
      }
    });
    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const userDocRef = doc(db, 'users', user.uid);
    const isSuperAdminByEmail = !!user.email && SUPERADMIN_EMAILS.includes(user.email);

    const unsubscribeSnapshot = onSnapshot(userDocRef, async (docSnap) => {
      if (isSuperAdminByEmail) {
        // If the user is a superadmin by email, we ensure their document exists and has the correct role.
        if (!docSnap.exists() || docSnap.data()?.role !== 'superadmin') {
          const newSuperAdminProfile = {
            email: user.email,
            role: 'superadmin',
            createdAt: serverTimestamp(),
            isBlocked: false,
            firstName: '',
            lastName: '',
            username: '',
            photoURL: null,
            dob: null,
          };
          await setDoc(userDocRef, newSuperAdminProfile, { merge: true });
          // Set the profile immediately instead of waiting for the next snapshot
          setUserProfile({
            ...newSuperAdminProfile,
            id: user.uid,
            createdAt: new Date(), // Approximate creation time for local state
          });
          setLoading(false);
          return; // Skip further processing for this snapshot
        }
      }
      
      if (docSnap.exists()) {
        const profileData = docSnap.data();

        // A superadmin should never be blocked from logging in.
        if (profileData.isBlocked && !isSuperAdminByEmail) {
          auth.signOut();
          setUser(null);
          setUserProfile(null);
        } else {
          setUserProfile({
            id: docSnap.id,
            email: profileData.email || null,
            role: isSuperAdminByEmail ? 'superadmin' : profileData.role || 'user',
            firstName: profileData.firstName || '',
            lastName: profileData.lastName || '',
            username: profileData.username || '',
            photoURL: profileData.photoURL || null,
            dob: profileData.dob || null,
            createdAt: profileData.createdAt || null,
            isBlocked: profileData.isBlocked || false,
          });
        }
      } else {
        // Doc doesn't exist for a regular user, or it was just created for a superadmin
        if(!isSuperAdminByEmail) setUserProfile(null);
      }
      
      setLoading(false);

    }, (error) => {
      console.error("Error fetching user profile:", error);
      setUserProfile(null);
      setLoading(false);
    });

    return () => unsubscribeSnapshot();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, userProfile, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
