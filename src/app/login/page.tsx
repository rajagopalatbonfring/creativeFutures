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
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Phone,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const image = PlaceHolderImages.find((img) => img.id === 'login-art');

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || 'Login successful!');
        await sessionStorage.setItem('token', data.token);
        await sessionStorage.setItem('user', JSON.stringify(data.data));
        await sessionStorage.setItem('isAuthenticated', 'true');
        router.push('/dashboard');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full lg:grid lg:grid-cols-2 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-pink-50/30 pt-16 lg:pt-20">
      {/* Left Side - Form */}
      <div className="flex min-h-screen items-center justify-center p-6 lg:p-12 relative z-10">
        <motion.div
          className="w-full max-w-md space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#FB0091]/30 shadow-sm mx-auto"
            >
              <Sparkles className="h-4 w-4 text-[#FB0091]" />
              <span className="text-sm font-semibold bg-gradient-to-r from-[#FB0091] to-[#00B4EE] bg-clip-text text-transparent">
                Login
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Welcome <span className="text-[#FB0091]">Back</span>
            </h1>

            <p className="text-gray-600 text-lg">
              Log in to continue your creative journey
            </p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/85 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100/50 p-8 lg:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 font-medium">
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="pl-12 h-12 rounded-xl border-gray-300/60 bg-white/70 focus:border-[#00B4EE]/60 focus:ring-[#00B4EE]/30 transition-all"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="pl-12 pr-12 h-12 rounded-xl border-gray-300/60 bg-white/70 focus:border-[#00B4EE]/60 focus:ring-[#00B4EE]/30 transition-all"
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 rounded-xl bg-gradient-to-r from-[#00B4EE] via-[#FB0091] to-[#FBC51A] hover:brightness-110 hover:shadow-lg transition-all duration-300 group text-white font-medium"
              >
                {isLoading ? (
                  'Logging in...'
                ) : (
                  <>
                    Log In
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Signup link */}
          <div className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link
              href="/signup"
              className="font-semibold text-[#FB0091] hover:text-[#00B4EE] transition-colors"
            >
              Sign up →
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Illustration (desktop only) */}
      <div className="hidden lg:flex items-center justify-center p-12 relative">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-lg aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-8 border-white ring-2 ring-[#FB0091]/20"
        >
          {image ? (
            <Image
              src={image.imageUrl}
              alt={image.description || 'Login illustration'}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <Image
              src="https://picsum.photos/seed/login/600/800"
              alt="Creative login illustration"
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}