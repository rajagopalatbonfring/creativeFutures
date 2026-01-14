

// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import { UserNav } from './user-nav';
// import { Button } from '@/components/ui/button';

// export function FloatingNavbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const mainNavItems = [
//     { label: 'About', href: '/about' },
//     { label: 'Activities', href: '/activities' },
//     { label: 'Gallery', href: '/gallery' },
//     { label: 'Submission', href: '/submissions' },
//     { label: 'Resources', href: '/resources' },
//   ];

//   const moreNavItems = [
//     { label: 'School Corner', href: '/schools' },
//     { label: 'Teacher Corner', href: '/teachers' },
//     { label: 'Blogs', href: '/blog' },
//     { label: 'Recognition', href: '/recognition' },
//     { label: 'Contact', href: '/contact' },
//   ];

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   return (
//     <motion.nav
//       className="fixed top-6 sm:top-8 inset-x-0 mx-auto max-w-7xl px-4 sm:px-6 z-50"
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.4, type: 'spring', stiffness: 120, damping: 20 }}
//     >
//       <div className="relative flex justify-between items-center gap-4">
//         {/* Logo */}
//         <Link
//           href="/"
//           className="flex items-center gap-2.5 font-headline text-2xl font-bold text-foreground z-50"
//           onClick={closeMenu}
//         >
//           <span className="inline">Creative Futures</span>
//         </Link>

//         {/* Desktop Menu + UserNav */}
//         <div className="hidden md:flex items-center gap-6">
//           <div className="flex items-center gap-1 py-2 px-3 bg-background/80 backdrop-blur-lg rounded-full shadow-lg border">
//             {mainNavItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="text-muted-foreground font-medium py-2 px-4 rounded-full transition-all text-sm hover:bg-muted hover:text-foreground"
//               >
//                 {item.label}
//               </Link>
//             ))}
            
//             {/* More Dropdown */}
//             <div 
//               className="relative"
//               onMouseEnter={() => setIsDropdownOpen(true)}
//               onMouseLeave={() => setIsDropdownOpen(false)}
//             >
//               <button
//                 className="text-muted-foreground font-medium py-2 px-4 rounded-full transition-all text-sm hover:bg-muted hover:text-foreground flex items-center gap-1"
//               >
//                 More
//                 <ChevronDown className="h-3.5 w-3.5" />
//               </button>
              
//               <AnimatePresence>
//                 {isDropdownOpen && (
//                   <motion.div
//                     className="absolute top-full right-0 mt-2 w-48 bg-background/95 backdrop-blur-lg rounded-xl shadow-lg border overflow-hidden"
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     {moreNavItems.map((item) => (
//                       <Link
//                         key={item.href}
//                         href={item.href}
//                         className="block text-muted-foreground font-medium py-3 px-4 transition-colors text-sm hover:bg-muted hover:text-foreground"
//                       >
//                         {item.label}
//                       </Link>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//           <UserNav />
//         </div>

//         {/* Mobile Hamburger */}
//         <Button
//           variant="ghost"
//           size="icon"
//           className="md:hidden z-50"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </Button>

//         {/* Mobile Menu Overlay */}
//         <AnimatePresence>
//           {isOpen && (
//             <>
//               {/* Backdrop */}
//               <motion.div
//                 className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 onClick={closeMenu}
//               />

//               {/* Menu Panel */}
//               <motion.div
//                 className="fixed inset-y-0 right-0 w-full max-w-sm bg-background/95 backdrop-blur-lg shadow-2xl border-l z-50 md:hidden"
//                 initial={{ x: '100%' }}
//                 animate={{ x: 0 }}
//                 exit={{ x: '100%' }}
//                 transition={{ type: 'spring', damping: 25, stiffness: 180 }}
//               >
//                 <div className="flex flex-col h-full p-6">
//                   {/* Header / Close */}
//                   <div className="flex justify-between items-center mb-10">
//                     <span className="text-xl font-bold">Menu</span>
//                     <Button variant="ghost" size="icon" onClick={closeMenu}>
//                       <X className="h-6 w-6" />
//                     </Button>
//                   </div>

//                   {/* Navigation Items */}
//                   <nav className="flex flex-col gap-2 mb-8">
//                     {mainNavItems.map((item) => (
//                       <Link
//                         key={item.href}
//                         href={item.href}
//                         className="text-lg font-medium py-4 px-6 rounded-xl transition-colors hover:bg-muted/80 active:bg-muted"
//                         onClick={closeMenu}
//                       >
//                         {item.label}
//                       </Link>
//                     ))}
                    
//                     {/* More section in mobile */}
//                     <div className="border-t pt-4 mt-2">
//                       <p className="text-xs font-semibold text-muted-foreground px-6 mb-2">More</p>
//                       {moreNavItems.map((item) => (
//                         <Link
//                           key={item.href}
//                           href={item.href}
//                           className="text-lg font-medium py-4 px-6 rounded-xl transition-colors hover:bg-muted/80 active:bg-muted"
//                           onClick={closeMenu}
//                         >
//                           {item.label}
//                         </Link>
//                       ))}
//                     </div>
//                   </nav>

//                   {/* Auth Section - only shown on mobile */}
//                   <div className="mt-4 border-t pt-6 md:hidden">
//                     <UserNav />
//                   </div>

//                   {/* Footer / extra */}
//                   <div className="mt-auto pt-10 text-center text-sm text-muted-foreground">
//                     Creative Futures © {new Date().getFullYear()}
//                   </div>
//                 </div>
//               </motion.div>
//             </>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   );
// }




















'use client';

import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { UserNav } from './user-nav';

export function FloatingNavbar() {
    const navItems = [
      { label: 'About', href: '/about' },
      { label: 'Participant Category', href: '/participant-category' },
      { label: 'Activities', href: '/activities' },
      { label: 'Resource Hub', href: '/resources' },
      { label: 'Teacher Corner', href: '/teachers' },
      { label: 'School Corner', href: '/schools' },
      { label: 'Submission Guidelines', href: '/submissions' },
      { label: 'Art Gallery', href: '/gallery' },
      { label: 'Recognition', href: '/recognition' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ];

    return (
        <header className="fixed top-6 left-0 right-0 z-50 px-4">
            <div className="container max-w-7xl mx-auto">
                <div className="bg-white rounded-full shadow-2xl border-4 border-black px-6 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#FB0091] via-[#00B4EE] to-[#FBC51A] rounded-full flex items-center justify-center font-black text-white text-lg shadow-lg">
                                CF
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FBC51A] rounded-full border-2 border-white animate-bounce"></div>
                        </div>
                        <span className="hidden sm:block font-black text-xl text-black">
                            Creative Futures
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-2">
                        {navItems.slice(0, 4).map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="font-bold text-sm text-gray-700 px-4 py-2 rounded-full hover:bg-[#FBC51A] hover:text-black transition-all"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <DropdownMenu>
                          <DropdownMenuTrigger className="font-bold text-sm text-gray-700 px-4 py-2 rounded-full hover:bg-[#FBC51A] hover:text-black transition-all outline-none flex items-center gap-1">
                            More <ChevronDown className="w-4 h-4" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-white rounded-3xl border-4 border-black shadow-2xl p-2 mt-2">
                            {navItems.slice(4).map((item) => (
                               <DropdownMenuItem 
                                 key={item.href} 
                                 asChild
                                 className="rounded-2xl hover:bg-[#FB0091] hover:text-white focus:bg-[#FB0091] focus:text-white cursor-pointer font-bold"
                               >
                                 <Link href={item.href} className="px-4 py-2">{item.label}</Link>
                               </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">
                        {/* Desktop User Nav */}
                        <div className="hidden lg:block">
                            <UserNav />
                        </div>

                        {/* Mobile Menu */}
                        <div className="lg:hidden">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button 
                                        variant="ghost" 
                                        size="icon" 
                                        className="rounded-full w-10 h-10 bg-[#00B4EE] hover:bg-[#FB0091] transition-colors"
                                    >
                                        <Menu className="h-5 w-5 text-white" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent 
                                  align="end" 
                                  className="bg-white rounded-3xl border-4 border-black shadow-2xl p-2 w-72 mt-2"
                                >
                                {navItems.map((item) => (
                                   <DropdownMenuItem 
                                     key={item.href} 
                                     asChild
                                     className="rounded-2xl hover:bg-[#00B4EE] hover:text-white focus:bg-[#00B4EE] focus:text-white cursor-pointer font-bold"
                                   >
                                     <Link href={item.href} className="px-4 py-3">{item.label}</Link>
                                   </DropdownMenuItem>
                                ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
