
import Image from "next/image";

export default function HistoriaPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="space-y-8">
        <header className="text-center border-b pb-6">
          <div className="relative mx-auto h-40 w-40 mb-4">
            <Image
                src="https://i.postimg.cc/852x4vT0/image-removebg-preview-7.png"
                alt="Flamengo CRF Logo"
                fill
                className="object-contain"
            />
          </div>
          <h1 className="text-4xl font-headline font-bold mb-2">História do Clube de Regatas do Flamengo</h1>
          <p className="text-xl text-muted-foreground font-semibold">🔴⚫ O Mais Querido do Brasil</p>
        </header>

        <div className="prose prose-lg max-w-none text-foreground text-justify space-y-6 [&_h2]:font-headline [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary [&_strong]:font-bold">
          <p>
            Fundado em 17 de novembro de 1895, o Clube de Regatas do Flamengo nasceu às margens da Baía de Guanabara, no bairro do Flamengo, no Rio de Janeiro. Inicialmente voltado para o remo, esporte muito popular na época, o clube logo expandiu seus horizontes e se transformou em uma das maiores potências do esporte brasileiro e mundial, principalmente no futebol.
          </p>

          <section>
            <h2>⚓ Raízes no Remo</h2>
            <p>
              O Flamengo começou como um grupo de jovens apaixonados por esportes náuticos, que sonhavam em formar uma equipe de regatas competitiva. A primeira vitória no remo veio em 1898, e foi comemorada com grande festa — tradição que o clube leva até hoje: celebrar com paixão cada conquista.
            </p>
          </section>
          
          <section>
            <h2>⚽ A Chegada do Futebol</h2>
            <p>
              O futebol chegou ao clube em 1911, após uma dissidência de atletas do Fluminense, que migraram para o Flamengo. Em pouco tempo, o novo departamento começou a se destacar nos campos cariocas, e a torcida cresceu de forma impressionante.
            </p>
            <p>
                Em 1912, o Flamengo disputou sua primeira partida oficial de futebol e venceu o Mangueira por 16 a 2, naquela que ainda é a maior goleada da história do clube.
            </p>
          </section>

           <section>
            <h2>🏆 As Primeiras Glórias</h2>
            <p>
              O Rubro-Negro começou a colecionar títulos já nas primeiras décadas do século XX. No futebol carioca, se tornou referência com times competitivos e uma torcida apaixonada, ganhando os primeiros Campeonatos Cariocas nas décadas de 1910 e 1920.
            </p>
          </section>
          
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
    </div>
  );
}
