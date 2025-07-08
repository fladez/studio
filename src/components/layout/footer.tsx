import { FlamengoLogo } from "@/components/flamengo-logo"

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <FlamengoLogo />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Nação Rubro-Negra News. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary">Termos de Serviço</a>
          <a href="#" className="hover:text-primary">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  )
}
