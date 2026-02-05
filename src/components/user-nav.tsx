// 'use client';

// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { LayoutDashboard, LogOut } from 'lucide-react';

// import { useAuth } from '@/lib/auth';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import { useToast } from '@/hooks/use-toast';

// export function UserNav() {
//   const { user, userProfile, logout, loading } = useAuth();
//   const router = useRouter();
//   const { toast } = useToast();

//   const handleLogout = async () => {
//     try {
//       await logout();
//       router.push('/');
//       toast({
//         title: 'Logged Out',
//         description: "You have been successfully logged out.",
//       });
//     } catch (error) {
//       console.error(error);
//       toast({
//         title: 'Error',
//         description: 'Failed to log out. Please try again.',
//         variant: 'destructive',
//       });
//     }
//   };
  
//   if (loading) {
//     return <div className="h-8 w-20 animate-pulse rounded-md bg-muted" />;
//   }

//   if (!user || !userProfile) {
//     return (
//       <div className="flex items-center gap-2">
//         <Button asChild variant="ghost">
//           <Link href="/login">Log In</Link>
//         </Button>
//         <Button asChild variant="secondary">
//           <Link href="/signup">Sign Up</Link>
//         </Button>
//       </div>
//     );
//   }

//   const getInitials = (name?: string | null) => {
//     if (!name) return 'U';
//     return name
//       .split(' ')
//       .map((n) => n[0])
//       .join('');
//   };

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" className="relative h-8 w-8 rounded-full">
//           <Avatar className="h-8 w-8">
//             <AvatarImage src={userProfile.photoURL ?? ''} alt={userProfile.displayName ?? 'User'} />
//             <AvatarFallback>{getInitials(userProfile.displayName)}</AvatarFallback>
//           </Avatar>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56" align="end" forceMount>
//         <DropdownMenuLabel className="font-normal">
//           <div className="flex flex-col space-y-1">
//             <p className="text-sm font-medium leading-none">{userProfile.displayName}</p>
//             <p className="text-xs leading-none text-muted-foreground">
//               {userProfile.email}
//             </p>
//           </div>
//         </DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//           <DropdownMenuItem onSelect={() => router.push('/dashboard')}>
//             <LayoutDashboard className="mr-2 h-4 w-4" />
//             <span>Dashboard</span>
//           </DropdownMenuItem>
//         </DropdownMenuGroup>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem onSelect={handleLogout}>
//           <LogOut className="mr-2 h-4 w-4" />
//           <span>Log out</span>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }




















'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, LogOut } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

export function UserNav() {
  const router = useRouter();
  const { toast } = useToast();

  // Use state to make it reactive
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);

  // Read from sessionStorage on mount + listen for changes
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = sessionStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(authStatus);

      const storedUser = sessionStorage.getItem('user');
      if (storedUser) {
        try {
          const parsed = JSON.parse(storedUser);
          setUserProfile(parsed);
        } catch (err) {
          console.error('Failed to parse user from sessionStorage', err);
          setUserProfile(null);
        }
      } else {
        setUserProfile(null);
      }
    };

    // Run once on mount
    checkAuth();

    // Listen for storage changes (useful if multiple tabs or login in another tab)
    window.addEventListener('storage', checkAuth);

    // Optional: also poll every few seconds (if storage events don't fire reliably)
    const interval = setInterval(checkAuth, 2000);

    return () => {
      window.removeEventListener('storage', checkAuth);
      clearInterval(interval);
    };
  }, []);

  const getInitials = (name?: string | null) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map((n) => n[0]?.toUpperCase())
      .join('');
  };

  const handleLogout = () => {
    // Clear everything
    sessionStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');

    setIsAuthenticated(false);
    setUserProfile(null);

    toast({
      title: 'Logged Out',
      description: 'You have been successfully logged out.',
    });

    router.push('/login');
  };

  // Loading / initial state
  if (isAuthenticated === null) {
    return <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />;
  }

  // Not logged in
  if (!isAuthenticated) {
    return (
      <div className="flex items-center gap-2">
        <Button asChild variant="ghost" size="sm">
          <Link href="/login">Log In</Link>
        </Button>
        <Button asChild size="sm">
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    );
  }

  // Logged in
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-9 w-9 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src={userProfile?.photoURL ?? ''}
              alt={userProfile?.name ?? 'User'}
            />
            <AvatarFallback>{getInitials(userProfile?.name)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {userProfile?.name || 'User'}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {userProfile?.mobile || userProfile?.email || 'No contact info'}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={() => router.push('/dashboard')}>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="text-red-600 focus:text-red-600 cursor-pointer"
          onSelect={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}