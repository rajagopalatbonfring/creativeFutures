'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { UserNav } from './user-nav';

export function FloatingNavbar() {
    const navItems = [
      { label: 'About', href: '/about' },
      { label: 'Activities', href: '/activities' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Resources', href: '/resources' },
      { label: 'Contact', href: '/contact' },
    ];

    return (
        <motion.nav
            className="fixed top-4 inset-x-0 mx-auto w-max py-2 px-3 bg-background/80 backdrop-blur-lg z-50 rounded-full shadow-lg border"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 120, damping: 20 }}
        >
            <div className="flex justify-between items-center gap-4">
                <Link href="/" className="flex items-center gap-2.5 font-headline text-lg font-bold text-foreground pl-2">
                     <svg
                      className="h-6 w-6 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                    <span className="hidden sm:inline">Creative Futures</span>
                </Link>

                <div className="hidden md:flex gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-muted-foreground font-medium py-2 px-3 rounded-full transition-all text-sm hover:bg-muted hover:text-foreground"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                <UserNav />
            </div>
        </motion.nav>
    );
};
