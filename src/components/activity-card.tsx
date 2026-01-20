// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
// import type { Activity } from '@/lib/types';
// import { PlaceHolderImages } from '@/lib/placeholder-images';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { ActivityCategories } from '@/lib/types';

// interface ActivityCardProps {
//   activity: Activity;
// }

// const categoryColors: Record<string, string> = {
//   'young-pen': 'bg-gradient-to-r from-[#FB0091] to-pink-400',
//   'draw-dream': 'bg-gradient-to-r from-[#FBC51A] to-yellow-300',
//   'sing-dance-shine': 'bg-gradient-to-r from-[#00B4EE] to-cyan-300',
//   'kid-scientists': 'bg-gradient-to-r from-purple-500 to-purple-300',
//   'colourful-cultures': 'bg-gradient-to-r from-orange-500 to-orange-300',
//   'kindness-corner': 'bg-gradient-to-r from-red-500 to-red-300'
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
//   const image = PlaceHolderImages.find((img) => img.id === activity.imageId);
//   const gradientColor = categoryColors[activity.category] || 'bg-gradient-to-r from-gray-400 to-gray-300';
//   const categoryEmoji = categoryEmojis[activity.category] || '🎨';

//   return (
//     <motion.div
//       className="overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl group cursor-pointer"
//       whileHover={{ y: -8 }}
//     >
//       {/* Colored Top Border */}
//       {/* <div className={`h-2 ${gradientColor}`}></div> */}

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
//             {/* Gradient Overlay on Hover */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </>
//         ) : (
//           <div className={`flex h-full w-full items-center justify-center ${gradientColor.replace('bg-gradient-to-r', 'bg-gradient-to-br')}`}>
//             <div className="text-7xl">{categoryEmoji}</div>
//           </div>
//         )}
        
//         {/* Category Emoji Badge - Appears on Hover */}
//         <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-2xl">
//             {categoryEmoji}
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="p-6">
//         <Badge 
//           variant="secondary" 
//           className={`mb-3 font-bold text-xs px-3 py-1 rounded-full border-0 text-white ${gradientColor}`}
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














'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { Activity } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ActivityCategories } from '@/lib/types';

interface ActivityCardProps {
  activity: Activity;
}

const categoryColors: Record<string, string> = {
  'young-pen': 'from-[#FB0091] to-pink-400',
  'draw-dream': 'from-[#FBC51A] to-yellow-300',
  'sing-dance-shine': 'from-[#00B4EE] to-cyan-300',
  'kid-scientists': 'from-purple-500 to-purple-300',
  'colourful-cultures': 'from-orange-500 to-orange-300',
  'kindness-corner': 'from-red-500 to-red-300'
};

const categoryEmojis: Record<string, string> = {
  'young-pen': '✍️',
  'draw-dream': '🎨',
  'sing-dance-shine': '🎭',
  'kid-scientists': '🔬',
  'colourful-cultures': '🌍',
  'kindness-corner': '💝'
};

export function ActivityCard({ activity }: ActivityCardProps) {
  const image = PlaceHolderImages.find(img => img.id === activity.imageId);
  const gradient = categoryColors[activity.category] || 'from-gray-400 to-gray-300';
  const emoji = categoryEmojis[activity.category] || '🎨';
  const isWeekly = activity.isSpecialChallenge;

  return (
    <motion.div
      className="overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl group cursor-pointer relative"
      whileHover={{ y: -8 }}
    >

      {/* Weekly badge */}
      {isWeekly && (
        <div className="absolute top-3 left-3 z-20">
          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-md px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            Weekly Challenge
          </Badge>
        </div>
      )}

      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        {image ? (
          <>
            <Image
              src={image.imageUrl}
              alt={activity.title}
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-300"
              data-ai-hint={image.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-400 to-gray-300`}>
            <div className="text-7xl">{emoji}</div>
          </div>
        )}

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-2xl">
            {emoji}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <Badge
          className={`mb-3 font-bold text-xs px-3 py-1 rounded-full border-0 text-white bg-gradient-to-r ${gradient}`}
        >
          {ActivityCategories[activity.category]}
        </Badge>

        <h3 className="text-xl font-black font-headline mb-2 group-hover:text-[#FB0091] transition-colors line-clamp-2">
          {activity.title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">
          {activity.description}
        </p>

        <Button
          asChild
          className="w-full bg-black hover:bg-gray-800 text-white rounded-full font-bold text-sm py-5 shadow-md hover:shadow-xl transition-all group/btn"
        >
          <Link href={`/submit?activity=${activity.id}`} className="flex items-center justify-center gap-2">
            Start Creating
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}