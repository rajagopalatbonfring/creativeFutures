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

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SubmissionForm } from '@/components/submission-form';
import { useAuth } from '@/lib/auth-provider';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ageGroupData } from '@/lib/constants'; // for validation
import type { AgeGroup } from '@/lib/types';

export default function SubmitClient() {
  const { user, userProfile, loading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const activityId = searchParams.get('activity');

  useEffect(() => {
    if (!loading && !user) {
      const returnUrl = encodeURIComponent(`/submit${activityId ? `?activity=${activityId}` : ''}`);
      router.push(`/login?returnUrl=${returnUrl}`);
    }
  }, [user, loading, router, activityId]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-lg text-muted-foreground">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (!user || !userProfile) {
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

  // Runtime validation: is userProfile.ageGroup a valid AgeGroup?
  const isValidAgeGroup = (age: string | null | undefined): age is AgeGroup =>
    !!age && ageGroupData.some(g => g.age === age);

  const userAgeGroup = isValidAgeGroup(userProfile.ageGroup)
    ? userProfile.ageGroup
    : null;

  // If invalid/missing age → show helpful message
  if (!userAgeGroup) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center max-w-md px-6">
          <h2 className="text-2xl font-bold mb-4">Age group not set</h2>
          <p className="text-muted-foreground mb-6">
            Please update your age group in your profile to see age-appropriate activities.
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
          userAgeGroup={userAgeGroup} // now guaranteed to be AgeGroup (no null here)
        />
      </div>
    </div>
  );
}