
// import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Download, Rocket, Share, Sparkles } from 'lucide-react';
// import Link from 'next/link';

// const resources = [
//     {
//         title: "Kitchen Science Report",
//         description: "Try a safe kitchen science experiment (like lemon volcanoes or rainbow milk) and submit a photo + observation.",
//         action: "Download Template",
//         icon: <Sparkles className="h-6 w-6 text-primary" />,
//     },
//     {
//         title: "Memory Map",
//         description: "Kids draw or describe a favourite memory as a map.",
//         action: "Get Started",
//         icon: <Rocket className="h-6 w-6 text-accent" />,
//     },
//     {
//         title: "Write a Story from This Emoji",
//         description: "Let your imagination run wild and write a story based on a single emoji prompt.",
//         action: "See Prompts",
//         icon: <Sparkles className="h-6 w-6 text-primary" />,
//     },
//     {
//         title: "Finish the Picture Challenge",
//         description: "We provide a starting sketch, you finish the masterpiece!",
//         action: "Download Sketch",
//         icon: <Rocket className="h-6 w-6 text-accent" />,
//     }
// ]

// const steps = [
//     {
//         number: 1,
//         title: 'Choose Your Quest',
//         description: 'Browse the activities below and pick one that sparks your interest.',
//     },
//     {
//         number: 2,
//         title: 'Create Your Magic',
//         description: 'Download the template or follow the prompt to bring your idea to life.',
//     },
//     {
//         number: 3,
//         title: 'Share Your Art',
//         description: 'Once you are done, submit your creation for a chance to be featured!',
//     },
// ]

// export default function ResourcesPage() {
//   return (
//     <div className="bg-secondary/20">
//       <section className="py-16 sm:py-24">
//         <div className="container mx-auto px-4 md:px-6">
//             <div className="text-center mb-16">
//                 <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4">
//                     Your Next Creative Adventure
//                 </h1>
//                 <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
//                     Pick an activity, complete the task, and submit it for a chance to be published!
//                 </p>
//             </div>
            
//             {/* How it works section */}
//             <div className="max-w-4xl mx-auto mb-20">
//                 <h2 className="text-3xl font-bold text-center mb-8 font-headline">How It Works</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {steps.map((step) => (
//                         <div key={step.number} className="text-center">
//                             <div className="relative mb-4">
//                                 <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-extrabold text-2xl mx-auto">
//                                     {step.number}
//                                 </div>
//                             </div>
//                             <h3 className="text-xl font-bold mb-2 font-headline">{step.title}</h3>
//                             <p className="text-muted-foreground text-sm">{step.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Resources Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//                 {resources.map((resource, index) => (
//                 <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
//                     <CardHeader className="flex-row items-start gap-4">
//                         {resource.icon}
//                         <div>
//                             <CardTitle className="font-headline text-xl">{resource.title}</CardTitle>
//                             <CardDescription>{resource.description}</CardDescription>
//                         </div>
//                     </CardHeader>
//                     <CardFooter className="mt-auto">
//                     <Button className="w-full">
//                         <Download className="mr-2 h-4 w-4" />
//                         {resource.action}
//                     </Button>
//                     </CardFooter>
//                 </Card>
//                 ))}
//             </div>
          
//             <div className="mt-20 text-center bg-card p-8 rounded-2xl shadow-inner">
//                 <h2 className="text-3xl font-headline font-bold">Ready to Share Your Work?</h2>
//                 <p className="mt-2 text-muted-foreground max-w-xl mx-auto">Once you've completed an activity, submit it for a chance to be featured in our gallery!</p>
//                 <Button asChild size="lg" className="mt-6">
//                     <Link href="/submit">
//                         Submit Your Work <Share className="ml-2 h-4 w-4" />
//                     </Link>
//                 </Button>
//             </div>
//         </div>
//       </section>
//     </div>
//   );
// }




























'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Share, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const resources = [
    {
        title: "Kitchen Science Report",
        description: "Try a safe kitchen science experiment (like lemon volcanoes or rainbow milk) and submit a photo + observation.",
        action: "Download Template",
        emoji: "🔬",
        color: "from-purple-500 to-purple-300",
    },
    {
        title: "Memory Map",
        description: "Kids draw or describe a favourite memory as a map.",
        action: "Get Started",
        emoji: "🗺️",
        color: "from-[#00B4EE] to-cyan-300",
    },
    {
        title: "Write a Story from This Emoji",
        description: "Let your imagination run wild and write a story based on a single emoji prompt.",
        action: "See Prompts",
        emoji: "✍️",
        color: "from-[#FB0091] to-pink-400",
    },
    {
        title: "Finish the Picture Challenge",
        description: "We provide a starting sketch, you finish the masterpiece!",
        action: "Download Sketch",
        emoji: "🎨",
        color: "from-[#FBC51A] to-yellow-300",
    }
]

const steps = [
    {
        number: '1',
        title: 'Pick Your Age',
        description: 'Select Your Category and Explore Your Eligible Activities.',
        emoji: '🎯',
        color: 'bg-[#FB0091]'
    },
    {
        number: '2',
        title: 'Create Your Magic',
        description: 'Download the template or follow the prompt to bring your idea to life.',
        emoji: '✨',
        color: 'bg-[#00B4EE]'
    },
    {
        number: '3',
        title: 'Share Your Art',
        description: 'Once you are done, submit your creation for a chance to be featured!',
        emoji: '🚀',
        color: 'bg-[#FBC51A]'
    },
]

export default function ResourcesPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-to-br from-[#00B4EE]/10 via-[#FB0091]/5 to-[#FBC51A]/10">
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
                Resource Hub
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-black leading-tight mb-6">
              Your Next <span className="text-[#FB0091]">Creative</span> <span className="text-[#00B4EE]">Adventure</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pick an activity, complete the task, and submit it for a chance to be published! 🎨
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

      {/* How It Works Section */}
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
              How It <span className="text-[#FBC51A]">Works</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three simple steps to start your creative journey! 🌟
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer h-full bg-white overflow-hidden">
                  {/* <div className="absolute top-0 right-0 w-20 h-20 bg-[#FBC51A]/20 rounded-bl-full"></div> */}
                  <CardHeader className="pt-8">
                    
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${step.color} text-white rounded-full text-xl font-black mb-4 shadow-lg`}>
                      {step.number}
                    </div>
                    <div className="text-6xl mb-4">{step.emoji}</div>
                    <CardTitle className="font-headline text-2xl font-bold mb-2">{step.title}</CardTitle>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 bg-gradient-to-br from-[#00B4EE]/5 to-[#FB0091]/5 relative">
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32 rotate-180">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>

        {/* Decorative Blobs */}
        {/* <div className="absolute top-20 right-0 w-96 h-96 bg-[#FB0091]/10 rounded-full blur-3xl translate-x-1/3"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#00B4EE]/10 rounded-full blur-3xl -translate-x-1/3"></div> */}

        <div className="container mx-auto px-4 relative z-10 py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-headline font-black mb-4">
              Choose Your <span className="text-[#FB0091]">Activity</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pick from our creative challenges and start making magic! ✨
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="flex flex-col h-full hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden group cursor-pointer hover:-translate-y-2 bg-white">
                
                  <CardHeader className="flex-row items-start gap-4 pt-8">
                    <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                      {resource.emoji}
                    </div>
                    <div>
                      <CardTitle className="font-headline text-2xl font-bold mb-2">{resource.title}</CardTitle>
                      <CardDescription className="text-base">{resource.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardFooter className="mt-auto pt-6">
                    <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-full font-bold text-base py-6 shadow-lg hover:shadow-xl transition-all">
                      <Download className="mr-2 h-5 w-5" />
                      {resource.action}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
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
            className="max-w-4xl mx-auto"
          >
            <div className="text-center relative">

              <CardContent className="pt-16 pb-16 relative z-10">
                <div className="text-7xl mb-6">🎉</div>
                <h2 className="text-4xl md:text-5xl font-headline font-black mb-4">
                  Ready to Share Your Work?
                </h2>
                <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-2xl mx-auto">
                  Once you've completed an activity, submit it for a chance to be featured in our gallery!
                </p>
                <Button asChild size="lg" className="bg-white text-[#FB0091] hover:bg-gray-100 shadow-2xl transition-all text-xl px-10 py-7 rounded-full font-bold">
                  <Link href="/submissions">
                    Submit Your Work <ArrowRight className="ml-2 w-6 h-6" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}