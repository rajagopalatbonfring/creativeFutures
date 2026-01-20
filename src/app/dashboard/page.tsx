'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-provider';
import { ActivitySuggester } from '@/components/activity-suggester';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SubmissionCard } from '@/components/submission-card';
import { featuredSubmissions } from '@/lib/constants';
import { FilePlus2, Telescope, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const { user, userProfile, loading } = useAuth();
  const router = useRouter();

  // No longer need to redirect, but we can show a loading state
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  // This should not happen with the new static auth provider, but it's good practice.
  if (!user || !userProfile) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">User not found. Please log in.</p>
          <Button onClick={() => router.push('/login')} className="mt-4">Go to Login</Button>
        </div>
      </div>
    );
  }

  const userSubmissions = featuredSubmissions.filter(s => s.author.startsWith('Leo'));

  return (
    <div className="bg-gradient-to-br from-[#00B4EE]/10 via-white to-[#FBC51A]/10 min-h-screen">
      <div className="container mx-auto max-w-7xl px-4 py-36 md:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 space-y-2"
        >
          <h1 className="font-headline text-4xl sm:text-5xl font-black tracking-tight">
            Welcome back, <span className="text-[#FB0091]">{userProfile.displayName}!</span>
          </h1>
          <p className="text-xl text-gray-600">
            Ready for your next creative spark? Let's get started! ✨
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content: Activity Suggester */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ActivitySuggester />
          </motion.div>

          {/* Sidebar: Quick Actions & Profile */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline text-2xl font-bold">
                        <User className="text-[#00B4EE] w-6 h-6" />
                        <span>Your Profile</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-gray-600">
                        Age Group: <span className="font-bold">{userProfile.ageGroup} years</span>
                    </p>
                     <p className="text-sm text-gray-600 mt-2">
                        Your interests: <span className="font-bold">{userProfile.preferences}</span>
                    </p>
                    <Button variant="link" className="px-0 mt-2 font-bold text-[#FB0091]">Edit Profile</Button>
                </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl font-bold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-3">
                <Button asChild size="lg" className="justify-start bg-gradient-to-r from-[#FB0091] to-pink-500 text-white shadow-lg">
                  <Link href="/submit">
                    <FilePlus2 className="mr-3 h-5 w-5" />
                    Submit New Creation
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="justify-start border-2 border-gray-300">
                  <Link href="/activities">
                    <Telescope className="mr-3 h-5 w-5 text-[#00B4EE]" />
                    Browse All Activities
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Submissions */}
          <motion.div 
            className="lg:col-span-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl font-bold">Your Recent Creations</CardTitle>
                <CardDescription>A gallery of your latest masterpieces.</CardDescription>
              </CardHeader>
              <CardContent>
                {userSubmissions.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {userSubmissions.map(submission => (
                            <SubmissionCard key={submission.id} submission={submission} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8 text-gray-500">
                        <p>You haven't submitted any creations yet.</p>
                        <Button asChild variant="link" className="mt-2 text-primary">
                            <Link href="/submit">Start creating now!</Link>
                        </Button>
                    </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
