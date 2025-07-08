import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const allNews = [
    { title: "Flamengo vence de virada e assume a liderança do campeonato", category: "Futebol Profissional", image: "https://placehold.co/600x400.png", dataAiHint: "soccer match", slug: "flamengo-vence-lideranca" },
    { title: "Novo reforço é apresentado no Ninho do Urubu", category: "Mercado da Bola", image: "https://placehold.co/600x400.png", dataAiHint: "player presentation", slug: "novo-reforco-apresentado" },
    { title: "Basquete: Mengão conquista o título da NBB", category: "Esportes Olímpicos", image: "https://placehold.co/600x400.png", dataAiHint: "basketball game", slug: "basquete-campeao-nbb" },
    { title: "Diretoria negocia renovação com craque do time", category: "Mercado da Bola", image: "https://placehold.co/600x400.png", dataAiHint: "contract signing", slug: "diretoria-negocia-renovacao" },
    { title: "Confira a agenda de jogos do Flamengo para o próximo mês", category: "Calendário", image: "https://placehold.co/600x400.png", dataAiHint: "stadium overview", slug: "agenda-jogos-proximo-mes" },
    { title: "Nação Rubro-Negra esgota ingressos para a final", category: "Torcida", image: "https://placehold.co/600x400.png", dataAiHint: "soccer fans", slug: "nacao-esgota-ingressos" },
    { title: "Sub-20 do Flamengo avança para a final do Brasileirão", category: "Base", image: "https://placehold.co/600x400.png", dataAiHint: "youth soccer", slug: "sub20-avanca-final" },
    { title: "Flamengo anuncia nova parceria para o futebol feminino", category: "Futebol Feminino", image: "https://placehold.co/600x400.png", dataAiHint: "women soccer", slug: "parceria-futebol-feminino" },
];


export default function NoticiasPage() {
    return (
        <div className="container mx-auto py-12">
            <div className="mb-8">
                <h1 className="text-4xl font-headline font-bold">Todas as Notícias</h1>
                <p className="text-lg text-muted-foreground mt-2">Fique por dentro de tudo que acontece no Mengão.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allNews.map((news) => (
              <Card key={news.slug} className="flex flex-col">
                <CardHeader className="p-0">
                  <Image src={news.image} alt={news.title} width={600} height={400} className="rounded-t-lg object-cover aspect-[3/2]" data-ai-hint={news.dataAiHint} />
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <Badge variant="secondary" className="mb-2">{news.category}</Badge>
                  <CardTitle className="text-lg font-bold font-body leading-tight">{news.title}</CardTitle>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild className="w-full">
                    <Link href={`/noticias/${news.slug}`}>Ler Notícia</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
    )
}
