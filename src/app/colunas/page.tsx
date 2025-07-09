import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, User } from "lucide-react";

const opinionColumns = [
    { title: "A tática por trás da vitória", author: "Zico", image: "https://placehold.co/600x400.png", dataAiHint: "soccer tactics", slug: "tatica-vitoria-zico", excerpt: "Uma análise profunda sobre o esquema tático que levou o time à vitória, destacando os pontos fortes e as jogadas ensaiadas." },
    { title: "O coração da Nação na arquibancada", author: "Ana Torcedora", image: "https://placehold.co/600x400.png", dataAiHint: "stadium crowd", slug: "coracao-nacao-ana", excerpt: "Um relato emocionante sobre a paixão que move milhões de torcedores e como a arquibancada joga junto com o time." },
    { title: "Análise: O que esperar do novo reforço?", author: "Júnior", image: "https://placehold.co/600x400.png", dataAiHint: "player analysis", slug: "analise-reforco-junior", excerpt: "Avaliando as características, o histórico e o potencial impacto do novo contratado no elenco rubro-negro." },
    { title: "Memórias de 81: O dia em que o mundo foi nosso", author: "Adílio", image: "https://placehold.co/600x400.png", dataAiHint: "historic trophy", slug: "memorias-81-adilio", excerpt: "Relembrando os momentos mágicos da conquista do Mundial de Clubes de 1981, uma data eterna para todo flamenguista." },
    { title: "A base vem forte: Futuras promessas do Mengão", author: "Olheiro da Gávea", image: "https://placehold.co/600x400.png", dataAiHint: "youth soccer player", slug: "base-forte-promessas", excerpt: "Quem são os jovens talentos que estão se destacando nas categorias de base e que podem brilhar no profissional em breve." },
    { title: "A importância da gestão financeira no futebol moderno", author: "Rodrigo Dunshee", image: "https://placehold.co/600x400.png", dataAiHint: "finance chart", slug: "gestao-financeira-dunshee", excerpt: "Um olhar sobre como a responsabilidade fiscal e os investimentos estratégicos são cruciais para o sucesso dentro e fora de campo." },
];

export default function ColunasPage() {
    return (
        <div className="container mx-auto py-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 border-b-2 border-primary pb-4">
                <div>
                    <h1 className="text-4xl font-headline font-bold">Colunas da Nação</h1>
                    <p className="text-lg text-muted-foreground mt-2">O espaço para a opinião de craques e torcedores.</p>
                </div>
                <Button asChild className="mt-4 md:mt-0">
                    <Link href="/colunas/escrever">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Escrever uma Coluna
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {opinionColumns.map((column) => (
                    <Card key={column.slug} className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-muted rounded-full">
                                    <User className="h-8 w-8 text-muted-foreground" />
                                </div>
                                <div>
                                    <CardTitle className="text-xl font-bold font-body">{column.title}</CardTitle>
                                    <CardDescription>Por {column.author}</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground text-sm line-clamp-3">{column.excerpt}</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full" variant="outline">
                                <Link href={`/colunas/${column.slug}`}>Ler Coluna Completa</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
