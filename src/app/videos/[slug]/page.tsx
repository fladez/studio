import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { getVideoBySlug, getAllVideoSlugs } from '@/data/videos'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Clock, Eye, PlayCircle } from 'lucide-react'

// This generates the routes at build time
export async function generateStaticParams() {
  const slugs = await getAllVideoSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

function formatViews(views: number): string {
    if (views >= 1_000_000) {
        return `${(views / 1_000_000).toFixed(1).replace('.', ',')}M`;
    }
    if (views >= 1_000) {
        return `${Math.floor(views / 1_000)}K`;
    }
    return views.toString();
}

export default async function VideoPage({ params }: { params: { slug: string } }) {
  const video = await getVideoBySlug(params.slug)

  if (!video) {
    notFound()
  }

  const videoDate = format(video.publishedAt, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

  return (
    <div className="container mx-auto max-w-4xl py-12">
      <article>
        <header className="mb-8">
          <Badge variant="default">{video.category}</Badge>
          <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight my-4">{video.title}</h1>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
             <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>Publicado em {videoDate}</span>
             </div>
             <div className="flex items-center gap-1.5">
                <Eye className="h-4 w-4" />
                <span>{formatViews(video.views)} visualizações</span>
            </div>
          </div>
        </header>
        
        <div className="relative aspect-video bg-black rounded-lg flex items-center justify-center text-white">
            <Image
              src={video.image}
              alt={video.title}
              fill
              className="w-full h-full object-cover rounded-lg"
              data-ai-hint={video.dataAiHint}
              priority
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <PlayCircle className="h-24 w-24 text-white/80 z-10" />
            <p className="absolute bottom-4 left-4 text-lg font-bold z-10">Vídeo indisponível</p>
        </div>
        <p className="mt-4 text-muted-foreground">Este é um player de vídeo de demonstração. Em um site real, aqui estaria o player de vídeo incorporado do YouTube, Vimeo, etc.</p>

      </article>
    </div>
  )
}
