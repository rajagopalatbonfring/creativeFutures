// 'use client';

// import { useEffect } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { SubmissionForm } from '@/components/submission-form';
// import { useAuth } from '@/lib/auth-provider';

// export default function SubmitPage() {
//   const { user, loading } = useAuth();
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const activityId = searchParams.get('activity');

//   useEffect(() => {
//     if (!loading && !user) {
//       router.push('/login');
//     }
//   }, [user, loading, router]);

//   if (loading || !user) {
//     return (
//       <div className="flex h-screen items-center justify-center">
//         <div className="text-center">
//           <p className="text-lg text-muted-foreground">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative bg-gradient-to-b from-primary/10 to-white overflow-hidden min-h-screen flex items-center justify-center">
//       <div className="container mx-auto max-w-2xl px-4 py-36 md:px-6 relative z-10">
//         <div className="relative z-10">
//           <div className="mb-8 text-center">
//             <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
//               Share Your Creation
//             </h1>
//             <p className="mt-4 text-lg text-muted-foreground">
//               Follow the steps below to submit your masterpiece.
//             </p>
//           </div>
//           <SubmissionForm selectedActivityId={activityId} />
//         </div>
//       </div>
//     </div>
//   );
// }



















import { Suspense } from 'react';
import SubmitClient from './submit-client';

export const dynamic = 'force-dynamic';

export default function SubmitPage() {
  return (
    <Suspense fallback={null}>
      <SubmitClient />
    </Suspense>
  );
}
