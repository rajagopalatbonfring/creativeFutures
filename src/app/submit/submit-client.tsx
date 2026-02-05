// 'use client';

// import { useEffect } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { SubmissionForm } from '@/components/submission-form';
// import { useAuth } from '@/lib/auth-provider';
// import { Loader2 } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// export default function SubmitClient() {
//   const { user, loading } = useAuth();
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const activityId = searchParams.get('activity');

//   useEffect(() => {
//     if (!loading && !user) {
//       // Redirect to login with return URL so they come back after login
//       const returnUrl = encodeURIComponent(`/submit${activityId ? `?activity=${activityId}` : ''}`);
//       router.push(`/login?returnUrl=${returnUrl}`);
//     }
//   }, [user, loading, router, activityId]);

//   if (loading) {
//     return (
//       <div className="flex h-screen items-center justify-center">
//         <div className="flex flex-col items-center gap-4">
//           <Loader2 className="h-12 w-12 animate-spin text-primary" />
//           <p className="text-lg text-muted-foreground">Checking authentication...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!user) {
//     return (
//       <div className="flex h-screen items-center justify-center">
//         <div className="text-center max-w-md px-6">
//           <h2 className="text-2xl font-bold mb-4">Please log in to submit</h2>
//           <p className="text-muted-foreground mb-6">
//             You need to be signed in to share your creation with the community.
//           </p>
//           <Button onClick={() => router.push('/login')}>
//             Go to Login
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative bg-gradient-to-b from-primary/10 to-white min-h-screen flex items-center justify-center">
//       <div className="container mx-auto max-w-2xl px-4 py-16 md:py-24 md:px-6">
//         <div className="mb-10 text-center">
//           <h1 className="font-headline text-3xl font-bold sm:text-4xl md:text-5xl">
//             Share Your Creation
//           </h1>
//           <p className="mt-4 text-lg text-muted-foreground">
//             Follow the steps below to submit your masterpiece for review.
//           </p>
//         </div>

//         <SubmissionForm selectedActivityId={activityId} />
//       </div>
//     </div>
//   );
// }









'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SubmissionForm } from '@/components/submission-form';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ageGroupData } from '@/lib/constants';
import type { AgeGroup } from '@/lib/types';

// Helper to read auth from sessionStorage (client-safe)
function getSessionAuth() {
  if (typeof window === 'undefined') {
    return { isAuthenticated: false, token: null };
  }

  const token = sessionStorage.getItem('token');
  const isAuthStr = sessionStorage.getItem('isAuthenticated');

  return {
    isAuthenticated: isAuthStr === 'true',
    token: token || null,
  };
}

// Helper: calculate age group from DOB string (returns valid AgeGroup or null)
function getAgeGroupFromDOB(dob?: string): AgeGroup | null {
  if (!dob) return null;

  try {
    const birthDate = new Date(dob);
    if (Number.isNaN(birthDate.getTime())) return null;

    const today = new Date();
    const birthYear = birthDate.getFullYear();
    const currentYear = today.getFullYear();

    let age = currentYear - birthYear;

    // Adjust if birthday hasn't occurred this year yet
    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
      age -= 1;
    }

    // Protect against negative / unrealistic ages
    if (age < 0) return null;

    let group: 'Unknown' = 'Unknown';

    if (age >= 2 && age <= 4) group = '2-4';
    else if (age <= 6)        group = '5-6';
    else if (age <= 8)        group = '7-8';
    else if (age <= 10)       group = '9-10';
    else if (age <= 12)       group = '11-12';
    else if (age <= 14)       group = '13-14';
    else if (age <= 16)       group = '15-16';
    else if (age > 16)        group = '16+';

    // Validate against allowed values from constants
    const isValid = group;

    // Keep your debug logs (remove in production)
    console.log('ageGroupData', ageGroupData);
    console.log('computed age', age);
    console.log('assigned group', group);
    // console.log('isValid', isValid);

    return isValid ? group : null;
  } catch {
    return null;
  }
}

export default function SubmitClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activityId = searchParams.get('activity');

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);
  const [userAgeGroup, setUserAgeGroup] = useState<AgeGroup | null>(null);

  // Read authentication state once
  useEffect(() => {
    const { isAuthenticated: auth, token: t } = getSessionAuth();

    setIsAuthenticated(auth);
    setToken(t);
    setChecking(false);

    if (!auth) {
      const returnUrl = encodeURIComponent(`/submit${activityId ? `?activity=${activityId}` : ''}`);
      router.replace(`/login?returnUrl=${returnUrl}`);
    }
  }, [router, activityId]);

  // Load & compute age group after auth is confirmed
  useEffect(() => {
    if (!isAuthenticated || checking) return;

    try {
      const storedUser = sessionStorage.getItem('user');
      if (!storedUser) return;

      const parsed = JSON.parse(storedUser);
      const computedAgeGroup = getAgeGroupFromDOB(parsed?.dob);

      if (computedAgeGroup) {
        setUserAgeGroup(computedAgeGroup);
      }
      // else → remains null → shows "Age group not set" UI
    } catch (err) {
      console.warn('Failed to parse user from sessionStorage', err);
    }
  }, [isAuthenticated, checking]);

  if (checking) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-lg text-muted-foreground">Checking session...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center max-w-md px-6">
          <h2 className="text-2xl font-bold mb-4">Please log in to submit</h2>
          <p className="text-muted-foreground mb-6">
            You need to be signed in to share your creation with the community.
          </p>
          <Button onClick={() => router.push('/login')}>
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  if (!userAgeGroup) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center max-w-md px-6">
          <h2 className="text-2xl font-bold mb-4">Age group could not be determined</h2>
          <p className="text-muted-foreground mb-6">
            We couldn’t calculate your age group from the stored date of birth. 
            Please update your profile with a valid date of birth.
          </p>
          <Button onClick={() => router.push('/profile')}>
            Update Profile
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-b from-primary/10 to-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-2xl px-4 py-16 md:py-24 md:px-6">
        <div className="mb-10 text-center">
          <h1 className="font-headline text-3xl font-bold sm:text-4xl md:text-5xl">
            Share Your Creation
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Activities shown below are eligible for your age group ({userAgeGroup}).
          </p>
        </div>

        <SubmissionForm
          selectedActivityId={activityId}
          userAgeGroup={userAgeGroup}
        />
      </div>
    </div>
  );
}