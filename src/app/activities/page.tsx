


// // ACTIVITIES PAGE
// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { ActivityList } from "@/components/activity-list";
// import Image from "next/image";
// import { PlaceHolderImages } from "@/lib/placeholder-images";
// import { Sparkles } from 'lucide-react';

// export default function ActivitiesPage() {
//   const activitiesImage = PlaceHolderImages.find(img => img.id === 'activities-hero');

//   return (
//     <div className="bg-white overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#00B4EE]/10 via-[#FB0091]/5 to-[#FBC51A]/10">
//         {/* Cloud SVGs */}
//         <svg className="absolute top-24 left-16 w-24 h-16 opacity-40" viewBox="0 0 100 50">
//           <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#00B4EE"/>
//         </svg>
//         <svg className="absolute top-48 right-24 w-28 h-18 opacity-30" viewBox="0 0 100 50">
//           <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#FBC51A"/>
//         </svg>

//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             className="text-center mb-12"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="inline-flex items-center gap-2 bg-white shadow-lg px-5 py-2 rounded-full text-sm font-bold mb-6 border-2 border-[#FB0091]/20">
//               <Sparkles className="w-4 h-4 text-[#FB0091]" />
//               <span className="bg-gradient-to-r from-[#FB0091] to-[#00B4EE] bg-clip-text text-transparent">
//                 Activities
//               </span>
//             </div>
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-black leading-tight mb-6">
//               Choose Your <span className="text-[#FB0091]">Adventure</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Find the perfect creative challenge for you. Explore our activities and let your imagination soar! 🚀
//             </p>
//           </motion.div>

//           {/* Hero Image */}
//           {activitiesImage && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.3, duration: 0.7 }}
//               className="relative w-full max-w-4xl mx-auto aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-4 ring-[#FBC51A]/30"
//             >
//               <Image 
//                 src={activitiesImage.imageUrl}
//                 alt={activitiesImage.description}
//                 fill
//                 className="object-cover"
//                 data-ai-hint={activitiesImage.imageHint}
//               />
//             </motion.div>
//           )}
//         </div>

//         {/* Wave Divider */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
//             <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
//           </svg>
//         </div>
//       </section>

//       {/* Activities Section */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 md:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-4xl md:text-5xl font-headline font-black mb-4">
//               Explore All <span className="text-[#00B4EE]">Activities</span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Filter by category to find activities that match your interests! 🎨
//             </p>
//           </motion.div>

//           <ActivityList />
//         </div>
//       </section>
//     </div>
//   );
// }













'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ActivityList } from "@/components/activity-list";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Sparkles } from 'lucide-react';

export default function ActivitiesPage() {
  const activitiesImage = PlaceHolderImages.find(img => img.id === 'activities-hero');

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#00B4EE]/10 via-[#FB0091]/5 to-[#FBC51A]/10">
        {/* Cloud SVGs */}
        <svg className="absolute top-24 left-16 w-24 h-16 opacity-40" viewBox="0 0 100 50">
          <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#00B4EE"/>
        </svg>
        <svg className="absolute top-48 right-24 w-28 h-18 opacity-30" viewBox="0 0 100 50">
          <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#FBC51A"/>
        </svg>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white shadow-lg px-5 py-2 rounded-full text-sm font-bold mb-6 border-2 border-[#FB0091]/20">
              <Sparkles className="w-4 h-4 text-[#FB0091]" />
              <span className="bg-gradient-to-r from-[#FB0091] to-[#00B4EE] bg-clip-text text-transparent">
                Parent-Child Activity Zone
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-black leading-tight mb-6">
              Choose Your <span className="text-[#FB0091]">Creative Adventure</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore permanent activities for kids & parents. Weekly challenges are shown in the Resource Hub!
            </p>
          </motion.div>

          {activitiesImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative w-full max-w-4xl mx-auto aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-4 ring-[#FBC51A]/30"
            >
              <Image
                src={activitiesImage.imageUrl}
                alt={activitiesImage.description || "Activities hero"}
                fill
                className="object-cover"
                data-ai-hint={activitiesImage.imageHint}
              />
            </motion.div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-headline font-black mb-4">
              Core <span className="text-[#00B4EE]">Activities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Filter by category to discover creative challenges for young minds!
            </p>
          </motion.div>

          <ActivityList />
        </div>
      </section>
    </div>
  );
}