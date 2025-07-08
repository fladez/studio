import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fla10 News',
  description: 'Seu portal diário de notícias sobre o Clube de Regatas do Flamengo.',
};

function SocialBar() {
  return (
    <div className="bg-primary/35 text-primary-foreground">
      <div className="container mx-auto flex h-10 items-center justify-between">
        <p className="text-sm font-medium">Siga o FLA10 News</p>
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
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-background font-body antialiased">
        <div className="relative flex min-h-screen flex-col">
          <SocialBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
