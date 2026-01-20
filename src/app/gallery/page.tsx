// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { SubmissionCard } from '@/components/submission-card';
// import { featuredSubmissions } from '@/lib/constants';
// import { Sparkles } from 'lucide-react';

// export default function GalleryPage() {
//   return (
//     <div className="bg-white overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FB0091]/10 via-[#00B4EE]/5 to-[#FBC51A]/10">
//         {/* Decorative Blobs */}

//         {/* Cloud SVGs */}
//         <svg className="absolute top-24 left-16 w-24 h-16 opacity-40" viewBox="0 0 100 50">
//           <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#FB0091"/>
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
//                 Featured Works
//               </span>
//             </div>
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-black leading-tight mb-6">
//               Art <span className="text-[#FB0091]">Gallery</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               See what other young artists are making! 🎨
//             </p>
//           </motion.div>
//         </div>

//         {/* Wave Divider */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
//             <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
//           </svg>
//         </div>
//       </section>

//       {/* Gallery Grid Section */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-headline font-black mb-4">
//               Amazing <span className="text-[#00B4EE]">Creations</span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Browse through incredible work from talented young creators around the world! 🌍
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             {featuredSubmissions.map((submission, i) => (
//               <motion.div
//                 key={submission.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//               >
//                 <SubmissionCard submission={submission} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 bg-gradient-to-b from-[#FBC51A]/10 via-[#FB0091]/5 to-white relative">
//         <div className="absolute top-0 left-0 right-0">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32 rotate-180">
//             <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
//           </svg>
//         </div>


//         <div className="container mx-auto px-4 relative z-10 pt-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-3xl mx-auto"
//           >
//             <div className="text-7xl mb-6">✨</div>
//             <h2 className="text-4xl md:text-5xl font-headline font-black mb-6">
//               Want to See Your Work Here?
//             </h2>
//             <p className="text-xl md:text-2xl text-gray-600 mb-10">
//               Share your creativity with the world and join our amazing community! 🚀
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center">
//               <a 
//                 href="/submissions" 
//                 className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FB0091] to-pink-500 hover:from-pink-500 hover:to-[#FB0091] text-white shadow-xl hover:shadow-2xl transition-all text-lg px-10 py-4 rounded-full font-bold"
//               >
//                 Submit Your Work
//               </a>
//               <a 
//                 href="/activities" 
//                 className="inline-flex items-center gap-2 border-2 border-black text-black hover:bg-black hover:text-white transition-all text-lg px-10 py-4 rounded-full font-bold"
//               >
//                 Explore Activities
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }




















'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SubmissionCard } from '@/components/submission-card';
import { featuredSubmissions } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Sparkles, PlayCircle, Mic, BookOpen, Image as ImageIcon } from 'lucide-react';
import type { Submission } from '@/lib/types';

type MediaFilter = 'all' | 'image' | 'video' | 'audio' | 'text';

const filterButtons: { type: MediaFilter; label: string; icon: React.ReactNode }[] = [
  { type: 'all', label: 'All', icon: <Sparkles className="w-4 h-4 mr-2" /> },
  { type: 'image', label: 'Images', icon: <ImageIcon className="w-4 h-4 mr-2" /> },
  { type: 'video', label: 'Videos', icon: <PlayCircle className="w-4 h-4 mr-2" /> },
  { type: 'audio', label: 'Audio', icon: <Mic className="w-4 h-4 mr-2" /> },
  { type: 'text', label: 'Stories', icon: <BookOpen className="w-4 h-4 mr-2" /> },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<MediaFilter>('all');

  const filteredSubmissions =
    filter === 'all'
      ? featuredSubmissions
      : featuredSubmissions.filter((s) => s.mediaType === filter);

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FBC51A]/10 via-[#00B4EE]/5 to-[#FB0091]/10">

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white shadow-lg px-5 py-2 rounded-full text-sm font-bold mb-6 border-2 border-[#FBC51A]/20">
              <Sparkles className="w-4 h-4 text-[#FBC51A]" />
              <span className="bg-gradient-to-r from-[#FBC51A] to-[#FB0091] bg-clip-text text-transparent">
                Gallery
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-black leading-tight mb-6">
              Hall of <span className="text-[#FBC51A]">Fame</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See what other young artists, writers, and creators are making! 🌟
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterButtons.map((btn) => (
              <Button
                key={btn.type}
                onClick={() => setFilter(btn.type)}
                variant={filter === btn.type ? 'default' : 'outline'}
                className={`rounded-full transition-all duration-300 hover:scale-105 font-bold text-base px-6 py-3 ${
                  filter === btn.type
                    ? 'bg-black text-white hover:bg-gray-800 shadow-xl'
                    : 'border-2 border-black text-black hover:bg-black hover:text-white'
                }`}
              >
                {btn.icon}
                {btn.label}
              </Button>
            ))}
          </div>

          {/* Submissions Grid */}
          <motion.div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="show"
            variants={{
              show: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {filteredSubmissions.map((submission) => (
              <motion.div
                key={submission.id}
                layout
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <SubmissionCard submission={submission} />
              </motion.div>
            ))}
          </motion.div>
          {filteredSubmissions.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-6xl mb-4">😢</div>
              <h3 className="text-2xl font-bold">No submissions found!</h3>
              <p className="text-gray-600">Try selecting a different category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
