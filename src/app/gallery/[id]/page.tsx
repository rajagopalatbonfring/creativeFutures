// 'use client';

// import { useParams, notFound } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image';
// import { featuredSubmissions } from '@/lib/constants';
// import { PlaceHolderImages } from '@/lib/placeholder-images';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader } from '@/components/ui/card';
// import { ArrowLeft, User, Award, PlayCircle, Mic, BookOpen, Image as ImageIcon } from 'lucide-react';
// import { motion } from 'framer-motion';

// const mediaTypeIcons = {
//     video: <PlayCircle className="h-6 w-6 text-white" />,
//     audio: <Mic className="h-6 w-6 text-white" />,
//     text: <BookOpen className="h-6 w-6 text-white" />,
//     image: <ImageIcon className="h-6 w-6 text-white" />,
// };

// const mediaTypeColors = {
//     video: 'from-purple-500 to-purple-300',
//     audio: 'from-[#00B4EE] to-cyan-300',
//     text: 'from-[#FB0091] to-pink-400',
//     image: 'from-[#FBC51A] to-yellow-300',
// };

// export default function SubmissionDetailPage() {
//     const params = useParams();
//     const id = params.id as string;

//     const submission = featuredSubmissions.find((s) => s.id === id);

//     if (!submission) {
//         notFound();
//     }

//     const image = PlaceHolderImages.find((img) => img.id === submission.imageId);
//     const icon = submission.mediaType ? mediaTypeIcons[submission.mediaType] : null;
//     const mediaColor = submission.mediaType ? mediaTypeColors[submission.mediaType] : 'from-gray-500 to-gray-300';

//     const renderMedia = () => {
//         if (!image) {
//             return (
//                 <div className="aspect-video w-full bg-gradient-to-br from-gray-100 to-gray-50 rounded-[3rem] flex items-center justify-center text-gray-400 border-8 border-white shadow-2xl">
//                     <div className="text-center">
//                         <div className="text-6xl mb-2">📷</div>
//                         <p className="font-semibold">No Preview</p>
//                     </div>
//                 </div>
//             );
//         }

//         return (
//             <div className="relative aspect-video w-full overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white ring-4 ring-gray-200 group">
//                 <Image
//                     src={image.imageUrl}
//                     alt={submission.title}
//                     fill
//                     className="object-cover"
//                     data-ai-hint={image.imageHint}
//                 />
//                 {icon && (
//                     <div className={`absolute top-4 right-4 bg-gradient-to-r ${mediaColor} p-3 rounded-full shadow-lg`}>
//                         {icon}
//                     </div>
//                 )}
//                 {/* Media type badge */}
//                 <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                     <Badge className={`bg-gradient-to-r ${mediaColor} text-white border-0 shadow-lg`}>
//                         {submission.mediaType?.toUpperCase()}
//                     </Badge>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="bg-white overflow-hidden min-h-screen">
//             {/* Hero Section */}
//             <section className="relative pt-40 pb-12 overflow-hidden bg-gradient-to-br from-[#00B4EE]/10 via-[#FB0091]/5 to-[#FBC51A]/10">

//                 <div className="container mx-auto px-4 relative z-10">
//                     <motion.div
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                         className="mb-8"
//                     >
//                         <Button asChild variant="ghost" className="rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-all">
//                             <Link href="/gallery">
//                                 <ArrowLeft className="mr-2 h-4 w-4" />
//                                 Back to Gallery
//                             </Link>
//                         </Button>
//                     </motion.div>
//                 </div>

//                 <div className="absolute bottom-0 left-0 right-0">
//                     <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
//                         <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
//                     </svg>
//                 </div>
//             </section>

//             {/* Content Section */}
//             <section className="py-12 bg-white">
//                 <div className="container mx-auto px-4">
//                     <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
//                         <motion.div
//                             initial={{ opacity: 0, x: -30 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.7, delay: 0.2 }}
//                         >
//                             {renderMedia()}
//                         </motion.div>
                        
//                         <motion.div
//                             className="flex flex-col justify-center"
//                             initial={{ opacity: 0, x: 30 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.7, delay: 0.4 }}
//                         >
//                             <Badge variant="default" className={`mb-4 w-fit bg-gradient-to-r ${mediaColor} text-white shadow-lg text-sm py-1 px-3 border-0`}>
//                                 {submission.activityTitle}
//                             </Badge>
//                             <h1 className="text-4xl md:text-5xl font-headline font-black mb-4">{submission.title}</h1>
                            
//                             <div className="flex items-center gap-3 mb-6 text-lg text-gray-600 font-bold">
//                                 <User className="w-5 h-5 text-[#00B4EE]" />
//                                 <span>{submission.author}</span>
//                             </div>

//                             {submission.description && (
//                                 <p className="text-gray-600 leading-relaxed text-lg mb-8">
//                                     {submission.description}
//                                 </p>
//                             )}
                            
//                             <Card className="border-0 shadow-xl overflow-hidden">
//                                 <div className={`h-2 bg-gradient-to-r ${mediaColor}`}></div>
//                                 <CardHeader>
//                                     <div className="flex items-center gap-3">
//                                         <Award className="w-6 h-6 text-[#FBC51A]" />
//                                         <h3 className="font-bold text-lg">From Activity</h3>
//                                     </div>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <p className="text-gray-600 mb-4">
//                                         This creation was submitted for the <span className="font-bold">{submission.activityTitle}</span> activity.
//                                     </p>
//                                     <Button 
//                                         asChild 
//                                         className={`bg-gradient-to-r ${mediaColor} text-white hover:shadow-xl transition-all border-0`}
//                                     >
//                                         <Link href={`/submit?activity=${submission.activityId}`}>
//                                             Try this activity yourself →
//                                         </Link>
//                                     </Button>
//                                 </CardContent>
//                             </Card>
//                         </motion.div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

















































// 'use client';

// import { useParams, notFound } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image';
// import { featuredSubmissions, allActivities } from '@/lib/constants';
// import { PlaceHolderImages } from '@/lib/placeholder-images';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { 
//   ArrowLeft, User, Calendar, Heart, Eye, Clock, Tag, Award, Star, 
//   PlayCircle, Mic, BookOpen, Image as ImageIcon, Sparkles 
// } from 'lucide-react';
// import { motion } from 'framer-motion';

// const mediaTypeIcons = {
//   video: <PlayCircle className="h-6 w-6 text-white" />,
//   audio: <Mic className="h-6 w-6 text-white" />,
//   text: <BookOpen className="h-6 w-6 text-white" />,
//   image: <ImageIcon className="h-6 w-6 text-white" />,
// };

// const mediaTypeColors = {
//   video: 'from-purple-500 to-violet-500',
//   audio: 'from-[#00B4EE] to-cyan-500',
//   text: 'from-[#FB0091] to-pink-500',
//   image: 'from-[#FBC51A] to-yellow-500',
// };

// const difficultyColors = {
//   Easy: 'bg-green-100 text-green-800 border-green-200',
//   Medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
//   Hard: 'bg-red-100 text-red-800 border-red-200',
// };

// export default function SubmissionDetailPage() {
//   const params = useParams();
//   const id = params.id as string;

//   const submission = featuredSubmissions.find(s => s.id === id);
//   if (!submission) {
//     notFound();
//   }

//   const image = PlaceHolderImages.find(img => img.id === submission.imageId);
//   const activity = allActivities.find(a => a.id === submission.activityId);

//   const icon = submission.mediaType ? mediaTypeIcons[submission.mediaType] : null;
//   const mediaColor = submission.mediaType ? mediaTypeColors[submission.mediaType] : 'from-gray-500 to-gray-400';

//   const formattedDate = new Date(submission.createdAt).toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   });

//   const renderMedia = () => {
//     if (image) {
//       return (
//         <div className="relative aspect-video w-full overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white ring-4 ring-gray-200 group">
//           <Image
//             src={image.imageUrl}
//             alt={submission.title}
//             fill
//             className="object-cover transform group-hover:scale-105 transition-transform duration-500"
//           />
//           {icon && (
//             <div className={`absolute top-6 right-6 bg-gradient-to-r ${mediaColor} p-4 rounded-full shadow-2xl ring-4 ring-white/30`}>
//               {icon}
//             </div>
//           )}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
//         </div>
//       );
//     }

//     // Fallback for media without image preview
//     return (
//       <div className={`aspect-video w-full bg-gradient-to-br ${mediaColor} rounded-[3rem] flex items-center justify-center text-white shadow-2xl border-8 border-white`}>
//         <div className="text-center">
//           <div className="text-8xl mb-4 opacity-90">{icon || '🎨'}</div>
//           <p className="text-2xl font-bold">{submission.mediaType?.toUpperCase() || 'Creative Work'}</p>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="bg-white overflow-hidden min-h-screen">
//       {/* Hero Section with Wave */}
//       <section className="relative pt-40 pb-12 overflow-hidden bg-gradient-to-b from-[#00B4EE]/10 via-[#FB0091]/5 to-white">
//         {/* Playful Clouds & Stars */}
//         <svg className="absolute top-20 left-10 w-24 h-16 opacity-40" viewBox="0 0 100 50">
//           <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#00B4EE"/>
//         </svg>
//         <svg className="absolute top-40 right-20 w-32 h-20 opacity-30" viewBox="0 0 100 50">
//           <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#FBC51A"/>
//         </svg>
//         <Star className="absolute top-32 right-32 w-8 h-8 text-[#FB0091] opacity-60 animate-pulse" />
//         <Star className="absolute top-48 left-32 w-6 h-6 text-[#00B4EE] opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }} />

//         <div className="container mx-auto max-w-7xl px-4 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="mb-8"
//           >
//             <Button 
//               asChild 
//               variant="ghost" 
//               className="rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-all border-2 border-transparent hover:border-[#FB0091]/20"
//             >
//               <Link href="/gallery">
//                 <ArrowLeft className="mr-2 h-4 w-4" />
//                 Back to Gallery
//               </Link>
//             </Button>
//           </motion.div>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
//             <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
//           </svg>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
//             {/* Media Preview */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//             >
//               {renderMedia()}
//             </motion.div>

//             {/* Details Column */}
//             <motion.div
//               className="flex flex-col justify-center space-y-8"
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7, delay: 0.4 }}
//             >
//               {/* Title & Author */}
//               <div>
//                 <Badge 
//                   className={`mb-4 w-fit bg-gradient-to-r ${mediaColor} text-white shadow-lg text-base py-1.5 px-4 border-0 font-semibold`}
//                 >
//                   {submission.activityTitle} 🎭
//                 </Badge>
//                 <h1 className="text-4xl md:text-5xl font-headline font-black mb-4 leading-tight">
//                   {submission.title}
//                 </h1>

//                 <div className="bg-[#FB0091]/5 rounded-2xl p-5 border-2 border-[#FBC51A]/10 mb-6">
//                   <div className="flex items-center gap-3 mb-2 text-xl text-gray-800 font-bold">
//                     <User className="w-6 h-6 text-[#00B4EE]" />
//                     <span>Created by {submission.author} ✨</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-gray-600 font-semibold">
//                     <Calendar className="w-4 h-4" />
//                     <span>{formattedDate}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Compact Stats Bar */}
//               {/* <div className="flex items-center justify-between gap-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-4 border-2 border-gray-200 shadow-md">
//                 <div className="flex items-center gap-2">
//                   <Heart className="h-5 w-5 text-red-500" />
//                   <span className="font-black text-lg">{submission.likes ?? 0}</span>
//                   <span className="text-sm text-gray-600 font-semibold">likes</span>
//                 </div>
//                 <div className="w-px h-8 bg-gray-300"></div>
//                 <div className="flex items-center gap-2">
//                   <Eye className="h-5 w-5 text-blue-500" />
//                   <span className="font-black text-lg">{submission.views ?? 0}</span>
//                   <span className="text-sm text-gray-600 font-semibold">views</span>
//                 </div>
//                 {submission.duration && (
//                   <>
//                     <div className="w-px h-8 bg-gray-300"></div>
//                     <div className="flex items-center gap-2">
//                       <Clock className="h-5 w-5 text-purple-500" />
//                       <span className="font-black text-lg">{submission.duration}</span>
//                     </div>
//                   </>
//                 )}
//               </div> */}

//               {/* Badges for Difficulty & Age */}
//               {/* <div className="flex flex-wrap gap-3">
//                 {submission.difficulty && (
//                   <div className={`${difficultyColors[submission.difficulty]} rounded-xl px-4 py-2 flex items-center gap-2 border-2 shadow-sm`}>
//                     <Award className="h-5 w-5" />
//                     <span className="font-bold">{submission.difficulty}</span>
//                   </div>
//                 )}
//                 {submission.ageGroup && (
//                   <div className="bg-indigo-100 text-indigo-800 border-2 border-indigo-200 rounded-xl px-4 py-2 flex items-center gap-2 shadow-sm">
//                     <Star className="h-5 w-5 text-yellow-500" />
//                     <span className="font-bold">{submission.ageGroup}</span>
//                   </div>
//                 )}
//               </div> */}

//               {/* Full Description */}
//               {submission.description && (
//                 <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-[2rem] p-8 border-4 border-white shadow-xl">
//                   <h3 className="font-black text-2xl mb-4 text-gray-900 flex items-center gap-2">
//                     📖
//                     About This Creation 
//                   </h3>
//                   <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
//                     {submission.description}
//                   </p>
//                 </div>
//               )}

//               {/* Tags */}
//               {submission.tags && submission.tags.length > 0 && (
//                 <div className="bg-white rounded-[2rem] p-6 border-4 border-gray-200 shadow-xl">
//                   <div className="flex items-center gap-2 mb-4">
//                     <h3 className="font-black text-xl text-gray-900">🏷️ Tags</h3>
//                   </div>
//                   <div className="flex flex-wrap gap-3">
//                     {submission.tags.map((tag, index) => (
//                       <span 
//                         key={index}
//                         className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-bold border-2 border-gray-300 hover:border-[#FB0091] hover:shadow-md transition-all"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* From Activity Card */}
//               {/* <div className="border-0 shadow-2xl overflow-hidden rounded-[2rem] bg-white transform hover:scale-[1.02] transition-transform">
//                 <div className={`h-3 bg-gradient-to-r ${mediaColor}`}></div>
//                 <div className="p-8">
//                   <div className="flex items-center gap-3 mb-4">
//                     <h3 className="font-black text-2xl text-gray-900">From Activity</h3>
//                   </div>
//                   <p className="text-gray-700 mb-6 leading-relaxed text-lg">
//                     This amazing creation was submitted for the{' '}
//                     <span className="font-black text-gray-900 bg-yellow-100 px-2 py-1 rounded">
//                       {submission.activityTitle}
//                     </span>{' '}
//                     activity!
//                   </p>
//                   <Button 
//                     asChild 
//                     className={`w-full bg-gradient-to-r ${mediaColor} text-white hover:shadow-2xl transition-all border-0 py-4 px-6 rounded-2xl font-black text-lg transform hover:scale-105`}
//                   >
//                     <Link href={`/submit?activity=${submission.activityId}`}>
//                       Try this activity yourself! 🚀
//                     </Link>
//                   </Button>
//                 </div>
//               </div> */}
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

















'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { featuredSubmissions, allActivities } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowLeft, User, Calendar, Heart, Eye, Clock, Tag, Award, Star, 
  PlayCircle, Mic, BookOpen, Image as ImageIcon, Sparkles 
} from 'lucide-react';
import { motion } from 'framer-motion';

const mediaTypeIcons = {
  video: <PlayCircle className="h-6 w-6 text-white" />,
  audio: <Mic className="h-6 w-6 text-white" />,
  text: <BookOpen className="h-6 w-6 text-white" />,
  image: <ImageIcon className="h-6 w-6 text-white" />,
};

const mediaTypeColors = {
  video: 'from-purple-500 to-violet-500',
  audio: 'from-[#00B4EE] to-cyan-500',
  text: 'from-[#FB0091] to-pink-500',
  image: 'from-[#FBC51A] to-yellow-500',
};

const difficultyColors = {
  Easy: 'bg-green-100 text-green-800 border-green-200',
  Medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  Hard: 'bg-red-100 text-red-800 border-red-200',
};

export default function SubmissionDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const submission = featuredSubmissions.find(s => s.id === id);
  if (!submission) {
    notFound();
  }

  const image = PlaceHolderImages.find(img => img.id === submission.imageId);
  const activity = allActivities.find(a => a.id === submission.activityId);

  const icon = submission.mediaType ? mediaTypeIcons[submission.mediaType] : null;
  const mediaColor = submission.mediaType ? mediaTypeColors[submission.mediaType] : 'from-gray-500 to-gray-400';

  const formattedDate = new Date(submission.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Breadcrumb publication path
  const getPublicationPath = () => {
    if (!submission.isPublished || !submission.publishedYear || !submission.publishedIssue) {
      return "Published in Gallery";
    }
    return `${submission.publishedYear} > Issue ${submission.publishedIssue} > ${submission.activityTitle} > ${submission.title}`;
  };

  const renderMedia = () => {
    if (image) {
      return (
        <div className="relative aspect-video w-full overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white ring-4 ring-gray-200 group">
          <Image
            src={image.imageUrl}
            alt={submission.title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          {icon && (
            <div className={`absolute top-6 right-6 bg-gradient-to-r ${mediaColor} p-4 rounded-full shadow-2xl ring-4 ring-white/30`}>
              {icon}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
        </div>
      );
    }

    return (
      <div className={`aspect-video w-full bg-gradient-to-br ${mediaColor} rounded-[3rem] flex items-center justify-center text-white shadow-2xl border-8 border-white`}>
        <div className="text-center">
          <div className="text-8xl mb-4 opacity-90">{icon || '🎨'}</div>
          <p className="text-2xl font-bold">{submission.mediaType?.toUpperCase() || 'Creative Work'}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white overflow-hidden min-h-screen">
      {/* Hero Section with Wave */}
      <section className="relative pt-40 pb-12 overflow-hidden bg-gradient-to-br from-[#00B4EE]/10 via-[#FB0091]/5 to-[#FBC51A]/10">
        {/* Playful Clouds & Stars */}
        <svg className="absolute top-20 left-10 w-24 h-16 opacity-40" viewBox="0 0 100 50">
          <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#00B4EE"/>
        </svg>
        <svg className="absolute top-40 right-20 w-32 h-20 opacity-30" viewBox="0 0 100 50">
          <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#FBC51A"/>
        </svg>
        <Star className="absolute top-32 right-32 w-8 h-8 text-[#FB0091] opacity-60 animate-pulse" />
        <Star className="absolute top-48 left-32 w-6 h-6 text-[#00B4EE] opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }} />

        <div className="container mx-auto max-w-7xl px-4 relative z-10 mt-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 space-y-4"
          >

            <h1 className="text-4xl font-bold mb-8 mx-auto text-center ">
              {getPublicationPath()}
            </h1> 
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Content – unchanged from your original design */}
      <section className="py-12 bg-white">
        


        <div className="container mx-auto px-4">
          
        {/* Back Button */}
        <Button 
          asChild 
          variant="ghost" 
          className="mb-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-all border-2 border-transparent hover:border-[#FB0091]/20"
        >
          <Link href="/archives">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Archives
          </Link>
        </Button> 

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-8xl mx-auto">
            {/* Media Preview */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {renderMedia()}
            </motion.div>

            

            {/* Details Column */}
            <motion.div
              className="flex flex-col justify-center space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
                            {/* Title & Author */}
              <div>
                <Badge 
                  className={`mb-4 w-fit bg-gradient-to-r ${mediaColor} text-white shadow-lg text-base py-1.5 px-4 border-0 font-semibold`}
                >
                  {submission.activityTitle} 🎭
                </Badge>
                <h1 className="text-4xl md:text-5xl font-headline font-black mb-4 leading-tight">
                  {submission.title}
                </h1>
                  <span className="mb-10 text-sm font-medium text-gray-600 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200">
                    {getPublicationPath()}
                  </span> 

                <div className="bg-gradient-to-r from-[#FBC51A]/10 to-[#FB0091]/5 rounded-2xl p-5 border-2 border-[#FBC51A]/20 mb-6">
                                
                  <div className="flex items-center gap-3 mb-2 text-xl text-gray-800 font-bold">
                    <User className="w-6 h-6 text-[#00B4EE]" />
                    <span>Created by {submission.author} ✨</span>
                             
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 font-semibold">
                    <Calendar className="w-4 h-4" />
                    <span>{formattedDate}</span>
                    
                  </div>
                </div>
              </div>



              {/* Full Description */}
              {submission.description && (
                <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-[2rem] p-8 border-4 border-white shadow-xl">
                  <h3 className="font-black text-2xl mb-4 text-gray-900 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-[#FB0091]" />
                    About This Creation
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                    {submission.description}
                  </p>
                </div>
              )}

              {/* Tags */}
              {submission.tags && submission.tags.length > 0 && (
                <div className="bg-white rounded-[2rem] p-6 border-4 border-gray-200 shadow-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="font-black text-xl text-gray-900">🏷️ Tags</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {submission.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-bold border-2 border-gray-300 hover:border-[#FB0091] hover:shadow-md transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* From Activity Card */}
              <div className="border-0 shadow-2xl overflow-hidden rounded-[2rem] bg-white transform hover:scale-[1.02] transition-transform">
                <div className={`h-3 bg-gradient-to-r ${mediaColor}`}></div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-8 h-8 text-[#FBC51A]" />
                    <h3 className="font-black text-2xl text-gray-900">From Activity 🎯</h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    This amazing creation was submitted for the{' '}
                    <span className="font-black text-gray-900 bg-yellow-100 px-2 py-1 rounded">
                      {submission.activityTitle}
                    </span>{' '}
                    activity!
                  </p>
                  <Button 
                    asChild 
                    className={`w-full bg-gradient-to-r ${mediaColor} text-white hover:shadow-2xl transition-all border-0 py-4 px-6 rounded-2xl font-black text-lg transform hover:scale-105`}
                  >
                    <Link href={`/submit?activity=${submission.activityId}`}>
                      Try this activity yourself! 🚀
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}