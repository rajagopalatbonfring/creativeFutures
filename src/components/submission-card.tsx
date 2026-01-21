
// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import type { Submission } from '@/lib/types';
// import { PlaceHolderImages } from '@/lib/placeholder-images';
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { allActivities } from '@/lib/constants';
// import { PlayCircle, Mic, BookOpen, Image as ImageIcon, Sparkles } from 'lucide-react';

// const activityCategoryColors: Record<string, string> = {
//   'young-pen': 'from-[#FB0091] to-pink-400',
//   'draw-dream': 'from-[#FBC51A] to-yellow-300',
//   'sing-dance-shine': 'from-[#00B4EE] to-cyan-300',
//   'kid-scientists': 'from-purple-500 to-purple-300',
//   'colourful-cultures': 'from-orange-500 to-orange-300',
//   'kindness-corner': 'from-red-500 to-red-300'
// };

// const mediaTypeConfig: Record<string, { icon: React.ReactNode; label: string; bg: string }> = {
//   image: { icon: <ImageIcon className="h-5 w-5" />, label: 'Image', bg: 'bg-gradient-to-r from-amber-400 to-yellow-500' },
//   video: { icon: <PlayCircle className="h-5 w-5" />, label: 'Video', bg: 'bg-gradient-to-r from-purple-500 to-violet-500' },
//   audio: { icon: <Mic className="h-5 w-5" />, label: 'Audio', bg: 'bg-gradient-to-r from-cyan-500 to-blue-500' },
//   text:  { icon: <BookOpen className="h-5 w-5" />, label: 'Story', bg: 'bg-gradient-to-r from-pink-500 to-rose-500' },
// };

// interface SubmissionCardProps {
//   submission: Submission;
// }

// export function SubmissionCard({ submission }: SubmissionCardProps) {
//   const image = PlaceHolderImages.find((img) => img.id === submission.imageId);
  
//   const activity = allActivities.find((a) => a.id === submission.activityId);
//   const categoryColor = activity?.category
//     ? activityCategoryColors[activity.category] || 'from-gray-400 to-gray-300'
//     : 'from-gray-400 to-gray-300';

//   const isWeekly = activity?.isSpecialChallenge ?? false;

//   const media = submission.mediaType ? mediaTypeConfig[submission.mediaType] : null;

//   return (
//     <Link
//       href={`/gallery/${submission.id}`}
//       className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl group"
//     >
//       <Card
//         className={`
//           overflow-hidden transition-all duration-300
//           hover:shadow-2xl hover:-translate-y-2
//           flex flex-col h-full border-0 shadow-lg
//           bg-white group-hover:shadow-2xl relative
//         `}
//       >
//         <div className="relative h-56 w-full overflow-hidden">
//           {image ? (
//             <>
//               <Image
//                 src={image.imageUrl}
//                 alt={submission.title}
//                 fill
//                 className="object-cover transform group-hover:scale-105 transition-transform duration-400"
//                 data-ai-hint={image.imageHint}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
//             </>
//           ) : (
//             <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-gray-400">
//               <div className="text-center">
//                 <div className="text-6xl mb-3 opacity-70">🎨</div>
//                 <p className="text-sm font-medium">No preview</p>
//               </div>
//             </div>
//           )}

//           {media && (
//             <div className="absolute top-3 right-3 z-20">
//               <Badge 
//                 className={`${media.bg} text-white shadow-md flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full border border-white/30`}
//               >
//                 {media.icon}
//                 {media.label}
//               </Badge>
//             </div>
//           )}
//         </div>

//         <CardHeader className="pb-2 pt-4">
//           <CardTitle className="text-xl font-headline font-bold leading-tight line-clamp-2 group-hover:text-[#FB0091] transition-colors duration-300">
//             {submission.title}
//           </CardTitle>
//           <p className="text-sm text-gray-600 font-medium mt-1.5">
//             by {submission.author}
//           </p>
//         </CardHeader>

//         <CardContent className="flex-grow pb-3">
//           <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
//             {submission.description}
//           </p>
//         </CardContent>

//         <CardFooter className="pt-1 pb-4 px-6 flex flex-wrap gap-2 items-center">
//           <Badge
//             variant="outline"
//             className={`bg-gradient-to-r ${categoryColor} text-white border-0 font-semibold text-xs px-3.5 py-1 rounded-full shadow-sm`}
//           >
//             {submission.activityTitle}
//           </Badge>

//           {/* Weekly Challenge indicator */}
//           {isWeekly && (
//             <Badge 
//               className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 font-bold text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1"
//             >
//               <Sparkles className="h-3.5 w-3.5" />
//               Weekly Challenge
//             </Badge>
//           )}
//         </CardFooter>
//       </Card>
//     </Link>
//   );
// }
















'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Submission } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { allActivities } from '@/lib/constants';
import { PlayCircle, Mic, BookOpen, Image as ImageIcon, Sparkles } from 'lucide-react';

const mediaTypeConfig: Record<string, { icon: React.ReactNode; label: string; bg: string }> = {
  image: { icon: <ImageIcon className="h-5 w-5" />, label: 'Image', bg: 'bg-gradient-to-r from-amber-400 to-yellow-500' },
  video: { icon: <PlayCircle className="h-5 w-5" />, label: 'Video', bg: 'bg-gradient-to-r from-purple-500 to-violet-500' },
  audio: { icon: <Mic className="h-5 w-5" />, label: 'Audio', bg: 'bg-gradient-to-r from-cyan-500 to-blue-500' },
  text:  { icon: <BookOpen className="h-5 w-5" />, label: 'Story', bg: 'bg-gradient-to-r from-pink-500 to-rose-500' },
};

interface SubmissionCardProps {
  submission: Submission;
}

export function SubmissionCard({ submission }: SubmissionCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === submission.imageId);
  
  const activity = allActivities.find((a) => a.id === submission.activityId);
  const isWeekly = activity?.isSpecialChallenge ?? false;

  // Derive a nice color based on activity title (no category anymore)
  const getColorFromTitle = () => {
    const title = (activity?.title || submission.activityTitle).toLowerCase();
    if (title.includes('story') || title.includes('book') || title.includes('idea')) return 'from-[#FB0091] to-pink-400';
    if (title.includes('draw') || title.includes('picture') || title.includes('craft') || title.includes('model')) return 'from-[#FBC51A] to-yellow-300';
    if (title.includes('sing') || title.includes('dance')) return 'from-[#00B4EE] to-cyan-300';
    if (title.includes('math') || title.includes('puzzle')) return 'from-purple-500 to-purple-300';
    if (title.includes('science') || title.includes('experiment')) return 'from-purple-500 to-purple-300';
    return 'from-gray-500 to-gray-400'; // fallback
  };

  const badgeColor = getColorFromTitle();

  const media = submission.mediaType ? mediaTypeConfig[submission.mediaType] : null;

  return (
    <Link
      href={`/gallery/${submission.id}`}
      className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl group"
    >
      <Card
        className={`
          overflow-hidden transition-all duration-300
          hover:shadow-2xl hover:-translate-y-2
          flex flex-col h-full border-0 shadow-lg
          bg-white group-hover:shadow-2xl relative
        `}
      >
        <div className="relative h-56 w-full overflow-hidden">
          {image ? (
            <>
              <Image
                src={image.imageUrl}
                alt={submission.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-400"
                data-ai-hint={image.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            </>
          ) : (
            <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="text-6xl mb-3 opacity-70">🎨</div>
                <p className="text-sm font-medium">No preview</p>
              </div>
            </div>
          )}

          {media && (
            <div className="absolute top-3 right-3 z-20">
              <Badge 
                className={`${media.bg} text-white shadow-md flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full border border-white/30`}
              >
                {media.icon}
                {media.label}
              </Badge>
            </div>
          )}
        </div>

        <CardHeader className="pb-2 pt-4">
          <CardTitle className="text-xl font-headline font-bold leading-tight line-clamp-2 group-hover:text-[#FB0091] transition-colors duration-300">
            {submission.title}
          </CardTitle>
          <p className="text-sm text-gray-600 font-medium mt-1.5">
            by {submission.author}
          </p>
        </CardHeader>

        <CardContent className="flex-grow pb-3">
          <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
            {submission.description}
          </p>
        </CardContent>

        <CardFooter className="pt-1 pb-4 px-6 flex flex-wrap gap-2 items-center">
          {/* Activity title badge with derived color */}
          <Badge
            variant="outline"
            className={`bg-gradient-to-r from-gray-500 to-gray-400 text-white border-0 font-semibold text-xs px-3.5 py-1 rounded-full shadow-sm`}
          >
            {submission.activityTitle}
          </Badge>

          {/* Weekly Challenge indicator */}
          {isWeekly && (
            <Badge 
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 font-bold text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Weekly Challenge
            </Badge>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}