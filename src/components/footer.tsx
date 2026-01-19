// 'use client';

// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaGraduationCap, FaSchool, FaHeart, FaGlobe, FaEnvelope } from 'react-icons/fa';

// export function Footer() {
//   return (
//     <footer className="relative z-10 bg-violet-800/50 text-white pt-12 pb-6 px-4 md:px-8 mt-16 border-t-4 border-[var(--soft-pink)]">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
//         <div className="footer-section">
//           <h3 className="text-xl mb-5 text-white font-headline pb-2 border-b-2 border-white/20">Creative Kids</h3>
//           <p className="text-white/80 text-sm leading-relaxed">A fun place for young minds to express, create, and share. Made for kids, by kids!</p>
//           <div className="mt-4 flex gap-4">
//             {[FaInstagram, FaTwitter, FaFacebook, FaYoutube].map((Icon, index) => (
//               <motion.a
//                 key={index}
//                 href="#"
//                 whileHover={{ scale: 1.2, rotate: 360 }}
//                 className="text-white text-lg"
//               >
//                 <Icon />
//               </motion.a>
//             ))}
//           </div>
//         </div>

//         <div className="footer-section">
//           <h3 className="text-xl mb-5 text-white font-headline pb-2 border-b-2 border-white/20">Quick Links</h3>
//           <ul className="space-y-2.5">
//             <li><Link href="#ages" className="flex items-center gap-2 text-white/80 hover:text-[var(--soft-yellow)] transition-colors text-sm">Age Groups</Link></li>
//             <li><Link href="#activities" className="flex items-center gap-2 text-white/80 hover:text-[var(--soft-yellow)] transition-colors text-sm">Activities</Link></li>
//             <li><Link href="#resources" className="flex items-center gap-2 text-white/80 hover:text-[var(--soft-yellow)] transition-colors text-sm">Resources</Link></li>
//             <li><Link href="#submit" className="flex items-center gap-2 text-white/80 hover:text-[var(--soft-yellow)] transition-colors text-sm">Submit Work</Link></li>
//           </ul>
//         </div>

//         <div className="footer-section">
//           <h3 className="text-xl mb-5 text-white font-headline pb-2 border-b-2 border-white/20">Special Zones</h3>
//           <ul className="space-y-2.5">
//             <li><a href="#teachers" className="flex items-center gap-2 text-white/80 hover:text-[var(--soft-yellow)] transition-colors text-sm"><FaGraduationCap /> Teacher's Corner</a></li>
//             <li><a href="#schools" className="flex items-center gap-2 text-white/80 hover:text-[var(--soft-yellow)] transition-colors text-sm"><FaSchool /> School Corner</a></li>
//             <li><a href="#kindness" className="flex items-center gap-2 text-white/80 hover:text-[var(--soft-yellow)] transition-colors text-sm"><FaHeart /> Kindness Club</a></li>
//             <li><a href="#culture" className="flex items-center gap-2 text-white/80 hover:text-[var(--soft-yellow)] transition-colors text-sm"><FaGlobe /> World Explorers</a></li>
//           </ul>
//         </div>

//         <div className="footer-section">
//           <h3 className="text-xl mb-5 text-white font-headline pb-2 border-b-2 border-white/20">Contact Us</h3>
//           <ul className="space-y-2.5">
//             <li className="flex items-center gap-2 text-white/80 text-sm"><FaEnvelope /> hello@creativekids.com</li>
//             <li className="flex items-center gap-2 text-white/80 text-sm"><FaSchool /> schools@creativekids.com</li>
//             <li className="flex items-center gap-2 text-white/80 text-sm"><FaGraduationCap /> teachers@creativekids.com</li>
//           </ul>
//         </div>
//       </div>

//       <div className="text-center pt-8 mt-8 border-t-2 border-white/20 text-white/60 text-xs">
//         <p>© {new Date().getFullYear()} Creative Kids Journal. All rights reserved.</p>
//         <p>Made with ❤️ for awesome kids everywhere!</p>
//       </div>
//     </footer>
//   );
// }



















'use client';

import Link from 'next/link';
import { Heart, Send, MapPin,Twitter,Instagram,Facebook } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const quickLinks = [
      { label: 'About', href: '/about' },
      { label: 'Activities', href: '/activities' },
      { label: 'Resources', href: '/resources' },
      { label: 'Submit Work', href: '/submissions' },
  ]
  const specialZones = [
      { label: 'Teacher\'s Corner', href: '/teachers' },
      { label: 'School Corner', href: '/schools' },
      { label: 'Art Gallery', href: '/gallery' },
      { label: 'Contact Us', href: '/contact' },
  ]

  return (
    <footer className="relative overflow-hidden mx-auto">
      {/* Wavy Layers */}
      <div className="relative mx-auto">
        {/* Pink Wave */}
        <div className="relative bg-[#FB0091] pt-24 pb-12">
          <svg className="absolute top-0 left-0 right-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,0 L0,0 Z" fill="white"/>
          </svg>
          
          {/* Floating Elements */}
          <div className="absolute top-8 left-10 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
          <div className="absolute top-16 right-20 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-white/15 rounded-full blur-xl"></div>

          <div className="container relative z-10 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
              {/* Brand Section */}
              <div>
                <Link href="/" className="flex items-center gap-2 mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-[#FB0091] text-xl shadow-xl">
                        CF
                    </div>
                </Link>
                <h3 className="font-black text-2xl mb-3">Creative Futures</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  Where imagination meets creativity! 🚀
                </p>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#FB0091] cursor-pointer hover:scale-110 transition-transform">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#00B4EE] cursor-pointer hover:scale-110 transition-transform">
                    <Twitter className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#FBC51A] cursor-pointer hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-black text-lg mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FBC51A] rounded-full"></span>
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {quickLinks.map(link => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="text-white/90 hover:text-white hover:translate-x-1 transition-all text-sm font-semibold inline-block"
                      >
                        → {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Special Zones */}
              <div>
                <h4 className="font-black text-lg mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Special Zones
                </h4>
                <ul className="space-y-2">
                  {specialZones.map(link => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="text-white/90 hover:text-white hover:translate-x-1 transition-all text-sm font-semibold inline-block"
                      >
                        → {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="font-black text-lg mb-4">Stay Connected! 💌</h4>
                <p className="text-white/90 text-sm mb-4">
                  Get creative updates & fun activities!
                </p>
                <div className="flex gap-2 mb-4">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded-full text-black font-semibold text-sm outline-none"
                  />
                  <Button 
                    size="icon"
                    className="bg-[#FBC51A] hover:bg-[#FBC51A]/90 rounded-full w-10 h-10 shadow-lg"
                  >
                    <Send className="w-4 h-4 text-black" />
                  </Button>
                </div>
                <div className="flex items-start gap-2 text-white/90 text-xs">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">123 Creativity Lane, Imagination City</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blue Wave */}
        <div className="relative bg-[#00B4EE] py-8">
          <svg className="absolute top-0 left-0 right-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C300,20 500,100 800,60 C1000,30 1100,80 1200,60 L1200,0 L0,0 Z" fill="#FB0091"/>
          </svg>
          
          <div className="container text-center text-white relative z-10 mt-8 mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold mb-4">
              <Link href="/privacy" className="hover:text-[#FBC51A] transition-colors">Privacy Policy</Link>
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              <Link href="/terms" className="hover:text-[#FBC51A] transition-colors">Terms of Service</Link>
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              <Link href="/safety" className="hover:text-[#FBC51A] transition-colors">Child Safety</Link>
            </div>
            <p className="text-sm font-semibold flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 fill-current animate-pulse" /> for young creators worldwide
            </p>
          </div>
        </div>

        {/* Yellow Wave */}
        <div className="relative bg-[#FBC51A] py-6">
          <svg className="absolute top-0 left-0 right-0 w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,50 C400,10 600,90 1200,50 L1200,0 L0,0 Z" fill="#00B4EE"/>
          </svg>
          
          <div className="container text-center relative z-10 mt-6  mx-auto">
            <p className="text-black font-black text-sm">
              © {new Date().getFullYear()} Creative Futures Journal ✨ All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}