// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

// export default function TeachersPage() {
//   return (
//     <div className="container mx-auto px-4 py-12 md:px-6">
//       <div className="text-center mb-12">
//         <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
//           Teacher’s Corner
//         </h1>
//         <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
//           Empowering educators to bring creativity into the classroom.
//         </p>
//       </div>

//       <div className="max-w-4xl mx-auto">
//         <Card>
//           <CardHeader>
//             <CardTitle>Bulk Classroom Submissions</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-muted-foreground mb-4">
//               We are thrilled to partner with schools and educators to foster creativity on a larger scale. We gladly accept bulk classroom submissions, making it easy for you to showcase your students' collective work.
//             </p>
//             <p className="text-muted-foreground">
//               Whether it's a class art project, a collection of stories, or a science fair showcase, we provide a platform for your students' achievements to be celebrated.
//             </p>
//             <div className="mt-6 text-center">
//               <Button asChild size="lg">
//                 <Link href="/contact?subject=Classroom%20Submission">Contact Us for Bulk Submissions</Link>
//               </Button>
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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function TeachersPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#00B4EE]/10 via-[#FB0091]/5 to-[#FBC51A]/10">
        <svg className="absolute top-24 left-16 w-24 h-16 opacity-40" viewBox="0 0 100 50">
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
                For Educators
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-black leading-tight mb-6">
              Teacher's <span className="text-[#FB0091]">Corner</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering educators to bring creativity into the classroom! 📚
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
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#FB0091] via-[#00B4EE] to-[#FBC51A]"></div>
              <CardHeader className="text-center bg-gradient-to-br from-gray-50 to-white pb-8 pt-12">
                <div className="text-6xl mb-4">🎓</div>
                <CardTitle className="font-headline text-3xl font-black mb-2">
                  Bulk Classroom Submissions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are thrilled to partner with schools and educators to foster creativity on a larger scale. We gladly accept bulk classroom submissions, making it easy for you to showcase your students' collective work. ✨
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Whether it's a class art project, a collection of stories, or a science fair showcase, we provide a platform for your students' achievements to be celebrated!
                </p>
                <div className="mt-8 text-center pt-6">
                  <Button asChild size="lg" className="bg-gradient-to-r from-[#FB0091] to-pink-500 hover:from-pink-500 hover:to-[#FB0091] text-white shadow-xl hover:shadow-2xl transition-all text-lg px-10 py-6 rounded-full font-bold">
                    <Link href="/contact?subject=Classroom%20Submission">
                      Contact Us for Bulk Submissions <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}