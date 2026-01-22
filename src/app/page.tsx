// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Upload, Star, Sparkles } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';

// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// import { PlaceHolderImages } from '@/lib/placeholder-images';

// export default function Home() {
//   const heroImage = PlaceHolderImages.find(img => img.id === 'hero');
  
//   const Section = ({ children, id, className }: { children: React.ReactNode, id: string, className?: string }) => {
//     return (
//       <section id={id} className={`relative py-16 sm:py-24 ${className}`}>
//         <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
//           {children}
//         </div>
//       </section>
//     );
//   };

//   const SectionHeader = ({ title, subtitle, className = '' }: { title: string, subtitle: string, className?: string }) => (
//     <div className={`text-center mb-16 ${className}`}>
//       <motion.h2 
//         className="text-4xl md:text-5xl font-headline font-bold mb-4"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 0.5 }}
//       >
//         {title}
//       </motion.h2>
//       <motion.p 
//         className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 0.5, delay: 0.1 }}
//       >
//         {subtitle}
//       </motion.p>
//     </div>
//   );

//   const activityZones = [
//     { title: 'The Young Pen', color: 'from-[#FB0091] to-pink-400', emoji: '✍️', description: 'Stories, poems & essays' },
//     { title: 'Draw Your Dream', color: 'from-[#FBC51A] to-yellow-300', emoji: '🎨', description: 'Art, drawings & crafts' },
//     { title: 'Sing Dance Shine', color: 'from-[#00B4EE] to-cyan-300', emoji: '🎭', description: 'Performing arts' },
//     { title: 'Kid Scientists', color: 'from-purple-500 to-purple-300', emoji: '🔬', description: 'STEM & innovation' },
//     { title: 'Colourful Cultures', color: 'from-orange-500 to-orange-300', emoji: '🌍', description: 'Language & traditions' },
//     { title: 'Kindness Corner', color: 'from-red-500 to-red-300', emoji: '💝', description: 'Acts of kindness' },
//   ];

//   const ageGroups = [
//     { age: '2-4', stage: 'Little Explorers', color: 'bg-yellow-200' },
//     { age: '5-6', stage: 'Creative Starters', color: 'bg-green-200' },
//     { age: '7-8', stage: 'Junior Thinkers', color: 'bg-blue-200' },
//     { age: '9-10', stage: 'Curious Minds', color: 'bg-purple-200' },
//     { age: '11-12', stage: 'Young Creators', color: 'bg-pink-200' },
//     { age: '13-14', stage: 'Growing Scholars', color: 'bg-orange-200' },
//     { age: '15-16', stage: 'Teen Journalists', color: 'bg-red-200' },
//   ];

  // const submissionSteps = [
  //   { number: '1', title: 'Pick Your Age', description: 'Select Your Category and Explore Your Eligible Activities', emoji: '🎯' },
  //   { number: '2', title: 'Create & Upload', description: 'Share your amazing work with us', emoji: '📤' },
  //   { number: '3', title: 'Get Featured', description: 'See your creation in our gallery!', emoji: '⭐' },
  // ];

//   return (
//     <div className="bg-white overflow-hidden">
//       {/* Hero Section with Blob Background */}
//       <section 
//         id="home"   
//         className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-br from-[#00B4EE]/10 via-[#FB0091]/5 to-[#FBC51A]/10"
//         // style={{ backgroundImage: `url("/homeimg1.jpeg")`, backgroundRepeat:"repeat", backgroundSize:"contain", backgroundPosition:"center" }}
//       >
//         {/* Cloud SVGs */}
//         <svg className="absolute top-20 left-10 w-24 h-16 opacity-40" viewBox="0 0 100 50">
//           <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#00B4EE"/>
//         </svg>
//         <svg className="absolute top-40 right-20 w-32 h-20 opacity-30" viewBox="0 0 100 50">
//           <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#FBC51A"/>
//         </svg>

//         <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2, duration: 0.7 }}
//           >
//             <div className="inline-flex items-center gap-2 bg-white shadow-lg px-5 py-2 rounded-full text-sm font-bold mb-6 border-2 border-[#FB0091]/20">
//               <Sparkles className="w-4 h-4 text-[#FB0091]" />
//               <span className="bg-gradient-to-r from-[#FB0091] to-[#00B4EE] bg-clip-text text-transparent">
//                 Creative Futures
//               </span>
//             </div>
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-black leading-tight mb-6">
//               Where Young <span className="text-[#FB0091]">Creativity</span> Takes <span className="text-[#00B4EE]">Flight</span>
//             </h1>
//             <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//               A magical space for kids to explore, create, and share their stories, art, and brilliant ideas! 🚀
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <Button asChild size="lg" className="bg-gradient-to-r from-[#FB0091] to-pink-500 hover:from-pink-500 hover:to-[#FB0091] text-white shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6 rounded-full">
//                 <Link href="/participant-category">
//                   Start Creating <ArrowRight className="ml-2" />
//                 </Link>
//               </Button>
//               <Button asChild size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white transition-all text-lg px-8 py-6 rounded-full">
//                 <Link href="/about">
//                   Learn More
//                 </Link>
//               </Button>
//             </div>
//           </motion.div>
//           <motion.div
//             className="hidden md:block"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.4, duration: 0.7 }}
//           >
//             {heroImage && (
//               <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white ring-4 ring-[#FBC51A]/30">
//                 <Image
//                   src="/homeimg.jpg"
//                   alt={heroImage.description}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             )}
//           </motion.div>
//         </div>

//         {/* Wave Divider */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
//             <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
//           </svg>
//         </div>
//       </section>

//       {/* Mission Section with Blob Background */}
//       <Section id="mission" className="bg-white">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="relative"
//           >
//             {/* <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#FBC51A]/20 rounded-full blur-3xl"></div> */}
//             <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-4 ring-[#00B4EE]/20">
//               <Image 
//                 src="https://picsum.photos/seed/mission/600/400" 
//                 alt="Kids collaborating on creative projects" 
//                 fill 
//                 className="object-cover" 
//                 data-ai-hint="kids working together on creative projects"
//               />
//             </div>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-4xl md:text-5xl font-headline font-black mb-6">
//               Our <span className="text-[#FB0091]">Mission</span>
//             </h2>
//             <p className="text-gray-600 leading-relaxed text-lg mb-6">
//               Creative Futures is a vibrant community where young minds explore their creativity, develop their talents, and share their unique perspectives with the world. 🌟
//             </p>
//             <p className="text-gray-600 leading-relaxed text-lg">
//               We believe every child has a story to tell, a dream to draw, and ideas that can change the world!
//             </p>
//           </motion.div>
//         </div>
//       </Section>

//       {/* Activity Zones with Wave Top */}
//       <section id="activities" className="relative pt-32 pb-24 mx-auto bg-gradient-to-br from-[#00B4EE]/5 to-[#FB0091]/5 relative">
//         <div className="absolute top-0 left-0 right-0">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32 rotate-180">
//             <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
//           </svg>
//         </div>
        
//         <div className="py-16 max-w-7xl mx-auto">
//           <SectionHeader 
//             title="Explore Activity Zones"
//             subtitle="Find the perfect zone for your creativity and talents! 🎨"
//           />
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {activityZones.map((zone, index) => (
//               <motion.div
//                 key={zone.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden group cursor-pointer hover:-translate-y-2">
//                   {/* <div className={`h-3 bg-gradient-to-r ${zone.color}`}></div> */}
//                   <CardHeader className="text-center pt-8">
//                     <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
//                       {zone.emoji}
//                     </div>
//                     <CardTitle className="font-headline text-2xl font-bold mb-2">{zone.title}</CardTitle>
//                     <CardDescription className="text-base text-gray-600">{zone.description}</CardDescription>
//                   </CardHeader>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Wave Divider Bottom */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
//             <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
//           </svg>
//         </div>
//       </section>

//       {/* Age Groups */}
//       <Section id="age-groups" className="bg-white">
//         <SectionHeader 
//           title="Find Your Stage"
//           subtitle="Age-appropriate activities designed for every young creator 🌈"
//         />
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
//           {ageGroups.map((group, index) => (
//             <motion.div
//               key={group.age}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.05 }}
//             >
//               <Card className={`${group.color} border-0 hover:shadow-xl transition-all text-center h-full hover:-translate-y-1 cursor-pointer`}>
//                 <CardContent className="pt-6 pb-6">
//                   <div className="text-3xl font-black mb-2">{group.age}</div>
//                   <div className="text-sm font-bold text-gray-700">{group.stage}</div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </Section>

//       {/* Submission Process with Blob Background */}
//       <section id="submit" className="relative bg-gradient-to-br from-[#FBC51A]/10 via-[#FB0091]/5 to-[#00B4EE]/10 mx-auto">

//         <div className="absolute top-0 left-0 right-0">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32 rotate-180">
//             <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
//           </svg>
//         </div>

//         <div className="py-32 max-w-7xl mx-auto">
//           <SectionHeader 
//             title="Share Your Work in 3 Easy Steps!"
//             subtitle="Show the world what you've created 🚀"
//           />
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
//             {submissionSteps.map((step, index) => (
//               <motion.div
//                 key={step.number}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.15 }}
//               >
//                 <Card className="relative overflow-hidden h-full bg-white hover:shadow-2xl transition-all border-0 hover:-translate-y-2 cursor-pointer">
//                   <div className="absolute top-0 right-0 w-20 h-20 bg-[#FBC51A]/20 rounded-bl-full"></div>
//                   <CardHeader className="pt-8">
//                     <div className="text-6xl mb-8">{step.emoji}</div>
//                     <div className="inline-flex items-center justify-center w-10 h-10 bg-black text-white rounded-full text-xl font-black mb-4">
//                       {step.number}
//                     </div>
//                     <CardTitle className="font-headline text-2xl font-bold mb-2">{step.title}</CardTitle>
//                     <CardDescription className="text-base">{step.description}</CardDescription>
//                   </CardHeader>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//           <div className="text-center">
//             <Button asChild size="lg" className="bg-gradient-to-r from-[#00B4EE] to-cyan-400 hover:from-cyan-400 hover:to-[#00B4EE] text-white shadow-xl hover:shadow-2xl transition-all text-xl px-10 py-7 rounded-full font-bold">
//               <Link href="/submissions">
//                 Submit Your Creation <Upload className="ml-2 w-6 h-6" />
//               </Link>
//             </Button>
//           </div>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
//             <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="#ffffff"/>
//           </svg>
//         </div>
//       </section>

//       {/* Call to Action with Blob Background */}
//       <Section id="cta" className="bg-white relative">

//         {/* Stars */}
//         <Star className="absolute top-10 left-10 w-8 h-8 text-[#FBC51A] animate-pulse" />
//         <Star className="absolute top-20 right-20 w-6 h-6 text-white/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
//         <Star className="absolute bottom-20 left-1/3 w-10 h-10 text-[#FBC51A] animate-pulse" style={{ animationDelay: '1s' }} />

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto relative z-10"
//         >
//           <div className="text-7xl mb-6">✨</div>
//           <h2 className="text-4xl md:text-5xl font-headline font-black mb-6">Ready to Share Your <span className="text-[#FB0091]">Creativity?</span></h2>
//           <p className="text-xl md:text-2xl mb-10 opacity-95">
//             Join thousands of young creators sharing their amazing talents!
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <a href="/participant-category" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FB0091] to-pink-500 hover:from-pink-500 hover:to-[#FB0091] text-white shadow-xl hover:shadow-2xl transition-all text-lg px-10 py-4 rounded-full font-bold">
//                 Get Started Now <ArrowRight className="ml-2 w-6 h-6" />
//             </a>
//             <a href="/gallery" className="inline-flex items-center gap-2 border-2 border-black text-black hover:bg-black hover:text-white transition-all text-lg px-10 py-4 rounded-full font-bold">
//                 View Gallery
//             </a>
//           </div>
//         </motion.div>
//       </Section>
//     </div>
//   );
// }















'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Upload, Star, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { allActivities, coreActivities, specialChallenges, ageGroupData } from '@/lib/constants';

const submissionSteps = [
  { number: '1', title: 'Pick Your Age', description: 'Select Your Category and Explore Your Eligible Activities', emoji: '🎯' },
  { number: '2', title: 'Create & Upload', description: 'Share your amazing work with us', emoji: '📤' },
  { number: '3', title: 'Get Featured', description: 'See your creation in our gallery!', emoji: '⭐' },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero');

  const Section = ({ children, id, className }: { children: React.ReactNode, id: string, className?: string }) => {
    return (
      <section id={id} className={`relative py-16 sm:py-24 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {children}
        </div>
      </section>
    );
  };

  const SectionHeader = ({ title, subtitle, className = '' }: { title: string, subtitle: string, className?: string }) => (
    <div className={`text-center mb-16 ${className}`}>
      <motion.h2 
        className="text-4xl md:text-5xl font-headline font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.p 
        className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {subtitle}
      </motion.p>
    </div>
  );

  // Dynamically derive activity zones from constants (no hardcoding!)
  const activityZones = [
    {
      title: 'Story Telling & Writing',
      color: 'from-[#FB0091] to-pink-400',
      emoji: '✍️',
      description: 'Create stories, reviews, and express your ideas',
      count: coreActivities.filter(a => a.title.includes('Story') || a.title.includes('Book') || a.title.includes('Idea')).length,
    },
    {
      title: 'Art & Crafts',
      color: 'from-[#FBC51A] to-yellow-300',
      emoji: '🎨',
      description: 'Drawing, crafts, models & visual creations',
      count: coreActivities.filter(a => a.title.includes('Drawing') || a.title.includes('Craft') || a.title.includes('Model')).length,
    },
    {
      title: 'Performing Arts',
      color: 'from-[#00B4EE] to-cyan-300',
      emoji: '🎭',
      description: 'Sing, dance & perform with confidence',
      count: coreActivities.filter(a => a.title.includes('Singing') || a.title.includes('Dancing')).length,
    },
    {
      title: 'STEM & Puzzles',
      color: 'from-purple-500 to-purple-300',
      emoji: '🔬',
      description: 'Science experiments, math puzzles & innovation',
      count: coreActivities.filter(a => a.title.includes('Science') || a.title.includes('Math')).length,
    },
  ];

  // Special challenges highlight
  const currentSpecials = specialChallenges.filter(a => a.isCurrent);

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section 
        id="home"   
        className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-br from-[#00B4EE]/10 via-[#FB0091]/5 to-[#FBC51A]/10"
      >
        {/* Clouds */}
        <svg className="absolute top-20 left-10 w-24 h-16 opacity-40" viewBox="0 0 100 50">
          <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#00B4EE"/>
        </svg>
        <svg className="absolute top-40 right-20 w-32 h-20 opacity-30" viewBox="0 0 100 50">
          <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#FBC51A"/>
        </svg>

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white shadow-lg px-5 py-2 rounded-full text-sm font-bold mb-6 border-2 border-[#FB0091]/20">
              <Sparkles className="w-4 h-4 text-[#FB0091]" />
              <span className="bg-gradient-to-r from-[#FB0091] to-[#00B4EE] bg-clip-text text-transparent">
                A Journal By and For Kids
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-black leading-tight mb-6">
              Where Young <span className="text-[#FB0091]">Creativity</span> Takes <span className="text-[#00B4EE]">Flight</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A magical space for kids to explore, create, and share their stories, art, and brilliant ideas! 🚀
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#FB0091] to-pink-500 hover:from-pink-500 hover:to-[#FB0091] text-white shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6 rounded-full">
                <Link href="/participant-category">
                  Start Creating <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white transition-all text-lg px-8 py-6 rounded-full">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {heroImage && (
              <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white ring-4 ring-[#FBC51A]/30">
                <Image
                  src="/homeimg.jpg"
                  alt={heroImage.description}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <Section id="mission" className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-4 ring-[#00B4EE]/20">
              <Image 
                src="https://picsum.photos/seed/mission/600/400" 
                alt="Kids collaborating on creative projects" 
                fill 
                className="object-cover" 
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-headline font-black mb-6">
              Our <span className="text-[#FB0091]">Mission</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              A Journal By and For Kids is a vibrant community where young minds explore their creativity, develop their talents, and share their unique perspectives with the world. 🌟
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We believe every child has a story to tell, a dream to draw, and ideas that can change the world!
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Activity Zones */}
      <section id="activities" className="relative pt-32 pb-24 bg-gradient-to-br from-[#00B4EE]/5 to-[#FB0091]/5">
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32 rotate-180">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>

        <div className="py-32 max-w-7xl mx-auto">
          <SectionHeader 
            title="Explore Activity Zones"
            subtitle="Find the perfect creative space for your talents!"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {activityZones.map((zone, index) => (
              <motion.div
                key={zone.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden group cursor-pointer hover:-translate-y-2">
                  <CardHeader className="text-center pt-8">
                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {zone.emoji}
                    </div>
                    <CardTitle className="font-headline text-2xl font-bold mb-2">{zone.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600">{zone.description}</CardDescription>
                    <p className="text-sm text-muted-foreground mt-2">
                      {zone.count} activities
                    </p>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Special Challenges Highlight */}
          {/* {currentSpecials.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <h3 className="text-3xl font-headline font-black mb-6">
                Current <span className="text-[#FBC51A]">Special Challenges</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentSpecials.map((challenge) => (
                  <Card key={challenge.id} className="border-2 border-[#FBC51A]/30 hover:border-[#FBC51A] transition-all">
                    <CardHeader className="text-center">
                      <Badge className="mb-2 bg-[#FBC51A] text-black">Weekly Challenge</Badge>
                      <CardTitle className="text-xl">{challenge.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{challenge.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )} */}

          <div className="text-center">
              <Button asChild size="lg" className="mt-10 bg-gradient-to-r from-[#FB0091] to-pink-500 hover:from-pink-500 hover:to-[#FB0091] text-white shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6 rounded-full">
                <Link href="/activities">
                  View All <ArrowRight className="ml-2" />
                </Link>
              </Button>
          </div>

        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Age Groups */}
      <Section id="age-groups" className="bg-white">
        <SectionHeader 
          title="Find Your Stage"
          subtitle="Age-appropriate activities designed for every young creator 🌈"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {ageGroupData.map((group, index) => (
            <motion.div
              key={group.age}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link href={`/participant-category/${group.age}`}>
                <Card className={`${group.color} border-0 hover:shadow-xl transition-all text-center h-full hover:-translate-y-1 cursor-pointer`}>
                  <CardContent className="pt-6 pb-6">
                    <div className="text-3xl font-black mb-2">{group.age}</div>
                    <div className="text-sm font-bold text-gray-700">{group.stage}</div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

          <div className="text-center">
            <a href="/participant-category" className="mt-10 inline-flex items-center gap-2 border-2 border-black text-black hover:bg-black hover:text-white transition-all text-lg px-10 py-4 rounded-full font-bold">
              Find Your Category
            </a>
          </div>

      </Section>

      {/* Submission Process */}
      <section id="submit" className="relative bg-gradient-to-br from-[#FBC51A]/10 via-[#FB0091]/5 to-[#00B4EE]/10">
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32 rotate-180">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>

        <div className="py-32 max-w-7xl mx-auto">
          <SectionHeader 
            title="Share Your Work in 3 Easy Steps!"
            subtitle="Show the world what you've created 🚀"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {submissionSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="relative overflow-hidden h-full bg-white hover:shadow-2xl transition-all border-0 hover:-translate-y-2 cursor-pointer">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#FBC51A]/20 rounded-bl-full"></div>
                  <CardHeader className="pt-8">
                    <div className="text-6xl mb-8">{step.emoji}</div>
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-black text-white rounded-full text-xl font-black mb-4">
                      {step.number}
                    </div>
                    <CardTitle className="font-headline text-2xl font-bold mb-2">{step.title}</CardTitle>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-[#00B4EE] to-cyan-400 hover:from-cyan-400 hover:to-[#00B4EE] text-white shadow-xl hover:shadow-2xl transition-all text-xl px-10 py-7 rounded-full font-bold">
              <Link href="/submit">
                Submit Your Creation <Upload className="ml-2 w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="#ffffff"/>
          </svg>
        </div>
      </section>

      {/* Call to Action */}
      <Section id="cta" className="bg-white relative">
        <Star className="absolute top-10 left-10 w-8 h-8 text-[#FBC51A] animate-pulse" />
        <Star className="absolute top-20 right-20 w-6 h-6 text-white/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <Star className="absolute bottom-20 left-1/3 w-10 h-10 text-[#FBC51A] animate-pulse" style={{ animationDelay: '1s' }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto relative z-10"
        >
          <div className="text-7xl mb-6">✨</div>
          <h2 className="text-4xl md:text-5xl font-headline font-black mb-6">Ready to Share Your <span className="text-[#FB0091]">Creativity?</span></h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95">
            Join thousands of young creators sharing their amazing talents!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/participant-category" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FB0091] to-pink-500 hover:from-pink-500 hover:to-[#FB0091] text-white shadow-xl hover:shadow-2xl transition-all text-lg px-10 py-4 rounded-full font-bold">
              Get Started Now <ArrowRight className="ml-2 w-6 h-6" />
            </a>
            <a href="/gallery" className="inline-flex items-center gap-2 border-2 border-black text-black hover:bg-black hover:text-white transition-all text-lg px-10 py-4 rounded-full font-bold">
              View Gallery
            </a>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}