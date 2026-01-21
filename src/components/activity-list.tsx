// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { allActivities } from '@/lib/constants'; // ← changed to allActivities
// import { ActivityCard } from '@/components/activity-card';
// import { Button } from '@/components/ui/button';
// import type { ActivityCategory } from '@/lib/types';
// import { ActivityCategories } from '@/lib/types';

// const categories = Object.keys(ActivityCategories) as ActivityCategory[];

// const categoryEmojis: Record<ActivityCategory, string> = {
//   'young-pen': '✍️',
//   'draw-dream': '🎨',
//   'sing-dance-shine': '🎭',
//   'kid-scientists': '🔬',
//   'colourful-cultures': '🌍',
//   'kindness-corner': '💝'
// };

// const categoryColors: Record<ActivityCategory, string> = {
//   'young-pen': 'from-[#FB0091] to-pink-400',
//   'draw-dream': 'from-[#FBC51A] to-yellow-300',
//   'sing-dance-shine': 'from-[#00B4EE] to-cyan-300',
//   'kid-scientists': 'from-purple-500 to-purple-300',
//   'colourful-cultures': 'from-orange-500 to-orange-300',
//   'kindness-corner': 'from-red-500 to-red-300'
// };

// export function ActivityList() {
//   const [filter, setFilter] = useState<ActivityCategory | 'All'>('All');

//   const filteredActivities = filter === 'All'
//     ? allActivities
//     : allActivities.filter(a => a.category === filter);

//   const container = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { staggerChildren: 0.1 } }
//   };

//   const item = {
//     hidden: { y: 20, opacity: 0 },
//     show: { y: 0, opacity: 1 }
//   };

//   return (
//     <div>
//       <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
//         <Button
//           variant={filter === 'All' ? 'default' : 'outline'}
//           onClick={() => setFilter('All')}
//           className={`rounded-full transition-all duration-300 hover:scale-105 font-bold text-base px-6 py-3 ${
//             filter === 'All'
//               ? 'bg-black text-white hover:bg-gray-800 shadow-xl'
//               : 'border-2 border-black hover:bg-black hover:text-white'
//           }`}
//         >
//           <span className="mr-2 text-xl">⭐</span>
//           All Activities
//         </Button>

//         {categories.map(category => (
//           <Button
//             key={category}
//             variant={filter === category ? 'default' : 'outline'}
//             onClick={() => setFilter(category)}
//             className={`rounded-full transition-all duration-300 hover:scale-105 font-bold text-base px-6 py-3 ${
//               filter === category
//                 ? `bg-gradient-to-r ${categoryColors[category]} text-white hover:shadow-xl shadow-lg border-0`
//                 : 'border-2 border-gray-300 hover:border-gray-400 hover:shadow-md'
//             }`}
//           >
//             <span className="mr-2 text-xl">{categoryEmojis[category]}</span>
//             {ActivityCategories[category]}
//           </Button>
//         ))}
//       </div>

//       <motion.div
//         className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
//         variants={container}
//         initial="hidden"
//         animate="show"
//       >
//         {filteredActivities.length > 0 ? (
//           filteredActivities.map(activity => (
//             <motion.div key={activity.id} variants={item} layout>
//               <ActivityCard activity={activity} />
//             </motion.div>
//           ))
//         ) : (
//           <div className="col-span-full text-center py-12">
//             <div className="text-6xl mb-4">🔍</div>
//             <p className="text-xl text-gray-600 font-semibold">
//               No activities found in this category
//             </p>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// }















// components/activity-list.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { allActivities } from '@/lib/constants'; // ← use the new flat list
import { ActivityCard } from '@/components/activity-card';
import { Button } from '@/components/ui/button';

export function ActivityList() {
  const [showAll, setShowAll] = useState(true); // optional toggle if you want limit

  // Optional: show only first 6 or something — remove if not needed
  const displayedActivities = showAll ? allActivities : allActivities.slice(0, 6);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div>
      <motion.div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {displayedActivities.length > 0 ? (
          displayedActivities.map(activity => (
            <motion.div key={activity.id} variants={item} layout>
              <ActivityCard activity={activity} />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-gray-600 font-semibold">
              No activities found
            </p>
          </div>
        )}
      </motion.div>

      {allActivities.length > 6 && (
        <div className="my-8 text-center">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="rounded-full px-8 py-5 text-base"
          >
            {showAll ? 'Show Less' : 'Show All Activities'}
          </Button>
        </div>
      )}
    </div>
  );
}