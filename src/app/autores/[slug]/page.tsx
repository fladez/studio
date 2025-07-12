
import * as React from 'react';
import Link from "next/link";
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getColumnsByAuthorSlug, getAuthorDetailsBySlug, getAllAuthorSlugs } from "@/data/columns";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";
import { format, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AdBanner } from '@/components/ad-banner';

export async function generateStaticParams() {
    const authors = await getAllAuthorSlugs();
    return authors;
}

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

export default async function AuthorPage({ params }: { params: { slug: string } }) {
    const authorDetails = await getAuthorDetailsBySlug(params.slug);
    const authorColumns = await getColumnsByAuthorSlug(params.slug);

    if (!authorDetails) {
        notFound();
    }

    return (
        <div className="container mx-auto py-12">
            <div className="mb-8">
                <AdBanner width={728} height={90} />
            </div>

            <header className="mb-12">
                <div className="flex flex-col items-center gap-4">
                    <Avatar className="h-24 w-24 border-4 border-primary/30">
                        <AvatarImage src={authorDetails.authorImage} alt={authorDetails.author} />
                        <AvatarFallback>
                            <User className="h-12 w-12 text-muted-foreground" />
                        </AvatarFallback>
                    </Avatar>
                    <h1 className="text-4xl font-headline font-bold">{authorDetails.author}</h1>
                    <p className="text-lg text-muted-foreground">Colunista no FLA10 News</p>
                </div>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {authorColumns.map((column) => (
                    <Card key={column.slug} className="flex flex-col group transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1">
                        <CardHeader>
                            <div className="flex items-center justify-between mb-4">
                                <Badge variant="default">{column.category}</Badge>
                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                    <Clock className="h-3 w-3" />
                                    <span>{formatPublishedTime(column.publishedAt)}</span>
                                </div>
                            </div>
                            <div>
                                <p className="font-bold text-primary">{column.columnName}</p>
                                <p className="text-sm text-muted-foreground">Por {column.author}</p>
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
                    </Card>
                ))}
            </div>

            {authorColumns.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                    <p>Nenhuma coluna encontrada para este autor.</p>
                </div>
            )}
        </div>
    );
}
