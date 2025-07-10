
import Image from "next/image";
import { AdBanner } from "@/components/ad-banner";
import { Card, CardContent } from "@/components/ui/card";
import { HistoryCarousel } from "@/components/home/history-carousel";

export default function HistoriaPage() {
  // A simple function to demonstrate a minor change for HMR reload.
  const getPageTitle = () => "História do Clube de Regatas do Flamengo";

  const historyImages = [
      { src: "https://i.postimg.cc/MTZVM3k6/1896-flamengo.jpg", alt: "Time de remo do Flamengo em 1896" },
      { src: "https://i.postimg.cc/KjRTQKvC/1914-flamengo.jpg", alt: "Equipe de futebol do Flamengo em 1914" },
      { src: "https://i.postimg.cc/D0HXN2S0/4059871.jpg", alt: "Time do Flamengo campeão" },
      { src: "https://i.postimg.cc/xj4M8P6Q/1643399982.webp", alt: "Comemoração de título do Flamengo" },
      { src: "https://i.postimg.cc/15V6qNdq/images-1.jpg", alt: "Zico com a taça do Mundial de 1981" },
      { src: "https://i.postimg.cc/W1RZ61Rf/images.jpg", alt: "Time do Flamengo posado para foto" },
  ];
  
  const footballImages = [
      { src: "https://i.postimg.cc/0QBRKNWV/1914.jpg", alt: "Equipe de futebol do Flamengo em 1914" },
      { src: "https://i.postimg.cc/Znvk8hX4/images.jpg", alt: "Time do Flamengo antigo" },
      { src: "https://i.postimg.cc/YS8wkR1K/flamengo-antiga-23092023-072622.jpg", alt: "Time do Flamengo em preto e branco" },
      { src: "https://i.postimg.cc/C533JQVD/Flamengo-1.jpg", alt: "Time do Flamengo com taça" },
      { src: "https://i.postimg.cc/y6DWQ3HY/images-1.jpg", alt: "Elenco do Flamengo" },
      { src: "https://i.postimg.cc/y62xw61h/flamengo-capa.jpg", alt: "Escudo antigo do Flamengo" },
  ];

  const primeirasGloriasImages = [
    { src: "https://i.postimg.cc/Xqs8YZsv/Flamengo-1930-1.jpg", alt: "Time do Flamengo em 1930" },
    { src: "https://i.postimg.cc/5NP7xrrm/Fla-x-Botafogo-1926-1.jpg", alt: "Jogo Flamengo x Botafogo em 1926" },
    { src: "https://i.postimg.cc/dVLWDBPc/Flamengo-1926.jpg", alt: "Time do Flamengo em 1926" },
    { src: "https://i.postimg.cc/g2QghZmX/Campeao-de-1927-01.jpg", alt: "Time campeão de 1927" },
    { src: "https://i.postimg.cc/qRdQbHtp/Campeao-de-1927-03.jpg", alt: "Time campeão de 1927, outra foto" },
    { src: "https://i.postimg.cc/Twq0BNmg/Flamengo-1930.jpg", alt: "Time do Flamengo em 1930" },
    { src: "https://i.postimg.cc/8cp4GdB3/lossy-page1-250px-Time-de-Futebol-do-Flamengo-1933-tif.jpg", alt: "Time de futebol do Flamengo em 1933" },
  ];

  const seculoXXImages = [
    { src: "https://i.postimg.cc/vTn038h8/flamengo-1987-zico-copa-uniao-560-jpg.jpg", alt: "Flamengo campeão da Copa União 1987 com Zico" },
    { src: "https://i.postimg.cc/nc8RM7VX/flamengo-1983-optimized.jpg", alt: "Time do Flamengo em 1983" },
    { src: "https://i.postimg.cc/W4t65bbR/jornal-flamengo-tetracampeao-1987.jpg", alt: "Jornal noticiando o tetracampeonato do Flamengo em 1987" },
    { src: "https://i.postimg.cc/mDC9nPvn/NVD5-K56-RGZNNHK3-EE6-JWPPCOMI.jpg", alt: "Time do Flamengo posado para foto nos anos 80" },
    { src: "https://i.postimg.cc/cCcnsV4M/zico-bicampeao-78-79-glo-15.webp", alt: "Zico comemorando bicampeonato em 1979" },
    { src: "https://i.postimg.cc/28zWH82H/bebeto-renato-gaucho-optimized.webp", alt: "Bebeto e Renato Gaúcho no Flamengo" },
    { src: "https://i.postimg.cc/MGtNQGPh/Zico-taca-Flamengo-Campeao-Brasileiro-1980.jpg", alt: "Zico levantando a taça do Campeonato Brasileiro de 1980" },
    { src: "https://i.postimg.cc/XvyBZZYv/1983-flamengo-tricampeao-brasileiro-mengo.jpg", alt: "Time do Flamengo tricampeão brasileiro em 1983" },
    { src: "https://i.postimg.cc/G2FBQZYw/5ed3fd54c4f39.webp", alt: "Comemoração do time do Flamengo" },
    { src: "https://i.postimg.cc/901D3ZJL/98984-zico-81-529x378-1.webp", alt: "Zico em ação no Mundial de 1981" },
    { src: "https://i.postimg.cc/V6W6MXQz/44787-2b281364b4dd7e558fb72d0bb81a4b18.jpg", alt: "Time do Flamengo campeão mundial em 1981" },
    { src: "https://i.postimg.cc/8P0Ch13f/44791-leandro-flamengo-1981-jpg.jpg", alt: "Leandro, lateral do Flamengo, em 1981" },
    { src: "https://i.postimg.cc/nh9h2ybR/1992.jpg", alt: "Time do Flamengo campeão brasileiro em 1992" },
    { src: "https://i.postimg.cc/rsp8rbN9/flamengo-campeao-1982.jpg", alt: "Time do Flamengo campeão brasileiro em 1982" },
    { src: "https://i.postimg.cc/j2Cb5fRg/JS-1992-01.jpg", alt: "Júnior e time comemorando o título de 1992" },
    { src: "https://i.postimg.cc/SKmHR9r6/Zico-Fla-campeao-Libertadores-19811-e1499259061200.webp", alt: "Zico com a taça da Libertadores de 1981" },
    { src: "https://i.postimg.cc/Jhb4Vjhj/campeao-1987.webp", alt: "Time do Flamengo campeão em 1987" },
  ];

  return (
    <div className="container mx-auto max-w-4xl py-2 px-4">
      <div className="mb-2">
        <AdBanner width={728} height={90} />
      </div>
      <div className="space-y-8">
        <header className="text-center border-b pb-6 mb-4 overflow-hidden">
          <div className="relative mx-auto h-[13.2rem] w-[13.2rem] mt-[-90px]">
            <Image
                src="https://i.postimg.cc/RF5TbLnK/image-removebg-preview-8.png"
                alt="Flamengo CRF Logo"
                fill
                className="object-contain"
            />
          </div>
          <div className="mt-[-80px]">
            <h1 className="text-4xl font-headline font-bold mt-2">{getPageTitle()}</h1>
            <p className="text-xl text-muted-foreground font-semibold">🔴⚫ O Mais Querido do Brasil</p>
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-foreground text-justify space-y-6 [&_h2]:font-headline [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary [&_strong]:font-bold mt-[-15px]">
          <p>
            Fundado em 17 de novembro de 1895, o Clube de Regatas do Flamengo nasceu às margens da Baía de Guanabara, no bairro do Flamengo, no Rio de Janeiro. Inicialmente voltado para o remo, esporte muito popular na época, o clube logo expandiu seus horizontes e se transformou em uma das maiores potências do esporte brasileiro e mundial, principalmente no futebol.
          </p>

          <section>
            <h2>⚓ Raízes no Remo</h2>
            <p>
              O Flamengo começou como um grupo de jovens apaixonados por esportes náuticos, que sonhavam em formar uma equipe de regatas competitiva. A primeira vitória no remo veio em 1898, e foi comemorada com grande festa — tradição que o clube leva até hoje: celebrar com paixão cada conquista.
            </p>
          </section>
          
          <HistoryCarousel images={historyImages} />
          
          <section>
            <h2>⚽ A Chegada do Futebol</h2>
            <p>
              O futebol chegou ao clube em 1911, após uma dissidência de atletas do Fluminense, que migraram para o Flamengo. Em pouco tempo, o novo departamento começou a se destacar nos campos cariocas, e a torcida cresceu de forma impressionante.
            </p>
            <p>
                Em 1912, o Flamengo disputou sua primeira partida oficial de futebol e venceu o Mangueira por 16 a 2, naquela que ainda é a maior goleada da história do clube.
            </p>
          </section>

          <HistoryCarousel images={footballImages} />

           <section>
            <h2>🏆 As Primeiras Glórias</h2>
            <p>
              O Rubro-Negro começou a colecionar títulos já nas primeiras décadas do século XX. No futebol carioca, se tornou referência com times competitivos e uma torcida apaixonada, ganhando os primeiros Campeonatos Cariocas nas décadas de 1910 e 1920.
            </p>
          </section>

          <HistoryCarousel images={primeirasGloriasImages} />
          
          <section>
            <h2>🌎 O Flamengo no Século XX</h2>
             <p>
                Ao longo do século XX, o Flamengo se consolidou como um dos clubes mais populares do Brasil. Mas foi na década de 1980 que o time viveu sua fase mais gloriosa.
             </p>
             <p>
                Comandado por nomes lendários como Zico, Júnior, Leandro, Nunes e Adílio, o Flamengo conquistou:
             </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Campeonato Brasileiro (1980, 1982, 1983)</li>
              <li>Copa Libertadores da América (1981)</li>
              <li>Mundial Interclubes (1981), com a histórica vitória por 3 a 0 sobre o Liverpool.</li>
            </ul>
             <p>
                Essa geração ficou eternizada como uma das mais vitoriosas da história do futebol brasileiro.
            </p>
          </section>

          <HistoryCarousel images={seculoXXImages} />

           <section>
            <h2>🔥 A Maior Torcida do Mundo</h2>
            <p>
              Com uma torcida estimada em mais de 40 milhões de torcedores, o Flamengo se orgulha de ser o clube mais popular do Brasil. O lema "Uma vez Flamengo, sempre Flamengo" representa a ligação emocional e cultural entre o time e sua Nação Rubro-Negra.
            </p>
          </section>
          
          <section>
            <h2>⚽ A Nova Era: Glórias Recentes</h2>
            <p>
              O século XXI trouxe desafios e grandes conquistas. Sob a liderança de jogadores como Petkovic, Adriano, Gabigol, Arrascaeta, Bruno Henrique e Filipe Luís, o clube voltou ao topo:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Campeonato Brasileiro (2009, 2019, 2020)</li>
              <li>Copa Libertadores (2019, 2022)</li>
              <li>Recopa Sul-Americana (2020)</li>
              <li>Copa do Brasil (2006, 2013, 2022)</li>
            </ul>
            <p>
                O ano de 2019 foi um capítulo histórico, com as conquistas da Libertadores e do Brasileirão no mesmo final de semana, sob o comando do técnico Jorge Jesus.
            </p>
          </section>
          
           <section>
            <h2>🏟️ Maracanã: A Casa do Flamengo</h2>
            <p>
             O Estádio do Maracanã é mais do que um palco de jogos: é um templo sagrado para a torcida rubro-negra. Ali, o Flamengo viveu suas maiores emoções e consolidou sua identidade como clube de massa e conquistas.
            </p>
          </section>

          <section>
            <h2>❤️ Flamengo é Religião</h2>
            <p>
              Mais do que um clube de futebol, o Flamengo é parte da cultura popular brasileira. Ele está presente nas músicas, nas ruas, nas bandeiras, nas favelas e nos corações. É sinônimo de paixão, raça e amor incondicional.
            </p>
          </section>
          
           <div className="text-center pt-4 border-t">
                <p className="font-headline text-xl font-bold">📣 Viva a História. Viva o Flamengo.</p>
                <p>
                    No FLA10 News, celebramos diariamente essa trajetória gloriosa, trazendo notícias, análises e conteúdos que honram o passado e vibram com o presente.
                </p>
                <p>
                    Porque o Flamengo é eterno.
                    <br />
                    Porque o Flamengo é religião!
                    <br />
                    Porque ser Flamengo é um estado de espírito.
                </p>
           </div>
        </div>
      </div>
      <div className="mt-12">
        <AdBanner width={728} height={90} />
      </div>
    </div>
  );
}

    