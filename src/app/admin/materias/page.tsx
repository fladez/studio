
"use client";

import { useActionState, useRef, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import Link from 'next/link';
import { createNewsArticle, deleteNewsArticle } from "./actions";
import { getNews } from "@/data/news";
import type { NewsArticle } from "@/data/news";

// UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

// Icons
import { Loader2, FilePen, Trash2 } from "lucide-react";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const initialState = {
  success: false,
  message: "",
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Publicando...
        </>
      ) : (
        "Publicar Notícia"
      )}
    </Button>
  );
}

export default function MateriasPage() {
  const [state, formAction] = useActionState(createNewsArticle, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const [newsList, setNewsList] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNews = async () => {
    setIsLoading(true);
    const news = await getNews();
    setNewsList(news);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Sucesso!",
          description: state.message,
        });
        formRef.current?.reset();
        fetchNews(); // Re-fetch news to update the list
      } else {
        let description = state.message;
        if (state.errors) {
            const errorMessages = Object.values(state.errors).flat().join(' ');
            description += ` ${errorMessages}`;
        }
        toast({
          title: "Erro ao Publicar",
          description: description,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  const handleDelete = async (id: string) => {
    const result = await deleteNewsArticle(id);
    if (result.success) {
      toast({
        title: "Sucesso!",
        description: result.message,
      });
      setNewsList(currentNews => currentNews.filter(news => news.id !== id));
    } else {
      toast({
        title: "Erro ao Deletar",
        description: result.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Criar Nova Matéria</CardTitle>
          <CardDescription>
            Preencha os campos abaixo para publicar uma nova notícia no portal.
          </CardDescription>
        </CardHeader>
        <form ref={formRef} action={formAction}>
          <CardContent className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="title">Título</Label>
              <Input id="title" name="title" placeholder="Título que chama a atenção para a matéria" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="excerpt">Subtítulo (Resumo)</Label>
              <Textarea id="excerpt" name="excerpt" placeholder="Um resumo curto e direto que aparecerá nas listagens de notícias" required />
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="category">Categoria (Tag)</Label>
                    <Input id="category" name="category" placeholder="Ex: Futebol Profissional" required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="author">Autor (Opcional)</Label>
                    <Input id="author" name="author" placeholder="Padrão: Redação NRN" />
                </div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="grid gap-2">
                    <Label htmlFor="dataAiHint">Dica para IA da Imagem</Label>
                    <Input id="dataAiHint" name="dataAiHint" placeholder="Ex: soccer celebration" />
                </div>
                 <div className="grid gap-2">
                    <Label htmlFor="imageCredit">Crédito da Imagem (Opcional)</Label>
                    <Input id="imageCredit" name="imageCredit" placeholder="Ex: Foto: Reuters" />
                </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="image">Link da Foto da Matéria</Label>
                <Input id="image" name="image" type="url" placeholder="https://exemplo.com/imagem.png" required />
                <p className="text-xs text-muted-foreground">Recomendação: Imagem na proporção 16:9 (ex: 1200x675 pixels).</p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="fullArticleLink">Link para a Matéria Completa (Opcional)</Label>
              <Input id="fullArticleLink" name="fullArticleLink" type="url" placeholder="https://ge.globo.com/..." />
              <p className="text-xs text-muted-foreground">Se preenchido, um botão "Ler matéria completa" aparecerá no final do artigo.</p>
            </div>
             <div className="grid gap-2">
                <Label htmlFor="content">Conteúdo da Matéria</Label>
                <Textarea id="content" name="content" placeholder="Escreva a matéria completa aqui. Você pode usar tags HTML como <p>, <h3> e <strong> para formatar o texto." className="min-h-[300px]" required />
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Notícias Publicadas</CardTitle>
          <CardDescription>
            Gerencie as notícias existentes no portal.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : newsList.length > 0 ? (
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
                {newsList.map((news) => (
                  <TableRow key={news.id}>
                    <TableCell className="font-medium max-w-xs truncate">{news.title}</TableCell>
                    <TableCell>{news.category}</TableCell>
                    <TableCell>{format(news.publishedAt, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button asChild variant="ghost" size="icon">
                        <Link href={`/admin/materias/edit/${news.id}`}>
                          <FilePen className="h-4 w-4" />
                        </Link>
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Essa ação não pode ser desfeita. Isso irá deletar permanentemente a matéria.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction
                              className="bg-destructive hover:bg-destructive/90"
                              onClick={() => handleDelete(news.id)}
                            >
                              Deletar
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-center text-muted-foreground py-8">Nenhuma notícia publicada ainda.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
