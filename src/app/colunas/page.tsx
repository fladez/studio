import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import { opinionColumns } from "@/data/columns";

export default function ColunasPage() {
    return (
        <div className="container mx-auto py-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 border-b border-primary/40 pb-4">
                <div>
                    <h1 className="text-4xl font-headline font-bold">Colunas da Nação</h1>
                    <p className="text-lg text-muted-foreground mt-2">O espaço para a opinião de craques e torcedores.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {opinionColumns.map((column) => (
                    <Card key={column.slug} className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-muted rounded-full">
                                    <User className="h-8 w-8 text-muted-foreground" />
                                </div>
                                <div>
                                    <CardTitle className="text-xl font-bold font-body">{column.title}</CardTitle>
                                    <CardDescription>Por {column.author}</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground text-sm line-clamp-3">{column.excerpt}</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full" variant="outline">
                                <Link href={`/colunas/${column.slug}`}>Ler Coluna Completa</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
