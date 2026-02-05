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



















// app/page.tsx    (or app/signup/page.tsx)

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  User,
  Mail,
  Phone,
  Lock,
  Calendar,
  ArrowRight,
  Eye,
  EyeOff,
} from 'lucide-react';
import { Button } from '@/components/ui/button';     // adjust path if needed
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    dob: '',
  });

  const router = useRouter();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:5000/api/users/Createregister",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();          

    console.log("Server data:", data);

    if (response.ok) {
      alert(data.message || "User Registered Successfully");
      router.push('/login')
    } else {
      alert(data.message || "Something went wrong");
    }

  } catch (err) {
    console.error("Error:", err);
    alert("Network Error");
  }
};


  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="
    min-h-screen w-full lg:grid lg:grid-cols-2 relative overflow-hidden 
    bg-gradient-to-br from-white via-blue-50/30 to-pink-50/30
    pt-16 lg:pt-10 ">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#00B4EE]/20 to-[#FB0091]/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#FBC51A]/20 to-[#00B4EE]/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Left Side - Image (hidden on mobile) */}
        <div className="hidden lg:flex relative items-center justify-center p-12 mt-16 lg:mt-20">
          <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full max-w-lg max-h-[700px]"
        >
          {/* Floating Cloud SVG 1 */}
          <motion.svg
            className="absolute -top-8 -left-8 w-24 h-16 opacity-40 z-10"
            viewBox="0 0 100 50"
            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path
              d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z"
              fill="#00B4EE"
            />
          </motion.svg>

          {/* Floating Cloud SVG 2 */}
          <motion.svg
            className="absolute -bottom-6 -right-6 w-20 h-14 opacity-40 z-10"
            viewBox="0 0 100 50"
            animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <path
              d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z"
              fill="#FB0091"
            />
          </motion.svg>

          {/* Stars */}
          <motion.div
            className="absolute top-10 right-10"
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-8 h-8 text-[#FBC51A]" />
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-10"
            animate={{ rotate: [0, -360], scale: [1, 1.3, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-6 h-6 text-[#00B4EE]" />
          </motion.div>

          {/* Image Container */}
          <motion.div
            className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-4 ring-[#00B4EE]/30"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1613950190144-4f2a84c75e8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2lkc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Creative signup illustration"
              fill
              className="object-cover"
              // sizes="(max-width: 768px) 100vw, 50vw"   ← optional: better responsive behavior
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00B4EE]/20 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side - Form */}
<div className="flex items-center justify-center p-8 lg:p-12 relative z-10 mt-16 lg:mt-20">
          <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Header */}
          <div className="text-center mb-8 space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center gap-2 bg-white shadow-lg px-5 py-2 rounded-full text-sm mx-auto border-2 border-[#00B4EE]/20"
            >
              <Sparkles className="w-4 h-4 text-[#00B4EE]" />
              <span className="bg-gradient-to-r from-[#00B4EE] to-[#FB0091] bg-clip-text text-transparent">
                Sign Up
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              Join the <span className="text-[#00B4EE]">Fun!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600"
            >
              Create an account to start your creative journey 🚀
            </motion.p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border-2 border-gray-100 space-y-6"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="pl-11 rounded-xl border-gray-300/50 bg-white/70 focus:ring-2 focus:ring-[#00B4EE]/50 transition-all duration-300 hover:border-[#00B4EE]/50"
                    required
                  />
                </div>
              </motion.div>

              {/* Email */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="pl-11 rounded-xl border-gray-300/50 bg-white/70 focus:ring-2 focus:ring-[#00B4EE]/50 transition-all duration-300 hover:border-[#00B4EE]/50"
                    required
                  />
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="pl-11 rounded-xl border-gray-300/50 bg-white/70 focus:ring-2 focus:ring-[#00B4EE]/50 transition-all duration-300 hover:border-[#00B4EE]/50"
                    required
                  />
                </div>
              </motion.div>

              {/* DOB */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }} className="space-y-2">
                <Label htmlFor="dob" className="text-gray-700">Date of Birth</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                  <Input
                    id="dob"
                    type="date"
                    value={formData.dob}
                    onChange={(e) => handleInputChange('dob', e.target.value)}
                    className="pl-11 rounded-xl border-gray-300/50 bg-white/70 focus:ring-2 focus:ring-[#00B4EE]/50 transition-all duration-300 hover:border-[#00B4EE]/50"
                    required
                  />
                </div>
              </motion.div>

              {/* Password */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }} className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="pl-11 pr-11 rounded-xl border-gray-300/50 bg-white/70 focus:ring-2 focus:ring-[#00B4EE]/50 transition-all duration-300 hover:border-[#00B4EE]/50"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                  </button>
                </div>
              </motion.div>

              {/* Submit */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
                <Button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-[#00B4EE] via-[#FB0091] to-[#FBC51A] hover:shadow-xl hover:scale-105 transition-all duration-300 h-12 group"
                >
                  <span>Create Account</span>
                  <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Login link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center text-sm bg-white/80 backdrop-blur rounded-full px-6 py-3 shadow-md mt-6"
          >
            Already have an account?{' '}
            <button
              onClick={() => console.log('Navigate to login')}
              className="bg-gradient-to-r from-[#00B4EE] to-[#FB0091] bg-clip-text text-transparent hover:from-[#FB0091] hover:to-[#FBC51A] transition-all duration-300"
            >
              Log in →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}