
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getHistoryArticleBySlug, getHistoryArticles } from '@/data/history'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { AdBanner } from '@/components/ad-banner'
import { Clock, PlayCircle, Trophy } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

// This generates the routes at build time - Keeping it commented out for dynamic rendering
/*
export async function generateStaticParams() {
  const slugs = await getAllHistorySlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}
*/

function getYouTubeId(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

export default async function HistoryArticlePage({ params }: { params: { slug: string } }) {
  const article = await getHistoryArticleBySlug(params.slug)
  const allArticles = await getHistoryArticles(4) // Fetch a few articles for "related" section
  
  if (!article) {
    notFound()
  }

  const otherArticles = allArticles.filter(a => a.slug !== article.slug).slice(0, 3);
  const articleDate = format(article.publishedAt, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  const videoId = article.videoUrl ? getYouTubeId(article.videoUrl) : null;

  return (
    <div className="container mx-auto max-w-4xl py-12">
      <div className="mb-8">
        <AdBanner width={728} height={90} />
      </div>

       <div className="mb-12 border-b border-primary/40 pb-6 text-center">
            <div className="flex flex-col items-center gap-4">
                <Trophy className="h-12 w-12 text-primary" />
                <div>
                    <h2 className="text-4xl font-headline font-bold">Flamengo na História</h2>
                    <p className="text-lg text-muted-foreground mt-1">Relembre os momentos que marcaram nossa trajetória.</p>
                </div>
            </div>
        </div>

      <article>
        <header className="mb-8">
          <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight mb-2">{article.title}</h1>
          <p className="text-xl text-muted-foreground mb-4">{article.subtitle}</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
             <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>Publicado em {articleDate}</span>
             </div>
             <span>Por {article.author}</span>
          </div>
        </header>

        <div className="relative overflow-hidden rounded-lg mb-8 aspect-video">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="w-full h-auto object-cover rounded-lg"
            data-ai-hint={article.dataAiHint}
            priority
          />
        </div>
        
        {article.content && (
          <div 
            className="prose prose-lg max-w-none text-foreground/90 text-justify space-y-6 [&_h3]:text-2xl [&_h3]:font-headline [&_h3]:font-bold [&_h3]:my-4 [&_strong]:font-bold"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        )}

        {videoId && (
            <div className="mt-12">
                <h2 className="text-3xl font-headline font-bold mb-4">Vídeo Relacionado</h2>
                 <div className="relative aspect-video bg-black rounded-lg">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={article.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                    ></iframe>
                 </div>
            </div>
        )}
        
        <div className="mt-12 pt-8 border-t">
            <AdBanner width={728} height={90} />
        </div>
      </article>
        
      {otherArticles.length > 0 && (
        <section className="mt-16 pt-12 border-t">
            <h2 className="font-headline text-3xl font-bold mb-8 text-primary">Outros Momentos Históricos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherArticles.map((item) => (
                    <Card key={item.slug} className="flex flex-col group overflow-hidden transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1">
                        <Link href={`/flahistoria/${item.slug}`}>
                            <CardHeader className="p-0 relative">
                                <Image src={item.image} alt={item.title} width={600} height={400} className="rounded-t-lg object-cover aspect-[3/2] transition-transform duration-300 group-hover:scale-105" data-ai-hint={item.dataAiHint} />
                            </CardHeader>
                        </Link>
                        <CardContent className="flex-grow p-4 space-y-2">
                            <CardTitle className="text-lg font-bold font-body leading-tight">
                                <Link href={`/flahistoria/${item.slug}`} className="hover:text-[#FF073A] transition-colors duration-200">
                                    {item.title}
                                </Link>
                            </CardTitle>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 text-xs text-muted-foreground flex justify-between items-center">
                            <div className="flex items-center gap-1.5">
                                <Clock className="h-3 w-3" />
                                <span>{format(item.publishedAt, 'dd/MM/yyyy')}</span>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
      )}

      {otherArticles.length > 0 && (
        <div className="mt-12">
            <AdBanner width={728} height={90} />
        </div>
      )}
    </div>
  )
}
