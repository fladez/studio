
import Image from 'next/image'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, User, Video, Newspaper, Users, TrendingUp, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const now = new Date();

const mainHeadlines = [
  {
    title: "Flamengo vence de virada e assume a liderança do campeonato",
    image: "https://placehold.co/1200x600.png",
    dataAiHint: "soccer match",
    category: "Futebol Profissional",
    slug: "flamengo-vence-lideranca",
    publishedAt: new Date(now.getTime() - 2 * 60 * 1000) // 2 minutes ago
  },
  {
    title: "Novo reforço é apresentado no Ninho do Urubu",
    image: "https://placehold.co/1200x600.png",
    dataAiHint: "player presentation",
    category: "Mercado da Bola",
    slug: "novo-reforco-apresentado",
    publishedAt: new Date(now.getTime() - 5 * 60 * 60 * 1000) // 5 hours ago
  },
  {
    title: "Basquete: Mengão conquista o título da NBB",
    image: "https://placehold.co/1200x600.png",
    dataAiHint: "basketball game",
    category: "Esportes Olímpicos",
    slug: "basquete-campeao-nbb",
    publishedAt: new Date(now.getTime() - 26 * 60 * 60 * 1000) // 26 hours ago (yesterday)
  },
];

const dailyNews = [
    { title: "Diretoria negocia renovação com craque do time", category: "Mercado da Bola", image: "https://placehold.co/600x400.png", dataAiHint: "contract signing", slug: "diretoria-negocia-renovacao", publishedAt: new Date(now.getTime() - 10 * 60 * 60 * 1000) },
    { title: "Confira a agenda de jogos do Flamengo para o próximo mês", category: "Calendário", image: "https://placehold.co/600x400.png", dataAiHint: "stadium overview", slug: "agenda-jogos-proximo-mes", publishedAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000) },
    { title: "Nação Rubro-Negra esgota ingressos para a final", category: "Torcida", image: "https://placehold.co/600x400.png", dataAiHint: "soccer fans", slug: "nacao-esgota-ingressos", publishedAt: new Date(now.getTime() - 3 * 60 * 60 * 1000) },
    { title: "Sub-20 do Flamengo avança para a final do Brasileirão", category: "Base", image: "https://placehold.co/600x400.png", dataAiHint: "youth soccer", slug: "sub20-avanca-final", publishedAt: new Date(now.getTime() - 8 * 60 * 60 * 1000) },
];

const opinionColumns = [
    { title: "A tática por trás da vitória", author: "Zico", image: "https://placehold.co/600x400.png", dataAiHint: "soccer tactics", slug: "tatica-vitoria-zico" },
    { title: "O coração da Nação na arquibancada", author: "Ana Torcedora", image: "https://placehold.co/600x400.png", dataAiHint: "stadium crowd", slug: "coracao-nacao-ana" },
    { title: "Análise: O que esperar do novo reforço?", author: "Júnior", image: "https://placehold.co/600x400.png", dataAiHint: "player analysis", slug: "analise-reforco-junior" },
];

const videos = [
    { title: "Bastidores da vitória no clássico", duration: "10:32", image: "https://placehold.co/600x400.png", dataAiHint: "locker room", slug: "bastidores-vitoria-classico" },
    { title: "Entrevista exclusiva com o artilheiro", duration: "05:12", image: "https://placehold.co/600x400.png", dataAiHint: "player interview", slug: "entrevista-artilheiro" },
    { title: "Golaços do Mengão no mês", duration: "03:45", image: "https://placehold.co/600x400.png", dataAiHint: "soccer goal", slug: "golacos-mes" },
];

function SectionHeader({ title, href, icon: Icon }: { title: string, href: string, icon: React.ElementType }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <Icon className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-headline font-bold">{title}</h2>
      </div>
      <Button variant="ghost" asChild>
        <Link href={href}>Ver todos <ArrowRight className="ml-2 h-4 w-4" /></Link>
      </Button>
    </div>
  )
}

export default function Home() {
  const allNewsForHomepage = [...mainHeadlines, ...dailyNews];

  const today = new Date();
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const newsTodayCount = allNewsForHomepage.filter(news => {
      const newsDate = new Date(news.publishedAt);
      return newsDate >= startOfToday;
  }).length;

  const mostRecentNewsDate = allNewsForHomepage.reduce((latest, news) => {
      const latestDate = new Date(latest);
      const newsDate = new Date(news.publishedAt);
      return newsDate > latestDate ? news.publishedAt : latest;
  }, allNewsForHomepage[0].publishedAt);
  
  const diffInMinutes = Math.round((new Date().getTime() - new Date(mostRecentNewsDate).getTime()) / (1000 * 60));
  
  let lastUpdateText: string;
  if (diffInMinutes < 1) {
    lastUpdateText = "Agora";
  } else if (diffInMinutes < 60) {
    lastUpdateText = `${diffInMinutes} min`;
  } else {
    const diffInHours = Math.floor(diffInMinutes / 60);
    lastUpdateText = `${diffInHours}h`;
  }

  const activeReaders = `${(Math.random() * (18.5 - 12.3) + 12.3).toFixed(1)}K`;

  return (
    <div>
      <section>
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {mainHeadlines.map((item, index) => (
              <CarouselItem key={index}>
                <Link href={`/noticias/${item.slug}`}>
                  <div className="relative aspect-video">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="w-full h-full object-cover"
                      data-ai-hint={item.dataAiHint}
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 md:p-8 text-white">
                      <Badge className="text-sm font-semibold bg-primary px-2 py-1 rounded">{item.category}</Badge>
                      <h2 className="text-xl md:text-4xl font-headline font-bold mt-2 max-w-4xl">{item.title}</h2>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 hidden md:flex" />
          <CarouselNext className="right-4 hidden md:flex" />
        </Carousel>
      </section>

      <div className="container mx-auto px-4 space-y-16">
        <section>
          <div className="bg-card shadow-lg rounded-lg p-4 -mt-16 mx-4 relative z-10">
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
                          <p className="text-2xl font-bold">{activeReaders}</p>
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
          <div className="bg-primary text-primary-foreground p-4 rounded-b-lg shadow-lg mx-4">
              <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 overflow-hidden">
                      <span className="bg-white text-primary font-bold text-xs uppercase px-3 py-2 rounded-full whitespace-nowrap">ÚLTIMO MOMENTO</span>
                      <p className="font-semibold text-sm md:text-base truncate hidden sm:block">Flamengo oficializa contratação de novo técnico para 2024</p>
                  </div>
                  <Button variant="link" asChild className="text-white hover:text-white/80 hover:no-underline text-sm font-bold whitespace-nowrap flex-shrink-0">
                      <Link href="#">Leia mais</Link>
                  </Button>
              </div>
              <p className="font-semibold text-sm text-center mt-3 sm:hidden">Flamengo oficializa contratação de novo técnico para 2024</p>
          </div>
        </section>
      
        <section>
          <SectionHeader title="Notícias Diárias" href="/noticias" icon={Newspaper} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailyNews.map((news) => (
              <Card key={news.slug} className="flex flex-col">
                <CardHeader className="p-0">
                  <Image src={news.image} alt={news.title} width={600} height={400} className="rounded-t-lg object-cover" data-ai-hint={news.dataAiHint} />
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <Badge variant="secondary" className="mb-2">{news.category}</Badge>
                  <CardTitle className="text-lg font-bold font-body leading-tight">{news.title}</CardTitle>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild className="w-full">
                    <Link href={`/noticias/${news.slug}`}>Ler Notícia</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Colunas de Opinião" href="/colunas" icon={Users} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {opinionColumns.map((column) => (
              <Card key={column.slug} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <User className="h-10 w-10 text-muted-foreground" />
                    <div>
                      <CardTitle className="text-xl font-bold font-body">{column.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">Por {column.author}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">"Uma análise profunda sobre o esquema tático que levou o time à vitória, destacando os pontos fortes e as jogadas ensaiadas..."</p>
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
        
        <section className="pb-8">
          <SectionHeader title="Vídeos e Bastidores" href="/videos" icon={Video} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card key={video.slug} className="group">
                <Link href={`/videos/${video.slug}`}>
                  <CardContent className="p-0 relative">
                    <Image src={video.image} alt={video.title} width={600} height={400} className="rounded-lg object-cover" data-ai-hint={video.dataAiHint} />
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
      </div>
    </div>
  )
}
