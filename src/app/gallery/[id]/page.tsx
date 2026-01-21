// // gallery/[id]/page.tsx :
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

// export default function SubmissionDetailPage() {
//     const params = useParams();
//     const id = params.id as string;

//     const submission = featuredSubmissions.find((s) => s.id === id);

//     if (!submission) {
//         notFound();
//     }

//     const image = PlaceHolderImages.find((img) => img.id === submission.imageId);
//     const icon = submission.mediaType ? mediaTypeIcons[submission.mediaType] : null;

//     const renderMedia = () => {
//         if (!image) return <div className="aspect-video w-full bg-muted rounded-2xl flex items-center justify-center text-muted-foreground">No Preview</div>

//         // For demo, we'll just show the image for all types.
//         // In a real app, you'd have different components for video/audio players.
//         return (
//             <div className="relative aspect-video w-full overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white ring-4 ring-gray-200">
//                 <Image
//                     src={image.imageUrl}
//                     alt={submission.title}
//                     fill
//                     className="object-cover"
//                     data-ai-hint={image.imageHint}
//                 />
//                  {icon && (
//                   <div className="absolute top-4 right-4 bg-black/50 p-3 rounded-full shadow-lg">
//                     {icon}
//                   </div>
//                 )}
//             </div>
//         )
//     }

//     return (
//         <div className="bg-gradient-to-br from-[#00B4EE]/10 via-[#FB0091]/5 to-[#FBC51A]/10 min-h-[calc(100vh-11rem)] py-24 sm:py-40">
//             <div className="container mx-auto px-4">
//                 <motion.div
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="mb-8"
//                 >
//                     <Button asChild variant="ghost" className="rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-all">
//                         <Link href="/gallery">
//                             <ArrowLeft className="mr-2 h-4 w-4" />
//                             Back to Gallery
//                         </Link>
//                     </Button>
//                 </motion.div>

//                 <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//                     <motion.div
//                         initial={{ opacity: 0, x: -30 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.7, delay: 0.2 }}
//                     >
//                         {renderMedia()}
//                     </motion.div>
                    
//                     <motion.div
//                         className="flex flex-col justify-center"
//                         initial={{ opacity: 0, x: 30 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.7, delay: 0.4 }}
//                     >
//                         <Badge variant="default" className="mb-4 w-fit bg-gradient-to-r from-[#FB0091] to-pink-500 text-white shadow-lg text-sm py-1 px-3">
//                             {submission.activityTitle}
//                         </Badge>
//                         <h1 className="text-4xl md:text-5xl font-headline font-black mb-4">{submission.title}</h1>
                        
//                         <div className="flex items-center gap-3 mb-6 text-lg text-gray-600 font-bold">
//                             <User className="w-5 h-5 text-[#00B4EE]" />
//                             <span>{submission.author}</span>
//                         </div>

//                         {submission.description && (
//                             <p className="text-gray-600 leading-relaxed text-lg mb-8">
//                                 {submission.description}
//                             </p>
//                         )}
                        
//                         <Card className="bg-white/70 backdrop-blur-sm border-2 border-gray-100 shadow-xl rounded-2xl">
//                             <CardHeader>
//                                 <div className="flex items-center gap-3">
//                                     <Award className="w-6 h-6 text-[#FBC51A]" />
//                                     <h3 className="font-bold text-lg">From Activity</h3>
//                                 </div>
//                             </CardHeader>
//                             <CardContent>
//                                 <p className="text-gray-600">This creation was submitted for the <span className="font-bold">{submission.activityTitle}</span> activity.</p>
//                                 <Button asChild variant="link" className="px-0 font-bold text-base text-[#FB0091]">
//                                     <Link href={`/submit?activity=${submission.activityId}`}>
//                                         Try this activity yourself →
//                                     </Link>
//                                 </Button>
//                             </CardContent>
//                         </Card>

//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// }






















'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { featuredSubmissions } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowLeft, User, Award, PlayCircle, Mic, BookOpen, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const mediaTypeIcons = {
    video: <PlayCircle className="h-6 w-6 text-white" />,
    audio: <Mic className="h-6 w-6 text-white" />,
    text: <BookOpen className="h-6 w-6 text-white" />,
    image: <ImageIcon className="h-6 w-6 text-white" />,
};

const mediaTypeColors = {
    video: 'from-purple-500 to-purple-300',
    audio: 'from-[#00B4EE] to-cyan-300',
    text: 'from-[#FB0091] to-pink-400',
    image: 'from-[#FBC51A] to-yellow-300',
};

export default function SubmissionDetailPage() {
    const params = useParams();
    const id = params.id as string;

    const submission = featuredSubmissions.find((s) => s.id === id);

    if (!submission) {
        notFound();
    }

    const image = PlaceHolderImages.find((img) => img.id === submission.imageId);
    const icon = submission.mediaType ? mediaTypeIcons[submission.mediaType] : null;
    const mediaColor = submission.mediaType ? mediaTypeColors[submission.mediaType] : 'from-gray-500 to-gray-300';

    const renderMedia = () => {
        if (!image) {
            return (
                <div className="aspect-video w-full bg-gradient-to-br from-gray-100 to-gray-50 rounded-[3rem] flex items-center justify-center text-gray-400 border-8 border-white shadow-2xl">
                    <div className="text-center">
                        <div className="text-6xl mb-2">📷</div>
                        <p className="font-semibold">No Preview</p>
                    </div>
                </div>
            );
        }

        return (
            <div className="relative aspect-video w-full overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white ring-4 ring-gray-200 group">
                <Image
                    src={image.imageUrl}
                    alt={submission.title}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                />
                {icon && (
                    <div className={`absolute top-4 right-4 bg-gradient-to-r ${mediaColor} p-3 rounded-full shadow-lg`}>
                        {icon}
                    </div>
                )}
                {/* Media type badge */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Badge className={`bg-gradient-to-r ${mediaColor} text-white border-0 shadow-lg`}>
                        {submission.mediaType?.toUpperCase()}
                    </Badge>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white overflow-hidden min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-40 pb-12 overflow-hidden bg-gradient-to-br from-[#00B4EE]/10 via-[#FB0091]/5 to-[#FBC51A]/10">

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <Button asChild variant="ghost" className="rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-all">
                            <Link href="/gallery">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Gallery
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
                        <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
                    </svg>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            {renderMedia()}
                        </motion.div>
                        
                        <motion.div
                            className="flex flex-col justify-center"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            <Badge variant="default" className={`mb-4 w-fit bg-gradient-to-r ${mediaColor} text-white shadow-lg text-sm py-1 px-3 border-0`}>
                                {submission.activityTitle}
                            </Badge>
                            <h1 className="text-4xl md:text-5xl font-headline font-black mb-4">{submission.title}</h1>
                            
                            <div className="flex items-center gap-3 mb-6 text-lg text-gray-600 font-bold">
                                <User className="w-5 h-5 text-[#00B4EE]" />
                                <span>{submission.author}</span>
                            </div>

                            {submission.description && (
                                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                    {submission.description}
                                </p>
                            )}
                            
                            <Card className="border-0 shadow-xl overflow-hidden">
                                <div className={`h-2 bg-gradient-to-r ${mediaColor}`}></div>
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <Award className="w-6 h-6 text-[#FBC51A]" />
                                        <h3 className="font-bold text-lg">From Activity</h3>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">
                                        This creation was submitted for the <span className="font-bold">{submission.activityTitle}</span> activity.
                                    </p>
                                    <Button 
                                        asChild 
                                        className={`bg-gradient-to-r ${mediaColor} text-white hover:shadow-xl transition-all border-0`}
                                    >
                                        <Link href={`/submit?activity=${submission.activityId}`}>
                                            Try this activity yourself →
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