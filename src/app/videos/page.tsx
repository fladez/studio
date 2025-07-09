import Image from 'next/image'
import Link from 'next/link'
import { Eye, PlayCircle, Clock } from 'lucide-react'
import { videos } from '@/data/videos'
import { format, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns'

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

function formatViews(views: number): string {
    if (views >= 1_000_000) {
        return `${(views / 1_000_000).toFixed(1).replace('.', ',')}M`;
    }
    if (views >= 1_000) {
        return `${Math.floor(views / 1_000)}K`;
    }
    return views.toString();
}

export default function VideosPage() {
    return (
        <div className="container mx-auto py-12">
            <div className="mb-8">
                <h1 className="text-4xl font-headline font-bold">Vídeos e Bastidores</h1>
                <p className="text-lg text-muted-foreground mt-2">Veja os melhores momentos, entrevistas e o dia a dia do Mais Querido.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                {videos.map((video) => (
                    <div key={video.slug} className="group">
                        <div className="relative mb-2 overflow-hidden rounded-lg">
                            <Link href={`/videos/${video.slug}`}>
                                <Image src={video.image} alt={video.title} width={600} height={400} className="w-full object-cover aspect-[16/9] transition-transform duration-300 group-hover:scale-105" data-ai-hint={video.dataAiHint} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg"></div>
                                <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">{video.duration}</div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <PlayCircle className="h-16 w-16 text-white/80" />
                                </div>
                            </Link>
                        </div>
                        <h3 className="font-bold text-lg leading-tight group-hover:text-[#FF073A] transition-colors duration-200">
                            <Link href={`/videos/${video.slug}`}>
                                {video.title}
                            </Link>
                        </h3>
                        <div className="flex justify-between items-center text-sm text-muted-foreground mt-2">
                          <div className="flex items-center gap-1.5">
                              <Eye className="h-4 w-4" />
                              <span className="text-xs">{formatViews(video.views)} visualizações</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                              <Clock className="h-4 w-4" />
                              <span className="text-xs">{formatPublishedTime(video.publishedAt)}</span>
                          </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
