
import Image from "next/image";
import { AdBanner } from "@/components/ad-banner";
import { HistoryCarousel } from "@/components/home/history-carousel";
import { HardHat, Heart, Home, Trophy, Users } from "lucide-react";

export default function CTPage() {

  const ninhoImages = [
    { src: "https://i.postimg.cc/9M5gFGgp/Whats-App-Image-2025-07-10-at-15-51-44.jpg", alt: "Entrada do CT Ninho do Urubu" },
    { src: "https://i.postimg.cc/WbbW3p8Q/flamengo-base-20250416101520.webp", alt: "Vista aérea do Ninho do Urubu" },
    { src: "https://i.postimg.cc/DwRBBrhT/Whats-App-Image-2025-07-10-at-15-52-49.jpg", alt: "Campos de treinamento no Ninho do Urubu" },
    { src: "https://i.postimg.cc/rp6NSqGy/Design-sem-nome-12.png", alt: "Jogadores treinando no Ninho do Urubu" },
    { src: "https://placehold.co/1200x675.png", alt: "Academia do CT", "data-ai-hint": "modern gym" },
    { src: "https://placehold.co/1200x675.png", alt: "Departamento de fisioterapia", "data-ai-hint": "physical therapy" },
  ];

  const baseImages = [
    { src: "https://placehold.co/1200x675.png", alt: "Jogadores da base do Flamengo", "data-ai-hint": "youth soccer" },
    { src: "https://placehold.co/1200x675.png", alt: "Time da base comemorando título", "data-ai-hint": "team celebration" },
    { src: "https://placehold.co/1200x675.png", alt: "Jovem talento treinando", "data-ai-hint": "young player" },
  ];

  const tragedyMemorialImages = [
    { src: "https://placehold.co/1200x675.png", alt: "Memorial em homenagem aos Garotos do Ninho", "data-ai-hint": "memorial tribute" },
    { src: "https://placehold.co/1200x675.png", alt: "Homenagem da torcida", "data-ai-hint": "fan tribute" },
  ];

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="mb-12">
        <AdBanner width={728} height={90} />
      </div>
      
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">🏋️‍♂️ CT Ninho do Urubu</h1>
        <p className="text-xl text-muted-foreground mt-2">O coração pulsante do Flamengo moderno</p>
      </header>

      <main className="prose prose-lg max-w-none text-foreground/90 text-justify space-y-12 
                       [&_h2]:font-headline [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-primary 
                       [&_h2]:border-b [&_h2]:pb-2 [&_h2]:mb-4 [&_h2]:flex [&_h2]:items-center [&_h2]:gap-3
                       [&_strong]:font-bold [&_p]:leading-relaxed
                       [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
        
        <section>
          <h2><Home />História e construção do Ninho do Urubu</h2>
          <p>
            O Centro de Treinamento George Helal, mais conhecido como Ninho do Urubu, é o local onde o Flamengo treina, se prepara e se transforma para vencer. Localizado em Vargem Grande, na Zona Oeste do Rio de Janeiro, o CT é hoje referência em infraestrutura esportiva na América do Sul.
          </p>
          <p>
            O terreno foi adquirido ainda na década de 1980, mas as obras só começaram efetivamente nos anos 2000, sendo concluídas em etapas. Em 2012, o clube inaugurou oficialmente as primeiras instalações. A partir de 2013, com a reestruturação financeira do Flamengo, o Ninho passou por um processo de expansão e modernização profunda.
          </p>
          <p>
            O nome “George Helal” é uma homenagem a um ex-presidente do clube, que doou parte do valor necessário para a aquisição do terreno. Já o apelido “Ninho do Urubu” se tornou natural: é o lugar onde os urubus (símbolo da torcida) se reúnem para voar mais alto.
          </p>
        </section>

        <section>
          <h2><Trophy />Estrutura de ponta para um clube gigante</h2>
          <p>
            Hoje, o Ninho do Urubu conta com uma das estruturas mais modernas da América Latina. O espaço é dividido entre o futebol profissional, as categorias de base e a área de apoio administrativo. Entre seus principais destaques estão:
          </p>
          <ul>
            <li>Campos oficiais de treinamento (grama padrão FIFA, alguns com arquibancadas e iluminação)</li>
            <li>Centro de Reabilitação Física e Fisioterapia</li>
            <li>Academia de última geração</li>
            <li>Hotelaria interna para atletas profissionais e da base</li>
            <li>Departamento de Nutrição, Psicologia e Fisiologia</li>
            <li>Salas de imprensa e auditório para entrevistas</li>
            <li>Laboratórios de análise de desempenho</li>
            <li>Restaurante e espaços de convivência para os atletas</li>
          </ul>
        </section>
        
        <section>
          <h2><HardHat />Miniestádio em construção</h2>
           <p>
              Como parte do projeto de ampliação da estrutura, o Flamengo anunciou a construção de um miniestádio dentro do Ninho do Urubu, com capacidade estimada entre 5 e 7 mil lugares. A nova arena servirá para jogos da base, do futebol feminino, amistosos e até treinos com público.
           </p>
           <p>
              O miniestádio trará arquibancadas cobertas, vestiários modernos, cabines de imprensa e iluminação para jogos noturnos, aproximando a torcida dos jovens talentos e reforçando o ambiente competitivo nas divisões inferiores.
           </p>
           <p>
              A expectativa é que o equipamento seja concluído nos próximos anos e passe a ser mais uma ferramenta estratégica para desenvolver atletas em um ambiente com pressão real de jogo.
          </p>
          <HistoryCarousel images={ninhoImages} autoplay={true} />
        </section>

        <section>
          <h2><Users />Berço de futuras estrelas</h2>
          <p>
            As categorias de base também são parte vital do Ninho do Urubu. Atletas jovens têm acesso à mesma estrutura dos profissionais, com acompanhamento técnico, psicológico e educacional. Dali saíram craques como Vinícius Jr., Lucas Paquetá, Reinier, Matheus França e tantos outros talentos exportados para o futebol mundial.
          </p>
          <p>
            O Flamengo investe fortemente em formação e captação, consolidando o Ninho como um verdadeiro celeiro de craques.
          </p>
          <HistoryCarousel images={baseImages} autoplay={true} />
        </section>
        
        <section>
          <h2><Heart />Tragédia e Memória</h2>
          <p>
            No dia 8 de fevereiro de 2019, o Ninho do Urubu foi palco de uma das maiores tragédias do esporte brasileiro. Um incêndio no alojamento da base vitimou 10 jovens atletas, deixando o clube, as famílias e toda a torcida em luto.
          </p>
          <p>
            Desde então, o Flamengo tem buscado fortalecer as medidas de segurança, apoio às famílias e ações de memória. O compromisso com a base continua, agora com responsabilidade ainda maior.
          </p>
          <HistoryCarousel images={tragedyMemorialImages} autoplay={true} />
        </section>

         <footer className="text-center pt-8 border-t">
              <h2 className="font-headline text-2xl font-bold text-foreground">🔴⚫ Orgulho Rubro-Negro</h2>
              <p className="mt-4">
                  Mais do que um centro de treinamento, o Ninho do Urubu representa a nova era do Flamengo: organizado, estruturado, ambicioso e vencedor. É lá que nascem os sonhos, se preparam os títulos e se moldam os ídolos da Nação.
              </p>
              <p className="mt-4 font-bold">
                  📣 Acompanhe tudo no FLA10 News. Porque onde o Flamengo treina, o Brasil inteiro presta atenção.
              </p>
         </footer>
      </main>
      
      <div className="mt-12">
        <AdBanner width={728} height={90} />
      </div>
    </div>
  );
}
