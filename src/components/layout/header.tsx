"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Newspaper, Users, Video } from 'lucide-react'
import { FlamengoLogo } from '@/components/flamengo-logo'
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
        "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
        pathname.startsWith(href) ? "text-primary" : "text-muted-foreground"
      )}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto hidden items-center gap-6 md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <FlamengoLogo />
            <span className="hidden font-bold sm:inline-block font-headline">
              Nação Rubro-Negra News
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(link => <NavLink key={link.href} {...link} />)}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2 md:flex-none">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                  <FlamengoLogo />
                  <span className="font-bold font-headline">Nação Rubro-Negra News</span>
                </Link>
                <nav className="flex flex-col space-y-4">
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
              </SheetContent>
            </Sheet>
          </div>
          
          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Registrar-se</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
