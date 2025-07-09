export type OpinionColumn = {
    title: string;
    author: string;
    image?: string;
    dataAiHint?: string;
    slug: string;
    excerpt: string;
};

export const opinionColumns: OpinionColumn[] = [
    { title: "A tática por trás da vitória", author: "Zico", image: "https://placehold.co/600x400.png", dataAiHint: "soccer tactics", slug: "tatica-vitoria-zico", excerpt: "Uma análise profunda sobre o esquema tático que levou o time à vitória, destacando os pontos fortes e as jogadas ensaiadas." },
    { title: "O coração da Nação na arquibancada", author: "Ana Torcedora", image: "https://placehold.co/600x400.png", dataAiHint: "stadium crowd", slug: "coracao-nacao-ana", excerpt: "Um relato emocionante sobre a paixão que move milhões de torcedores e como a arquibancada joga junto com o time." },
    { title: "Análise: O que esperar do novo reforço?", author: "Júnior", image: "https://placehold.co/600x400.png", dataAiHint: "player analysis", slug: "analise-reforco-junior", excerpt: "Avaliando as características, o histórico e o potencial impacto do novo contratado no elenco rubro-negro." },
    { title: "Memórias de 81: O dia em que o mundo foi nosso", author: "Adílio", image: "https://placehold.co/600x400.png", dataAiHint: "historic trophy", slug: "memorias-81-adilio", excerpt: "Relembrando os momentos mágicos da conquista do Mundial de Clubes de 1981, uma data eterna para todo flamenguista." },
    { title: "A base vem forte: Futuras promessas do Mengão", author: "Olheiro da Gávea", image: "https://placehold.co/600x400.png", dataAiHint: "youth soccer player", slug: "base-forte-promessas", excerpt: "Quem são os jovens talentos que estão se destacando nas categorias de base e que podem brilhar no profissional em breve." },
    { title: "A importância da gestão financeira no futebol moderno", author: "Rodrigo Dunshee", image: "https://placehold.co/600x400.png", dataAiHint: "finance chart", slug: "gestao-financeira-dunshee", excerpt: "Um olhar sobre como a responsabilidade fiscal e os investimentos estratégicos são cruciais para o sucesso dentro e fora de campo." },
];
