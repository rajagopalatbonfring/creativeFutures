// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import * as z from 'zod';
// import { Loader2 } from 'lucide-react';

// import { useAuth } from '@/lib/auth';
// import { Button } from '@/components/ui/button';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { useToast } from '@/hooks/use-toast';

// const formSchema = z.object({
//   email: z.string().email({ message: 'Please enter a valid email address.' }),
//   password: z
//     .string()
//     .min(6, { message: 'Password must be at least 6 characters.' }),
// });

// type AuthFormValues = z.infer<typeof formSchema>;

// interface AuthFormProps {
//   mode: 'login' | 'signup';
// }

// export function AuthForm({ mode }: AuthFormProps) {
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();
//   const { login, signup } = useAuth();
//   const { toast } = useToast();

//   const form = useForm<AuthFormValues>({
//     resolver: zodResolver(formSchema),
//     defaultValues: { email: '', password: '' },
//   });

//   const onSubmit = async (values: AuthFormValues) => {
//     setIsLoading(true);
//     try {
//       if (mode === 'login') {
//         await login(values.email, values.password);
//         toast({ title: 'Welcome back!' });
//       } else {
//         await signup(values.email, values.password);
//         toast({ title: 'Welcome!', description: 'Your account has been created.' });
//       }
//       router.push('/dashboard');
//     } catch (error: any) {
//       console.error(error);
//       const message = error.message.includes('auth/invalid-credential')
//         ? 'Invalid email or password.'
//         : error.message.includes('auth/email-already-in-use')
//         ? 'This email is already taken.'
//         : 'An unexpected error occurred.';
//       toast({
//         title: mode === 'login' ? 'Login Failed' : 'Sign Up Failed',
//         description: message,
//         variant: 'destructive',
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>
//               <FormControl>
//                 <Input placeholder="you@example.com" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="password"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Password</FormLabel>
//               <FormControl>
//                 <Input type="password" placeholder="••••••••" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit" className="w-full" disabled={isLoading}>
//           {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//           {mode === 'login' ? 'Log In' : 'Create Account'}
//         </Button>
//       </form>
//     </Form>
//   );
// }














'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Loader2 } from 'lucide-react';

import { useAuth } from '@/lib/auth-provider'; // ← Update this import to match your file name!
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' }),
});

type AuthFormValues = z.infer<typeof formSchema>;

interface AuthFormProps {
  mode: 'login' | 'signup';
}

export function AuthForm({ mode }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth(); // We only use login for now (mock doesn't have signup yet)
  const { toast } = useToast();

  const form = useForm<AuthFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (values: AuthFormValues) => {
    setIsLoading(true);

    try {
      // For now, mock only supports login
      // If mode === 'signup', we can show a message or extend mock later
      if (mode === 'signup') {
        toast({
          title: 'Sign Up Not Available Yet',
          description: 'Using mock login for development. Use the login credentials below.',
          variant: 'default',
        });
        // Optionally simulate signup by just logging in with same creds
      }

      await login(values.email, values.password);

      toast({
        title: mode === 'login' ? 'Welcome back!' : 'Welcome!',
        description:
          mode === 'login'
            ? 'You are now logged in.'
            : 'Your account has been created (mock mode).',
      });

      router.push('/dashboard');
    } catch (error: any) {
      console.error(error);

      const message =
        error.message?.includes('Invalid credentials')
          ? 'Invalid email or password. Try: kid@creativefutures.com / test1234'
          : error.message || 'An unexpected error occurred.';

      toast({
        title: mode === 'login' ? 'Login Failed' : 'Sign Up Failed',
        description: message,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="kid@creativefutures.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="test1234" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {mode === 'login' ? 'Log In' : 'Create Account'}
        </Button>

        {/* Helpful hint for development */}
        {mode === 'login' && (
          <p className="text-xs text-center text-muted-foreground mt-2">
            Dev mode: Use <strong>kid@creativefutures.com</strong> / <strong>test1234</strong>
          </p>
        )}
      </form>
    </Form>
  );
}