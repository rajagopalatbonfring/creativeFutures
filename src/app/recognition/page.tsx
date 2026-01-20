// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// import { Award, Star } from 'lucide-react';

// export default function RecognitionPage() {
//   return (
//     <div className="container mx-auto px-4 py-12 md:px-6">
//       <div className="text-center mb-12">
//         <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
//           Recognition and Participation
//         </h1>
//         <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
//           Every creation is celebrated in our community!
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <Award className="h-6 w-6 text-primary" />
//               E-Certificate of Participation
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-muted-foreground">
//               Every valid submission receives an official e-certificate to acknowledge your hard work and creativity. It's a special reminder of your contribution to our journal.
//             </p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <Star className="h-6 w-6 text-accent" />
//               Get Featured!
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-muted-foreground">
//               Outstanding work gets featured in our journal, which may be published online or in print. Share your talent with a global audience!
//             </p>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }























'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function RecognitionPage() {
  const recognitions = [
    {
      title: "E-Certificate of Participation",
      description: "Every valid submission receives an official e-certificate to acknowledge your hard work and creativity. It's a special reminder of your contribution to our journal! 🎓",
      emoji: "📜",
      color: "from-[#FB0091] to-pink-400"
    },
    {
      title: "Get Featured!",
      description: "Outstanding work gets featured in our journal, which may be published online or in print. Share your talent with a global audience! ⭐",
      emoji: "🌟",
      color: "from-[#00B4EE] to-cyan-300"
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FB0091]/10 via-[#00B4EE]/5 to-[#FBC51A]/10">
        <svg className="absolute top-40 left-20 w-24 h-16 opacity-40" viewBox="0 0 100 50">
          <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#00B4EE"/>
        </svg>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white shadow-lg px-5 py-2 rounded-full text-sm font-bold mb-6 border-2 border-[#FBC51A]/20">
              <Sparkles className="w-4 h-4 text-[#FBC51A]" />
              <span className="bg-gradient-to-r from-[#FBC51A] to-[#FB0091] bg-clip-text text-transparent">
                Celebrate
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-black leading-tight mb-6">
              Recognition & <span className="text-[#FBC51A]">Participation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every creation is celebrated in our community! 🎉
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
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {recognitions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full border-0 shadow-2xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden">
                  <div className={`h-3 bg-gradient-to-r ${item.color}`}></div>
                  <CardHeader className="text-center pt-8">
                    <div className="text-7xl mb-4">{item.emoji}</div>
                    <CardTitle className="font-headline text-2xl font-black">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center px-8 pb-8">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}