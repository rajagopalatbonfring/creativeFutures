'use client'
import Image from 'next/image';
import Link from 'next/link';
import { AuthForm } from '@/components/auth-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function SignupPage() {
  const image = PlaceHolderImages.find((img) => img.id === 'login-art');
  return (
    <div className="w-full lg:grid lg:min-h-[calc(100vh-11rem)] lg:grid-cols-2 relative overflow-hidden py-24">
      <div className="hidden bg-muted lg:block relative">
        {image && (
          <Image
            src={image.imageUrl}
            alt={image.description}
            data-ai-hint={image.imageHint}
            fill
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            sizes="50vw"
          />
        )}
      </div>
      <div className="flex items-center justify-center py-12 relative z-10">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold font-headline">Join the Fun!</h1>
            <p className="text-balance text-muted-foreground">
              Create an account to start your creative journey.
            </p>
          </div>
          <AuthForm mode="signup" />
          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link href="/login" className="underline text-primary">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
