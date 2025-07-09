import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { PlayCircle } from 'lucide-react'
import { videos } from '@/data/videos'

export default function VideosPage() {
    return (
        <div className="container mx-auto py-12">
            <div className="mb-8">
                <h1 className="text-4xl font-headline font-bold">Vídeos e Bastidores</h1>
                <p className="text-lg text-muted-foreground mt-2">Veja os melhores momentos, entrevistas e o dia a dia do Mais Querido.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                <Card key={video.slug} className="group overflow-hidden">
                    <Link href={`/videos/${video.slug}`}>
                    <CardContent className="p-0 relative">
                        <Image src={video.image} alt={video.title} width={600} height={400} className="rounded-lg object-cover aspect-[16/9] transition-transform duration-300 group-hover:scale-105" data-ai-hint={video.dataAiHint} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg"></div>
                        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">{video.duration}</div>
                        <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-bold text-lg leading-tight">{video.title}</h3>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <PlayCircle className="h-16 w-16 text-white/80" />
                        </div>
                    </CardContent>
                    </Link>
                </Card>
                ))}
            </div>
        </div>
    )
}
