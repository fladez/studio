import { getNews } from "@/data/news";
import { getColumns } from "@/data/columns";
import { getVideos } from "@/data/videos";
import { getUserCount } from "@/data/users";
import { StatCard } from "@/components/admin/stat-card";
import { ContentViewsChart, ShareDestinationsChart, MostViewedContentChart } from "@/components/admin/charts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import { Newspaper, PenSquare, Video, Eye, Share2, Users, UserPlus, TrendingUp, BarChart, PieChart as PieChartIcon } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

export default async function AdminDashboard() {
    const news = await getNews();
    const columns = getColumns();
    const videos = await getVideos();
    const userCount = await getUserCount();

    const totalVideoViews = videos.reduce((acc, video) => acc + video.views, 0);
    const totalNewsViews = news.reduce((acc, article) => acc + article.views, 0);
    const totalColumnsViews = columns.reduce((acc, column) => acc + column.views, 0);
    const totalContentShares = 1345; // Placeholder
    
    const recentContent = [...news, ...columns, ...videos]
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, 5)
        .map(item => {
            if ('excerpt' in item) { // News or Column
                return {
                    title: item.title,
                    type: 'content' in item ? 'Coluna' : 'Notícia',
                    date: item.publishedAt,
                    slug: 'content' in item ? `/colunas/${item.slug}` : `/noticias/${item.slug}`
                }
            } else { // Video
                 return {
                    title: item.title,
                    type: 'Vídeo',
                    date: item.publishedAt,
                    slug: `/videos/${item.slug}`
                }
            }
        });
    
    const mostViewedData = [
        { type: "noticias", views: totalNewsViews, fill: "hsl(var(--chart-1))" },
        { type: "colunas", views: totalColumnsViews, fill: "hsl(var(--chart-2))" },
        { type: "videos", views: totalVideoViews, fill: "hsl(var(--chart-3))" },
    ];

    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <StatCard title="Total de Notícias" value={news.length} icon={Newspaper} />
                <StatCard title="Total de Colunas" value={columns.length} icon={PenSquare} />
                <StatCard title="Total de Vídeos" value={videos.length} icon={Video} />
                <StatCard title="Usuários Cadastrados" value={userCount} icon={UserPlus} />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                 <StatCard title="Visualizações Totais" value={(totalVideoViews + totalNewsViews + totalColumnsViews).toLocaleString('pt-BR')} icon={Eye} description="Notícias, Colunas e Vídeos" />
                 <StatCard title="Compartilhamentos" value={totalContentShares.toLocaleString('pt-BR')} icon={Share2} description="Total em todas as plataformas" />
            </div>

             <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Share2 className="h-5 w-5" />
                            Destinos de Compartilhamento
                        </CardTitle>
                        <CardDescription>
                            Plataformas onde o conteúdo foi mais compartilhado.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                       <ShareDestinationsChart />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                           <PieChartIcon className="h-5 w-5" />
                            Conteúdo Mais Visto
                        </CardTitle>
                        <CardDescription>
                            Distribuição de visualizações por tipo de conteúdo.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                       <MostViewedContentChart data={mostViewedData} />
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart className="h-5 w-5" />
                            Visualizações de Vídeos por Categoria
                        </CardTitle>
                        <CardDescription>
                            Visualizações de vídeo agrupadas por categoria nos últimos 30 dias.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                       <ContentViewsChart />
                    </CardContent>
                </Card>

                 <Card className="lg:col-span-3">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5" />
                            Conteúdo Recente
                        </CardTitle>
                         <CardDescription>
                            As últimas 5 publicações no site.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                <TableHead>Título</TableHead>
                                <TableHead>Tipo</TableHead>
                                <TableHead className="text-right">Data</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentContent.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">
                                        <Link href={item.slug} className="hover:underline" target="_blank">
                                            {item.title}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={
                                            item.type === 'Notícia' ? 'default' :
                                            item.type === 'Coluna' ? 'secondary' :
                                            'outline'
                                        }>{item.type}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right text-muted-foreground text-xs">{format(new Date(item.date), 'dd/MM/yyyy')}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
