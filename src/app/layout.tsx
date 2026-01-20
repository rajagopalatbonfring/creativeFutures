// import type { Metadata } from 'next';
// import './globals.css';
// import { Providers } from '@/app/providers';
// import { Toaster } from '@/components/ui/toaster';
// import { Footer } from '@/components/footer';
// import { FloatingNavbar } from '@/components/floating-navbar';

// export const metadata: Metadata = {
//   title: 'Creative Futures: A Journal By and For Kids',
//   description: 'A place for kids to explore their creativity.',
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body>
//         <Providers>
//           <FloatingNavbar />
//           <main className="">{children}</main>
//           <Footer />
//           <Toaster />
//         </Providers>
//       </body>
//     </html>
//   );
// }











import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/app/providers';
import { AuthProvider } from '@/lib/auth-provider';  // ← this should point to the mock file
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/footer';
import { FloatingNavbar } from '@/components/floating-navbar';
// import { WaterBackground } from '@/components/fishbackground';

export const metadata: Metadata = {
  title: 'Creative Futures: A Journal By and For Kids',
  description: 'A place for kids to explore their creativity.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <AuthProvider>
            {/* <WaterBackground /> Add fish background here */}
            <FloatingNavbar />
            <main className="relative z-10">{children}</main> {/* Add z-index to keep content above fish */}
            <Footer />
            <Toaster />
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}