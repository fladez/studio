export type Video = {
    title: string;
    duration: string;
    image: string;
    dataAiHint: string;
    slug: string;
};

export const videos: Video[] = [
    { title: "Bastidores da vitória no clássico", duration: "10:32", image: "https://placehold.co/600x400.png", dataAiHint: "locker room", slug: "bastidores-vitoria-classico" },
    { title: "Entrevista exclusiva com o artilheiro", duration: "05:12", image: "https://placehold.co/600x400.png", dataAiHint: "player interview", slug: "entrevista-artilheiro" },
    { title: "Golaços do Mengão no mês", duration: "03:45", image: "https://placehold.co/600x400.png", dataAiHint: "soccer goal", slug: "golacos-mes" },
    { title: "TBT: Relembre a conquista da Libertadores 2019", duration: "15:20", image: "https://placehold.co/600x400.png", dataAiHint: "trophy celebration", slug: "tbt-libertadores-2019" },
    { title: "Treino aberto para a Nação no Maracanã", duration: "08:55", image: "https://placehold.co/600x400.png", dataAiHint: "soccer training", slug: "treino-aberto-nacao" },
    { title: "Desafios e brincadeiras com os jogadores", duration: "07:30", image: "https://placehold.co/600x400.png", dataAiHint: "players laughing", slug: "desafios-jogadores" },
];
