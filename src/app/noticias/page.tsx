import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getNews } from '@/data/news'
import { format, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns'
import { Clock } from 'lucide-react'

function formatPublishedTime(publishedAt: Date): string {
    const now = new Date();
  
    const diffDays = differenceInDays(now, publishedAt);
    if (diffDays > 3) {
      return format(publishedAt, 'dd/MM/yyyy');
    }
    if (diffDays >= 1) {
      return `${diffDays} dia${diffDays > 1 ? 's' : ''} atrás`;
    }
  
    const diffHours = differenceInHours(now, publishedAt);
    if (diffHours >= 1) {
      return `${diffHours} hora${diffHours > 1 ? 's' : ''} atrás`;
    }
  
    const diffMinutes = differenceInMinutes(now, publishedAt);
    if (diffMinutes >= 1) {
      return `${diffMinutes} minuto${diffMinutes > 1 ? 's' : ''} atrás`;
    }
  
    return "Agora mesmo";
}

export default function NoticiasPage() {
    const allNews = getNews();

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
                  <Card key={news.slug} className="flex flex-col group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader className="p-0 relative">
                        <Link href={`/noticias/${news.slug}`}>
                            <Image src={news.image} alt={news.title} width={600} height={400} className="rounded-t-lg object-cover aspect-[3/2] transition-transform duration-300 group-hover:scale-105" data-ai-hint={news.dataAiHint} />
                        </Link>
                      <Badge className="absolute top-2 left-2">{news.category}</Badge>
                    </CardHeader>
                    <CardContent className="flex-grow p-4 space-y-2">
                      <CardTitle className="text-lg font-bold font-body leading-tight">
                        <Link href={`/noticias/${news.slug}`} className="hover:text-[#FF073A] transition-colors duration-200">
                           {news.title}
                        </Link>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground line-clamp-2">{news.excerpt}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 text-xs text-muted-foreground">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-1.5">
                                <Clock className="h-3 w-3" />
                                <span>{formatPublishedTime(news.publishedAt)}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span>Por {news.author || 'Redação NRN'}</span>
                            </div>
                        </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
        </div>
    )
}
