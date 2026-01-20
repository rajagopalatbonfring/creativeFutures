// 'use client';

// import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
// import {
//   onAuthStateChanged,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   type User,
// } from 'firebase/auth';
// import { auth } from './firebase';
// import type { UserProfile } from './types';
// import { AgeGroup } from './types';

// interface AuthContextType {
//   user: User | null;
//   userProfile: UserProfile | null;
//   loading: boolean;
//   login: (email: string, pass: string) => Promise<any>;
//   signup: (email: string, pass: string) => Promise<any>;
//   logout: () => Promise<any>;
// }

// const AuthContext = createContext<AuthContextType>({
//   user: null,
//   userProfile: null,
//   loading: true,
//   login: async () => {},
//   signup: async () => {},
//   logout: async () => {},
// });

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
//       setLoading(true);
//       if (firebaseUser) {
//         setUser(firebaseUser);
//         // In a real app, you would fetch the user profile from Firestore here
//         // For this demo, we'll create a mock profile
//         const mockProfile: UserProfile = {
//             uid: firebaseUser.uid,
//             email: firebaseUser.email,
//             displayName: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Creative Kid',
//             photoURL: firebaseUser.photoURL,
//             ageGroup: '7-8', // Mock data
//             preferences: 'Loves drawing and making up stories.', // Mock data
//         };
//         setUserProfile(mockProfile);
//       } else {
//         setUser(null);
//         setUserProfile(null);
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const login = (email: string, pass: string) => {
//     return signInWithEmailAndPassword(auth, email, pass);
//   };

//   const signup = (email: string, pass: string) => {
//     return createUserWithEmailAndPassword(auth, email, pass);
//   };

//   const logout = () => {
//     return signOut(auth);
//   };

//   const value = {
//     user,
//     userProfile,
//     loading,
//     login,
//     signup,
//     logout,
//   };

//   return React.createElement(AuthContext.Provider, { value }, !loading && children);
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };



















// src/lib/auth.ts
// (Optional helper file – can also be merged into auth-provider.tsx)

import { createContext } from 'react';

export interface MockUser {
  uid: string;
  email: string;
  displayName: string;
}

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  ageGroup: string;
  preferences: string;
  photoURL: string | null;
}

export interface AuthContextType {
  user: MockUser | null;
  userProfile: UserProfile | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

// Only export the context if you need to use it elsewhere
export const AuthContext = createContext<AuthContextType>({
  user: null,
  userProfile: null,
  loading: true,
  login: async () => {},
  logout: async () => {},
});