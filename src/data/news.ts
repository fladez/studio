export type NewsArticle = {
    id: string; // Firestore document ID
    title: string;
    category: string;
    image: string; // URL to the image
    dataAiHint: string;
    slug: string;
    publishedAt: Date; // Should always be a Date object now
    content?: string;
};

// Helper to create dates in the past for realistic data
const daysAgo = (days: number): Date => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date;
};

export const news: NewsArticle[] = [
    {
        id: '1',
        title: 'Flamengo vence de virada e assume a liderança',
        category: 'Futebol Profissional',
        image: 'https://placehold.co/1200x600.png',
        dataAiHint: 'soccer celebration',
        slug: 'flamengo-vence-de-virada',
        publishedAt: daysAgo(1),
        content: '<p>Em uma noite eletrizante no Maracanã, o Flamengo mostrou sua força e venceu o rival por 2 a 1, de virada. Os gols foram marcados por Gabigol e Arrascaeta, garantindo a festa da Nação Rubro-Negra e a ponta da tabela.</p><h3>Análise do Jogo</h3><p>O time começou a partida em ritmo lento, sofrendo um gol no início, mas demonstrou grande poder de reação no segundo tempo, com substituições que mudaram a cara do jogo.</p>',
    },
    {
        id: '2',
        title: 'Tite elogia poder de reação da equipe',
        category: 'Entrevistas',
        image: 'https://placehold.co/1200x600.png',
        dataAiHint: 'coach interview',
        slug: 'tite-elogia-reacao',
        publishedAt: daysAgo(1),
        content: '<p>O técnico Tite concedeu entrevista coletiva após a partida e destacou a mentalidade vencedora do elenco. "Sabíamos da dificuldade, mas este grupo tem uma força mental incrível. A virada foi fruto de muito trabalho e união", declarou o treinador.</p>',
    },
    {
        id: '3',
        title: 'Reforço para o basquete: Flamengo anuncia novo pivô',
        category: 'Basquete',
        image: 'https://placehold.co/1200x600.png',
        dataAiHint: 'basketball player',
        slug: 'reforco-basquete-pivo',
        publishedAt: daysAgo(2),
        content: '<p>O FlaBasquete está ainda mais forte. A diretoria anunciou a contratação do pivô americano John Doe, de 2,10m, que estava atuando na liga europeia. Ele chega para reforçar o garrafão do Orgulho da Nação na próxima temporada.</p>',
    },
    {
        id: '4',
        title: 'Nação esgota ingressos para a final',
        category: 'Torcida',
        image: 'https://placehold.co/1200x600.png',
        dataAiHint: 'stadium crowd',
        slug: 'nacao-esgota-ingressos',
        publishedAt: daysAgo(3),
        content: '<p>Como já era esperado, a torcida do Flamengo deu mais uma demonstração de sua força. Em poucas horas, todos os ingressos para a grande final da Copa do Brasil foram vendidos. O Maracanã promete ser um verdadeiro caldeirão.</p>',
    },
     {
        id: '5',
        title: 'Base rubro-negra brilha e conquista título sub-20',
        category: 'Categorias de Base',
        image: 'https://placehold.co/1200x600.png',
        dataAiHint: 'youth soccer trophy',
        slug: 'base-conquista-titulo-sub-20',
        publishedAt: daysAgo(4),
        content: '<p>Os Garotos do Ninho fizeram bonito e levantaram o troféu do Campeonato Brasileiro Sub-20. Com uma campanha impecável, a nova geração mostra que o futuro do Mengão está em boas mãos.</p>',
    },
];

export function getNews(count?: number): NewsArticle[] {
    const sortedNews = news.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
    if (count) {
        return sortedNews.slice(0, count);
    }
    return sortedNews;
}

export function getNewsBySlug(slug: string): NewsArticle | null {
    return news.find(article => article.slug === slug) || null;
}
