// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

// export default function SchoolsPage() {
//   return (
//     <div className="container mx-auto px-4 py-12 md:px-6">
//       <div className="text-center mb-12">
//         <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
//           School Corner
//         </h1>
//         <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
//           A dedicated space for schools to shine.
//         </p>
//       </div>

//       <div className="max-w-4xl mx-auto">
//         <Card className="text-center">
//           <CardHeader>
//             <CardTitle>Showcase Your School's Creativity</CardTitle>
//             <CardDescription>
//               School Corner is a dedicated space for schools to upload group activities, class experiments, or entire exhibition content. Share your students' collaborative projects with our global community.
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <p className="text-muted-foreground mb-6">
//               From annual art shows to science fairs, your school's creative spirit deserves a platform. We welcome entire class projects and exhibitions.
//             </p>
//             <Button asChild size="lg">
//               <Link href="/submit?source=school">Submit School Project</Link>
//             </Button>
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
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function SchoolsPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-to-br from-[#FBC51A]/10 via-[#FB0091]/5 to-[#00B4EE]/10">

        <svg className="absolute top-32 right-20 w-24 h-16 opacity-40" viewBox="0 0 100 50">
          <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#FB0091"/>
        </svg>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white shadow-lg px-5 py-2 rounded-full text-sm font-bold mb-6 border-2 border-[#00B4EE]/20">
              <Sparkles className="w-4 h-4 text-[#00B4EE]" />
              <span className="bg-gradient-to-r from-[#00B4EE] to-[#FB0091] bg-clip-text text-transparent">
                For Schools
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-black leading-tight mb-6">
              School <span className="text-[#00B4EE]">Corner</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A dedicated space for schools to shine! 🏫
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
            className="max-w-4xl mx-auto"
          >
            <Card className="border-0 shadow-2xl overflow-hidden text-center">
              <div className="h-2 bg-gradient-to-r from-[#00B4EE] via-[#FB0091] to-[#FBC51A]"></div>
              <CardHeader className="bg-gradient-to-br from-gray-50 to-white pb-8 pt-12">
                <div className="text-6xl mb-4">🎨</div>
                <CardTitle className="font-headline text-3xl font-black mb-4">
                  Showcase Your School's Creativity
                </CardTitle>
                <CardDescription className="text-lg max-w-2xl mx-auto">
                  School Corner is a dedicated space for schools to upload group activities, class experiments, or entire exhibition content. Share your students' collaborative projects with our global community! 🌍
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  From annual art shows to science fairs, your school's creative spirit deserves a platform. We welcome entire class projects and exhibitions. ✨
                </p>
                <Button asChild size="lg" className="bg-gradient-to-r from-[#00B4EE] to-cyan-400 hover:from-cyan-400 hover:to-[#00B4EE] text-white shadow-xl hover:shadow-2xl transition-all text-lg px-10 py-6 rounded-full font-bold">
                  <Link href="/submit?source=school">
                    Submit School Project <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
