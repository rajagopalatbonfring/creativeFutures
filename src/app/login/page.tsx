// 'use client'
// import Image from 'next/image';
// import Link from 'next/link';
// import { AuthForm } from '@/components/auth-form';
// import { PlaceHolderImages } from '@/lib/placeholder-images';

// export default function LoginPage() {
//   const image = PlaceHolderImages.find((img) => img.id === 'login-art');
//   return (
//     <div className="w-full lg:grid lg:min-h-[calc(100vh-11rem)] lg:grid-cols-2 relative overflow-hidden">
//       <div className="flex items-center justify-center py-12 relative z-10">
//         <div className="mx-auto grid w-[350px] gap-6">
//           <div className="grid gap-2 text-center">
//             <h1 className="text-3xl font-bold font-headline">Welcome Back!</h1>
//             <p className="text-balance text-muted-foreground">
//               Enter your email below to login to your account
//             </p>
//           </div>
//           <AuthForm mode="login" />
//           <div className="mt-4 text-center text-sm">
//             Don&apos;t have an account?{' '}
//             <Link href="/signup" className="underline text-primary">
//               Sign up
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="hidden bg-muted lg:block relative">
//         {image && (
//           <Image
//             src={image.imageUrl}
//             alt={image.description}
//             data-ai-hint={image.imageHint}
//             fill
//             className="h-full w-full object-cover"
//             sizes="50vw"
//           />
//         )}
//       </div>
//     </div>
//   );
// }














// LOGIN PAGE
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AuthForm } from '@/components/auth-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Sparkles } from 'lucide-react';

export default function LoginPage() {
  const image = PlaceHolderImages.find((img) => img.id === 'login-art');
  
  return (
    <div className="w-full lg:grid lg:min-h-[calc(100vh-11rem)] lg:grid-cols-2 relative overflow-hidden bg-white">
      {/* Left Side - Form */}
      <div className="flex items-center justify-center py-12 relative z-10 bg-gradient-to-br from-[#00B4EE]/5 via-[#FB0091]/5 to-[#FBC51A]/5">
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FB0091]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00B4EE]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        {/* Cloud SVGs */}
        <svg className="absolute top-20 right-10 w-20 h-14 opacity-30" viewBox="0 0 100 50">
          <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#FBC51A"/>
        </svg>

        <motion.div 
          className="mx-auto grid w-[400px] gap-6 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid gap-4 text-center">
            <div className="inline-flex items-center justify-center gap-2 bg-white shadow-lg px-5 py-2 rounded-full text-sm font-bold mx-auto border-2 border-[#FB0091]/20">
              <Sparkles className="w-4 h-4 text-[#FB0091]" />
              <span className="bg-gradient-to-r from-[#FB0091] to-[#00B4EE] bg-clip-text text-transparent">
                Login
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-headline">
              Welcome <span className="text-[#FB0091]">Back!</span>
            </h1>
            <p className="text-gray-600 text-base">
              Enter your email below to login to your account 🎨
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-gray-100">
            <AuthForm mode="login" />
          </div>

          <div className="text-center text-sm bg-white/80 backdrop-blur rounded-full px-6 py-3 shadow-md">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="font-bold text-[#FB0091] hover:text-[#00B4EE] transition-colors">
              Sign up →
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block relative">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#FBC51A]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#00B4EE]/20 rounded-full blur-3xl"></div>

        <div className="relative h-full p-12 flex items-center justify-center">
          <div className="relative w-full h-full max-w-lg max-h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-4 ring-[#FB0091]/30">
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
                src="https://picsum.photos/seed/login/600/800"
                alt="Login illustration"
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}