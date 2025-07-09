export type Video = {
    title: string;
    duration: string;
    image: string;
    dataAiHint: string;
    slug: string;
    views: number;
    publishedAt: Date;
    category: string;
};

// Helper to create dates in the past for realistic data
const daysAgo = (days: number): Date => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date;
};

export const videos: Video[] = [
    { title: "Bastidores da vitória no clássico", category: "Bastidores", duration: "10:32", image: "https://placehold.co/600x400.png", dataAiHint: "locker room", slug: "bastidores-vitoria-classico", views: 152345, publishedAt: daysAgo(1) },
    { title: "Entrevista exclusiva com o artilheiro", category: "Entrevistas", duration: "05:12", image: "https://placehold.co/600x400.png", dataAiHint: "player interview", slug: "entrevista-artilheiro", views: 98765, publishedAt: daysAgo(2) },
    { title: "Golaços do Mengão no mês", category: "Gols", duration: "03:45", image: "https://placehold.co/600x400.png", dataAiHint: "soccer goal", slug: "golacos-mes", views: 234567, publishedAt: daysAgo(4) },
    { title: "TBT: Relembre a conquista da Libertadores 2019", category: "Histórico", duration: "15:20", image: "https://placehold.co/600x400.png", dataAiHint: "trophy celebration", slug: "tbt-libertadores-2019", views: 1205890, publishedAt: daysAgo(7) },
    { title: "Treino aberto para a Nação no Maracanã", category: "Treinos", duration: "08:55", image: "https://placehold.co/600x400.png", dataAiHint: "soccer training", slug: "treino-aberto-nacao", views: 78901, publishedAt: daysAgo(10) },
    { title: "Desafios e brincadeiras com os jogadores", category: "Bastidores", duration: "07:30", image: "https://placehold.co/600x400.png", dataAiHint: "players laughing", slug: "desafios-jogadores", views: 345678, publishedAt: daysAgo(15) },
];