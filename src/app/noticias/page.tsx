import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getNews } from '@/data/get-news'


export default async function NoticiasPage() {
    const allNews = await getNews();

    return (
        <div className="container mx-auto py-12">
            <div className="mb-8 border-b border-primary/40 pb-4">
                <h1 className="text-4xl font-headline font-bold">Todas as Notícias</h1>
                <p className="text-lg text-muted-foreground mt-2">Fique por dentro de tudo que acontece no Mengão.</p>
            </div>
             {allNews.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">Nenhuma notícia publicada ainda. Volte em breve!</p>
                </div>
            ) : (
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
            )}
        </div>
    )
}
