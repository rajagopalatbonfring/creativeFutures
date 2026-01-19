// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// import { Star } from 'lucide-react';

// const spotlightAwards = [
//     {
//         title: 'Star of the Month',
//         description: 'Awarded to a creator who has shown exceptional talent and creativity.'
//     },
//     {
//         title: 'Top Artist',
//         description: 'Celebrating the most visually stunning artwork submitted.'
//     },
//     {
//         title: 'Junior Voice',
//         description: 'Highlighting the most powerful and inspiring written piece.'
//     }
// ];

// export default function BlogPage() {
//   return (
//     <div className="container mx-auto px-4 py-12 md:px-6">
//       <div className="text-center mb-12">
//         <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
//           Blog & Monthly Newsletter
//         </h1>
//         <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
//           Stay updated with the latest news and see our top entries!
//         </p>
//       </div>

//       <div className="max-w-4xl mx-auto">
//         <Card>
//           <CardHeader>
//             <CardTitle>Creator Spotlights</CardTitle>
//             <CardDescription>
//               Each month, we shine a spotlight on the most outstanding entries. Here are the awards we give out:
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               {spotlightAwards.map(award => (
//                 <div key={award.title} className="flex items-start gap-4">
//                   <Star className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
//                   <div>
//                     <h3 className="font-semibold">{award.title}</h3>
//                     <p className="text-sm text-muted-foreground">{award.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
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
import { Sparkles } from 'lucide-react';

const spotlightAwards = [
    {
        title: 'Star of the Month',
        description: 'Awarded to a creator who has shown exceptional talent and creativity.',
        emoji: '⭐',
        color: 'from-[#FBC51A] to-yellow-300'
    },
    {
        title: 'Top Artist',
        description: 'Celebrating the most visually stunning artwork submitted.',
        emoji: '🎨',
        color: 'from-[#FB0091] to-pink-400'
    },
    {
        title: 'Junior Voice',
        description: 'Highlighting the most powerful and inspiring written piece.',
        emoji: '📣',
        color: 'from-[#00B4EE] to-cyan-300'
    }
];

export default function BlogPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FBC51A]/10 via-[#FB0091]/5 to-[#00B4EE]/10">
        {/* Cloud SVGs */}
        <svg className="absolute top-24 left-16 w-24 h-16 opacity-40" viewBox="0 0 100 50">
          <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#FBC51A"/>
        </svg>
        <svg className="absolute top-48 right-24 w-28 h-18 opacity-30" viewBox="0 0 100 50">
          <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#00B4EE"/>
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
                Updates & News
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-black leading-tight mb-6">
              Blog & Monthly <span className="text-[#FB0091]">Newsletter</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest news and see our top entries! 📰
            </p>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Creator Spotlights Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-headline font-black mb-4">
              Creator <span className="text-[#FBC51A]">Spotlights</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each month, we shine a spotlight on the most outstanding entries! 🌟
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {spotlightAwards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="h-full border-0 shadow-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden group">
                  <div className={`h-3 bg-gradient-to-r ${award.color}`}></div>
                  <CardHeader className="text-center pt-8 pb-6">
                    <div className="text-7xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {award.emoji}
                    </div>
                    <CardTitle className="font-headline text-2xl font-black mb-2">
                      {award.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center px-6 pb-8">
                    <p className="text-gray-600 leading-relaxed">
                      {award.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      {/* <section className="py-24 bg-gradient-to-br from-[#FB0091]/5 to-[#00B4EE]/5 relative">
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32 rotate-180">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-[#FB0091] to-pink-500 text-white">
       
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#FBC51A]/20 rounded-full blur-2xl"></div>

              <CardContent className="pt-16 pb-16 text-center relative z-10">
                <div className="text-7xl mb-6">💌</div>
                <h2 className="text-4xl md:text-5xl font-headline font-black mb-4">
                  Get Monthly Updates!
                </h2>
                <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-2xl mx-auto">
                  Subscribe to our newsletter and never miss out on amazing creative content! ✨
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="flex-1 px-6 py-4 rounded-full text-black font-semibold text-base outline-none shadow-lg"
                  />
                  <button className="bg-white text-[#FB0091] hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-base shadow-xl hover:shadow-2xl transition-all">
                    Subscribe 🚀
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}