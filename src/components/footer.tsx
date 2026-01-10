'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaGraduationCap, FaSchool, FaHeart, FaGlobe, FaEnvelope } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="relative z-10 bg-violet-800/50 text-white pt-12 pb-6 px-4 md:px-8 mt-16 border-t-4 border-[var(--soft-pink)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div className="footer-section">
          <h3 className="text-xl mb-5 text-white font-headline pb-2 border-b-2 border-white/20">Creative Kids</h3>
          <p className="text-white/80 text-sm leading-relaxed">A fun place for young minds to express, create, and share. Made for kids, by kids!</p>
          <div className="mt-4 flex gap-4">
            {[FaInstagram, FaTwitter, FaFacebook, FaYoutube].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="text-white text-lg"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h3 className="text-xl mb-5 text-white font-headline pb-2 border-b-2 border-white/20">Quick Links</h3>
          <ul className="space-y-2.5">
            <li><Link href="#ages" className="flex items-center gap-2 text-white/80 hover:text-[var(--soft-yellow)] transition-colors text-sm">Age Groups</Link></li>
            <li><Link href="#activities" className="flex items-center gap-2 text-white/80 hover:text-[var(--soft-yellow)] transition-colors text-sm">Activities</Link></li>
            <li><Link href="#resources" className="flex items-center gap-2 text-white/80 hover:text-[var(--soft-yellow)] transition-colors text-sm">Resources</Link></li>
            <li><Link href="#submit" className="flex items-center gap-2 text-white/80 hover:text-[var(--soft-yellow)] transition-colors text-sm">Submit Work</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="text-xl mb-5 text-white font-headline pb-2 border-b-2 border-white/20">Special Zones</h3>
          <ul className="space-y-2.5">
            <li><a href="#teachers" className="flex items-center gap-2 text-white/80 hover:text-[var(--soft-yellow)] transition-colors text-sm"><FaGraduationCap /> Teacher's Corner</a></li>
            <li><a href="#schools" className="flex items-center gap-2 text-white/80 hover:text-[var(--soft-yellow)] transition-colors text-sm"><FaSchool /> School Corner</a></li>
            <li><a href="#kindness" className="flex items-center gap-2 text-white/80 hover:text-[var(--soft-yellow)] transition-colors text-sm"><FaHeart /> Kindness Club</a></li>
            <li><a href="#culture" className="flex items-center gap-2 text-white/80 hover:text-[var(--soft-yellow)] transition-colors text-sm"><FaGlobe /> World Explorers</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="text-xl mb-5 text-white font-headline pb-2 border-b-2 border-white/20">Contact Us</h3>
          <ul className="space-y-2.5">
            <li className="flex items-center gap-2 text-white/80 text-sm"><FaEnvelope /> hello@creativekids.com</li>
            <li className="flex items-center gap-2 text-white/80 text-sm"><FaSchool /> schools@creativekids.com</li>
            <li className="flex items-center gap-2 text-white/80 text-sm"><FaGraduationCap /> teachers@creativekids.com</li>
          </ul>
        </div>
      </div>

      <div className="text-center pt-8 mt-8 border-t-2 border-white/20 text-white/60 text-xs">
        <p>© {new Date().getFullYear()} Creative Kids Journal. All rights reserved.</p>
        <p>Made with ❤️ for awesome kids everywhere!</p>
      </div>
    </footer>
  );
}
