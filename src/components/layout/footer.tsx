import { Fla10Logo } from "@/components/fla10-logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { TiktokIcon } from "../tiktok-icon"

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
    {children}
  </Link>
)

const FooterSectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-md font-bold text-primary mb-4 font-headline">{children}</h3>
)

export function Footer() {
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
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-6 gap-8">
          
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Fla10Logo />
              <span className="font-bold text-xl text-primary-foreground">
                <span className="font-exo">FLA10</span><span className="font-headline"> News</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm text-justify">
              O portal oficial do canal FLA10, de  notícias do Clube de Regatas do Flamengo. Todas as informações sobre o Mengão em primeira mão.
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
          <div className="col-span-1">
            <FooterSectionTitle>Portal</FooterSectionTitle>
            <ul className="space-y-2">
              <li><FooterLink href="/">Início</FooterLink></li>
              <li><FooterLink href="/noticias">Notícias</FooterLink></li>
              <li><FooterLink href="/videos">Vídeos</FooterLink></li>
              <li><FooterLink href="/colunas">Colunas</FooterLink></li>
              <li><FooterLink href="#">Bastidores</FooterLink></li>
            </ul>
          </div>

          <div className="col-span-1">
            <FooterSectionTitle>Modalidades</FooterSectionTitle>
            <ul className="space-y-2">
              <li><FooterLink href="#">Futebol</FooterLink></li>
              <li><FooterLink href="#">Basquete</FooterLink></li>
              <li><FooterLink href="#">Vôlei</FooterLink></li>
              <li><FooterLink href="#">Futsal</FooterLink></li>
              <li><FooterLink href="#">E-Sports</FooterLink></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <FooterSectionTitle>Clube</FooterSectionTitle>
            <ul className="space-y-2">
              <li><FooterLink href="#">História</FooterLink></li>
              <li><FooterLink href="#">Títulos</FooterLink></li>
              <li><FooterLink href="#">Estádio</FooterLink></li>
              <li><FooterLink href="#">CT</FooterLink></li>
              <li><FooterLink href="#">Sócio-Torcedor</FooterLink></li>
            </ul>
          </div>

          <div className="col-span-1">
            <FooterSectionTitle>Contato</FooterSectionTitle>
            <ul className="space-y-2">
              <li><FooterLink href="#">Fale Conosco</FooterLink></li>
              <li><FooterLink href="#">Assessoria</FooterLink></li>
              <li><FooterLink href="#">Credenciamento</FooterLink></li>
              <li><FooterLink href="#">Trabalhe Conosco</FooterLink></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="bg-accent text-accent-foreground border-t border-white/10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Canal Fla Dez. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/politica-de-privacidade" className="hover:text-primary-foreground transition-colors">Política de Privacidade</Link>
            <Link href="/termos-de-uso" className="hover:text-primary-foreground transition-colors">Termos de Uso</Link>
            <Link href="#" className="hover:text-primary-foreground transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
