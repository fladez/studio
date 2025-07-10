
import { AdBanner } from "@/components/ad-banner";
import { Badge, Gift, Globe, HandCoins, Rocket, Ticket, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SocioTorcedorPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="mb-12">
        <AdBanner width={728} height={90} />
      </div>

      <header className="text-center mb-16">
         <div className="relative mx-auto h-48 w-48 mb-4">
          <Image
              src="https://i.postimg.cc/prgqYp3b/image-removebg-preview-9.png"
              alt="Socio Torcedor Logo"
              fill
              className="object-contain"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Sócio-Torcedor do Flamengo</h1>
        <p className="text-xl text-muted-foreground mt-2">A Nação que joga junto</p>
      </header>

      <main className="prose prose-lg max-w-none text-foreground/90 text-justify space-y-12 
                       [&_h2]:font-headline [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-primary 
                       [&_h2]:border-b [&_h2]:pb-2 [&_h2]:mb-4 [&_h2]:flex [&_h2]:items-center [&_h2]:gap-3
                       [&_strong]:font-bold [&_p]:leading-relaxed
                       [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">

        <section>
            <h2><Users />O que é o Programa de Sócio-Torcedor?</h2>
            <p>
                O Programa de Sócio-Torcedor do Flamengo, também conhecido como “Nação”, é uma forma oficial do torcedor se conectar diretamente ao clube, contribuindo com sua estrutura financeira e, ao mesmo tempo, recebendo benefícios exclusivos. Mais do que um plano de vantagens, ser sócio-torcedor é participar ativamente da construção de um Flamengo mais forte, vencedor e independente.
            </p>
            <p>
                Criado para aproximar a torcida do dia a dia do clube, o programa já conta com centenas de milhares de associados espalhados pelo Brasil e pelo mundo, sendo um dos maiores do futebol sul-americano.
            </p>
        </section>

        <section>
            <h2><Gift />Benefícios para quem é Sócio-Torcedor</h2>
            <p>
                Ao se associar ao plano, o torcedor passa a ter direito a uma série de benefícios, que variam de acordo com a categoria escolhida. Entre os principais:
            </p>
            <ul>
                <li>Pré-venda exclusiva de ingressos</li>
                <li>Descontos progressivos em ingressos e produtos oficiais</li>
                <li>Acesso a experiências exclusivas com o time</li>
                <li>Pontuação em compras (programa de fidelidade)</li>
                <li>Visitas ao Ninho do Urubu, Maracanã e ações promocionais</li>
                <li>Plataforma de recompensas e sorteios</li>
                <li>Atendimento personalizado para o torcedor cadastrado</li>
            </ul>
        </section>

        <section>
            <h2><Ticket />Garantia de lugar nos grandes jogos</h2>
            <p>
                Com o crescimento da Nação Rubro-Negra e o alto número de jogos com ingressos esgotados, o sócio-torcedor tem a prioridade absoluta na compra e na escolha de assentos, especialmente em partidas decisivas.
            </p>
             <p>
                Em temporadas vitoriosas como 2019 e 2022, os sócios foram decisivos para encher o Maracanã e transformar o estádio em um caldeirão rubro-negro.
            </p>
        </section>

        <section>
            <h2><HandCoins />Impacto direto nas finanças do clube</h2>
            <p>
                O programa gera receitas fixas e previsíveis para o Flamengo, permitindo investimentos em infraestrutura, categorias de base, contratações e modernização administrativa. Cada torcedor que se associa está, literalmente, ajudando o clube a ser mais forte dentro e fora de campo.
            </p>
        </section>

        <section>
            <h2><Badge />Planos disponíveis</h2>
            <p>
                O Flamengo oferece diversas modalidades de associação, que atendem perfis distintos de torcedores: desde quem vai a todos os jogos no Maracanã até quem mora longe, mas quer apoiar o clube com orgulho.
            </p>
            <p>Exemplos de categorias (sujeitas a alteração pelo clube):</p>
             <ul>
                <li>Nação Diamante – Benefícios máximos e prioridade total</li>
                <li>Nação Ouro – Ótimos descontos e acesso preferencial</li>
                <li>Nação Prata e Bronze – Opções acessíveis e ideais para quem está distante</li>
                <li>Nação Internacional – Para torcedores fora do Brasil</li>
            </ul>
        </section>

         <section>
            <h2><Globe />Flamengo é global — e o plano também</h2>
            <p>
                O programa está disponível para torcedores em todo o mundo, com formas simples de pagamento e acesso digital aos benefícios. Mesmo quem não pode frequentar o Maracanã pode vestir o manto com orgulho, sabendo que está contribuindo com o clube.
            </p>
        </section>
        
        <section>
            <h2><Rocket />Faça parte da Nação</h2>
            <p>
                Seja você um torcedor raiz ou alguém que vibra de longe, o programa Sócio-Torcedor do Flamengo é o caminho para se aproximar do clube, viver experiências inesquecíveis e ser reconhecido como um membro oficial da maior torcida do planeta.
            </p>
            <p>
                Acesse o site oficial: {' '}
                <Link href="https://flamengo.com.br/socio-torcedor" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">
                    https://flamengo.com.br/socio-torcedor
                </Link>
                {' '}e escolha o plano ideal para você.
            </p>
        </section>
        
        <footer className="text-center pt-8 border-t">
            <h2 className="font-headline text-2xl font-bold text-foreground">📣 Aqui no FLA10 News...</h2>
            <p className="mt-4">
                ...você acompanha dicas, atualizações, promoções e novidades do programa Sócio-Torcedor em primeira mão. Porque torcer é viver intensamente — e ser sócio é viver o Flamengo de verdade!
            </p>
        </footer>

      </main>

       <div className="mt-12">
        <AdBanner width={728} height={90} />
      </div>
    </div>
  );
}
