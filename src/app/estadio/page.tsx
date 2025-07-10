
import Image from "next/image";
import { AdBanner } from "@/components/ad-banner";
import { HistoryCarousel } from "@/components/home/history-carousel";
import { Building, Globe, Home } from "lucide-react";

export default function EstadioPage() {

  const maracanaImages = [
      { src: "https://i.postimg.cc/P5rhP0KV/maracana-1100562.jpg", alt: "Vista panorâmica do Maracanã" },
      { src: "https://i.postimg.cc/SKHp1R4H/flamengo-x-Botafogo-site.jpg", alt: "Jogo do Flamengo no Maracanã" },
      { src: "https://i.postimg.cc/MTRJCwKH/maracana-1.jpg", alt: "Fachada do Estádio do Maracanã" },
      { src: "https://i.postimg.cc/3NTQ7qdB/flamengo-torcida-maracana.webp", alt: "Torcida do Flamengo no Maracanã" },
      { src: "https://i.postimg.cc/cCByJc3N/flamengo-maracana-tour-riobycariocas-01.png", alt: "Tour do Maracanã com as cores do Flamengo" },
      { src: "https://i.postimg.cc/h4LqMK53/download.jpg", alt: "Gramado do Maracanã" },
  ];

   const gaveaImages = [
    { src: "https://i.postimg.cc/xCH5WW6T/estadio-da-gavea.webp", alt: "Estádio da Gávea" },
    { src: "https://i.postimg.cc/3rX99Qyt/gavea-entrada-768x512.jpg", alt: "Entrada do Estádio da Gávea" },
    { src: "https://i.postimg.cc/XJMccsnM/gavea-reproducao-internet.jpg", alt: "Vista interna do Estádio da Gávea" },
    { src: "https://i.postimg.cc/ZqXjsTFM/579f8749e4399.jpg", alt: "Arquibancada do Estádio da Gávea" },
    { src: "https://i.postimg.cc/sxjWw88L/PAN-GAVEA-768x511.png", alt: "Vista panorâmica do Estádio da Gávea" },
    { src: "https://i.postimg.cc/RF9JZyM0/Sede-Gavea.jpg", alt: "Sede social da Gávea" },
    { src: "https://i.postimg.cc/6QZC3CnM/image.jpg", alt: "Piscina na sede da Gávea" },
  ];

  const gasometroImages = [
    { src: "https://i.postimg.cc/x8xK98Yw/render-estadio-flamengo-gasometro-1.jpg", alt: "Render do projeto do estádio do Flamengo no Gasômetro" },
    { src: "https://i.postimg.cc/W12Z5Q2K/Estadio-do-Flamengo-no-Gasometro-1200x900-1-1024x768.jpg", alt: "Outra perspectiva do projeto do estádio" },
    { src: "https://i.postimg.cc/8CHg99wR/images.jpg", alt: "Vista aérea da região do Gasômetro" },
    { src: "https://i.postimg.cc/HnW2S3Tz/terreno-gasometro-flamengo-1.webp", alt: "Terreno do Gasômetro onde pode ser o estádio" },
  ];

  const torcidaImages = [
    { src: "https://i.postimg.cc/0yCZjBrQ/180813-torcida-do-flamengo-marca-presenca-no-estadio-mane-garrincha-em-brasilia-para-o-duelo-contra.jpg", alt: "Torcida do Flamengo no Mané Garrincha" },
    { src: "https://i.postimg.cc/XvH8cBf6/4166421346-56ed919a9e-b.jpg", alt: "Torcida do Flamengo com bandeiras" },
    { src: "https://i.postimg.cc/ydDTf6jg/52495505908-446e2515e4-k-e1681121195500.webp", alt: "Festa da torcida do Flamengo" },
    { src: "https://i.postimg.cc/KcgNBz4C/c05677753aba609214f43085b4052d63.jpg", alt: "Bandeirão da torcida do Flamengo" },
    { src: "https://i.postimg.cc/R0F1FCjs/ee4ee9ab65b0cd5972abf4357682d12a.webp", alt: "Torcida do Flamengo com sinalizadores" },
  ];
  

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="mb-12">
        <AdBanner width={728} height={90} />
      </div>
      
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">🏟️ Estádios do Flamengo</h1>
        <p className="text-xl text-muted-foreground mt-2">Onde o Mais Querido faz história</p>
      </header>

      <main className="prose prose-lg max-w-none text-foreground/90 text-justify space-y-12 
                       [&_h2]:font-headline [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-primary 
                       [&_h2]:border-b [&_h2]:pb-2 [&_h2]:mb-4 [&_h2]:flex [&_h2]:items-center [&_h2]:gap-3
                       [&_strong]:font-bold [&_p]:leading-relaxed
                       [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
        
        <section>
          <h2><Home />Maracanã: A Casa Sagrada Rubro-Negra</h2>
          <p>
            Desde sua inauguração em 1950, o Estádio do Maracanã se tornou mais do que um palco do futebol brasileiro — ele se transformou na segunda casa do Flamengo. É no Maraca que a Nação Rubro-Negra canta mais alto, vibra com mais força e empurra o time rumo às vitórias.
          </p>
          <p>
            O estádio foi cenário de conquistas memoráveis, como finais de Campeonato Carioca, Brasileiros, Libertadores e partidas históricas da seleção brasileira. A parceria entre Flamengo e Maracanã é tão simbólica que o clube tem os maiores públicos da história do estádio.
          </p>
          <p>
            Atualmente, o Flamengo divide a gestão do Maracanã com o Fluminense, mas sonha com mais: ter um estádio que possa chamar 100% de seu.
          </p>
          <HistoryCarousel images={maracanaImages} autoplay={true} />
        </section>

        <section>
          <h2><Image src="https://i.postimg.cc/RF5TbLnK/image-removebg-preview-8.png" alt="CRF Logo" width={32} height={32}/>Estádio da Gávea: O Berço Rubro-Negro</h2>
          <p>
            Muito antes de o Maracanã existir, o Estádio José Bastos Padilha, conhecido como Estádio da Gávea, era a casa oficial do Flamengo. Inaugurado em 1938, o estádio está localizado na sede social do clube, às margens da Lagoa Rodrigo de Freitas, no Rio de Janeiro.
          </p>
          <p>Com capacidade original para cerca de 8 mil torcedores, foi palco de momentos históricos, como:</p>
            <ul>
              <li>O jogo inaugural, Flamengo 2x0 Vasco, em 4 de setembro de 1938</li>
              <li>Partidas épicas dos Campeonatos Cariocas nas décadas de 40 e 50</li>
              <li>A estreia de craques como Zico na base</li>
              <li>Diversos clássicos e jogos oficiais antes da era Maracanã</li>
            </ul>
          <p>
            Apesar de não ser mais utilizado para partidas oficiais, a Gávea permanece como símbolo da identidade rubro-negra, e o estádio continua sendo utilizado para treinos, eventos e jogos das categorias de base e do futebol feminino.
          </p>
          <HistoryCarousel images={gaveaImages} autoplay={true} />
        </section>
        
        <section>
          <h2><Building />O Sonho da Casa Própria: Estádio no Gasômetro</h2>
           <p>
              Nos últimos anos, a diretoria rubro-negra vem intensificando os estudos para a construção de um estádio próprio. O terreno mais promissor fica na região do Gasômetro, na Zona Portuária do Rio de Janeiro, área estratégica, central e com potencial de revitalização urbana.
           </p>
           <p>
              O projeto prevê uma arena moderna, com capacidade estimada entre 70 e 80 mil lugares, podendo se tornar um dos maiores estádios da América do Sul. Além disso, o Flamengo busca total autonomia de gestão, receitas e identidade visual, algo limitado na atual parceria com o Maracanã.
          </p>
           <p>
              A torcida abraçou a ideia. A campanha pelo “Estádio próprio no Gasômetro” virou uma das grandes bandeiras da Nação, com apoio popular, político e institucional crescendo a cada dia.
          </p>
          <HistoryCarousel images={gasometroImages} autoplay={true} />
        </section>

        <section>
          <h2><Globe />Onde o Flamengo Vai, a Nação Vai Junto</h2>
          <p>
            Não importa se o jogo é no Rio, em Brasília, Manaus, Fortaleza ou até fora do Brasil. Sempre que o Flamengo joga fora, o estádio enche. É comum ver o Rubro-Negro como mandante moral até em estádios adversários.
          </p>
          <p>
            A Nação Rubro-Negra transforma qualquer praça esportiva em Maracanã. Os ingressos esgotam com rapidez, as arquibancadas se pintam de vermelho e preto, e o grito de “Mengo!” ecoa onde quer que o time entre em campo.
          </p>
           <p>
            Seja em finais de Libertadores no exterior, em amistosos internacionais ou em rodadas do Brasileirão em outras cidades, o Flamengo prova que é muito mais que um clube — é um movimento popular de dimensão nacional e internacional.
          </p>
          <HistoryCarousel images={torcidaImages} autoplay={true} />
        </section>
        
         <footer className="text-center pt-8 border-t">
              <p className="font-headline text-2xl font-bold text-foreground">🔴⚫ O Flamengo é o time do povo. E o povo vai onde o Flamengo estiver.</p>
              <p className="mt-4">
                  Acompanhe todas as atualizações sobre o novo estádio, bastidores do Maracanã, a memória viva da Gávea e onde o Flamengo irá jogar, aqui no FLA10 News — o portal oficial da Nação!
              </p>
         </footer>
      </main>
      
      <div className="mt-12">
        <AdBanner width={728} height={90} />
      </div>
    </div>
  );
}
