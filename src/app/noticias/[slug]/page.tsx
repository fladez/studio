import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { allNews } from '@/data/news'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = allNews.find((news) => news.slug === params.slug)

  if (!article) {
    notFound()
  }

  const articleDate = format(article.publishedAt, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

  return (
    <div className="container mx-auto max-w-4xl py-12">
      <article>
        <header className="mb-8">
          <Badge className="mb-2">{article.category}</Badge>
          <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight mb-4">{article.title}</h1>
          <div className="text-sm text-muted-foreground">
            <span>Por Redação NRN</span> &bull; <span>{articleDate}</span>
          </div>
        </header>

        <div className="overflow-hidden rounded-lg mb-8">
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={500}
            className="w-full h-auto object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            data-ai-hint={article.dataAiHint}
            priority
          />
        </div>

        {article.content && (
          <div 
            className="text-lg space-y-6 [&_h3]:text-2xl [&_h3]:font-headline [&_h3]:font-bold [&_h3]:my-4 [&_strong]:font-bold"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        )}

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-lg font-bold mb-4">Compartilhe esta notícia</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" aria-label="Compartilhar no Twitter">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Compartilhar no Facebook">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Compartilhar no LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline"size="icon" aria-label="Copiar link">
              <LinkIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}
