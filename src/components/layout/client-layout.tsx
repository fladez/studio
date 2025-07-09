'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import { TiktokIcon } from '@/components/tiktok-icon';

function SocialBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex h-10 items-center justify-between">
        <p className="font-sans text-sm font-bold">Siga o FLA10</p>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Facebook" className="transition-opacity hover:opacity-80">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Instagram" className="transition-opacity hover:opacity-80">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Twitter" className="transition-opacity hover:opacity-80">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Youtube" className="transition-opacity hover:opacity-80">
            <Youtube className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Tiktok" className="transition-opacity hover:opacity-80">
            <TiktokIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ClientLayout({
  children,
  nextGameBanner
}: {
  children: React.ReactNode;
  nextGameBanner: React.ReactNode;
}) {
  return (
      <div className="relative flex min-h-screen flex-col">
        <SocialBar />
        <Header />
        {nextGameBanner}
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
  );
}
