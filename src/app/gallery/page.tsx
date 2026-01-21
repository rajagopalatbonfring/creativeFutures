



// 'use client';

// import { useState, useMemo } from 'react';
// import { motion } from 'framer-motion';
// import { SubmissionCard } from '@/components/submission-card';
// import { featuredSubmissions } from '@/lib/constants';
// import { activities } from '@/lib/constants'; // ← your activities array
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Search, Sparkles, PlayCircle, Mic, BookOpen, Image as ImageIcon } from 'lucide-react';

// type MediaFilter = 'all' | 'image' | 'video' | 'audio' | 'text';

// // ────────────────────────────────────────────────
// //  1. Media Type Buttons
// // ────────────────────────────────────────────────
// const mediaFilterButtons: { type: MediaFilter; label: string; emoji: string }[] = [
//   { type: 'all',    label: 'All Creations', emoji: '⭐' },
//   { type: 'image',  label: 'Images',        emoji: '🎨' },
//   { type: 'video',  label: 'Videos',        emoji: '🎬' },
//   { type: 'audio',  label: 'Audio',         emoji: '🎵' },
//   { type: 'text',   label: 'Stories',       emoji: '📖' },
// ];

// // ────────────────────────────────────────────────
// //  2. Category (middle level)
// // ────────────────────────────────────────────────
// const categoryOptions = [
//   { id: 'all',                 label: 'All Categories' },
//   { id: 'young-pen',           label: 'The Young Pen' },
//   { id: 'draw-dream',          label: 'Draw Your Dream' },
//   { id: 'sing-dance-shine',    label: 'Sing Dance Shine' },
//   { id: 'kid-scientists',      label: 'Kid Scientists' },
//   { id: 'colourful-cultures',  label: 'Our Colourful Cultures' },
//   { id: 'kindness-corner',     label: 'Kindness Corner' },
// ];

// // ────────────────────────────────────────────────
// //  3. Activity (bottom level) – dynamically shown
// // ────────────────────────────────────────────────
// function getActivityOptions(selectedCategory: string) {
//   if (selectedCategory === 'all') {
//     // Show all unique activities
//     return activities.map(a => ({
//       id: a.id,
//       label: a.title,
//     }));
//   }

//   // Filter by category
//   return activities
//     .filter(a => a.category === selectedCategory)
//     .map(a => ({
//       id: a.id,
//       label: a.title,
//     }));
// }

// export default function GalleryPage() {
//   const [mediaFilter,     setMediaFilter]     = useState<MediaFilter>('all');
//   const [categoryFilter,  setCategoryFilter]  = useState('all');
//   const [activityFilter,  setActivityFilter]  = useState('all'); // 'all' or activity.id
//   const [search,          setSearch]          = useState('');

//   // Reset lower filters when higher level changes
//   const handleMediaChange = (value: MediaFilter) => {
//     setMediaFilter(value);
//     setCategoryFilter('all');
//     setActivityFilter('all');
//   };

//   const handleCategoryChange = (value: string) => {
//     setCategoryFilter(value);
//     setActivityFilter('all'); // reset activity when category changes
//   };

//   const filtered = useMemo(() => {
//     let result = [...featuredSubmissions];

//     // 1. Media type
//     if (mediaFilter !== 'all') {
//       result = result.filter(s => s.mediaType === mediaFilter);
//     }

//     // 2. Category
//     if (categoryFilter !== 'all') {
//       result = result.filter(s => {
//         const act = activities.find(a => a.id === s.activityId);
//         return act?.category === categoryFilter;
//       });
//     }

//     // 3. Specific Activity
//     if (activityFilter !== 'all') {
//       result = result.filter(s => s.activityId === activityFilter);
//     }

//     // 4. Search (title / author / description)
//     if (search.trim()) {
//       const term = search.toLowerCase().trim();
//       result = result.filter(s =>
//         s.title.toLowerCase().includes(term) ||
//         s.author.toLowerCase().includes(term) ||
//         (s.description || '').toLowerCase().includes(term)
//       );
//     }

//     // Default sort: newest first (you can still add sort dropdown later if needed)
//     result.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

//     return result;
//   }, [mediaFilter, categoryFilter, activityFilter, search]);

//   const currentActivityOptions = getActivityOptions(categoryFilter);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
//       <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FBC51A]/10 via-[#00B4EE]/5 to-[#FB0091]/10">

//         {/* Cloud SVGs */}
//         <svg className="absolute top-24 left-16 w-24 h-16 opacity-40" viewBox="0 0 100 50">
//           <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#FBC51A"/>
//         </svg>
//         <svg className="absolute top-48 right-24 w-28 h-18 opacity-30" viewBox="0 0 100 50">
//           <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#00B4EE"/>
//         </svg>

//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             className="text-center"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="inline-flex items-center gap-2 bg-white shadow-lg px-5 py-2 rounded-full text-sm font-bold mb-6 border-2 border-[#FBC51A]/20">
//               <Sparkles className="w-4 h-4 text-[#FBC51A]" />
//               <span className="bg-gradient-to-r from-[#FBC51A] to-[#FB0091] bg-clip-text text-transparent">
//                 Gallery
//               </span>
//             </div>
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-black leading-tight mb-6">
//               Hall of <span className="text-[#FBC51A]">Fame</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               See what other young artists, writers, and creators are making! 🌟
//             </p>
//           </motion.div>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
//             <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
//           </svg>
//         </div>
//       </section>



//       <section className="py-12 md:py-16">
//         <div className="container mx-auto px-5 md:px-6 max-w-7xl">
//           {/* Search bar */}
//           <div className="max-w-2xl mx-auto mb-10">
//             <div className="relative">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
//               <Input
//                 placeholder="Search by title, artist name, or description..."
//                 value={search}
//                 onChange={e => setSearch(e.target.value)}
//                 className="pl-12 py-6 text-base rounded-full border-2 border-gray-200 focus:border-[#FBC51A] focus:ring-[#FBC51A]/30 shadow-sm"
//               />
//             </div>
//           </div>

//           {/* Level 1 – Media Type */}
//           <div className="flex flex-wrap justify-center gap-3 mb-6">
//             {mediaFilterButtons.map(btn => (
//               <Button
//                 key={btn.type}
//                 variant={mediaFilter === btn.type ? "default" : "outline"}
//                 onClick={() => handleMediaChange(btn.type)}
//                 className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
//                   mediaFilter === btn.type
//                     ? 'bg-black text-white shadow-md'
//                     : 'hover:bg-gray-100'
//                 }`}
//               >
//                 <span className="mr-1.5 text-lg">{btn.emoji}</span>
//                 {btn.label}
//               </Button>
//             ))}
//           </div>

//           {/* Level 2 – Category */}
//           <div className="flex flex-wrap justify-center gap-3 mb-6">
//             {categoryOptions.map(cat => (
//               <Button
//                 key={cat.id}
//                 variant={categoryFilter === cat.id ? "default" : "outline"}
//                 onClick={() => handleCategoryChange(cat.id)}
//                 className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
//                   categoryFilter === cat.id
//                     ? 'bg-gradient-to-r from-[#FB0091] to-pink-500 text-white shadow-md'
//                     : 'hover:bg-gray-100'
//                 }`}
//               >
//                 {cat.label}
//               </Button>
//             ))}
//           </div>

//           {/* Level 3 – Specific Activity (only shown when relevant) */}
//           {currentActivityOptions.length > 0 && (
//             <div className="flex justify-center mb-10">
//               <Select
//                 value={activityFilter}
//                 onValueChange={setActivityFilter}
//               >
//                 <SelectTrigger className="w-full max-w-md rounded-full border-2">
//                   <SelectValue placeholder="Select specific activity..." />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All activities in this category</SelectItem>
//                   {currentActivityOptions.map(act => (
//                     <SelectItem key={act.id} value={act.id}>
//                       {act.label}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//           )}

//           {/* Results Grid */}
//           {filtered.length > 0 ? (
//             <motion.div
//               className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//               initial="hidden"
//               animate="show"
//               variants={{ show: { transition: { staggerChildren: 0.07 } } }}
//             >
//               {filtered.map(submission => (
//                 <motion.div
//                   key={submission.id}
//                   variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
//                 >
//                   <SubmissionCard submission={submission} />
//                 </motion.div>
//               ))}
//             </motion.div>
//           ) : (
//             <div className="text-center py-20">
//               <div className="text-6xl mb-6">🔍😔</div>
//               <h3 className="text-2xl font-bold mb-3">No matching creations</h3>
//               <p className="text-gray-600 max-w-md mx-auto">
//                 Try changing the filters or search term.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

      
//       {/* CTA Section */}
//       <section className="py-24 bg-gradient-to-br from-[#FBC51A]/10 via-[#FB0091]/5 to-[#00B4EE]/10 relative">
//         <div className="absolute top-0 left-0 right-0">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32 rotate-180">
//             <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
//           </svg>
//         </div>

//         <div className="absolute top-20 right-0 w-96 h-96 bg-[#FB0091]/10 rounded-full blur-3xl translate-x-1/3"></div>
//         <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#00B4EE]/10 rounded-full blur-3xl -translate-x-1/3"></div>

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


















































// 'use client';

// import { useState, useMemo } from 'react';
// import { motion } from 'framer-motion';
// import { SubmissionCard } from '@/components/submission-card';
// import { featuredSubmissions, allActivities,specialChallenges } from '@/lib/constants';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Search, Sparkles, PlayCircle, Mic, BookOpen, Image as ImageIcon } from 'lucide-react';

// type MediaFilter = 'all' | 'image' | 'video' | 'audio' | 'text';

// const mediaFilterButtons: { type: MediaFilter; label: string; emoji: string }[] = [
//   { type: 'all',    label: 'All Creations', emoji: '⭐' },
//   { type: 'image',  label: 'Images',        emoji: '🎨' },
//   { type: 'video',  label: 'Videos',        emoji: '🎬' },
//   { type: 'audio',  label: 'Audio',         emoji: '🎵' },
//   { type: 'text',   label: 'Stories',       emoji: '📖' },
// ];

// const categoryOptions = [
//   { id: 'all',                 label: 'All Categories' },
//   { id: 'young-pen',           label: 'The Young Pen' },
//   { id: 'draw-dream',          label: 'Draw Your Dream' },
//   { id: 'sing-dance-shine',    label: 'Sing Dance Shine' },
//   { id: 'kid-scientists',      label: 'Kid Scientists' },
//   { id: 'colourful-cultures',  label: 'Our Colourful Cultures' },
//   { id: 'kindness-corner',     label: 'Kindness Corner' },
// ];

// function getActivityOptions(selectedCategory: string) {
//   const filtered = selectedCategory === 'all'
//     ? allActivities
//     : allActivities.filter(a => a.category === selectedCategory);

//   return filtered.map(a => ({
//     id: a.id,
//     label: a.isSpecialChallenge ? `${a.title} (Weekly)` : a.title,
//   }));
// }

// export default function GalleryPage() {
//   const [mediaFilter, setMediaFilter] = useState<MediaFilter>('all');
//   const [categoryFilter, setCategoryFilter] = useState('all');
//   const [activityFilter, setActivityFilter] = useState('all');
//   const [search, setSearch] = useState('');

//   const handleMediaChange = (value: MediaFilter) => {
//     setMediaFilter(value);
//     setCategoryFilter('all');
//     setActivityFilter('all');
//   };

//   const handleCategoryChange = (value: string) => {
//     setCategoryFilter(value);
//     setActivityFilter('all');
//   };

//   const filtered = useMemo(() => {
//     let result = [...featuredSubmissions];

//     if (mediaFilter !== 'all') {
//       result = result.filter(s => s.mediaType === mediaFilter);
//     }

//     if (categoryFilter !== 'all') {
//       result = result.filter(s => {
//         const act = allActivities.find(a => a.id === s.activityId);
//         return act?.category === categoryFilter;
//       });
//     }

//     if (activityFilter !== 'all') {
//       result = result.filter(s => s.activityId === activityFilter);
//     }

//     if (search.trim()) {
//       const term = search.toLowerCase().trim();
//       result = result.filter(s =>
//         s.title.toLowerCase().includes(term) ||
//         s.author.toLowerCase().includes(term) ||
//         (s.description || '').toLowerCase().includes(term)
//       );
//     }

//     // Newest first
//     result.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

//     return result;
//   }, [mediaFilter, categoryFilter, activityFilter, search]);

//   const currentActivityOptions = getActivityOptions(categoryFilter);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
//       {/* Hero Section - unchanged */}
//        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FBC51A]/10 via-[#00B4EE]/5 to-[#FB0091]/10">

//          {/* Cloud SVGs */}
//          <svg className="absolute top-24 left-16 w-24 h-16 opacity-40" viewBox="0 0 100 50">
//            <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#FBC51A"/>
//          </svg>
//          <svg className="absolute top-48 right-24 w-28 h-18 opacity-30" viewBox="0 0 100 50">
//            <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#00B4EE"/>
//          </svg>

//          <div className="container mx-auto px-4 relative z-10">
//            <motion.div
//             className="text-center"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="inline-flex items-center gap-2 bg-white shadow-lg px-5 py-2 rounded-full text-sm font-bold mb-6 border-2 border-[#FBC51A]/20">
//               <Sparkles className="w-4 h-4 text-[#FBC51A]" />
//               <span className="bg-gradient-to-r from-[#FBC51A] to-[#FB0091] bg-clip-text text-transparent">
//                 Gallery
//               </span>
//             </div>
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-black leading-tight mb-6">
//               Hall of <span className="text-[#FBC51A]">Fame</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               See what other young artists, writers, and creators are making! 🌟
//             </p>
//           </motion.div>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
//             <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
//           </svg>
//         </div>
//       </section>

//       <section className="py-12 md:py-16 bg-white">
//         <div className="container mx-auto px-5 md:px-6 max-w-7xl">
//           {/* Search */}
//           <div className="max-w-2xl mx-auto mb-10">
//             <div className="relative">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
//               <Input
//                 placeholder="Search by title, artist name, or description..."
//                 value={search}
//                 onChange={e => setSearch(e.target.value)}
//                 className="pl-12 py-6 text-base rounded-full border-2 border-gray-200 focus:border-[#FBC51A] focus:ring-[#FBC51A]/30 shadow-sm"
//               />
//             </div>
//           </div>

//           {/* Media Type */}
//           <div className="flex flex-wrap justify-center gap-3 mb-6">
//             {mediaFilterButtons.map(btn => (
//               <Button
//                 key={btn.type}
//                 variant={mediaFilter === btn.type ? "default" : "outline"}
//                 onClick={() => handleMediaChange(btn.type)}
//                 className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
//                   mediaFilter === btn.type ? 'bg-black text-white shadow-md' : 'hover:bg-gray-100'
//                 }`}
//               >
//                 <span className="mr-1.5 text-lg">{btn.emoji}</span>
//                 {btn.label}
//               </Button>
//             ))}
//           </div>

//           {/* Category */}
//           <div className="flex flex-wrap justify-center gap-3 mb-6">
//             {categoryOptions.map(cat => (
//               <Button
//                 key={cat.id}
//                 variant={categoryFilter === cat.id ? "default" : "outline"}
//                 onClick={() => handleCategoryChange(cat.id)}
//                 className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
//                   categoryFilter === cat.id ? 'bg-gradient-to-r from-[#FB0091] to-pink-500 text-white shadow-md' : 'hover:bg-gray-100'
//                 }`}
//               >
//                 {cat.label}
//               </Button>
//             ))}
//           </div>

//           {/* Specific Activity */}
//           {currentActivityOptions.length > 0 && (
//             <div className="flex justify-center mb-10">
//               <Select value={activityFilter} onValueChange={setActivityFilter}>
//                 <SelectTrigger className="w-full max-w-md rounded-full border-2">
//                   <SelectValue placeholder="Select specific activity..." />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All activities in this category</SelectItem>
//                   {currentActivityOptions.map(act => (
//                     <SelectItem key={act.id} value={act.id}>
//                       {act.label}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//           )}

//           {/* Grid */}
//           {filtered.length > 0 ? (
//             <motion.div
//               className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//               initial="hidden"
//               animate="show"
//               variants={{ show: { transition: { staggerChildren: 0.07 } } }}
//             >
//               {filtered.map(submission => (
//                 <motion.div
//                   key={submission.id}
//                   variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
//                 >
//                   <SubmissionCard submission={submission} />
//                 </motion.div>
//               ))}
//             </motion.div>
//           ) : (
//             <div className="text-center py-20">
//               <div className="text-6xl mb-6">🔍😔</div>
//               <h3 className="text-2xl font-bold mb-3">No matching creations found</h3>
//               <p className="text-gray-600 max-w-md mx-auto">
//                 Try adjusting the filters or search term.
//               </p>
//             </div>
//           )}
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

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SubmissionCard } from '@/components/submission-card';
import { featuredSubmissions, allActivities } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Sparkles, PlayCircle, Mic, BookOpen, Image as ImageIcon } from 'lucide-react';

type MediaFilter = 'all' | 'image' | 'video' | 'audio' | 'text';

const mediaFilterButtons: { type: MediaFilter; label: string; emoji: string }[] = [
  { type: 'all',    label: 'All Creations', emoji: '⭐' },
  { type: 'image',  label: 'Images',        emoji: '🎨' },
  { type: 'video',  label: 'Videos',        emoji: '🎬' },
  { type: 'audio',  label: 'Audio',         emoji: '🎵' },
  { type: 'text',   label: 'Stories',       emoji: '📖' },
];

export default function GalleryPage() {
  const [mediaFilter, setMediaFilter] = useState<MediaFilter>('all');
  const [activityFilter, setActivityFilter] = useState('all');
  const [search, setSearch] = useState('');

  const handleMediaChange = (value: MediaFilter) => {
    setMediaFilter(value);
    setActivityFilter('all'); // reset activity when media changes
  };

  const filtered = useMemo(() => {
    let result = [...featuredSubmissions];

    // 1. Media type filter
    if (mediaFilter !== 'all') {
      result = result.filter(s => s.mediaType === mediaFilter);
    }

    // 2. Specific activity filter (no category anymore)
    if (activityFilter !== 'all') {
      result = result.filter(s => s.activityId === activityFilter);
    }

    // 3. Search
    if (search.trim()) {
      const term = search.toLowerCase().trim();
      result = result.filter(s =>
        s.title.toLowerCase().includes(term) ||
        s.author.toLowerCase().includes(term) ||
        (s.description || '').toLowerCase().includes(term)
      );
    }

    // Newest first
    result.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

    return result;
  }, [mediaFilter, activityFilter, search]);

  // Activity dropdown options (all activities, mark weekly ones)
  const activityOptions = allActivities.map(a => ({
    id: a.id,
    label: a.isSpecialChallenge ? `${a.title} (Weekly)` : a.title,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-to-br from-[#FBC51A]/10 via-[#00B4EE]/5 to-[#FB0091]/10">
        <svg className="absolute top-24 left-16 w-24 h-16 opacity-40" viewBox="0 0 100 50">
          <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#FBC51A"/>
        </svg>
        <svg className="absolute top-48 right-24 w-28 h-18 opacity-30" viewBox="0 0 100 50">
          <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#00B4EE"/>
        </svg>

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
              Discover creations from young artists — stories, drawings, songs, experiments & more! 🌟
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-5 md:px-6 max-w-7xl">
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <Input
                placeholder="Search by title, artist name, or description..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-12 py-6 text-base rounded-full border-2 border-gray-200 focus:border-[#FBC51A] focus:ring-[#FBC51A]/30 shadow-sm"
              />
            </div>
          </div>

          {/* Media Type Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {mediaFilterButtons.map(btn => (
              <Button
                key={btn.type}
                variant={mediaFilter === btn.type ? "default" : "outline"}
                onClick={() => handleMediaChange(btn.type)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  mediaFilter === btn.type ? 'bg-black text-white shadow-md' : 'hover:bg-gray-100'
                }`}
              >
                <span className="mr-1.5 text-lg">{btn.emoji}</span>
                {btn.label}
              </Button>
            ))}
          </div>

          {/* Activity Dropdown (replaces category filter) */}
          <div className="flex justify-center mb-10">
            <Select value={activityFilter} onValueChange={setActivityFilter}>
              <SelectTrigger className="w-full max-w-md rounded-full border-2">
                <SelectValue placeholder="Filter by activity..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Activities</SelectItem>
                {allActivities.map(act => (
                  <SelectItem key={act.id} value={act.id}>
                    {act.isSpecialChallenge ? `${act.title} (Weekly)` : act.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Results */}
          {filtered.length > 0 ? (
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.07 } } }}
            >
              {filtered.map(submission => (
                <motion.div
                  key={submission.id}
                  variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                >
                  <SubmissionCard submission={submission} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🔍😔</div>
              <h3 className="text-2xl font-bold mb-3">No matching creations found</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Try changing the media type, activity filter, or search term.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#FBC51A]/10 via-[#FB0091]/5 to-white relative">
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
            className="text-center max-w-3xl mx-auto"
          >
            <div className="text-7xl mb-6">✨</div>
            <h2 className="text-4xl md:text-5xl font-headline font-black mb-6">
              Want to See Your Work Here?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10">
              Share your creativity with the world and join our amazing community! 🚀
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