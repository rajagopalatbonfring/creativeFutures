'use client'
import Image from 'next/image';
import Link from 'next/link';
import { AuthForm } from '@/components/auth-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function LoginPage() {
  const image = PlaceHolderImages.find((img) => img.id === 'login-art');
  return (
    <div className="w-full lg:grid lg:min-h-[calc(100vh-11rem)] lg:grid-cols-2 relative overflow-hidden py-24">
      <div className="flex items-center justify-center py-12 relative z-10">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold font-headline">Welcome Back!</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <AuthForm mode="login" />
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="underline text-primary">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        {image && (
          <Image
            src={image.imageUrl}
            alt={image.description}
            data-ai-hint={image.imageHint}
            fill
            className="h-full w-full object-cover"
            sizes="50vw"
          />
        )}
      </div>
    </div>
  );
}
