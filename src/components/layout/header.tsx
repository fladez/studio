"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ArrowLeft, Menu, Newspaper, Users, Video } from 'lucide-react'
import { Fla10Logo } from '@/components/fla10-logo'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/noticias', label: 'Notícias', icon: Newspaper },
  { href: '/colunas', label: 'Colunas', icon: Users },
  { href: '/videos', label: 'Vídeos', icon: Video },
]

export function Header() {
  const pathname = usePathname()

  const NavLink = ({ href, label, icon: Icon }: { href: string, label: string, icon: React.ElementType }) => (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 text-sm font-medium transition-colors",
        pathname.startsWith(href)
          ? "text-primary-foreground"
          : "text-primary-foreground/70 hover:text-primary-foreground"
      )}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Fla10Logo />
            <span className="font-bold text-primary-foreground">
              <span className="font-exo">FLA10</span><span className="font-headline"> News</span>
            </span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navLinks.map(link => <NavLink key={link.href} {...link} />)}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" asChild className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-white/10">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Registrar-se</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col p-0">
                <div className="flex h-16 items-center border-b px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Fla10Logo />
                        <span className="font-bold">
                            <span className="font-exo">FLA10</span><span className="font-headline"> News</span>
                        </span>
                    </Link>
                </div>
                <div className="flex-1 overflow-y-auto">
                    <nav className="grid gap-2 p-4">
                        <Link
                            href="/"
                            className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                            pathname === '/' ? 'bg-muted text-primary' : 'text-muted-foreground'
                            )}
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Início
                        </Link>
                        {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                            pathname.startsWith(link.href) ? 'bg-muted text-primary' : 'text-muted-foreground'
                            )}
                        >
                            <link.icon className="h-4 w-4" />
                            {link.label}
                        </Link>
                        ))}
                    </nav>
                </div>
                <div className="mt-auto border-t p-6">
                  <div className="flex flex-col gap-2">
                    <Button asChild variant="outline">
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/register">Registrar-se</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
