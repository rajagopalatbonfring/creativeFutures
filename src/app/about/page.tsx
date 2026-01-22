
// 'use client';

// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Paintbrush, Mic, FlaskConical, Globe, Heart, BookOpen, Users, ShieldCheck, Sparkles, HandHeart } from 'lucide-react';
// import Image from 'next/image';
// import { PlaceHolderImages } from '@/lib/placeholder-images';

// const youngPenActivities = [
//     'Short Stories – Fiction or fantasy stories written by the child',
//     'Poems – Rhyming, free verse, or structured poems',
//     'Essays – Personal experiences, opinions, reflections',
//     'Letters – Letter to a teacher, a planet, a future self',
//     'Book Reviews – Book reflections and favourite reads',
//     'Plays and Dialogues – Short skits written by children'
// ];

// const drawDreamActivities = [
//     'Drawings and Paintings',
//     'Comics or Storyboards',
//     'Craft Projects',
//     'Model Photos'
// ];

// const singDanceShineActivities = [
//     'Singing Videos',
//     'Dancing Videos',
//     'Theatre and Acting',
//     'Instrumental Performances'
// ];

// const kidScientistsActivities = [
//     'Science Experiments – Step-by-step experiments with photos',
//     'Invention Ideas – Drawings or descriptions of new gadgets',
//     'Math Puzzles or Riddles – Created or solved by kids',
//     'DIY Projects – Engineering, robotics, or household builds'
// ];

// const colourfulCulturesActivities = [
//     'Storytelling in Native Languages – Video or audio with transcript',
//     'Festivals and Traditions – Write-ups with artwork or photos',
//     'Folk Songs or Poems – In regional languages with English meaning',
//     'Multilingual Scripts – Skits or dialogues in two or more languages'
// ];

// const coreValues = [
//     { title: "Nurturing Environment", description: "Providing a safe, supportive space for every child.", icon: <ShieldCheck className="h-8 w-8 text-primary" /> },
//     { title: "Unleashing Creativity", description: "Encouraging imagination without limits.", icon: <Sparkles className="h-8 w-8 text-accent" /> },
//     { title: "Building Community", description: "Connecting young creators from around the world.", icon: <Users className="h-8 w-8 text-secondary-foreground" /> },
//     { title: "Celebrating Diversity", description: "Honoring every unique voice and culture.", icon: <HandHeart className="h-8 w-8 text-destructive" /> },
// ];

// export default function AboutPage() {
//     const missionImage = PlaceHolderImages.find(img => img.id === 'about-mission');
//     const visionImage = PlaceHolderImages.find(img => img.id === 'about-vision');

//     return (
//         <div className="bg-background">
//             <section className="py-16 sm:py-24">
//                 <div className="container mx-auto px-4 md:px-6">
//                     <div className="text-center mb-16">
//                         <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4">
//                             About Creative Futures
//                         </h1>
//                         <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
//                             A vibrant community where young minds can explore, create, and share their unique talents with the world.
//                         </p>
//                     </div>

//                     <div className="space-y-24">
//                         {/* Our Mission */}
//                         <div className="grid md:grid-cols-2 gap-12 items-center">
//                             {missionImage && (
//                                 <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg">
//                                     <Image src={missionImage.imageUrl} alt={missionImage.description} data-ai-hint={missionImage.imageHint} fill className="object-cover" />
//                                 </div>
//                             )}
//                             <div className="space-y-4">
//                                 <h2 className="font-headline text-4xl">Our Mission</h2>
//                                 <p className="text-muted-foreground leading-relaxed">To provide a safe, nurturing, and high-quality educational environment that empowers children to explore their creativity.</p>
//                                 <p className="text-muted-foreground leading-relaxed">We believe in maximizing intellectual, physical, and emotional growth by offering a diverse range of activities that inspire young minds to express themselves, build confidence, and connect with a global community of fellow creators.</p>
//                             </div>
//                         </div>

//                         {/* Our Vision */}
//                         <div className="grid md:grid-cols-2 gap-12 items-center">
//                             <div className="space-y-4 md:order-2">
//                                 <h2 className="font-headline text-4xl">Our Vision</h2>
//                                 <p className="text-muted-foreground leading-relaxed">Our vision is to build the world's most inspiring and inclusive platform for young creators.</p>
//                                 <p className="text-muted-foreground leading-relaxed">We aim to be a digital playground where every child feels seen, heard, and celebrated. By fostering a love for learning and self-expression, we hope to help shape a future generation of innovators, storytellers, and leaders who are equipped with the creative confidence to change the world.</p>
//                             </div>
//                             {visionImage && (
//                                 <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg md:order-1">
//                                     <Image src={visionImage.imageUrl} alt={visionImage.description} data-ai-hint={visionImage.imageHint} fill className="object-cover" />
//                                 </div>
//                             )}
//                         </div>
//                     </div>

//                      {/* Core Values */}
//                     <div className="py-24">
//                         <h2 className="text-3xl font-headline font-bold text-center mb-12">Our Core Values</h2>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//                             {coreValues.map((value) => (
//                                 <div key={value.title} className="text-center p-6 rounded-lg bg-secondary/30">
//                                     <div className="inline-block p-4 bg-background rounded-full mb-4">{value.icon}</div>
//                                     <h3 className="font-semibold text-lg">{value.title}</h3>
//                                     <p className="text-sm text-muted-foreground mt-2">{value.description}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>


//                     {/* Activity Zones */}
//                     <div className="space-y-8 pt-8">
//                         <h2 className="text-3xl font-headline font-bold text-center">Activity Zones</h2>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
//                             <Card className="text-center hover:shadow-lg transition-shadow">
//                                 <CardHeader>
//                                     <BookOpen className="h-10 w-10 mx-auto text-primary" />
//                                     <CardTitle className="font-headline mt-4">The Young Pen</CardTitle>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <ul className="text-muted-foreground text-sm space-y-2 text-left">
//                                         {youngPenActivities.map(activity => <li key={activity} className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>{activity}</span></li>)}
//                                     </ul>
//                                 </CardContent>
//                             </Card>
//                             <Card className="text-center hover:shadow-lg transition-shadow">
//                                 <CardHeader>
//                                     <Paintbrush className="h-10 w-10 mx-auto text-primary" />
//                                     <CardTitle className="font-headline mt-4">Draw Your Dream</CardTitle>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <ul className="text-muted-foreground text-sm space-y-2 text-left">
//                                         {drawDreamActivities.map(activity => <li key={activity} className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>{activity}</span></li>)}
//                                     </ul>
//                                 </CardContent>
//                             </Card>
//                             <Card className="text-center hover:shadow-lg transition-shadow">
//                                 <CardHeader>
//                                     <Mic className="h-10 w-10 mx-auto text-accent" />
//                                     <CardTitle className="font-headline mt-4">Sing Dance Shine</CardTitle>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <ul className="text-muted-foreground text-sm space-y-2 text-left">
//                                         {singDanceShineActivities.map(activity => <li key={activity} className="flex items-start gap-2"><span className="text-accent mt-1">•</span><span>{activity}</span></li>)}
//                                     </ul>
//                                 </CardContent>
//                             </Card>
//                             <Card className="text-center hover:shadow-lg transition-shadow">
//                                 <CardHeader>
//                                     <FlaskConical className="h-10 w-10 mx-auto text-secondary-foreground" />
//                                     <CardTitle className="font-headline mt-4">Kid Scientists</CardTitle>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <ul className="text-muted-foreground text-sm space-y-2 text-left">
//                                         {kidScientistsActivities.map(activity => <li key={activity} className="flex items-start gap-2"><span className="text-secondary-foreground mt-1">•</span><span>{activity}</span></li>)}
//                                     </ul>
//                                 </CardContent>
//                             </Card>
//                             <Card className="text-center hover:shadow-lg transition-shadow">
//                                 <CardHeader>
//                                     <Globe className="h-10 w-10 mx-auto text-primary" />
//                                     <CardTitle className="font-headline mt-4">Our Colourful Cultures</CardTitle>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <ul className="text-muted-foreground text-sm space-y-2 text-left">
//                                         {colourfulCulturesActivities.map(activity => <li key={activity} className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>{activity}</span></li>)}
//                                     </ul>
//                                 </CardContent>
//                             </Card>
//                             <Card className="text-center hover:shadow-lg transition-shadow">
//                                 <CardHeader>
//                                     <Heart className="h-10 w-10 mx-auto text-destructive" />
//                                     <CardTitle className="font-headline mt-4">Kindness Corner</CardTitle>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <ul className="text-muted-foreground text-sm space-y-2 text-left">
//                                         <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span><span>Real-life acts of kindness done by kids</span></li>
//                                         <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span><span>Special certificate awarded (Heart of Gold)</span></li>
//                                     </ul>
//                                 </CardContent>
//                             </Card>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }





















'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ShieldCheck, Sparkles, HandHeart } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const youngPenActivities = [
    'Short Stories – Fiction or fantasy',
    'Poems – Rhyming, free verse',
    'Essays – Personal experiences',
    'Letters – To teachers, planets, future self',
    'Book Reviews – Favorite reads',
    'Plays and Dialogues – Short skits'
];

const drawDreamActivities = [
    'Drawings and Paintings',
    'Comics or Storyboards',
    'Craft Projects',
    'Model Photos'
];

const singDanceShineActivities = [
    'Singing Videos',
    'Dancing Videos',
    'Theatre and Acting',
    'Instrumental Performances'
];

const kidScientistsActivities = [
    'Science Experiments – Step-by-step',
    'Invention Ideas – Gadget designs',
    'Math Puzzles or Riddles',
    'DIY Projects – Engineering builds'
];

const colourfulCulturesActivities = [
    'Storytelling in Native Languages',
    'Festivals and Traditions write-ups',
    'Folk Songs or Poems',
    'Multilingual Scripts'
];

const coreValues = [
    { title: "Nurturing Environment", description: "Providing a safe, supportive space for every child.", icon: ShieldCheck, color: 'from-[#00B4EE] to-cyan-400' },
    { title: "Unleashing Creativity", description: "Encouraging imagination without limits.", icon: Sparkles, color: 'from-[#FB0091] to-pink-400' },
    { title: "Building Community", description: "Connecting young creators worldwide.", icon: Users, color: 'from-[#FBC51A] to-yellow-300' },
    { title: "Celebrating Diversity", description: "Honoring every unique voice.", icon: HandHeart, color: 'from-purple-500 to-purple-300' },
];

const activityZones = [
    { title: 'The Young Pen', activities: youngPenActivities, emoji: '✍️', color: 'from-[#FB0091] to-pink-400' },
    { title: 'Draw Your Dream', activities: drawDreamActivities, emoji: '🎨', color: 'from-[#FBC51A] to-yellow-300' },
    { title: 'Sing Dance Shine', activities: singDanceShineActivities, emoji: '🎭', color: 'from-[#00B4EE] to-cyan-300' },
    { title: 'Kid Scientists', activities: kidScientistsActivities, emoji: '🔬', color: 'from-purple-500 to-purple-300' },
    { title: 'Our Colourful Cultures', activities: colourfulCulturesActivities, emoji: '🌍', color: 'from-orange-500 to-orange-300' },
    { title: 'Kindness Corner', activities: ['Real-life acts of kindness', 'Heart of Gold certificate awarded'], emoji: '💝', color: 'from-red-500 to-red-300' },
];

export default function AboutPage() {
    const missionImage = PlaceHolderImages.find(img => img.id === 'about-mission');
    const visionImage = PlaceHolderImages.find(img => img.id === 'about-vision');

    const Section = ({ children, id, className }: { children: React.ReactNode, id: string, className?: string }) => {
    return (
        <section id={id} className={`relative py-16 sm:py-24 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            {children}
        </div>
        </section>
    );
    };

    return (
        <div className="bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-to-br from-[#00B4EE]/10 via-[#FB0091]/5 to-[#FBC51A]/10">
                {/* Decorative Blobs */}
                {/* <div className="absolute top-0 right-0 w-96 h-96 bg-[#FB0091]/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00B4EE]/20 rounded-full blur-3xl -translate-x-1/3"></div> */}

                {/* Cloud SVGs */}
                <svg className="absolute top-32 left-20 w-24 h-16 opacity-40" viewBox="0 0 100 50">
                    <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#FBC51A"/>
                </svg>
                <svg className="absolute top-48 right-32 w-28 h-18 opacity-30" viewBox="0 0 100 50">
                    <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#FB0091"/>
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
                                About Us
                            </span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-black leading-tight mb-6">
                            About <span className="text-[#FB0091]">Creative</span> <span className="text-[#00B4EE]">Futures</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            A vibrant community where young minds explore, create, and share their unique talents! ✨
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

            {/* Mission Section */}
            <section className="py-24 bg-white mx-auto max-w-7xl">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            {/* <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#FBC51A]/20 rounded-full blur-3xl"></div> */}
                            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-4 ring-[#00B4EE]/20">
                            <Image 
                                src="https://picsum.photos/seed/mission/600/400" 
                                alt="Kids collaborating on creative projects" 
                                fill 
                                className="object-cover" 
                                data-ai-hint="kids working together on creative projects"
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
                                To provide a safe, nurturing, and high-quality educational environment that empowers children to explore their creativity. 🌟
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                We believe in maximizing intellectual, physical, and emotional growth by offering diverse activities that inspire young minds to express themselves, build confidence, and connect with a global community of fellow creators!
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="container mx-auto px-4 pt-28">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="md:order-1"
                        >
                            <h2 className="text-4xl md:text-5xl font-headline font-black mb-6">
                                Our <span className="text-[#00B4EE]">Vision</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                Our vision is to build the world's most inspiring and inclusive platform for young creators. 🚀
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                We aim to be a digital playground where every child feels seen, heard, and celebrated. By fostering a love for learning and self-expression, we help shape future innovators, storytellers, and leaders!
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative md:order-2"
                        >
                            {/* <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#FBC51A]/20 rounded-full blur-3xl"></div> */}
                            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-4 ring-[#00B4EE]/20">
                            <Image 
                                src="https://picsum.photos/seed/mission/600/400" 
                                alt="Kids collaborating on creative projects" 
                                fill 
                                className="object-cover" 
                                data-ai-hint="kids working together on creative projects"
                            />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>




            {/* Activity Zones */}
            <section className="py-24 bg-gradient-to-br from-[#FBC51A]/10 via-[#FB0091]/5 to-[#00B4EE]/10 relative">
                <div className="absolute top-0 left-0 right-0">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32 rotate-180">
                        <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10 py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-headline font-black mb-4">
                            Activity <span className="text-[#FB0091]">Zones</span>
                        </h2>
                        <p className="text-lg text-gray-600">Discover all the creative spaces we offer 🎨</p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {activityZones.map((zone, index) => (
                            <motion.div
                                key={zone.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden group cursor-pointer hover:-translate-y-2 bg-white">
                                    {/* <div className={`h-3 bg-gradient-to-r ${zone.color}`}></div> */}
                                    <CardHeader className="text-center pt-6">
                                        <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                            {zone.emoji}
                                        </div>
                                        <CardTitle className="font-headline text-2xl font-bold mb-4">{zone.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="text-gray-600 text-sm space-y-2 text-left">
                                            {zone.activities.map(activity => (
                                                <li key={activity} className="flex items-start gap-2">
                                                    <span className="text-black mt-1 font-bold">•</span>
                                                    <span>{activity}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
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

            {/* Core Values */}
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
                            Our Core <span className="text-[#FBC51A]">Values</span>
                        </h2>
                        <p className="text-lg text-gray-600">What makes Us special 💫</p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer h-full">
                                    <CardHeader className="pb-4">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                                            <value.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <CardTitle className="font-headline text-xl font-bold mb-2">{value.title}</CardTitle>
                                        <p className="text-sm text-gray-600">{value.description}</p>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
}