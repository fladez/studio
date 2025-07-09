export type NewsArticle = {
    title: string;
    category: string;
    image: string;
    dataAiHint: string;
    slug: string;
    publishedAt: Date;
    content?: string;
};

const now = new Date();

export const allNews: NewsArticle[] = [
    { 
        title: "Flamengo vence de virada e assume a liderança do campeonato", 
        category: "Futebol Profissional", 
        image: "https://placehold.co/1200x600.png", 
        dataAiHint: "soccer match celebration", 
        slug: "flamengo-vence-lideranca",
        publishedAt: new Date(now.getTime() - 2 * 60 * 1000), // 2 minutes ago
        content: `
          <p>Em uma noite eletrizante no Maracanã, o Flamengo mostrou sua força e superou o adversário por 2 a 1, de virada, garantindo a ponta da tabela do Campeonato Brasileiro. A partida, válida pela 15ª rodada, foi marcada por muita emoção e uma atuação de gala do time rubro-negro no segundo tempo.</p>
          <p>O adversário abriu o placar logo no início do jogo, aproveitando um momento de desatenção da zaga. O gol silenciou o Maracanã por um instante, mas a Nação não parou de cantar, empurrando o time para a reação. O primeiro tempo foi truncado, com o Flamengo encontrando dificuldades para furar o bloqueio defensivo.</p>
          <h3 class="text-2xl font-headline font-bold my-4">Segundo tempo avassalador</h3>
          <p>A história do jogo mudou na segunda etapa. Com as alterações promovidas pelo técnico, o time voltou com outra postura. A pressão foi intensa desde o primeiro minuto. O gol de empate saiu dos pés de <strong>Pedro</strong>, após uma bela jogada de <strong>Arrascaeta</strong>. O Maracanã explodiu em festa.</p>
          <p>O gol da vitória, que sacramentou a liderança, foi uma pintura. <strong>Gabigol</strong>, que entrou no segundo tempo, recebeu na entrada da área, driblou o zagueiro e tocou com categoria na saída do goleiro. Uma festa indescritível tomou conta do estádio, consolidando uma vitória fundamental para as pretensões do clube no campeonato.</p>
          <p>Com o resultado, o Flamengo chega a 32 pontos e assume a liderança isolada, ultrapassando seu rival direto na classificação.</p>
        `
    },
    { 
        title: "Novo reforço é apresentado no Ninho do Urubu", 
        category: "Mercado da Bola", 
        image: "https://placehold.co/1200x600.png", 
        dataAiHint: "player presentation", 
        slug: "novo-reforco-apresentado",
        publishedAt: new Date(now.getTime() - 5 * 60 * 60 * 1000) // 5 hours ago
    },
    { 
        title: "Basquete: Mengão conquista o título da NBB", 
        category: "Esportes Olímpicos", 
        image: "https://placehold.co/1200x600.png", 
        dataAiHint: "basketball game", 
        slug: "basquete-campeao-nbb",
        publishedAt: new Date(now.getTime() - 26 * 60 * 60 * 1000) // 26 hours ago
    },
    { 
        title: "Diretoria negocia renovação com craque do time", 
        category: "Mercado da Bola", 
        image: "https://placehold.co/600x400.png", 
        dataAiHint: "contract signing", 
        slug: "diretoria-negocia-renovacao",
        publishedAt: new Date(now.getTime() - 10 * 60 * 60 * 1000) 
    },
    { 
        title: "Confira a agenda de jogos do Flamengo para o próximo mês", 
        category: "Calendário", 
        image: "https://placehold.co/600x400.png", 
        dataAiHint: "stadium overview", 
        slug: "agenda-jogos-proximo-mes",
        publishedAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000)
    },
    { 
        title: "Nação Rubro-Negra esgota ingressos para a final", 
        category: "Torcida", 
        image: "https://placehold.co/600x400.png", 
        dataAiHint: "soccer fans", 
        slug: "nacao-esgota-ingressos",
        publishedAt: new Date(now.getTime() - 3 * 60 * 60 * 1000)
    },
    { 
        title: "Sub-20 do Flamengo avança para a final do Brasileirão", 
        category: "Base", 
        image: "https://placehold.co/600x400.png", 
        dataAiHint: "youth soccer", 
        slug: "sub20-avanca-final",
        publishedAt: new Date(now.getTime() - 8 * 60 * 60 * 1000)
    },
    { 
        title: "Flamengo anuncia nova parceria para o futebol feminino", 
        category: "Futebol Feminino", 
        image: "https://placehold.co/600x400.png", 
        dataAiHint: "women soccer", 
        slug: "parceria-futebol-feminino",
        publishedAt: new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000)
    },
];

// Sort by published date descending
allNews.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
