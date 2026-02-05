// 'use client';

// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { useAuth } from '@/lib/auth-provider';
// import { ActivitySuggester } from '@/components/activity-suggester';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { SubmissionCard } from '@/components/submission-card';
// import { featuredSubmissions } from '@/lib/constants';
// import { FilePlus2, Telescope, User } from 'lucide-react';
// import { motion } from 'framer-motion';

// export default function DashboardPage() {
//   const { user, userProfile, loading } = useAuth();
//   const router = useRouter();

//   // No longer need to redirect, but we can show a loading state
//   if (loading) {
//     return (
//       <div className="flex h-screen items-center justify-center">
//         <div className="text-center">
//           <p className="text-lg text-muted-foreground">Loading Dashboard...</p>
//         </div>
//       </div>
//     );
//   }

//   // This should not happen with the new static auth provider, but it's good practice.
//   if (!user || !userProfile) {
//     return (
//       <div className="flex h-screen items-center justify-center">
//         <div className="text-center">
//           <p className="text-lg text-muted-foreground">User not found. Please log in.</p>
//           <Button onClick={() => router.push('/login')} className="mt-4">Go to Login</Button>
//         </div>
//       </div>
//     );
//   }

//   const userSubmissions = featuredSubmissions.filter(s => s.author.startsWith('Leo'));

//   return (
//     <div className="bg-gradient-to-br from-[#00B4EE]/10 via-white to-[#FBC51A]/10 min-h-screen">
//       <div className="container mx-auto max-w-7xl px-4 py-36 md:px-6">
        
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-12 space-y-2"
//         >
//           <h1 className="font-headline text-4xl sm:text-5xl font-black tracking-tight">
//             Welcome back, <span className="text-[#FB0091]">{userProfile.displayName}!</span>
//           </h1>
//           <p className="text-xl text-gray-600">
//             Ready for your next creative spark? Let's get started! ✨
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content: Activity Suggester */}
//           <motion.div 
//             className="lg:col-span-2"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <ActivitySuggester />
//           </motion.div>

//           {/* Sidebar: Quick Actions & Profile */}
//           <motion.div 
//             className="space-y-8"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
//                 <CardHeader>
//                     <CardTitle className="flex items-center gap-2 font-headline text-2xl font-bold">
//                         <User className="text-[#00B4EE] w-6 h-6" />
//                         <span>Your Profile</span>
//                     </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <p className="text-sm text-gray-600">
//                         Age Group: <span className="font-bold">{userProfile.ageGroup} years</span>
//                     </p>
//                      <p className="text-sm text-gray-600 mt-2">
//                         Your interests: <span className="font-bold">{userProfile.preferences}</span>
//                     </p>
//                     <Button variant="link" className="px-0 mt-2 font-bold text-[#FB0091]">Edit Profile</Button>
//                 </CardContent>
//             </Card>

//             <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
//               <CardHeader>
//                 <CardTitle className="font-headline text-2xl font-bold">Quick Actions</CardTitle>
//               </CardHeader>
//               <CardContent className="grid grid-cols-1 gap-3">
//                 <Button asChild size="lg" className="justify-start bg-gradient-to-r from-[#FB0091] to-pink-500 text-white shadow-lg">
//                   <Link href="/submit">
//                     <FilePlus2 className="mr-3 h-5 w-5" />
//                     Submit New Creation
//                   </Link>
//                 </Button>
//                 <Button asChild size="lg" variant="outline" className="justify-start border-2 border-gray-300">
//                   <Link href="/activities">
//                     <Telescope className="mr-3 h-5 w-5 text-[#00B4EE]" />
//                     Browse All Activities
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>
//           </motion.div>

//           {/* Recent Submissions */}
//           <motion.div 
//             className="lg:col-span-3 mt-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
//               <CardHeader>
//                 <CardTitle className="font-headline text-2xl font-bold">Your Recent Creations</CardTitle>
//                 <CardDescription>A gallery of your latest masterpieces.</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 {userSubmissions.length > 0 ? (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                         {userSubmissions.map(submission => (
//                             <SubmissionCard key={submission.id} submission={submission} />
//                         ))}
//                     </div>
//                 ) : (
//                     <div className="text-center py-8 text-gray-500">
//                         <p>You haven't submitted any creations yet.</p>
//                         <Button asChild variant="link" className="mt-2 text-primary">
//                             <Link href="/submit">Start creating now!</Link>
//                         </Button>
//                     </div>
//                 )}
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }















// app/dashboard/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FilePlus2,
  Telescope,
  User,
  Sparkles,
  Clock,
  CheckCircle,
  Calendar,
  Smartphone,
  Hash,
  Edit,
  Zap,
  Target,
  Star
} from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type SubmissionStatus = 'pending' | 'approved' | 'featured';

interface TrackedSubmission {
  _id?: string;
  id?: string;
  title: string;
  type?: string;
  createdAt: string;
  status: SubmissionStatus;
  submittedBy: string;
  // views?: number;    // uncomment if your backend sends it
}

const statusConfig: Record<SubmissionStatus, { color: string; icon: any; label: string }> = {
  pending: {
    color: 'bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 border-amber-200',
    icon: Clock,
    label: 'Under Review',
  },
  approved: {
    color: 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border-emerald-200',
    icon: CheckCircle,
    label: 'Approved',
  },
  featured: {
    color: 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-purple-200',
    icon: Star,
    label: 'Featured!',
  },
};

export default function DashboardPage() {
  const [userData, setUserData] = useState<{
    name: string;
    dob: string;
    mobile: string;
    id: string;
    ageGroup?: string;
  } | null>(null);

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [userId, setUserId] = useState<string>('');
  const [activeTab, setActiveTab] = useState('all');
  const [trackedSubmissions, setTrackedSubmissions] = useState<TrackedSubmission[]>([]);
  const [loadingSubmissions, setLoadingSubmissions] = useState(false);

  // Load user from sessionStorage
  useEffect(() => {
    const stored = sessionStorage.getItem('user');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        console.log('Parsed user from session:', parsed);

        const userIdFromStorage = parsed._id || parsed.id || '';
        setUserId(userIdFromStorage);

        // Age group calculation
        let ageGroup = 'Unknown';
        if (parsed.dob) {
          const birthYear = new Date(parsed.dob).getFullYear();
          const currentYear = new Date().getFullYear();
          const age = currentYear - birthYear;

          if (age >= 2 && age <= 4) ageGroup = '2-4';
          else if (age <= 6) ageGroup = '5-6';
          else if (age <= 8) ageGroup = '7-8';
          else if (age <= 10) ageGroup = '9-10';
          else if (age <= 12) ageGroup = '11-12';
          else if (age <= 14) ageGroup = '13-14';
          else if (age <= 16) ageGroup = '15-16';
          else ageGroup = '16+';
        }

        setUserData({
          name: parsed.name || 'Guest',
          dob: parsed.dob || '',
          mobile: parsed.mobile || 'Not set',
          id: userIdFromStorage,
          ageGroup,
        });
      } catch (err) {
        console.error('Failed to parse user from sessionStorage:', err);
      }
    }
  }, []);

  // Fetch user's journal entries
  useEffect(() => {
    if (!userId) return;

    const fetchAllEntries = async () => {
      setLoadingSubmissions(true);
      try {
        const response = await fetch('http://localhost:5000/api/create/getalljournels');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();
        console.log('API response:', data);

        if (Array.isArray(data.data)) {
          const filtered = data.data.filter(
            (item: TrackedSubmission) => item.submittedBy?.trim() === userId.trim()
          );
          console.log('Filtered submissions for user:', filtered);
          setTrackedSubmissions(filtered);
        } else {
          console.warn('API did not return expected array in data.data');
          setTrackedSubmissions([]);
        }
      } catch (err) {
        console.error('Error fetching journal entries:', err);
        setTrackedSubmissions([]);
      } finally {
        setLoadingSubmissions(false);
      }
    };

    fetchAllEntries();
  }, [userId]);

  const filteredSubmissions =
    activeTab === 'all'
      ? trackedSubmissions
      : trackedSubmissions.filter((sub) => sub.status === activeTab);

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-pink-50">
        <p className="text-xl text-gray-600">Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div
      className="
        min-h-screen 
        bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 
        relative overflow-hidden 
        pt-24 md:pt-28 lg:pt-28 xl:pt-32
      "
    >
      {/* Background orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 md:w-72 md:h-72 bg-gradient-to-br from-cyan-300/30 to-blue-400/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-16 right-8 w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-pink-300/30 to-purple-400/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
        {/* Welcome & Stats */}
        <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="text-center mb-10 md:mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 180 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/85 backdrop-blur-lg shadow-lg border border-purple-100 mb-6"
            >
              <Sparkles className="h-5 w-5 text-purple-500 animate-pulse" />
              <span className="font-medium text-purple-700">Welcome back, Creator!</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
              Hi,{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                {userData.name.toUpperCase()}
              </span>
              !
            </h1>

            <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto">
              Let's continue your creative journey today! Create, explore, and inspire ✨
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.04, y: -5 }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-all text-center">
                <CardContent className="pt-6 pb-6">
                  <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 mb-4">
                    <FilePlus2 className="h-7 w-7 text-pink-500" />
                  </div>
                  <p className="text-3xl font-black mb-1">{trackedSubmissions.length}</p>
                  <p className="text-sm text-gray-600 font-medium">Submissions</p>
                </CardContent>
              </Card>
            </motion.div>
            {/* Add more stats cards here when you have the data */}
          </div>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-8">
          {/* Main Content - My Creations */}
          <div className="lg:col-span-2 space-y-8 lg:space-y-10">
            <Card className="border-none shadow-2xl bg-white/85 backdrop-blur-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-50/80 to-pink-50/80">
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-purple-600" />
                  <CardTitle className="text-2xl lg:text-3xl">My Creations</CardTitle>
                </div>
                <CardDescription className="mt-1.5">
                  Track status and progress of your work
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-6">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="mb-6 bg-white/60 backdrop-blur rounded-xl p-1">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                    <TabsTrigger value="approved">Approved</TabsTrigger>
                    {/* <TabsTrigger value="featured">Featured</TabsTrigger> */}
                  </TabsList>

                  <AnimatePresence mode="wait">
                    <TabsContent value={activeTab} key={activeTab}>
                      {loadingSubmissions ? (
                        <div className="text-center py-16 text-gray-600">
                          Loading your creations...
                        </div>
                      ) : filteredSubmissions.length === 0 ? (
                        <div className="text-center py-16 text-gray-600">
                          No submissions found in this category yet.
                        </div>
                      ) : (
                        <div className="space-y-5">
                          {filteredSubmissions.map((sub, idx) => {
                            const safeKey = sub._id || sub.id || `submission-${idx}-${sub.title || 'untitled'}`;

                            return (
                              <motion.div
                                key={safeKey}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.07 }}
                                whileHover={{ scale: 1.015 }}
                              >
                                <Card className="border-gray-100/70 hover:border-purple-200 transition-colors bg-gradient-to-r from-white to-purple-50/20">
                                  <CardContent className="pt-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                                      <div className="flex-1">
                                        <div className="flex items-start gap-4">
                                          <div
                                            className={`p-3 rounded-xl bg-gradient-to-br ${
                                              statusConfig[sub.status]?.color?.includes('amber')
                                                ? 'from-amber-500 to-yellow-500'
                                                : statusConfig[sub.status]?.color?.includes('emerald')
                                                ? 'from-emerald-500 to-green-500'
                                                : 'from-purple-500 to-pink-500'
                                            }`}
                                          >
                                            {(() => {
                                              const Icon = statusConfig[sub.status]?.icon;
                                              return Icon ? <Icon className="h-5 w-5 text-white" /> : null;
                                            })()}
                                          </div>
                                          <div>
                                            <h3 className="text-lg font-semibold mb-1">{sub.title}</h3>
                                            <p className="text-sm text-gray-600 flex items-center gap-2">
                                              <Telescope className="h-4 w-4" />
                                              {sub.type || 'General Creation'}
                                            </p>
                                          </div>
                                        </div>

                                        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-gray-600">
                                          <span className="flex items-center gap-1.5">
                                            <Calendar className="h-4 w-4" />
                                            {new Date(sub.createdAt).toLocaleDateString('en-IN', {
                                              day: 'numeric',
                                              month: 'short',
                                              year: 'numeric',
                                            })}
                                          </span>
                                        </div>
                                      </div>

                                      <Badge
                                        className={`${
                                          statusConfig[sub.status]?.color || 'bg-gray-100 text-gray-800'
                                        } px-4 py-1.5 text-sm font-medium border-2 shadow-sm mt-4 md:mt-0`}
                                      >
                                        {statusConfig[sub.status]?.label || 'Unknown'}
                                      </Badge>
                                    </div>
                                  </CardContent>
                                </Card>
                              </motion.div>
                            );
                          })}
                        </div>
                      )}
                    </TabsContent>
                  </AnimatePresence>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Profile & Quick Actions */}
          <div className="space-y-8">
            {/* Profile Card */}
            <Card className="border-none shadow-2xl bg-gradient-to-br from-white to-cyan-50/20 backdrop-blur-xl overflow-hidden">
              <div className="h-28 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 relative">
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                  transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
                />
              </div>

              <CardHeader className="relative -mt-12 pb-2 text-center">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-cyan-400 shadow-2xl flex items-center justify-center mx-auto mb-4 border-4 border-white"
                >
                  <User className="h-10 w-10 text-white" />
                </motion.div>
                <CardTitle className="text-2xl">{userData.name}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6 pb-8 px-6">
                <div className="bg-white/60 rounded-2xl p-5 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Age Group</p>
                      <p className="font-semibold">{userData.ageGroup || 'Not calculated'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
                      <Smartphone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Mobile</p>
                      <p className="font-semibold">{userData.mobile}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500">
                      <Hash className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">User ID</p>
                      <p className="font-mono text-sm font-medium break-all">{userData.id}</p>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:shadow-xl transition-all h-11 rounded-xl"
                  onClick={() => setEditDialogOpen(true)}
                >
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-none shadow-2xl bg-white/85 backdrop-blur-xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  <CardTitle>Quick Actions</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 pb-6">
                {[
                  { label: 'Submit New Creation', icon: FilePlus2, href: '/submit' },
                  { label: 'Explore Activities', icon: Telescope, href: '/activities' },
                ].map((item) => (
                  <Button
                    key={item.label}
                    variant="outline"
                    className="w-full justify-start h-12 rounded-xl"
                    asChild
                  >
                    <a href={item.href}>
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.label}
                    </a>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Edit Profile Dialog (placeholder) */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur-xl border-2 border-purple-200 rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Edit Your Profile
            </DialogTitle>
            <DialogDescription>Update your information (coming soon)</DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-5">
            <div className="space-y-2">
              <Label>Display Name</Label>
              <Input value={userData.name} className="rounded-xl" disabled />
            </div>
            <div className="space-y-2">
              <Label>Mobile Number</Label>
              <Input value={userData.mobile} className="rounded-xl" disabled />
            </div>
            <div className="space-y-2">
              <Label>User ID</Label>
              <Input value={userData.id} className="rounded-xl font-mono" disabled />
            </div>
            <Button className="w-full h-11 rounded-xl" disabled>
              Save Changes (Feature coming soon)
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}