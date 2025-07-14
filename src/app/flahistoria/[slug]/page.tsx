
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getHistoryArticleBySlug } from '@/data/history'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { AdBanner } from '@/components/ad-banner'
import { Clock, PlayCircle } from 'lucide-react'

export const revalidate = 3600;

function getYouTubeId(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

export default async function HistoryArticlePage({ params }: { params: { slug: string } }) {
  const article = await getHistoryArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const articleDate = format(article.publishedAt, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  const videoId = article.videoUrl ? getYouTubeId(article.videoUrl) : null;

  return (
    <div className="container mx-auto max-w-4xl py-12">
      <div className="mb-8">
        <AdBanner width={728} height={90} />
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
    </div>
  )
}
