
// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { ArrowRight, Sparkles } from 'lucide-react';
// import type { Activity } from '@/lib/types';
// import { PlaceHolderImages } from '@/lib/placeholder-images';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { ActivityCategories } from '@/lib/types';

// interface ActivityCardProps {
//   activity: Activity;
// }

// const categoryColors: Record<string, string> = {
//   'young-pen': 'from-[#FB0091] to-pink-400',
//   'draw-dream': 'from-[#FBC51A] to-yellow-300',
//   'sing-dance-shine': 'from-[#00B4EE] to-cyan-300',
//   'kid-scientists': 'from-purple-500 to-purple-300',
//   'colourful-cultures': 'from-orange-500 to-orange-300',
//   'kindness-corner': 'from-red-500 to-red-300'
// };

// const categoryEmojis: Record<string, string> = {
//   'young-pen': '✍️',
//   'draw-dream': '🎨',
//   'sing-dance-shine': '🎭',
//   'kid-scientists': '🔬',
//   'colourful-cultures': '🌍',
//   'kindness-corner': '💝'
// };

// export function ActivityCard({ activity }: ActivityCardProps) {
//   const image = PlaceHolderImages.find(img => img.id === activity.imageId);
//   const gradient = categoryColors[activity.category] || 'from-gray-400 to-gray-300';
//   const emoji = categoryEmojis[activity.category] || '🎨';
//   const isWeekly = activity.isSpecialChallenge;

//   return (
//     <motion.div
//       className="overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl group cursor-pointer relative"
//       whileHover={{ y: -8 }}
//     >

//       {/* Weekly badge */}
//       {isWeekly && (
//         <div className="absolute top-3 left-3 z-20">
//           <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-md px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1.5">
//             <Sparkles className="h-3.5 w-3.5" />
//             Weekly Challenge
//           </Badge>
//         </div>
//       )}

//       {/* Image */}
//       <div className="relative h-52 w-full overflow-hidden">
//         {image ? (
//           <>
//             <Image
//               src={image.imageUrl}
//               alt={activity.title}
//               fill
//               className="object-cover transform group-hover:scale-110 transition-transform duration-300"
//               data-ai-hint={image.imageHint}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </>
//         ) : (
//           <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-400 to-gray-300`}>
//             <div className="text-7xl">{emoji}</div>
//           </div>
//         )}

//         <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-2xl">
//             {emoji}
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <Badge
//           className={`mb-3 font-bold text-xs px-3 py-1 rounded-full border-0 text-white bg-gradient-to-r ${gradient}`}
//         >
//           {ActivityCategories[activity.category]}
//         </Badge>

//         <h3 className="text-xl font-black font-headline mb-2 group-hover:text-[#FB0091] transition-colors line-clamp-2">
//           {activity.title}
//         </h3>

//         <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">
//           {activity.description}
//         </p>

//         <Button
//           asChild
//           className="w-full bg-black hover:bg-gray-800 text-white rounded-full font-bold text-sm py-5 shadow-md hover:shadow-xl transition-all group/btn"
//         >
//           <Link href={`/submit?activity=${activity.id}`} className="flex items-center justify-center gap-2">
//             Start Creating
//             <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
//           </Link>
//         </Button>
//       </div>
//     </motion.div>
//   );
// }

































// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { ArrowRight, Sparkles } from 'lucide-react';
// import type { Activity } from '@/lib/types';
// import { PlaceHolderImages } from '@/lib/placeholder-images';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';

// interface ActivityCardProps {
//   activity: Activity;
// }

// export function ActivityCard({ activity }: ActivityCardProps) {
//   const image = PlaceHolderImages.find(img => img.id === activity.imageId);
//   const isWeekly = activity.isSpecialChallenge;

//   // Simple fallback emoji/color based on title (no categories anymore)
//   const getEmojiAndColor = () => {
//     const titleLower = activity.title.toLowerCase();
//     if (titleLower.includes('story') || titleLower.includes('book')) return { emoji: '📖', color: 'from-[#FB0091] to-pink-400' };
//     if (titleLower.includes('draw') || titleLower.includes('picture')) return { emoji: '🎨', color: 'from-[#FBC51A] to-yellow-300' };
//     if (titleLower.includes('sing') || titleLower.includes('dance')) return { emoji: '🎤', color: 'from-[#00B4EE] to-cyan-300' };
//     if (titleLower.includes('math') || titleLower.includes('puzzle')) return { emoji: '🧮', color: 'from-purple-500 to-purple-300' };
//     if (titleLower.includes('science') || titleLower.includes('experiment')) return { emoji: '🔬', color: 'from-purple-500 to-purple-300' };
//     if (titleLower.includes('idea') || titleLower.includes('new')) return { emoji: '💡', color: 'from-orange-500 to-orange-300' };
//     if (titleLower.includes('craft') || titleLower.includes('model')) return { emoji: '✂️', color: 'from-orange-500 to-orange-300' };
//     // Default
//     return { emoji: '🌟', color: 'from-gray-400 to-gray-300' };
//   };

//   const { emoji, color } = getEmojiAndColor();

//   return (
//     <motion.div
//       className="overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl group cursor-pointer relative"
//       whileHover={{ y: -8 }}
//     >

//       {/* Weekly badge */}
//       {isWeekly && (
//         <div className="absolute top-3 left-3 z-20">
//           <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-md px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1.5">
//             <Sparkles className="h-3.5 w-3.5" />
//             Weekly Challenge
//           </Badge>
//         </div>
//       )}

//       {/* Image Section */}
//       <div className="relative h-52 w-full overflow-hidden">
//         {image ? (
//           <>
//             <Image
//               src={image.imageUrl}
//               alt={activity.title}
//               fill
//               className="object-cover transform group-hover:scale-110 transition-transform duration-300"
//               data-ai-hint={image.imageHint}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </>
//         ) : (
//           <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-400 to-gray-300`}>
//             <div className="text-7xl">{emoji}</div>
//           </div>
//         )}

//         {/* Emoji badge on hover */}
//         <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-2xl">
//             {emoji}
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         {/* No category badge anymore – optional: show age range instead */}
//         <Badge className="mb-3 font-bold text-xs px-3 py-1 rounded-full border-0 text-white bg-gradient-to-r from-gray-500 to-gray-700">
//           Ages {activity.ageGroups[0]} to {activity.ageGroups[activity.ageGroups.length - 1]}
//         </Badge>

//         <h3 className="text-xl font-black font-headline mb-2 group-hover:text-[#FB0091] transition-colors line-clamp-2">
//           {activity.title}
//         </h3>

//         <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">
//           {activity.description}
//         </p>

//         <Button
//           asChild
//           className="w-full bg-black hover:bg-gray-800 text-white rounded-full font-bold text-sm py-5 shadow-md hover:shadow-xl transition-all group/btn"
//         >
//           <Link href={`/submit?activity=${activity.id}`} className="flex items-center justify-center gap-2">
//             Start Creating
//             <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
//           </Link>
//         </Button>
//       </div>
//     </motion.div>
//   );
// }
















'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { Activity } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ActivityCardProps {
  activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  const isWeekly = activity.isSpecialChallenge;

  // Derive color based on title
   const getColorFromTitle = () => {
    const title = activity.title.toLowerCase();
    if (title.includes('story') || title.includes('book') || title.includes('idea')) return 'from-[#FB0091] to-pink-400';
    if (title.includes('draw') || title.includes('picture') || title.includes('craft') || title.includes('model')) return 'from-[#FBC51A] to-yellow-300';
    if (title.includes('sing') || title.includes('dance')) return 'from-[#00B4EE] to-cyan-300';
    if (title.includes('math') || title.includes('puzzle')) return 'from-purple-500 to-purple-300';
    if (title.includes('science') || title.includes('experiment')) return 'from-purple-500 to-purple-300';
    return 'from-gray-500 to-gray-400'; // fallback
  };
  
  const badgeColor = getColorFromTitle();

  return (
    <Link
      href={`/submit?activity=${activity.id}`}
      className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl group"
    >
      <Card
        className={`
          overflow-hidden transition-all duration-300
          hover:shadow-2xl hover:-translate-y-2
          flex flex-col h-full border-0 shadow-lg
          bg-white group-hover:shadow-2xl relative
          min-h-[250px]
        `}
      >

        {/* Weekly/Special badge – top-right corner */}
        {isWeekly && (
          <div className="absolute top-4 right-4 z-20">
            <Badge 
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full border-2 border-white"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Weekly Challenge
            </Badge>
          </div>
        )}

        {/* Header – Title + age range */}
        <CardHeader className="pb-3 pt-6 px-6 space-y-2">
          <CardTitle className="text-xl font-headline font-bold leading-tight line-clamp-2 text-gray-900 group-hover:text-[#FB0091] transition-colors duration-300 pr-8">
            {activity.title}
          </CardTitle>
          <div className="flex items-center gap-2">
            <div className={`h-1 w-1 rounded-full bg-gradient-to-r ${badgeColor}`}></div>
            <p className="text-sm text-gray-500 font-medium">
              Ages {activity.ageGroups[0]}to{activity.ageGroups[activity.ageGroups.length - 1]}
            </p>
          </div>
        </CardHeader>

        {/* Content – Description */}
        <CardContent className="flex-grow pb-4 px-6">
          <p className="text-sm text-gray-600 line-clamp-4 leading-relaxed">
            {activity.description}
          </p>
        </CardContent>

        {/* Footer – Category badge + Button */}
        <CardFooter className="pt-3 pb-5 px-6 flex items-center justify-between gap-3 border-t border-gray-100 mt-auto">
          {/* Activity category badge */}
          <Badge
            variant="outline"
            className={`bg-gradient-to-r ${badgeColor} text-white border-0 font-semibold text-xs px-3.5 py-1.5 rounded-full shadow-sm whitespace-nowrap`}
          >
            {activity.title}
          </Badge>

          {/* Start button */}
          <Button 
            asChild 
            size="sm"
            className="rounded-full font-bold text-xs shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600 px-5 py-2 h-auto"
          >
            <Link href={`/submit?activity=${activity.id}`} className="flex items-center gap-1.5">
              Start
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}