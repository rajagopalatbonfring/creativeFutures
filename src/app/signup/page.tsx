// 'use client'
// import Image from 'next/image';
// import Link from 'next/link';
// import { AuthForm } from '@/components/auth-form';
// import { PlaceHolderImages } from '@/lib/placeholder-images';

// export default function SignupPage() {
//   const image = PlaceHolderImages.find((img) => img.id === 'login-art');
//   return (
//     <div className="w-full lg:grid lg:min-h-[calc(100vh-11rem)] lg:grid-cols-2 relative overflow-hidden">
//       <div className="hidden bg-muted lg:block relative">
//         {image && (
//           <Image
//             src={image.imageUrl}
//             alt={image.description}
//             data-ai-hint={image.imageHint}
//             fill
//             className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
//             sizes="50vw"
//           />
//         )}
//       </div>
//       <div className="flex items-center justify-center py-12 relative z-10">
//         <div className="mx-auto grid w-[350px] gap-6">
//           <div className="grid gap-2 text-center">
//             <h1 className="text-3xl font-bold font-headline">Join the Fun!</h1>
//             <p className="text-balance text-muted-foreground">
//               Create an account to start your creative journey.
//             </p>
//           </div>
//           <AuthForm mode="signup" />
//           <div className="mt-4 text-center text-sm">
//             Already have an account?{' '}
//             <Link href="/login" className="underline text-primary">
//               Log In
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



















'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AuthForm } from '@/components/auth-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Sparkles } from 'lucide-react';

export default function SignupPage() {
  const image = PlaceHolderImages.find((img) => img.id === 'login-art');
  
  return (
    <div className="w-full lg:grid lg:min-h-[calc(100vh-11rem)] lg:grid-cols-2 relative overflow-hidden bg-white">
      {/* Left Side - Image */}
      <div className="hidden lg:block relative">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#00B4EE]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#FBC51A]/20 rounded-full blur-3xl"></div>

        <div className="relative h-full p-12 flex items-center justify-center">
          <div className="relative w-full h-full max-w-lg max-h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-4 ring-[#00B4EE]/30">
            {image ? (
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover"
                sizes="50vw"
              />
            ) : (
              <Image
                src="https://picsum.photos/seed/signup/600/800"
                alt="Signup illustration"
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex items-center justify-center py-12 relative z-10 bg-gradient-to-br from-[#FBC51A]/5 via-[#FB0091]/5 to-[#00B4EE]/5">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B4EE]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FB0091]/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

        {/* Cloud SVGs */}
        <svg className="absolute top-20 left-10 w-20 h-14 opacity-30" viewBox="0 0 100 50">
          <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#00B4EE"/>
        </svg>

        <motion.div 
          className="mx-auto grid w-[400px] gap-6 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid gap-4 text-center">
            <div className="inline-flex items-center justify-center gap-2 bg-white shadow-lg px-5 py-2 rounded-full text-sm font-bold mx-auto border-2 border-[#00B4EE]/20">
              <Sparkles className="w-4 h-4 text-[#00B4EE]" />
              <span className="bg-gradient-to-r from-[#00B4EE] to-[#FB0091] bg-clip-text text-transparent">
                Sign Up
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-headline">
              Join the <span className="text-[#00B4EE]">Fun!</span>
            </h1>
            <p className="text-gray-600 text-base">
              Create an account to start your creative journey 🚀
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-gray-100">
            <AuthForm mode="signup" />
          </div>

          <div className="text-center text-sm bg-white/80 backdrop-blur rounded-full px-6 py-3 shadow-md">
            Already have an account?{' '}
            <Link href="/login" className="font-bold text-[#00B4EE] hover:text-[#FB0091] transition-colors">
              Log in →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}