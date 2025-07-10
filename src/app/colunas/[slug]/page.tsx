
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { getColumnBySlug, getAllColumnSlugs, getColumns } from '@/data/columns'
import { format, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { AdBanner } from '@/components/ad-banner'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock } from 'lucide-react'

export const revalidate = 3600; // Revalidate at most every hour

// This generates the routes at build time
export async function generateStaticParams() {
  const columns = await getAllColumnSlugs();
  return columns.map((column) => ({
    slug: column.slug,
  }));
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

export default async function ColumnPage({ params }: { params: { slug:string } }) {
  const column = await getColumnBySlug(params.slug)
  const allColumns = await getColumns(3); 
  
  if (!column) {
    notFound()
  }
  
  const otherColumns = allColumns.filter(c => c.id !== column.id).slice(0, 2);
  const columnDate = format(column.publishedAt, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

  return (
    <div className="container mx-auto max-w-4xl py-12">
      <div className="mb-8">
        <AdBanner width={728} height={90} />
      </div>
      <article>
        <header className="mb-8">
          <div className="flex justify-end mb-2">
            <Badge variant="default">{column.category}</Badge>
          </div>
          <p className="font-sans text-6xl font-bold text-primary text-center">{column.columnName}</p>
          <Separator className="my-4" />
          <h1 className="font-headline text-3xl md:text-4xl font-bold leading-tight">{column.title}</h1>
          <div className="flex items-center justify-start gap-4 mt-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={column.authorImage} alt={column.author} />
              <AvatarFallback>{column.author.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="text-sm text-muted-foreground">
              <p className="font-bold text-base text-foreground">Por {column.author}</p>
              <span>{columnDate}</span>
            </div>
          </div>
        </header>
        
        {column.content && (
          <div 
            className="text-lg space-y-6 [&_h3]:text-2xl [&_h3]:font-headline [&_h3]:font-bold [&_h3]:my-4 [&_strong]:font-bold"
            dangerouslySetInnerHTML={{ __html: column.content }}
          />
        )}

        <div className="mt-12 pt-8 border-t">
            <AdBanner width={728} height={90} />
        </div>
      </article>

      {otherColumns.length > 0 && (
        <section className="mt-12 pt-8 border-t">
          <h2 className="text-3xl font-headline font-bold mb-6">Outras Colunas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherColumns.map((col) => (
                <Card key={col.slug} className="flex flex-col group transition-all duration-300 hover:shadow-primary-lg hover:-translate-y-1">
                    <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                            <Badge variant="default">{col.category}</Badge>
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                <span>{formatPublishedTime(col.publishedAt)}</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Avatar className="h-12 w-12 border-2 border-primary/20">
                                <AvatarImage src={col.authorImage} alt={col.author} />
                                <AvatarFallback>{col.author.slice(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-bold text-primary">{col.columnName}</p>
                                <p className="text-sm text-muted-foreground">Por {col.author}</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-2">
                        <CardTitle className="text-xl font-bold font-body leading-tight">
                            <Link href={`/colunas/${col.slug}`} className="hover:text-[#FF073A] transition-colors duration-200">
                            {col.title}
                            </Link>
                        </CardTitle>
                        <p className="text-muted-foreground text-sm line-clamp-3">"{col.excerpt}"</p>
                    </CardContent>
                </Card>
            ))}
          </div>
        </section>
      )}

      <div className="mt-12">
        <AdBanner width={728} height={90} />
      </div>
    </div>
  )
}
