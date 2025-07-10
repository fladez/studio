
"use client";

import { Fla10Logo } from "@/components/fla10-logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { TiktokIcon } from "../tiktok-icon"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = (href === '/' && pathname === '/') || (href !== '/' && href !== '#' && pathname.startsWith(href));

  return (
    <Link href={href} className={cn(
      "text-sm transition-colors",
      isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-primary-foreground"
    )}>
      {children}
    </Link>
  )
}

const FooterSectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-md font-bold text-primary mb-4 font-headline">{children}</h3>
)

const categoryLinks = [
  { href: "/futebol", label: "Futebol" },
  { href: "/basquete", label: "Basquete" },
  { href: "/volei", label: "Vôlei" },
  { href: "/e-sports", label: "E-Sports" },
  { href: "/olimpicos", label: "Olímpicos" },
];

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full">
      {/* Newsletter Section */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto text-center max-w-2xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-2">Receba as últimas notícias do Flamengo</h2>
          <p className="mb-6 text-base text-primary-foreground/90">Cadastre-se e seja o primeiro a saber de tudo sobre o Mengão</p>
          <div className="flex justify-center">
            <Button asChild variant="secondary" className="bg-card text-accent font-bold hover:bg-black hover:text-white transition-colors">
              <Link href="/register">
                Cadastrar
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="bg-accent text-accent-foreground py-16">
        <div className="container mx-auto px-4">
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
            style={{ transform: 'translateX(-300px)' }}
          >
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Fla10Logo />
                <span className="font-bold text-xl text-primary-foreground">
                  <span className="font-exo">FLA10</span><span className="font-headline"> News</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 max-w-sm text-justify">
                O portal oficial do canal FLA10, de notícias do Clube de Regatas do Flamengo. Todas as informações sobre o Mengão em primeira mão.
              </p>
              <div className="flex items-center gap-4">
                <Link href="https://www.facebook.com/profile.php?id=100075993313125" aria-label="Facebook" className="text-muted-foreground transition-colors hover:text-primary-foreground" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://www.instagram.com/canalfla10/" aria-label="Instagram" className="text-muted-foreground transition-colors hover:text-primary-foreground" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="https://x.com/canalfla10" aria-label="Twitter" className="text-muted-foreground transition-colors hover:text-primary-foreground" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="https://www.youtube.com/@fladez" aria-label="Youtube" className="text-muted-foreground transition-colors hover:text-primary-foreground" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link href="https://www.tiktok.com/@canalfla10" aria-label="Tiktok" className="text-muted-foreground transition-colors hover:text-primary-foreground" target="_blank" rel="noopener noreferrer">
                  <TiktokIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Link Columns */}
            <div>
              <FooterSectionTitle>Portal</FooterSectionTitle>
              <ul className="space-y-2">
                <li><FooterLink href="/">Início</FooterLink></li>
                <li><FooterLink href="/noticias">Notícias</FooterLink></li>
                <li><FooterLink href="/videos">Vídeos</FooterLink></li>
                <li><FooterLink href="/colunas">Colunas</FooterLink></li>
              </ul>
            </div>
            
            <div>
              <FooterSectionTitle>Categorias</FooterSectionTitle>
              <ul className="space-y-2">
                {categoryLinks.map(link => (
                    <li key={link.href}><FooterLink href={link.href}>{link.label}</FooterLink></li>
                ))}
              </ul>
            </div>

            <div>
              <FooterSectionTitle>Clube</FooterSectionTitle>
              <ul className="space-y-2">
                <li><FooterLink href="/historia">História</FooterLink></li>
                <li><FooterLink href="/titulos">Títulos</FooterLink></li>
                <li><FooterLink href="/estadio">Estádio</FooterLink></li>
                <li><FooterLink href="/ct">CT</FooterLink></li>
                <li><FooterLink href="/socio-torcedor">Sócio-Torcedor</FooterLink></li>
              </ul>
            </div>

            <div>
              <FooterSectionTitle>Institucional</FooterSectionTitle>
              <ul className="space-y-2">
                <li><FooterLink href="/fale-conosco">Fale Conosco</FooterLink></li>
                <li><FooterLink href="/trabalhe-conosco">Trabalhe Conosco</FooterLink></li>
                <li><FooterLink href="/assessoria">Assessoria</FooterLink></li>
                <li><FooterLink href="/responsabilidade">Responsabilidade</FooterLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="bg-accent text-accent-foreground border-t border-white/10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 text-xs">
          <p className="text-muted-foreground">© {new Date().getFullYear()} FLA10 News - Canal Fla Dez. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/politica-de-privacidade" className={cn("transition-colors", pathname === '/politica-de-privacidade' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-primary-foreground')}>Política de Privacidade</Link>
            <Link href="/termos-de-uso" className={cn("transition-colors", pathname === '/termos-de-uso' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-primary-foreground')}>Termos de Uso</Link>
            <Link href="/cookies" className={cn("transition-colors", pathname === '/cookies' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-primary-foreground')}>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
