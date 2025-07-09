import { getNews } from "@/data/get-news";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, FileEdit, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default async function NewsManagementPage() {
    const news = await getNews();
    
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Gerenciar Notícias</CardTitle>
                    <CardDescription>Adicione, edite ou remova notícias do portal.</CardDescription>
                </div>
                <Button asChild>
                    <Link href="/admin/noticias/nova">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Adicionar Notícia
                    </Link>
                </Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Título</TableHead>
                            <TableHead>Categoria</TableHead>
                            <TableHead>Data de Publicação</TableHead>
                            <TableHead className="text-right">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {news.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center h-24">Nenhuma notícia encontrada.</TableCell>
                            </TableRow>
                        )}
                        {news.map((article) => (
                            <TableRow key={article.id}>
                                <TableCell className="font-medium">{article.title}</TableCell>
                                <TableCell><Badge variant="secondary">{article.category}</Badge></TableCell>
                                <TableCell>{format(article.publishedAt, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon" asChild>
                                        <Link href={`/admin/noticias/editar/${article.id}`}>
                                            <FileEdit className="h-4 w-4" />
                                            <span className="sr-only">Editar</span>
                                        </Link>
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-destructive" disabled>
                                        <Trash2 className="h-4 w-4" />
                                        <span className="sr-only">Excluir</span>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
