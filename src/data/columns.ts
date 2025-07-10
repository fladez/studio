// Helper to create dates in the past for realistic data
const daysAgo = (days: number): Date => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date;
};

export type OpinionColumn = {
    columnName: string;
    title: string;
    author: string;
    authorImage: string;
    dataAiHint?: string;
    slug: string;
    excerpt: string;
    publishedAt: Date;
    category: string;
    content: string;
    views: number;
};

export const opinionColumns: OpinionColumn[] = [
    { 
        columnName: "A Tática por Zico",
        title: "A tática por trás da vitória", 
        author: "Zico", 
        authorImage: "https://placehold.co/100x100.png",
        dataAiHint: "soccer tactics", 
        slug: "tatica-vitoria-zico", 
        excerpt: "Uma análise profunda sobre o esquema tático que levou o time à vitória, destacando os pontos fortes e as jogadas ensaiadas.",
        publishedAt: daysAgo(2),
        category: "Análise Tática",
        content: "<p>Uma análise profunda sobre o esquema tático que levou o time à vitória, destacando os pontos fortes e as jogadas ensaiadas. O posicionamento dos jogadores foi crucial para o resultado.</p><h3>Pontos Chave</h3><p>A disciplina tática e a execução perfeita das jogadas foram determinantes para o sucesso da equipe.</p>",
        views: 12500,
    },
    { 
        columnName: "Voz da Torcida",
        title: "O coração da Nação na arquibancada", 
        author: "Ana Torcedora", 
        authorImage: "https://placehold.co/100x100.png",
        dataAiHint: "stadium crowd", 
        slug: "coracao-nacao-ana", 
        excerpt: "Um relato emocionante sobre a paixão que move milhões de torcedores e como a arquibancada joga junto com o time.",
        publishedAt: daysAgo(3),
        category: "Opinião",
        content: "<p>Um relato emocionante sobre a paixão que move milhões de torcedores e como a arquibancada joga junto com o time. A energia vinda das arquibancadas contagiou os jogadores em campo.</p>",
        views: 8900,
    },
    { 
        columnName: "Análise do Maestro",
        title: "Análise: O que esperar do novo reforço?", 
        author: "Júnior", 
        authorImage: "https://placehold.co/100x100.png",
        dataAiHint: "player analysis", 
        slug: "analise-reforco-junior", 
        excerpt: "Avaliando as características, o histórico e o potencial impacto do novo contratado no elenco rubro-negro.",
        publishedAt: daysAgo(5),
        category: "Mercado da Bola",
        content: "<p>Avaliando as características, o histórico e o potencial impacto do novo contratado no elenco rubro-negro. Sua velocidade e drible podem ser um diferencial para a equipe.</p>",
        views: 11200,
    },
    { 
        columnName: "Páginas Heroicas",
        title: "Memórias de 81: O dia em que o mundo foi nosso", 
        author: "Adílio", 
        authorImage: "https://placehold.co/100x100.png",
        dataAiHint: "historic trophy", 
        slug: "memorias-81-adilio", 
        excerpt: "Relembrando os momentos mágicos da conquista do Mundial de Clubes de 1981, uma data eterna para todo flamenguista.",
        publishedAt: daysAgo(7),
        category: "História",
        content: "<p>Relembrando os momentos mágicos da conquista do Mundial de Clubes de 1981, uma data eterna para todo flamenguista. O time jogou com raça, amor e paixão.</p>",
        views: 18100,
    },
    { 
        columnName: "Fábrica de Craques",
        title: "A base vem forte: Futuras promessas do Mengão", 
        author: "Olheiro da Gávea", 
        authorImage: "https://placehold.co/100x100.png",
        dataAiHint: "youth soccer player", 
        slug: "base-forte-promessas", 
        excerpt: "Quem são os jovens talentos que estão se destacando nas categorias de base e que podem brilhar no profissional em breve.",
        publishedAt: daysAgo(10),
        category: "Categorias de Base",
        content: "<p>Quem são os jovens talentos que estão se destacando nas categorias de base e que podem brilhar no profissional em breve. O futuro do clube parece promissor.</p>",
        views: 13400,
    },
    { 
        columnName: "Gestão e Finanças",
        title: "A importância da gestão financeira no futebol moderno", 
        author: "Rodrigo Dunshee", 
        authorImage: "https://placehold.co/100x100.png",
        dataAiHint: "finance chart", 
        slug: "gestao-financeira-dunshee", 
        excerpt: "Um olhar sobre como a responsabilidade fiscal e os investimentos estratégicos são cruciais para o sucesso dentro e fora de campo.",
        publishedAt: daysAgo(12),
        category: "Gestão",
        content: "<p>Um olhar sobre como a responsabilidade fiscal e os investimentos estratégicos são cruciais para o sucesso dentro e fora de campo. Uma gestão sólida é a base para conquistas duradouras.</p>",
        views: 7500,
    },
];


export function getColumns(): OpinionColumn[] {
    return opinionColumns.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
}

export function getColumnBySlug(slug: string): OpinionColumn | null {
    return opinionColumns.find(column => column.slug === slug) || null;
}
