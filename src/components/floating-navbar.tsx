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
            className="fixed top-4 inset-x-0 mx-auto max-w-7xl  z-50"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 120, damping: 20 }}
        >
            <div className="flex justify-between items-center gap-4">
                <Link href="/" className="flex items-center gap-2.5 font-headline text-2xl font-bold text-foreground ">
                    <span className="hidden sm:inline">Creative Futures</span>
                </Link>

                <div className="hidden md:flex gap-1 py-2 px-3 bg-background/80 backdrop-blur-lg rounded-full shadow-lg border">
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
