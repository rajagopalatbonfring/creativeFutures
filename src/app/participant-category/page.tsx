// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// const ageGroupData = [
//     { age: '2-4', stage: 'Little Explorers', activity: 'Drawing, colouring, object recognition' },
//     { age: '5-6', stage: 'Creative Starters', activity: 'Tracing, story starters, picture-based Q&A' },
//     { age: '7-8', stage: 'Junior Thinkers', activity: 'Simple poems, "My Day" journal, puzzles' },
//     { age: '9-10', stage: 'Curious Minds', activity: 'Short stories, mini-essays, word search, science facts' },
//     { age: '11-12', stage: 'Young Creators', activity: 'Experiments, opinion writing, creative challenges' },
//     { age: '13-14', stage: 'Growing Scholars', activity: 'Articles, comic strips, logic puzzles' },
//     { age: '15-16', stage: 'Teen Journalists', activity: 'Essays, social issues, innovation topics' },
// ];

// export default function ParticipantCategoryPage() {
//   return (
//     <div className="container mx-auto px-4 py-12 md:px-6">
//       <div className="text-center mb-12">
//         <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
//           Participant Categories
//         </h1>
//         <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
//           Find the perfect creative stage for every young artist.
//         </p>
//       </div>

//       <div className="max-w-4xl mx-auto">
//         <Card>
//             <CardHeader>
//                 <CardTitle>Age Groups & Activities</CardTitle>
//                 <CardDescription>We have activities tailored for every age group, from toddlers to teens.</CardDescription>
//             </CardHeader>
//             <CardContent>
//                 <Table>
//                     <TableHeader>
//                         <TableRow>
//                         <TableHead>Age Group</TableHead>
//                         <TableHead>Stage Name</TableHead>
//                         <TableHead>Activity Type</TableHead>
//                         </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                         {ageGroupData.map(({ age, stage, activity }) => (
//                         <TableRow key={age}>
//                             <TableCell className="font-medium">{age} years</TableCell>
//                             <TableCell>{stage}</TableCell>
//                             <TableCell>{activity}</TableCell>
//                         </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }















'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const ageGroupData = [
    { age: '2-4', stage: 'Little Explorers', activity: 'Drawing, colouring, object recognition', emoji: '🐣', color: 'bg-yellow-200', gradient: 'from-yellow-400 to-yellow-200' },
    { age: '5-6', stage: 'Creative Starters', activity: 'Tracing, story starters, picture-based Q&A', emoji: '🌱', color: 'bg-green-200', gradient: 'from-green-400 to-green-200' },
    { age: '7-8', stage: 'Junior Thinkers', activity: 'Simple poems, "My Day" journal, puzzles', emoji: '🎈', color: 'bg-blue-200', gradient: 'from-blue-400 to-blue-200' },
    { age: '9-10', stage: 'Curious Minds', activity: 'Short stories, mini-essays, word search, science facts', emoji: '🔍', color: 'bg-purple-200', gradient: 'from-purple-400 to-purple-200' },
    { age: '11-12', stage: 'Young Creators', activity: 'Experiments, opinion writing, creative challenges', emoji: '💡', color: 'bg-pink-200', gradient: 'from-pink-400 to-pink-200' },
    { age: '13-14', stage: 'Growing Scholars', activity: 'Articles, comic strips, logic puzzles', emoji: '📚', color: 'bg-orange-200', gradient: 'from-orange-400 to-orange-200' },
    { age: '15-16', stage: 'Teen Journalists', activity: 'Essays, social issues, innovation topics', emoji: '✨', color: 'bg-red-200', gradient: 'from-red-400 to-red-200' },
];

export default function ParticipantCategoryPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#00B4EE]/10 via-[#FB0091]/5 to-[#FBC51A]/10">
        {/* Decorative Blobs */}
        {/* <div className="absolute top-0 left-0 w-96 h-96 bg-[#FB0091]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#00B4EE]/20 rounded-full blur-3xl translate-x-1/3"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#FBC51A]/20 rounded-full blur-3xl"></div> */}

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
                Age Groups
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-black leading-tight mb-6">
              Participant <span className="text-[#FB0091]">Categories</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find the perfect creative stage for every young artist! 🌈
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

      {/* Age Groups Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-headline font-black mb-4">
              Discover Your <span className="text-[#00B4EE]">Stage</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We have activities tailored for every age group, from toddlers to teens! Each stage is designed to nurture creativity at the perfect pace. 🎨
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ageGroupData.map((group, index) => (
              <motion.div
                key={group.age}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-black/5 overflow-hidden group cursor-pointer hover:-translate-y-2 bg-white">
                  {/* <div className={`h-3 bg-gradient-to-r ${group.gradient}`}></div> */}
                  <CardHeader className="text-center pt-8">
                    <div className="text-7xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {group.emoji}
                    </div>
                    <div className='pb-3'>
                      <span className={`${group.color} px-4 py-2 rounded-full text-sm font-black`}>
                        Ages {group.age}
                      </span>
                    </div>
                    <CardTitle className="font-headline text-2xl font-bold mb-2">{group.stage}</CardTitle>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {group.activity}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-gradient-to-br from-[#FBC51A]/10 via-[#FB0091]/5 to-[#00B4EE]/10 relative">
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32 rotate-180">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>

        {/* Decorative Blobs */}
        {/* <div className="absolute top-20 right-0 w-96 h-96 bg-[#FB0091]/10 rounded-full blur-3xl translate-x-1/3"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#00B4EE]/10 rounded-full blur-3xl -translate-x-1/3"></div> */}

        <div className="container mx-auto px-4 relative z-10 py-28">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-0 shadow-2xl bg-white overflow-hidden">
                <CardHeader className="text-center bg-gradient-to-br from-gray-50 to-white pb-8">
                  <div className="text-6xl mb-4">🎯</div>
                  <CardTitle className="font-headline text-3xl font-black mb-3">
                    How It Works
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600 max-w-2xl mx-auto">
                    Each age category has specially designed activities that match developmental stages and interests. Choose your age group and start creating!
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 rounded-2xl bg-[#FB0091]/5">
                      <div className="text-4xl mb-3">1️⃣</div>
                      <h3 className="font-bold text-lg mb-2">Find Your Stage</h3>
                      <p className="text-sm text-gray-600">Select the age category that matches you</p>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-[#00B4EE]/5">
                      <div className="text-4xl mb-3">2️⃣</div>
                      <h3 className="font-bold text-lg mb-2">Explore Activities</h3>
                      <p className="text-sm text-gray-600">Discover activities designed for your age</p>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-[#FBC51A]/5">
                      <div className="text-4xl mb-3">3️⃣</div>
                      <h3 className="font-bold text-lg mb-2">Start Creating</h3>
                      <p className="text-sm text-gray-600">Share your amazing work with us!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="text-7xl mb-6">🚀</div>
            <h2 className="text-4xl md:text-5xl font-headline font-black mb-6">
              Ready to Get <span className="text-[#FB0091]">Started?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              No matter your age, there's a perfect creative space waiting for you!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/submissions" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FB0091] to-pink-500 hover:from-pink-500 hover:to-[#FB0091] text-white shadow-xl hover:shadow-2xl transition-all text-lg px-10 py-4 rounded-full font-bold"
              >
                Submit Your Work
              </a>
              <a 
                href="/activities" 
                className="inline-flex items-center gap-2 border-2 border-black text-black hover:bg-black hover:text-white transition-all text-lg px-10 py-4 rounded-full font-bold"
              >
                Explore Activities
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}