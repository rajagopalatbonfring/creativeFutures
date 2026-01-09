'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/lib/auth';
import { ActivitySuggester } from '@/components/activity-suggester';

export default function DashboardPage() {
  const { user, userProfile, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user || !userProfile) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-secondary/20 py-24">
        <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 relative z-10">
        <div className="relative z-10">
          <div className="mb-8 space-y-2">
            <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Welcome, {userProfile.displayName}!
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready for your next creative spark? Let our AI help you find it!
            </p>
          </div>

          <ActivitySuggester />
        </div>
      </div>
    </div>
  );
}
