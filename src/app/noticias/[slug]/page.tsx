import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Facebook, Twitter, Linkedin, Link as LinkIcon, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getNewsBySlug, getAllNewsSlugs } from '@/data/news'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AdBanner } from '@/components/ad-banner'

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate at most every hour

// This generates the routes at build time
export async function generateStaticParams() {
  const slugs = await getAllNewsSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getNewsBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const articleDate = format(article.publishedAt, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

  return (
    <div className="container mx-auto max-w-4xl py-12">
      <article>
        <header className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <Badge variant="default">{article.category}</Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Share2 className="mr-2 h-4 w-4" />
                  Compartilhar
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Twitter className="mr-2 h-4 w-4" />
                  <span>Twitter / X</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Facebook className="mr-2 h-4 w-4" />
                  <span>Facebook</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Linkedin className="mr-2 h-4 w-4" />
                  <span>LinkedIn</span>
                </DropdownMenuItem>
                 <DropdownMenuItem>
                  <LinkIcon className="mr-2 h-4 w-4" />
                  <span>Copiar Link</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight mb-4">{article.title}</h1>
          <div className="text-sm text-muted-foreground">
            <span>Por {article.author}</span> &bull; <span>{articleDate}</span>
          </div>
        </header>

        <div className="overflow-hidden rounded-lg mb-8">
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={675}
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

        {article.fullArticleLink && (
            <div className="mt-8">
              <Link 
                href={article.fullArticleLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold text-primary hover:text-yellow-400 transition-colors"
              >
                Leia mais.
              </Link>
            </div>
        )}
        
        <div className="mt-12 pt-8 border-t">
            <AdBanner width={728} height={90} />
        </div>
      </article>
    </div>
  )
}
