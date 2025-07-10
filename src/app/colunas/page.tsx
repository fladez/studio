import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getColumns } from "@/data/columns";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { format, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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


export default function ColunasPage() {
    const allColumns = getColumns();

    return (
        <div className="container mx-auto py-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 border-b border-primary/40 pb-4">
                <div>
                    <h1 className="text-4xl font-headline font-bold">Colunas da Nação</h1>
                    <p className="text-lg text-muted-foreground mt-2">O espaço para a opinião de craques e torcedores.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allColumns.map((column) => (
                    <Card key={column.slug} className="flex flex-col group transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <Badge variant="secondary">{column.category}</Badge>
                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                    <Clock className="h-3 w-3" />
                                    <span>{formatPublishedTime(column.publishedAt)}</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-2">
                            <CardTitle className="text-xl font-bold font-body leading-tight">
                                <Link href={`/colunas/${column.slug}`} className="hover:text-[#FF073A] transition-colors duration-200">
                                    {column.title}
                                </Link>
                            </CardTitle>
                            <p className="text-muted-foreground text-sm line-clamp-3">"{column.excerpt}"</p>
                        </CardContent>
                        <CardFooter>
                           <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10">
                                <AvatarImage src={column.authorImage} alt={column.author} />
                                <AvatarFallback>{column.author.slice(0, 2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">Por {column.author}</p>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
