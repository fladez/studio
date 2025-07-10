

import Image from "next/image";
import { AdBanner } from "@/components/ad-banner";
import { HistoryCarousel } from "@/components/home/history-carousel";
import { HardHat, Heart, Home, Trophy, Users } from "lucide-react";

export default function CTPage() {

  const historiaImages = [
    { src: "https://i.postimg.cc/nLbhKhdL/622-aa57f624-acde-3f38-b1ef-1667568aa279.jpg", alt: "Construção do Ninho do Urubu" },
    { src: "https://i.postimg.cc/jSkzRPdF/622-8d1981c8-4b44-3b49-8de0-68d30e7b5147.jpg", alt: "Obras no Ninho do Urubu" },
    { src: "https://i.postimg.cc/Hk1qB8CF/12064041-x240.jpg", alt: "Estrutura inicial do Ninho do Urubu" },
    { src: "https://i.postimg.cc/7Yr4QW3B/14032013-uma-parte-da-construcao-do-setor-destinado-ao-futebol-profissional-do-flamengo-1363312298.webp", alt: "Construção do setor profissional" },
    { src: "https://i.postimg.cc/vmTwVFym/flamengo-expande-o-ninho-do-urubu-com-novos-campos-e-miniestadio-1-1.webp", alt: "Expansão do Ninho do Urubu" },
    { src: "https://i.postimg.cc/cCQpSdRF/obrasctflamengo-ninhodourubu-div.webp", alt: "Obras no CT do Flamengo" },
  ];

  const estruturaImages = [
    { src: "https://i.postimg.cc/k4pJ4QpB/estadio-no-Ninho-do-Urubu-1200x720.png", alt: "Miniestádio no Ninho do Urubu" },
    { src: "https://i.postimg.cc/9fXwwBJp/imagem-aerea-do-ninho-do-urubu-ct-do-flamengo-tirada-em-junho-de-2023-1710347099603-v2-750x421.png", alt: "Vista aérea do Ninho do Urubu em 2023" },
    { src: "https://i.postimg.cc/Pf0DVY5X/FACHADA-CT-BASE-768x432.jpg", alt: "Fachada do CT da Base" },
    { src: "https://i.postimg.cc/rwXpx9F4/50091313107-eaf6a4355b-k-768x511.jpg", alt: "Campo de treinamento do Flamengo" },
    { src: "https://i.postimg.cc/k57XhXSX/ct-ninho-urubu-flamengo.webp", alt: "Vista do CT Ninho do Urubu" },
    { src: "https://i.postimg.cc/tgDC0Qdd/download.jpg", alt: "Estrutura interna do Ninho do Urubu" },
    { src: "https://i.postimg.cc/vBB8bqXJ/dyqhjwwwsaecrge-1.webp", alt: "Academia do Ninho do Urubu" },
    { src: "https://i.postimg.cc/GmCydRD6/fachada-do-ninho-do-urubu-74019.webp", alt: "Fachada Ninho do Urubu" },
    { src: "https://i.postimg.cc/13rNzdcX/flamengo-9603261.jpg", alt: "Área de treinamento do Flamengo" },
    { src: "https://i.postimg.cc/K8xRCNS2/images-1.jpg", alt: "Campo de futebol no Ninho do Urubu" },
    { src: "https://i.postimg.cc/5ttj222K/images-2.jpg", alt: "Campo do Ninho do Urubu" },
    { src: "https://i.postimg.cc/6323CbRd/images.jpg", alt: "Vista do campo de treinamento" },
    { src: "https://i.postimg.cc/FRMKpbgw/maxresdefault.jpg", alt: "Vista ampla dos campos" },
    { src: "https://i.postimg.cc/RhmBqgTC/ninho-do-urubu-5-20231218094641.jpg", alt: "Ninho do Urubu em 2023" },
    { src: "https://i.postimg.cc/2yGPyr6T/whatsapp-image-2020-05-22-at-12-46-17-1.webp", alt: "Entrada do CT do Flamengo" },
    { src: "https://i.postimg.cc/J47fgD6F/whatsapp-image-2022-11-30-at-08-49-55.jpg", alt: "Área interna do Ninho do Urubu" }
  ];

  const ninhoImages = [
    { src: "https://i.postimg.cc/9M5gFGgp/Whats-App-Image-2025-07-10-at-15-51-44.jpg", alt: "Entrada do CT Ninho do Urubu" },
    { src: "https://i.postimg.cc/WbbW3p8Q/flamengo-base-20250416101520.webp", alt: "Vista aérea do Ninho do Urubu" },
    { src: "https://i.postimg.cc/DwRBBrhT/Whats-App-Image-2025-07-10-at-15-52-49.jpg", alt: "Campos de treinamento no Ninho do Urubu" },
    { src: "https://i.postimg.cc/rp6NSqGy/Design-sem-nome-12.png", alt: "Jogadores treinando no Ninho do Urubu" },
  ];

  const baseImages = [
    { src: "https://i.postimg.cc/wvqhQp2S/FBL-LIBERTADORES-EMELEC-FLAMENGO-G5-T3-L4-OUR-1.jpg", alt: "Talentos da base do Flamengo" },
    { src: "https://i.postimg.cc/rszx7Nvj/fla-s20-matheus-goncalves-2022-jpg.webp", alt: "Matheus Gonçalves na base" },
    { src: "https://i.postimg.cc/xjFKMBz4/maxresdefault.jpg", alt: "Jogadores da base comemorando" },
    { src: "https://i.postimg.cc/Z56pkRDG/wesley-flamengo-e1735914081692.webp", alt: "Wesley, cria da base" },
    { src: "https://i.postimg.cc/NMCr8r5H/joao-gomes-trofeu-libertadores-flamengo-e1673561836420.webp", alt: "João Gomes com a taça da Libertadores" },
    { src: "https://i.postimg.cc/XqZBs7CD/i.jpg", alt: "Vinicius Jr. e Lucas Paquetá na base" },
    { src: "https://i.postimg.cc/Cxpn40Lm/AFP-20250620-2221195670-v1-High-Res-Cr-Flamengo-VChelsea-Fc-Group-DFifa-Club-World-Cup20-scaled-aspect-r.webp", alt: "Matheus França em ação" },
    { src: "https://i.postimg.cc/fLPJSnr7/copinha-fla.webp", alt: "Time da base campeão da Copinha" },
    { src: "https://i.postimg.cc/fy0kx2GG/e973ff377195e334caa47d41e5ab5ffddfce1ea4-jpg.webp", alt: "Reinier, cria da base" },
    { src: "https://i.postimg.cc/xjW3BW1b/dsc-2595.webp", alt: "Lorran, joia da base do Flamengo" }
  ];

  const tragedyMemorialImages = [
    { src: "https://i.postimg.cc/ZK0dq0BB/5c5e02472d8c2.webp", alt: "Memorial em homenagem aos Garotos do Ninho", "data-ai-hint": "memorial tribute" },
    { src: "https://i.postimg.cc/pdkW8Y32/87069039-2996282763757331-8550401814632071168-n.jpg", alt: "Homenagem da torcida aos Garotos do Ninho", "data-ai-hint": "fan tribute" },
    { src: "https://i.postimg.cc/kgH3dYrR/images-3.jpg", alt: "Velas em memória dos Garotos do Ninho", "data-ai-hint": "candles memorial" },
    { src: "https://i.postimg.cc/c1fFx93t/images-6.jpg", alt: "Homenagem aos Garotos do Ninho" },
    { src: "https://i.postimg.cc/3xhNMRTD/images-5.jpg", alt: "Luto pelos Garotos do Ninho" },
    { src: "https://i.postimg.cc/634t4JKX/images-4.jpg", alt: "Homenagem no Maracanã" },
    { src: "https://i.postimg.cc/rF83vXHw/garotos.avif", alt: "Arte em homenagem aos Garotos do Ninho" },
    { src: "https://i.postimg.cc/VLQn6zwz/26390d9ba3f6a9aa1db67a6f52a11443cc0398ba-jpg.webp", alt: "Grafite em memória dos Garotos do Ninho" },
    { src: "https://i.postimg.cc/htGj4YXS/6-soccer-brazil-fla-flu.webp", alt: "Minuto de silêncio em clássico" },
  ];

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      {/* HMR Refresh */}
      <div className="mb-12">
        <AdBanner width={728} height={90} />
      </div>
      
       <div className="mb-12 relative aspect-video w-full h-auto max-h-[300px] overflow-hidden rounded-lg">
          <Image
              src="https://i.postimg.cc/zB32JKht/522736890-ninho1crop1589808535582jpg554688468.webp"
              alt="Vista aérea do Ninho do Urubu"
              fill
              className="object-cover"
              priority
          />
        </div>

      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">🦅 CT Ninho do Urubu</h1>
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
          <HistoryCarousel images={historiaImages} autoplay={true} />
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
           <HistoryCarousel images={estruturaImages} autoplay={true} />
        </section>
        
        <section>
          <h2><HardHat />Miniestádio no Ninho do Urubu em construção</h2>
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
          <HistoryCarousel images={baseImages} autoplay={false} />
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
