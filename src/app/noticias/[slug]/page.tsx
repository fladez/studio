import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Clock } from 'lucide-react'
import { getNewsBySlug, getAllNewsSlugs, getNews } from '@/data/news'
import { format, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { AdBanner } from '@/components/ad-banner'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ShareButton } from '@/components/share-button'
import { ArticleShareButton } from '@/components/article-share-button'

export const revalidate = 3600; // Revalidate at most every hour

// This generates the routes at build time
export async function generateStaticParams() {
  const slugs = await getAllNewsSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

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


export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getNewsBySlug(params.slug)
  const latestNews = await getNews(3);
  const otherNews = latestNews.filter(n => n.slug !== params.slug).slice(0, 2);

  if (!article) {
    notFound()
  }

  const articleDate = format(article.publishedAt, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

  return (
    <div className="container mx-auto max-w-4xl py-12">
      <div className="mb-8">
        <AdBanner width={728} height={90} />
      </div>
      <article>
        <header className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <Badge variant="default">{article.category}</Badge>
            <ArticleShareButton title={article.title} slug={article.slug} />
          </div>

          <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight mb-4">{article.title}</h1>
          <div className="text-sm text-muted-foreground">
            <span>Por {article.author}</span> &bull; <span>{articleDate}</span>
          </div>
        </header>

        <div className="relative overflow-hidden rounded-lg mb-8">
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={675}
            className="w-full h-auto object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            data-ai-hint={article.dataAiHint}
            priority
          />
           {article.imageCredit && (
            <span className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                Imagem: {article.imageCredit}
            </span>
        )}
        </div>

        {article.content && (
          <div 
            className="text-lg space-y-6 [&_h3]:text-2xl [&_h3]:font-headline [&_h3]:font-bold [&_h3]:my-4 [&_strong]:font-bold"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        )}

        {article.fullArticleLink && (
            <div className="mt-8">
              <Link 
                href={article.fullArticleLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold text-[#ff073a] hover:text-yellow-400 transition-colors"
              >
                Leia mais.
              </Link>
            </div>
        )}
        
        <div className="mt-12 pt-8 border-t">
            <AdBanner width={728} height={90} />
        </div>
      </article>

      {otherNews.length > 0 && (
        <section className="mt-12 pt-8 border-t">
          <h2 className="text-3xl font-headline font-bold mb-6">Últimas Notícias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherNews.map((news) => (
              <Card key={news.slug} className="flex flex-col group overflow-hidden transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1">
                <CardHeader className="p-0 relative">
                    <Link href={`/noticias/${news.slug}`}>
                        <Image src={news.image} alt={news.title} width={600} height={400} className="rounded-t-lg object-cover aspect-[3/2] transition-transform duration-300 group-hover:scale-105" data-ai-hint={news.dataAiHint} />
                    </Link>
                  <Badge className="absolute top-2 left-2">{news.category}</Badge>
                  <ShareButton title={news.title} slug={news.slug} />
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
        </section>
      )}

      <div className="mt-12">
        <AdBanner width={728} height={90} />
      </div>
    </div>
  )
}
