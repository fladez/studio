import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { getColumnBySlug, getColumns } from '@/data/columns'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// This generates the routes at build time
export function generateStaticParams() {
  const columns = getColumns();
  return columns.map((column) => ({
    slug: column.slug,
  }));
}

export default function ColumnPage({ params }: { params: { slug:string } }) {
  const column = getColumnBySlug(params.slug)

  if (!column) {
    notFound()
  }

  const columnDate = format(column.publishedAt, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

  return (
    <div className="container mx-auto max-w-4xl py-12">
      <article>
        <header className="mb-8">
          <Badge variant="default">{column.category}</Badge>
          <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight my-4">{column.title}</h1>
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
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
      </article>
    </div>
  )
}
