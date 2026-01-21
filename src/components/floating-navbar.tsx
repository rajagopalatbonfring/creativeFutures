// 'use client';

// import Link from 'next/link';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import { Menu, ChevronDown } from 'lucide-react';
// import { Button } from './ui/button';
// import { UserNav } from './user-nav';

// export function FloatingNavbar() {
//     const navItems = [
//       { label: 'About', href: '/about' },
//       { label: 'Participant Category', href: '/participant-category' },
//       { label: 'Activities', href: '/activities' },
//       { label: 'Resource Hub', href: '/resources' },
//       { label: 'Teacher Corner', href: '/teachers' },
//       { label: 'School Corner', href: '/schools' },
//       { label: 'Submission Guidelines', href: '/submissions' },
//       { label: 'Art Gallery', href: '/gallery' },
//       { label: 'Recognition', href: '/recognition' },
//       { label: 'Blog', href: '/blog' },
//       { label: 'Contact', href: '/contact' },
//     ];

//     return (
//         <header className="fixed top-6 left-0 right-0 z-50 px-4">
//             <div className="container max-w-7xl mx-auto">
//                 <div className="bg-white rounded-full shadow-2xl border-2 border-black px-6 py-3 flex items-center justify-between">
//                     {/* Logo */}
//                     <Link href="/" className="flex items-center space-x-2 group">
//                         <div className="relative">
//                             <div className="w-10 h-10 bg-gradient-to-br from-[#FB0091] via-[#00B4EE] to-[#FBC51A] rounded-full flex items-center justify-center font-black text-white text-lg shadow-lg">
//                                 CF
//                             </div>
//                             <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FBC51A] rounded-full border-2 border-white animate-bounce"></div>
//                         </div>
//                         <span className="hidden sm:block font-black text-xl text-black">
//                             Creative Futures
//                         </span>
//                     </Link>

//                     {/* Desktop Navigation */}
//                     <nav className="hidden lg:flex items-center gap-2">
//                         {navItems.slice(0, 4).map((item) => (
//                             <Link
//                                 key={item.href}
//                                 href={item.href}
//                                 className="font-bold text-sm text-gray-700 px-4 py-2 rounded-full hover:bg-[#FBC51A] hover:text-black transition-all"
//                             >
//                                 {item.label}
//                             </Link>
//                         ))}
//                         <DropdownMenu>
//                           <DropdownMenuTrigger className="font-bold text-sm text-gray-700 px-4 py-2 rounded-full hover:bg-[#FBC51A] hover:text-black transition-all outline-none flex items-center gap-1">
//                             More <ChevronDown className="w-4 h-4" />
//                           </DropdownMenuTrigger>
//                           <DropdownMenuContent className="bg-white rounded-3xl border-2 border-black shadow-2xl p-2 mt-2">
//                             {navItems.slice(4).map((item) => (
//                                <DropdownMenuItem 
//                                  key={item.href} 
//                                  asChild
//                                  className="rounded-2xl hover:bg-[#FB0091] hover:text-white focus:bg-[#FB0091] focus:text-white cursor-pointer font-bold"
//                                >
//                                  <Link href={item.href} className="px-4 py-2">{item.label}</Link>
//                                </DropdownMenuItem>
//                             ))}
//                           </DropdownMenuContent>
//                         </DropdownMenu>
//                     </nav>

//                     {/* Right Side */}
//                     <div className="flex items-center gap-3">
//                         {/* Desktop User Nav */}
//                         <div className="hidden lg:block">
//                             <UserNav />
//                         </div>

//                         {/* Mobile Menu */}
//                         <div className="lg:hidden">
//                             <DropdownMenu>
//                                 <DropdownMenuTrigger asChild>
//                                     <Button 
//                                         variant="ghost" 
//                                         size="icon" 
//                                         className="rounded-full w-10 h-10 bg-[#00B4EE] hover:bg-[#FB0091] transition-colors"
//                                     >
//                                         <Menu className="h-5 w-5 text-white" />
//                                     </Button>
//                                 </DropdownMenuTrigger>
//                                 <DropdownMenuContent 
//                                   align="end" 
//                                   className="bg-white rounded-3xl border-2 border-black shadow-2xl p-2 w-72 mt-2"
//                                 >
//                                 {navItems.map((item) => (
//                                    <DropdownMenuItem 
//                                      key={item.href} 
//                                      asChild
//                                      className="rounded-2xl hover:bg-[#00B4EE] hover:text-white focus:bg-[#00B4EE] focus:text-white cursor-pointer font-bold"
//                                    >
//                                      <Link href={item.href} className="px-4 py-3">{item.label}</Link>
//                                    </DropdownMenuItem>
//                                 ))}
//                                 </DropdownMenuContent>
//                             </DropdownMenu>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// }












// 'use client';

// import Link from 'next/link';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import { Menu, ChevronDown } from 'lucide-react';
// import { Button } from './ui/button';
// import { UserNav } from './user-nav';

// export function FloatingNavbar() {
//     const navItems = [
//       { label: 'About', href: '/about' },
//       { label: 'Categories', href: '/participant-category' },
//       { label: 'Activities', href: '/activities' },
//       { label: 'Resources', href: '/resources' },
//       { label: 'Teachers', href: '/teachers' },
//       { label: 'Schools', href: '/schools' },
//       { label: 'Submit', href: '/submissions' },
//       { label: 'Gallery', href: '/gallery' },
//       { label: 'Recognition', href: '/recognition' },
//       { label: 'Blog', href: '/blog' },
//       { label: 'Contact', href: '/contact' },
//     ];

//     return (
//         <header className="fixed top-6 left-0 right-0 z-50 px-4">
//             <div className="container max-w-7xl mx-auto">
//                 {/* Main navbar container with wavy top edge */}
//                 <div className="relative bg-white rounded-[2.5rem] shadow-[0_8px_24px_rgba(0,0,0,0.15)] border-[3px] border-black px-8 py-4 flex items-center justify-between overflow-visible">
                    
//                     {/* Hand-drawn style wavy decoration on top */}
//                     <div className="absolute -top-2 left-1/4 w-16 h-3">
//                         <svg viewBox="0 0 64 12" className="w-full h-full">
//                             <path d="M0,6 Q8,0 16,6 T32,6 T48,6 T64,6" stroke="#FBC51A" strokeWidth="3" fill="none" strokeLinecap="round"/>
//                         </svg>
//                     </div>
                    
//                     {/* Small doodle stars */}
//                     <div className="absolute -top-3 right-32 w-5 h-5 rotate-12">
//                         <svg viewBox="0 0 24 24" fill="#FB0091" stroke="#000" strokeWidth="1.5">
//                             <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"/>
//                         </svg>
//                     </div>
                    
//                     <div className="absolute -bottom-2 right-1/3 w-4 h-4 rotate-45 bg-[#00B4EE] rounded-sm border-2 border-black"></div>
                    
//                     {/* Logo Section */}
//                     <Link href="/" className="flex items-center space-x-3 group relative z-10">
//                         <div className="relative transform group-hover:rotate-3 transition-transform duration-300">
//                             <div className="w-14 h-14 bg-gradient-to-br from-[#FB0091] to-[#FBC51A] rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-[3px] border-black">
//                                 CF
//                             </div>
//                             {/* Small badge */}
//                             <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#00B4EE] rounded-full border-[2.5px] border-black flex items-center justify-center text-xs font-black">
//                                 ✨
//                             </div>
//                         </div>
//                         <div className="hidden sm:block">
//                             <span className="font-black text-2xl text-black block leading-tight">
//                                 Creative Futures
//                             </span>
//                             <span className="text-xs font-bold text-gray-600 -mt-1 block">Where kids create magic!</span>
//                         </div>
//                     </Link>

//                     {/* Desktop Navigation */}
//                     <nav className="hidden lg:flex items-center gap-2 relative z-10">
//                         {navItems.slice(0, 4).map((item) => (
//                             <Link
//                                 key={item.href}
//                                 href={item.href}
//                                 className="relative font-bold text-sm text-black px-5 py-2.5 rounded-full hover:bg-[#FBC51A] transition-all duration-200 group/link"
//                             >
//                                 <span className="relative z-10">{item.label}</span>
//                                 <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover/link:border-black transition-all duration-200"></div>
//                             </Link>
//                         ))}
//                         <DropdownMenu>
//                           <DropdownMenuTrigger className="relative font-bold text-sm text-black px-5 py-2.5 rounded-full hover:bg-[#FBC51A] transition-all duration-200 outline-none flex items-center gap-1.5 group/more">
//                             More <ChevronDown className="w-4 h-4 group-hover/more:translate-y-0.5 transition-transform" />
//                             <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover/more:border-black transition-all duration-200"></div>
//                           </DropdownMenuTrigger>
//                           <DropdownMenuContent className="bg-[#FFFEF8] rounded-3xl border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-3 mt-3 min-w-[220px]">
//                             {/* Decorative element */}
//                             <div className="absolute -top-3 right-12 w-6 h-6 bg-[#FB0091] rounded-full border-[2.5px] border-black"></div>
                            
//                             {navItems.slice(4).map((item) => (
//                                 <DropdownMenuItem 
//                                     key={item.href} 
//                                     asChild
//                                     className="rounded-2xl hover:bg-[#00B4EE] hover:text-white focus:bg-[#00B4EE] focus:text-white cursor-pointer font-bold transition-all duration-200 mb-1.5 border-2 border-transparent hover:border-black focus:border-black"
//                                 >
//                                     <Link href={item.href} className="px-4 py-3">
//                                         {item.label}
//                                     </Link>
//                                 </DropdownMenuItem>
//                             ))}
//                           </DropdownMenuContent>
//                         </DropdownMenu>
//                     </nav>

//                     {/* Right Side */}
//                     <div className="flex items-center gap-4 relative z-10">
//                         {/* Desktop User Nav */}
//                         <div className="hidden lg:block">
//                             <UserNav />
//                         </div>

//                         {/* Mobile Menu Button */}
//                         <div className="lg:hidden">
//                             <DropdownMenu>
//                                 <DropdownMenuTrigger asChild>
//                                     <Button 
//                                         variant="ghost" 
//                                         size="icon" 
//                                         className="rounded-2xl w-12 h-12 bg-gradient-to-br from-[#FB0091] to-[#00B4EE] hover:from-[#00B4EE] hover:to-[#FBC51A] transition-all duration-300 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5"
//                                     >
//                                         <Menu className="h-6 w-6 text-white" />
//                                     </Button>
//                                 </DropdownMenuTrigger>
//                                 <DropdownMenuContent 
//                                   align="end" 
//                                   className="bg-[#FFFEF8] rounded-3xl border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-3 w-72 mt-3"
//                                 >
//                                 {/* Decorative dot */}
//                                 <div className="absolute -top-2 right-6 w-5 h-5 bg-[#FBC51A] rounded-full border-[2.5px] border-black"></div>
                                
//                                 {navItems.map((item) => (
//                                     <DropdownMenuItem 
//                                         key={item.href} 
//                                         asChild
//                                         className="rounded-2xl hover:bg-[#FB0091] hover:text-white focus:bg-[#FB0091] focus:text-white cursor-pointer font-bold transition-all duration-200 mb-1.5 border-2 border-transparent hover:border-black focus:border-black"
//                                     >
//                                         <Link href={item.href} className="px-5 py-3">
//                                             {item.label}
//                                         </Link>
//                                     </DropdownMenuItem>
//                                 ))}
//                                 </DropdownMenuContent>
//                             </DropdownMenu>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
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
      { label: 'About us', href: '/about' },
      { label: 'Participant Category', href: '/participant-category' },
      { label: 'Submission Gallery', href: '/gallery' },
      { label: 'Resource Hub', href: '/resources' },
      { label: 'Teacher’s Corner', href: '/teachers' },
      { label: 'School corner', href: '/schools' },
      { label: 'Parent-Child Activity Zone', href: '/activities' },
      { label: 'Submission Guidelines', href: '/submissions' },
      { label: 'Submit', href: '/submit' },
      { label: 'Recognition', href: '/recognition' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ];

    return (
        <header className="fixed top-6 left-0 right-0 z-50 px-4">
            <div className="container max-w-7xl mx-auto">
                <div className="relative bg-white rounded-full shadow-2xl border-2 border-gray-200 px-7 py-4 flex items-center justify-between overflow-hidden hover:shadow-[0_12px_40px_rgba(251,0,145,0.12)] transition-shadow duration-300">

                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group relative z-10">
                        <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#ffffff] via-[#00B4EE] to-[#ffffff] rounded-full flex items-center justify-center font-black text-white text-xl shadow-lg group-hover:scale-105 transition-transform">
                                CF
                            </div>
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FBC51A] rounded-full border-2 border-white"></div>
                        </div>
                        <div className="hidden sm:block">
                            <span className="font-black text-xl text-black">
                                Creative Futures
                            </span>
                            <span className="text-[10px] font-semibold text-gray-500 -mt-1 block">Where imagination meets creativity!</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1 relative z-10">
                        {navItems.slice(0, 4).map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="font-bold text-sm text-gray-700 px-5 py-2.5 rounded-full hover:bg-[#FBC51A] hover:text-black transition-all duration-200"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <DropdownMenu>
                          <DropdownMenuTrigger className="font-bold text-sm text-gray-700 px-5 py-2.5 rounded-full hover:bg-[#FBC51A] hover:text-black transition-all duration-200 outline-none flex items-center gap-1.5">
                            More <ChevronDown className="w-4 h-4" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-white rounded-3xl border-2 border-gray-200 shadow-2xl p-3 mt-3 min-w-[220px]">
                            {/* Small decorative dot */}
                            <div className="absolute -top-1.5 right-10 w-3 h-3 bg-[#FB0091] rounded-full"></div>
                            
                            {navItems.slice(4).map((item) => (
                                <DropdownMenuItem 
                                    key={item.href} 
                                    asChild
                                    className="rounded-2xl hover:bg-[#00B4EE] hover:text-white focus:bg-[#00B4EE] focus:text-white cursor-pointer font-bold transition-all duration-200 mb-1.5"
                                >
                                    <Link href={item.href} className="px-4 py-3 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-current rounded-full opacity-60"></span>
                                        {item.label}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center gap-4 relative z-10">
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
                                        className="rounded-full w-11 h-11 bg-gradient-to-br from-[#FB0091] via-[#00B4EE] to-[#FBC51A] hover:scale-105 transition-all duration-300 shadow-lg"
                                    >
                                        <Menu className="h-5 w-5 text-white" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent 
                                  align="end" 
                                  className="bg-white rounded-3xl border-2 border-gray-200 shadow-2xl p-3 w-72 mt-3"
                                >
                                <div className="absolute -top-1.5 right-6 w-3 h-3 bg-[#FBC51A] rounded-full"></div>
                                
                                {navItems.map((item) => (
                                    <DropdownMenuItem 
                                        key={item.href} 
                                        asChild
                                        className="rounded-2xl hover:bg-[#FB0091] hover:text-white focus:bg-[#FB0091] focus:text-white cursor-pointer font-bold transition-all duration-200 mb-1.5"
                                    >
                                        <Link href={item.href} className="px-5 py-3 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-current rounded-full opacity-60"></span>
                                            {item.label}
                                        </Link>
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