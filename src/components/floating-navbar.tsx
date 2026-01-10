// 'use client';

// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { UserNav } from './user-nav';

// export function FloatingNavbar() {
//     const navItems = [
//       { label: 'About', href: '/about' },
//       { label: 'Activities', href: '/activities' },
//       { label: 'Gallery', href: '/gallery' },
//       { label: 'Resources', href: '/resources' },
//       { label: 'Contact', href: '/contact' },
//     ];

//     return (
//         <motion.nav
//             className="fixed top-8 inset-x-0 mx-auto max-w-7xl px-2 z-50"
//             initial={{ y: -100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.3, type: 'spring', stiffness: 120, damping: 20 }}
//         >
//             <div className="flex justify-between items-center gap-4">
//                 <Link href="/" className="flex items-center gap-2.5 font-headline text-2xl font-bold text-foreground ">
//                     <span className="inline">Creative Futures</span>
//                 </Link>

//                 <div className="hidden md:flex gap-1 py-2 px-3 bg-background/80 backdrop-blur-lg rounded-full shadow-lg border">
//                     {navItems.map((item) => (
//                         <Link
//                             key={item.href}
//                             href={item.href}
//                             className="text-muted-foreground font-medium py-2 px-3 rounded-full transition-all text-sm hover:bg-muted hover:text-foreground"
//                         >
//                             {item.label}
//                         </Link>
//                     ))}
//                 </div>
//                 <UserNav />
//             </div>
//         </motion.nav>
//     );
// };















'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { UserNav } from './user-nav';
import { Button } from '@/components/ui/button';

export function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Activities', href: '/activities' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      className="fixed top-6 sm:top-8 inset-x-0 mx-auto max-w-7xl px-4 sm:px-6 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="relative flex justify-between items-center gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-headline text-2xl font-bold text-foreground z-50"
          onClick={closeMenu}
        >
          <span className="inline">Creative Futures</span>
        </Link>

        {/* Desktop Menu + UserNav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1 py-2 px-3 bg-background/80 backdrop-blur-lg rounded-full shadow-lg border">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground font-medium py-2 px-4 rounded-full transition-all text-sm hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <UserNav />
        </div>

        {/* Mobile Hamburger */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />

              {/* Menu Panel */}
              <motion.div
                className="fixed inset-y-0 right-0 w-full max-w-sm bg-background/95 backdrop-blur-lg shadow-2xl border-l z-50 md:hidden"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              >
                <div className="flex flex-col h-full p-6">
                  {/* Header / Close */}
                  <div className="flex justify-between items-center mb-10">
                    <span className="text-xl font-bold">Menu</span>
                    <Button variant="ghost" size="icon" onClick={closeMenu}>
                      <X className="h-6 w-6" />
                    </Button>
                  </div>

                  {/* Navigation Items */}
                  <nav className="flex flex-col gap-2 mb-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-lg font-medium py-4 px-6 rounded-xl transition-colors hover:bg-muted/80 active:bg-muted"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Auth Section - only shown on mobile */}
                  <div className="mt-4 border-t pt-6 md:hidden">
                    <UserNav /> {/* This will render login/signup or user dropdown */}
                  </div>

                  {/* Footer / extra */}
                  <div className="mt-auto pt-10 text-center text-sm text-muted-foreground">
                    Creative Futures © {new Date().getFullYear()}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}