// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import type { Submission } from '@/lib/types';
// import { PlaceHolderImages } from '@/lib/placeholder-images';
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';

// interface SubmissionCardProps {
//   submission: Submission;
// }

// export function SubmissionCard({ submission }: SubmissionCardProps) {
//   const image = PlaceHolderImages.find((img) => img.id === submission.imageId);

//   return (
//     <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
//         {image ? (
//             <div className="relative h-48 w-full">
//                 <Image
//                     src={image.imageUrl}
//                     alt={submission.title}
//                     fill
//                     className="object-cover"
//                     data-ai-hint={image.imageHint}
//                 />
//             </div>
//         ) : (
//             <div className="h-48 w-full bg-muted flex items-center justify-center text-muted-foreground">
//                 No Image
//             </div>
//         )}
//       <CardHeader>
//         <CardTitle className="text-xl font-headline">{submission.title}</CardTitle>
//         <p className="text-sm text-muted-foreground">by {submission.author}</p>
//       </CardHeader>
//       <CardContent className="flex-grow">
//         <p className="text-sm text-muted-foreground line-clamp-2">{submission.description}</p>
//       </CardContent>
//       <CardFooter>
//         <Badge variant="outline">{submission.activityTitle}</Badge>
//       </CardFooter>
//     </Card>
//   );
// }















'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Submission } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, Mic, BookOpen, Image as ImageIcon } from 'lucide-react';

interface SubmissionCardProps {
  submission: Submission;
}

const mediaTypeIcons = {
  video: <PlayCircle className="h-8 w-8 text-white" />,
  audio: <Mic className="h-8 w-8 text-white" />,
  text: <BookOpen className="h-8 w-8 text-white" />,
  image: <ImageIcon className="h-8 w-8 text-white" />,
};

export function SubmissionCard({ submission }: SubmissionCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === submission.imageId);
  const icon = submission.mediaType ? mediaTypeIcons[submission.mediaType] : null;

  return (
    <Link href={`/gallery/${submission.id}`} className="flex h-full group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg">
        <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 flex flex-col h-full bg-white border-0 shadow-lg cursor-pointer w-full">
            {image ? (
                <div className="relative h-56 w-full">
                    <Image
                        src={image.imageUrl}
                        alt={submission.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    {icon && (
                    <div className="absolute top-3 right-3 bg-black/50 p-2 rounded-full">
                        {icon}
                    </div>
                    )}
                    <div className="absolute bottom-4 left-4">
                        <h3 className="text-xl font-black font-headline text-white drop-shadow-md">{submission.title}</h3>
                        <p className="text-sm text-white/90 font-semibold drop-shadow-md">by {submission.author}</p>
                    </div>
                </div>
            ) : (
                <div className="h-56 w-full bg-muted flex items-center justify-center text-muted-foreground">
                    No Image
                </div>
            )}
        <CardContent className="p-4 flex-grow">
            <p className="text-sm text-gray-600 line-clamp-2">{submission.description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
            <Badge variant="secondary" className="font-semibold">{submission.activityTitle}</Badge>
        </CardFooter>
        </Card>
    </Link>
  );
}
