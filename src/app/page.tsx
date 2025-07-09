
import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Video, Newspaper, TrendingUp, Clock, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { AdBanner } from '@/components/ad-banner'
import { SofascoreWidget } from '@/components/sofascore-widget'
import { getNews } from '@/data/news'
import { opinionColumns } from '@/data/columns'
import { videos } from '@/data/videos'
import { MainCarousel } from '@/components/home/main-carousel'
import { ActiveReaders } from '@/components/home/active-readers'
import { format, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns'
import { ShareButton } from '@/components/share-button'

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

function SectionHeader({ title, subtitle, href, icon: Icon }: { title: string, subtitle?: string, href?: string, icon: React.ElementType }) {
  return (
    <div className="mb-8 border-b border-primary/40 pb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Icon className="h-8 w-8 text-primary flex-shrink-0" />
          <div>
            <h2 className="text-3xl font-headline font-bold">{title}</h2>
            {subtitle && <p className="text-lg text-muted-foreground mt-1">{subtitle}</p>}
          </div>
        </div>
        {href && (
          <Button variant="ghost" asChild className="font-sans font-bold text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href={href}>Ver todas <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        )}
      </div>
    </div>
  )
}

export default function Home() {
  const allNews = getNews();

  const mainHeadlines = allNews.slice(0, 3);
  const dailyNews = allNews.slice(3, 7);
  const homePageOpinionColumns = opinionColumns.slice(0, 3);
  const homePageVideos = videos.slice(0, 3);
  const latestNews = allNews.length > 0 ? allNews[0] : null;

  const today = new Date();
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const newsTodayCount = allNews.filter(news => {
      const newsDate = new Date(news.publishedAt);
      return newsDate >= startOfToday;
  }).length;
  
  let lastUpdateText = "Agora";
  if (latestNews) {
    const mostRecentNewsDate = latestNews.publishedAt;
    const diffInMinutes = Math.round((new Date().getTime() - new Date(mostRecentNewsDate).getTime()) / (1000 * 60));
    if (diffInMinutes < 1) {
        lastUpdateText = "Agora";
      } else if (diffInMinutes < 60) {
        lastUpdateText = `${diffInMinutes} min`;
      } else {
        const diffInHours = Math.floor(diffInMinutes / 60);
        lastUpdateText = `${diffInHours}h`;
      }
  }


  return (
    <div>
      <section>
        <MainCarousel headlines={mainHeadlines} />
      </section>

      <div className="container mx-auto px-4 space-y-16">
        <div className="mt-12 space-y-4">
          <section>
            <div className="bg-transparent shadow-none rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-border">
                    <div className="flex items-center justify-center gap-4 py-4 md:py-0">
                        <div className="bg-primary text-primary-foreground p-3 rounded-full">
                            <TrendingUp className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">{newsTodayCount}</p>
                            <p className="text-sm text-muted-foreground">Notícias hoje</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 py-4 md:py-0">
                        <div className="bg-primary text-primary-foreground p-3 rounded-full">
                            <Users className="h-6 w-6" />
                        </div>
                        <div>
                            <ActiveReaders />
                            <p className="text-sm text-muted-foreground">Leitores ativos</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 py-4 md:py-0">
                        <div className="bg-primary text-primary-foreground p-3 rounded-full">
                            <Clock className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">{lastUpdateText}</p>
                            <p className="text-sm text-muted-foreground">Última atualização</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>
          
          {latestNews && (
            <section>
                <div className="bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 overflow-hidden">
                            <span className="bg-white text-primary font-bold text-xs uppercase px-3 py-2 rounded-full whitespace-nowrap">ÚLTIMO MOMENTO</span>
                            <p className="font-semibold text-sm md:text-base truncate hidden sm:block">{latestNews.title}</p>
                        </div>
                        <Button variant="link" asChild className="text-white hover:text-white/80 hover:no-underline text-sm font-bold whitespace-nowrap flex-shrink-0">
                            <Link href={`/noticias/${latestNews.slug}`}>Leia mais</Link>
                        </Button>
                    </div>
                    <p className="font-semibold text-sm text-center mt-3 sm:hidden">{latestNews.title}</p>
                </div>
            </section>
          )}
        </div>
      
        <section>
          <SectionHeader title="Últimas Notícias" subtitle="Fique por dentro de tudo que acontece com o Mengão." href="/noticias" icon={Newspaper} />
          {dailyNews.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dailyNews.map((news) => (
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
          ) : (
             <div className="text-center py-8 text-muted-foreground">
                <p>Nenhuma notícia recente para exibir.</p>
            </div>
          )}
        </section>

        <AdBanner width={468} height={60} />

        <section>
          <SectionHeader title="Colunas e Opinião" subtitle="Análises e comentários dos torcedores e dos melhores cronistas esportivos." href="/colunas" icon={Users} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homePageOpinionColumns.map((column) => (
              <Card key={column.slug} className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Users className="h-10 w-10 text-muted-foreground" />
                    <div>
                      <CardTitle className="text-xl font-bold font-body">{column.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">Por {column.author}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">"{column.excerpt}"</p>
                </CardContent>
                <CardFooter>
                   <Button asChild className="w-full" variant="outline">
                    <Link href={`/colunas/${column.slug}`}>Ler Coluna</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        
        <AdBanner width={728} height={90} />

        <section>
          <SectionHeader title="Vídeos e Bastidores" subtitle="Conteúdo de jogos e bastidores do dia a dia do clube." href="/videos" icon={Video} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homePageVideos.map((video) => (
              <Card key={video.slug} className="group overflow-hidden">
                <Link href={`/videos/${video.slug}`}>
                  <CardContent className="p-0 relative">
                    <Image src={video.image} alt={video.title} width={600} height={400} className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={video.dataAiHint} />
                    <div className="absolute inset-0 bg-black/40 rounded-lg group-hover:bg-black/20 transition-colors"></div>
                    <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">{video.duration}</div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg leading-tight">{video.title}</h3>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>
        
        <AdBanner width={300} height={250} />

        <section className="pb-8">
          <SectionHeader title="Tabela do Brasileirão" subtitle="Acompanhe a classificação do Mengão no campeonato." icon={TrendingUp} />
          <div className="relative mt-8">
            <Image
              src="https://i.imgur.com/ldrhVdT.png"
              alt="Logo do Campeonato Brasileiro"
              width={88}
              height={46}
              className="hidden md:block object-contain absolute -top-4 left-4 z-10"
            />
            <Image
              src="https://i.imgur.com/ldrhVdT.png"
              alt="Logo do Campeonato Brasileiro"
              width={44}
              height={23}
              className="block md:hidden object-contain absolute -top-4 left-[3px] z-10"
            />
            <SofascoreWidget />
          </div>
        </section>

      </div>
    </div>
  )
}
