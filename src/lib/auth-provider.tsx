// src/lib/auth-provider.tsx
// Temporary Mock Auth Provider for Development ONLY

'use client';

import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface MockUser {
  uid: string;
  email: string;
  displayName: string;
}

interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  ageGroup: string;
  preferences: string;
  photoURL: string | null;
}

interface AuthContextType {
  user: MockUser | null;
  userProfile: UserProfile | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userProfile: null,
  loading: true,
  login: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('mockCreativeFuturesUser');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as MockUser;
        setUser(parsed);

        setUserProfile({
          uid: parsed.uid,
          email: parsed.email,
          displayName: parsed.displayName,
          ageGroup: '9-10',
          preferences: 'Stories, drawing, simple experiments',
          photoURL: null,
        });
      } catch (err) {
        console.warn('Invalid stored mock user', err);
        localStorage.removeItem('mockCreativeFuturesUser');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    if (email.trim() === 'kid@creativefutures.com' && password === 'test1234') {
      const mockUser: MockUser = {
        uid: 'dev-user-001',
        email: 'kid@creativefutures.com',
        displayName: 'Aarav Creative',
      };

      setUser(mockUser);
      localStorage.setItem('mockCreativeFuturesUser', JSON.stringify(mockUser));

      setUserProfile({
        uid: mockUser.uid,
        email: mockUser.email,
        displayName: mockUser.displayName,
        ageGroup: '9-10',
        preferences: 'Stories, drawing, simple experiments',
        photoURL: null,
      });

      return;
    }

    throw new Error('Invalid credentials. Use: kid@creativefutures.com / test1234');
  };

  const logout = async () => {
    setUser(null);
    setUserProfile(null);
    localStorage.removeItem('mockCreativeFuturesUser');
  };

  const value: AuthContextType = {
    user,
    userProfile,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};