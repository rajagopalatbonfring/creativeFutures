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
//       { label: 'About us', href: '/about' },
//       { label: 'Participant Category', href: '/participant-category' },
//       { label: 'Submission Gallery', href: '/gallery' },
//       { label: 'Resource Hub', href: '/resources' },
//       { label: 'Teacher’s Corner', href: '/teachers' },
//       { label: 'School corner', href: '/schools' },
//       { label: 'Parent-Child Activity Zone', href: '/activities' },
//       { label: 'Submission Guidelines', href: '/submissions' },
//       { label: 'Submit', href: '/submit' },
//       { label: 'Recognition and Participation', href: '/recognition' },
//       { label: 'Blog/ Monthly News Letter', href: '/blog' },
//       { label: 'Contact', href: '/contact' },
//     ];

//     return (
//         <header className="fixed top-6 left-0 right-0 z-50 px-4">
//             <div className="container max-w-7xl mx-auto">
//                 <div className="relative bg-white rounded-full shadow-2xl border-2 border-gray-200 px-7 py-4 flex items-center justify-between overflow-hidden hover:shadow-[0_12px_40px_rgba(251,0,145,0.12)] transition-shadow duration-300">

//                     {/* Logo */}
//                     <Link href="/" className="flex items-center space-x-3 group relative z-10">
//                         <div className="relative">
//                             <div className="w-12 h-12 bg-gradient-to-br from-[#ffffff] via-[#00B4EE] to-[#ffffff] rounded-full flex items-center justify-center font-black text-white text-xl shadow-lg group-hover:scale-105 transition-transform">
//                                 CF
//                             </div>
//                             <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FBC51A] rounded-full border-2 border-white"></div>
//                         </div>
//                         <div className="hidden sm:block">
//                             <span className="font-black text-xl text-black">
//                                 Creative Futures
//                             </span>
//                             <span className="text-[10px] font-semibold text-gray-500 -mt-1 block">Where imagination meets creativity!</span>
//                         </div>
//                     </Link>

//                     {/* Desktop Navigation */}
//                     <nav className="hidden lg:flex items-center gap-1 relative z-10">
//                         {navItems.slice(0, 4).map((item) => (
//                             <Link
//                                 key={item.href}
//                                 href={item.href}
//                                 className="font-bold text-sm text-gray-700 px-5 py-2.5 rounded-full hover:bg-[#FBC51A] hover:text-black transition-all duration-200"
//                             >
//                                 {item.label}
//                             </Link>
//                         ))}
//                         <DropdownMenu>
//                           <DropdownMenuTrigger className="font-bold text-sm text-gray-700 px-5 py-2.5 rounded-full hover:bg-[#FBC51A] hover:text-black transition-all duration-200 outline-none flex items-center gap-1.5">
//                             More <ChevronDown className="w-4 h-4" />
//                           </DropdownMenuTrigger>
//                           <DropdownMenuContent className="bg-white rounded-3xl border-2 border-gray-200 shadow-2xl p-3 mt-3 min-w-[220px]">
//                             {/* Small decorative dot */}
//                             <div className="absolute -top-1.5 right-10 w-3 h-3 bg-[#FB0091] rounded-full"></div>
                            
//                             {navItems.slice(4).map((item) => (
//                                 <DropdownMenuItem 
//                                     key={item.href} 
//                                     asChild
//                                     className="rounded-2xl hover:bg-[#00B4EE] hover:text-white focus:bg-[#00B4EE] focus:text-white cursor-pointer font-bold transition-all duration-200 mb-1.5"
//                                 >
//                                     <Link href={item.href} className="px-4 py-3 flex items-center gap-2">
//                                         <span className="w-1.5 h-1.5 bg-current rounded-full opacity-60"></span>
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

//                         {/* Mobile Menu */}
//                         <div className="lg:hidden">
//                             <DropdownMenu>
//                                 <DropdownMenuTrigger asChild>
//                                     <Button 
//                                         variant="ghost" 
//                                         size="icon" 
//                                         className="rounded-full w-11 h-11 bg-gradient-to-br from-[#FB0091] via-[#00B4EE] to-[#FBC51A] hover:scale-105 transition-all duration-300 shadow-lg"
//                                     >
//                                         <Menu className="h-5 w-5 text-white" />
//                                     </Button>
//                                 </DropdownMenuTrigger>
//                                 <DropdownMenuContent 
//                                   align="end" 
//                                   className="bg-white rounded-3xl border-2 border-gray-200 shadow-2xl p-3 w-72 mt-3"
//                                 >
//                                 <div className="absolute -top-1.5 right-6 w-3 h-3 bg-[#FBC51A] rounded-full"></div>
                                
//                                 {navItems.map((item) => (
//                                     <DropdownMenuItem 
//                                         key={item.href} 
//                                         asChild
//                                         className="rounded-2xl hover:bg-[#FB0091] hover:text-white focus:bg-[#FB0091] focus:text-white cursor-pointer font-bold transition-all duration-200 mb-1.5"
//                                     >
//                                         <Link href={item.href} className="px-5 py-3 flex items-center gap-2">
//                                             <span className="w-1.5 h-1.5 bg-current rounded-full opacity-60"></span>
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
    //   { label: 'Submission Gallery', href: '/gallery' },
      { label: 'Chronicles', href: '/archives' },
      { label: 'Resource Hub', href: '/resources' },
      { label: 'Contact', href: '/contact' },
      { label: 'Teacher’s Corner', href: '/teachers' },
      { label: 'School corner', href: '/schools' },
      { label: 'Parent-Child Activity Zone', href: '/activities' },
      { label: 'Submission Guidelines', href: '/submissions' },
      { label: 'Submit', href: '/submit' },
      { label: 'Recognition and Participation', href: '/recognition' },
      { label: 'Blog/ Monthly News Letter', href: '/blog' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4">
            <div className="container max-w-8xl mx-auto">
                <div className="relative bg-white rounded-b-3xl shadow-2xl border-2 border-gray-200 overflow-hidden hover:shadow-[0_12px_40px_rgba(251,0,145,0.12)] transition-shadow duration-300">
                    
                    {/* Top Row - Journal Name */}
                    <div className="px-6 py-4 border-dotted border-b-2 border-gray-100">
                        <div className="flex items-center justify-between">
                            {/* Logo Text Design */}
                            {/* <Link href="/" className="flex items-center gap-4 group">
                                <div className="hidden md:flex items-center gap-3">
                                    <div className="relative">
                                        <h1 className="font-serif italic text-3xl font-black tracking-tight leading-none">
                                            <span className="bg-gradient-to-r from-[#FB0091] to-pink-400 bg-clip-text text-transparent">A</span>
                                            <span className="text-gray-800 mx-1">Journal</span>
                                        </h1>
                                        <div className="absolute -bottom-1 left-0 w-20 h-1 bg-gradient-to-r from-[#FB0091] to-transparent rounded-full"></div>
                                    </div>
                                    
                                    <div className="flex flex-col justify-center -ml-1">
                                        <span className="text-[10px] font-bold text-gray-500 tracking-wider uppercase">By and For</span>
                                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#00B4EE] to-transparent rounded-full mt-0.5"></div>
                                    </div>
                                    
                                    <div className="relative">
                                        <h1 className="font-black text-4xl tracking-tight leading-none">
                                            <span className="bg-gradient-to-r from-[#00B4EE] via-[#FBC51A] to-[#FB0091] bg-clip-text text-transparent drop-shadow-sm">
                                                KIDS
                                            </span>
                                        </h1>
                                        <div className="absolute -top-1 -right-2 text-[#FBC51A] text-xs">✨</div>
                                    </div>
                                    
                                    <div className="ml-3 border-l-2 border-gray-300 pl-3">
                                        <p className="text-[9px] font-black text-gray-400 tracking-widest uppercase leading-tight">
                                            Creative<br/>Futures
                                        </p>
                                        <p className="text-[8px] font-bold text-[#FB0091] tracking-wider">(CFJBFK)</p>
                                    </div>
                                </div>
                                
                                <div className="md:hidden flex items-center gap-2">
                                    <div>
                                        <h1 className="font-black text-xl tracking-tight leading-none">
                                            <span className="bg-gradient-to-r from-[#FB0091] via-[#00B4EE] to-[#FBC51A] bg-clip-text text-transparent">
                                                CFJBFK
                                            </span>
                                        </h1>
                                        <p className="text-[8px] font-bold text-gray-500 tracking-wide">Journal By & For Kids</p>
                                    </div>
                                </div>
                            </Link> */}

                            <Link href="/" className="flex items-center gap-3 group relative z-10">
                            {/* <div className="">
                                <div className="flex items-center gap-3">
                                    <h1 className="font-black text-3xl text-gray-800" style={{
                                        fontFamily: 'Comic Sans MS, cursive',
                                        textShadow: '3px 3px 0px rgba(251, 0, 145, 0.2)'
                                    }}>
                                        A Journal by and for Kids
                                    </h1>
                                </div>
                            </div> */}
                                <div className="flex items-center gap-3">
                                    <h1 className="font-black text-2xl">
                                        <span className="inline-block text-5xl mr-4">Creative Futures :</span>
                                        <span className="inline-block bg-pink-500 text-white px-2 py-1 rounded-lg transform -rotate-1 shadow-md text-3xl">A Journal</span>
                                        <span className="mx-2 text-gray-700 font-bold text-3xl">by and for</span>
                                        <span className="inline-block bg-blue-400 text-white px-2 py-1 rounded-lg transform rotate-1 shadow-md text-3xl">Kids</span>
                                    </h1>
                                </div>
                            </Link>

                            {/* Desktop User Nav (Top Right) */}
                            <div className="hidden lg:block">
                                <UserNav />
                            </div>

                            {/* Mobile Menu Button (Top Right) */}
                            <div className="lg:hidden">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button 
                                            variant="ghost" 
                                            size="icon" 
                                            className="rounded-full w-10 h-10 bg-gradient-to-br from-[#FB0091] via-[#00B4EE] to-[#FBC51A] hover:scale-105 transition-all duration-300 shadow-lg"
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

                    {/* Bottom Row - Navigation */}
                    <nav className="hidden lg:flex items-center justify-center gap-1 px-6 py-3">
                        {navItems.slice(0, 5).map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="font-bold text-sm text-gray-700 px-4 py-2 rounded-full hover:bg-[#FBC51A] hover:text-black transition-all duration-200"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <DropdownMenu>
                          <DropdownMenuTrigger className="font-bold text-sm text-gray-700 px-4 py-2 rounded-full hover:bg-[#FBC51A] hover:text-black transition-all duration-200 outline-none flex items-center gap-1">
                            More <ChevronDown className="w-4 h-4" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-white rounded-3xl border-2 border-gray-200 shadow-2xl p-3 mt-3 min-w-[220px]">
                            <div className="absolute -top-1.5 right-10 w-3 h-3 bg-[#FB0091] rounded-full"></div>
                            
                            {navItems.slice(5).map((item) => (
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
                </div>
            </div>
        </header>
    );
}