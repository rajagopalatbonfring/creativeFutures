// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// import { CheckCircle } from 'lucide-react';

// const formatTypes = [
//     'Text',
//     'Drawing',
//     'Craft',
//     'Audio',
//     'Video',
//     'Mixed Media'
// ];

// export default function SubmissionsPage() {
//   return (
//     <div className="container mx-auto px-4 py-12 md:px-6">
//       <div className="text-center mb-12">
//         <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
//           Submission Guidelines
//         </h1>
//         <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
//           Everything you need to know to share your creation with us.
//         </p>
//       </div>

//       <div className="max-w-2xl mx-auto">
//         <Card>
//           <CardHeader>
//             <CardTitle>Accepted Formats</CardTitle>
//             <CardDescription>We welcome a wide variety of creative formats. Let your imagination run wild!</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ul className="space-y-3">
//               {formatTypes.map((format) => (
//                 <li key={format} className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span className="text-muted-foreground">{format}</span>
//                 </li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }













'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Sparkles, Check } from 'lucide-react';

const formatTypes = [
    { name: 'Text', emoji: '📝', color: 'from-[#FB0091] to-pink-400' },
    { name: 'Drawing', emoji: '🎨', color: 'from-[#FBC51A] to-yellow-300' },
    { name: 'Craft', emoji: '✂️', color: 'from-purple-500 to-purple-300' },
    { name: 'Audio', emoji: '🎵', color: 'from-[#00B4EE] to-cyan-300' },
    { name: 'Video', emoji: '🎬', color: 'from-orange-500 to-orange-300' },
    { name: 'Mixed Media', emoji: '🌈', color: 'from-pink-500 to-pink-300' }
];

export default function SubmissionsPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#00B4EE]/10 via-[#FB0091]/5 to-[#FBC51A]/10">

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
                Guidelines
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-black leading-tight mb-6">
              Submission <span className="text-[#00B4EE]">Guidelines</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know to share your creation with us! 🚀
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-headline font-black mb-4">
                Accepted <span className="text-[#FB0091]">Formats</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We welcome a wide variety of creative formats. Let your imagination run wild! 🎨
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {formatTypes.map((format, index) => (
                <motion.div
                  key={format.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer overflow-hidden">
                    {/* <div className={`h-2 bg-gradient-to-r ${format.color}`}></div> */}
                    <CardContent className="pt-8 pb-8 text-center">
                      <div className="text-5xl mb-4">{format.emoji}</div>
                      <div className="flex items-center justify-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="text-lg font-bold">{format.name}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}