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
















'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-provider';
import { ActivitySuggester } from '@/components/activity-suggester';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SubmissionCard } from '@/components/submission-card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { featuredSubmissions } from '@/lib/constants';
import { FilePlus2, Telescope, User, Sparkles, TrendingUp, Award, Clock, CheckCircle, Eye, Edit, Star } from 'lucide-react';
import { motion } from 'framer-motion';

type SubmissionStatus = 'pending' | 'approved' | 'featured';

interface TrackedSubmission {
  id: string;
  title: string;
  submittedDate: string;
  status: SubmissionStatus;
  views: number;
  category: string;
}

// Mock submission tracking data
const trackedSubmissions: TrackedSubmission[] = [
  { id: '1', title: 'My Amazing Drawing', submittedDate: '2025-01-15', status: 'approved', views: 234, category: 'Draw Your Dream' },
  { id: '2', title: 'Space Adventure Story', submittedDate: '2025-01-18', status: 'featured', views: 567, category: 'The Young Pen' },
  { id: '3', title: 'Science Experiment Video', submittedDate: '2025-01-20', status: 'pending', views: 12, category: 'Kid Scientists' },
];

const statusConfig = {
  pending: { color: 'bg-yellow-100 text-yellow-800 border-yellow-300', icon: Clock, label: 'Under Review' },
  approved: { color: 'bg-green-100 text-green-800 border-green-300', icon: CheckCircle, label: 'Approved' },
  featured: { color: 'bg-purple-100 text-purple-800 border-purple-300', icon: Star, label: 'Featured!' },
};

export default function DashboardPage() {
  const { user, userProfile, loading } = useAuth();
  const router = useRouter();
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [displayName, setDisplayName] = useState(userProfile?.displayName || '');
  const [ageGroup, setAgeGroup] = useState(userProfile?.ageGroup || '');
  const [preferences, setPreferences] = useState(userProfile?.preferences || '');

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-[#00B4EE]/10 via-[#FB0091]/5 to-[#FBC51A]/10">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">⏳</div>
          <p className="text-xl font-bold text-gray-700">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user || !userProfile) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-[#00B4EE]/10 via-[#FB0091]/5 to-[#FBC51A]/10">
        <Card className="max-w-md border-0 shadow-2xl">
          <CardContent className="text-center pt-12 pb-12">
            <div className="text-6xl mb-4">🔒</div>
            <h2 className="text-2xl font-bold mb-2">Not Logged In</h2>
            <p className="text-gray-600 mb-6">Please log in to access your dashboard.</p>
            <Button 
              onClick={() => router.push('/login')} 
              className="bg-gradient-to-r from-[#FB0091] to-pink-500 text-white"
            >
              Go to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const userSubmissions = featuredSubmissions.filter(s => s.author.startsWith('Leo'));

  const handleSaveProfile = () => {
    // Save profile logic here
    setEditDialogOpen(false);
  };

  return (
    <div className="bg-white overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden bg-gradient-to-br from-[#00B4EE]/10 via-[#FB0091]/5 to-[#FBC51A]/10">

        <svg className="absolute top-24 right-20 w-24 h-16 opacity-30" viewBox="0 0 100 50">
          <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#FBC51A"/>
        </svg>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white shadow-lg px-5 py-2 rounded-full text-sm font-bold mb-4 border-2 border-[#FB0091]/20">
              <Sparkles className="w-4 h-4 text-[#FB0091]" />
              <span className="bg-gradient-to-r from-[#FB0091] to-[#00B4EE] bg-clip-text text-transparent">
                Dashboard
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-headline font-black mb-4">
              Welcome back, <span className="text-[#FB0091]">{userProfile.displayName}!</span>
            </h1>
            <p className="text-xl text-gray-600">
              Ready for your next creative spark? Let's get started! ✨
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600">Total Submissions</p>
                      <p className="text-3xl font-black">{trackedSubmissions.length}</p>
                    </div>
                    <FilePlus2 className="w-12 h-12 text-[#FB0091]/20" />
                  </div>
                </CardContent>
                <div className="h-2 bg-gradient-to-r from-[#FB0091] to-pink-400"></div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600">Total Views</p>
                      <p className="text-3xl font-black">{trackedSubmissions.reduce((sum, s) => sum + s.views, 0)}</p>
                    </div>
                    <Eye className="w-12 h-12 text-[#00B4EE]/20" />
                  </div>
                </CardContent>
                <div className="h-2 bg-gradient-to-r from-[#00B4EE] to-cyan-400"></div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600">Featured Works</p>
                      <p className="text-3xl font-black">{trackedSubmissions.filter(s => s.status === 'featured').length}</p>
                    </div>
                    <Award className="w-12 h-12 text-[#FBC51A]/20" />
                  </div>
                </CardContent>
                <div className="h-2 bg-gradient-to-r from-[#FBC51A] to-yellow-300"></div>
              </Card>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content: Activity Suggester & Submissions */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <ActivitySuggester />
              </motion.div>

              {/* Submission Tracker */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card className="border-0 shadow-xl">
                  <div className="h-2 bg-gradient-to-r from-[green]/90 via-[green]/70 to-[green]/50 rounded-full"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="font-headline text-3xl font-black">Track My Submissions</CardTitle>
                        <CardDescription>Monitor the status and performance of your creations 📊</CardDescription>
                      </div>
                      <TrendingUp className="w-8 h-8 text-[#00B4EE]" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="all" className="w-full">
                      <TabsList className="grid w-full grid-cols-4 mb-6">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="pending">Pending</TabsTrigger>
                        <TabsTrigger value="approved">Approved</TabsTrigger>
                        <TabsTrigger value="featured">Featured</TabsTrigger>
                      </TabsList>

                      <TabsContent value="all" className="space-y-4">
                        {trackedSubmissions.map((submission, index) => (
                          <motion.div
                            key={submission.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <Card className="border-2 hover:shadow-lg transition-all">
                              <CardContent className="pt-6">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <h3 className="font-bold text-lg mb-2">{submission.title}</h3>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                      <Badge variant="outline" className="text-xs">
                                        {submission.category}
                                      </Badge>
                                      <Badge className={`text-xs border ${statusConfig[submission.status].color}`}>
                                        {React.createElement(statusConfig[submission.status].icon, { className: 'w-3 h-3 mr-1' })}
                                        {statusConfig[submission.status].label}
                                      </Badge>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                      <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {new Date(submission.submittedDate).toLocaleDateString()}
                                      </span>
                                      <span className="flex items-center gap-1">
                                        <Eye className="w-4 h-4" />
                                        {submission.views} views
                                      </span>
                                    </div>
                                  </div>
                                  <Button variant="ghost" size="sm" asChild>
                                    <Link href={`/gallery/${submission.id}`}>
                                      View
                                    </Link>
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </TabsContent>

                      {['pending', 'approved', 'featured'].map(status => (
                        <TabsContent key={status} value={status} className="space-y-4">
                          {trackedSubmissions.filter(s => s.status === status).length > 0 ? (
                            trackedSubmissions.filter(s => s.status === status).map((submission, index) => (
                              <Card key={submission.id} className="border-2">
                                <CardContent className="pt-6">
                                  <h3 className="font-bold text-lg mb-2">{submission.title}</h3>
                                  <p className="text-sm text-gray-600">{submission.category}</p>
                                </CardContent>
                              </Card>
                            ))
                          ) : (
                            <div className="text-center py-8 text-gray-500">
                              <p>No {status} submissions</p>
                            </div>
                          )}
                        </TabsContent>
                      ))}
                    </Tabs>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {/* Profile Card */}
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-[#00B4EE] to-cyan-400"></div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline text-2xl font-bold">
                    <User className="text-[#00B4EE] w-6 h-6" />
                    Your Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-bold">{userProfile.displayName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Age Group</p>
                    <p className="font-bold">{userProfile.ageGroup} years</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Interests</p>
                    <p className="font-bold">{userProfile.preferences}</p>
                  </div>
                  
                  <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full mt-4 bg-[#00B4EE] hover:bg-[#00B4EE]/90">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="font-headline text-2xl">Edit Your Profile</DialogTitle>
                        <DialogDescription>Update your information below</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 pt-4">
                        <div>
                          <Label htmlFor="name">Display Name</Label>
                          <Input 
                            id="name" 
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="age">Age Group</Label>
                          <Select value={ageGroup} onValueChange={setAgeGroup}>
                            <SelectTrigger className="mt-1">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2-4">2-4 years</SelectItem>
                              <SelectItem value="5-6">5-6 years</SelectItem>
                              <SelectItem value="7-8">7-8 years</SelectItem>
                              <SelectItem value="9-10">9-10 years</SelectItem>
                              <SelectItem value="11-12">11-12 years</SelectItem>
                              <SelectItem value="13-14">13-14 years</SelectItem>
                              <SelectItem value="15-16">15-16 years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="interests">Your Interests</Label>
                          <Input 
                            id="interests" 
                            value={preferences}
                            onChange={(e) => setPreferences(e.target.value)}
                            className="mt-1"
                            placeholder="e.g., Drawing, Writing, Science"
                          />
                        </div>
                        <Button onClick={handleSaveProfile} className="w-full bg-gradient-to-r from-[#FB0091] to-pink-500">
                          Save Changes
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl font-bold">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild size="lg" className="w-full justify-start bg-gradient-to-r from-[#FB0091] to-pink-500 text-white shadow-lg">
                    <Link href="/submissions">
                      <FilePlus2 className="mr-3 h-5 w-5" />
                      Submit New Creation
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full justify-start border-2 border-black hover:bg-black hover:text-white">
                    <Link href="/activities">
                      <Telescope className="mr-3 h-5 w-5" />
                      Browse Activities
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full justify-start border-2 border-gray-300">
                    <Link href="/gallery">
                      <Eye className="mr-3 h-5 w-5" />
                      View Gallery
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}