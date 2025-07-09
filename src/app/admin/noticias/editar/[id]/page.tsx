'use client';

import { useFormStatus } from 'react-dom';
import { updateNewsArticle } from '../../actions';
import { useEffect, useActionState, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Save, ArrowLeft } from 'lucide-react';
import { getDoc, doc, DocumentData } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { NewsArticle } from '@/data/get-news';
import Link from 'next/link';

const initialState = {
  message: null,
  error: null,
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Atualizando...
        </>
      ) : (
        <>
          <Save className="mr-2 h-4 w-4" /> Salvar Alterações
        </>
      )}
    </Button>
  );
}

// We omit 'publishedAt' because it's not directly editable in the form
type EditableArticle = Omit<NewsArticle, 'publishedAt'>;

function mapDocToEditableArticle(doc: DocumentData): EditableArticle {
    const data = doc.data();
    return {
        id: doc.id,
        title: data.title || '',
        category: data.category || '',
        image: data.image || '',
        dataAiHint: data.dataAiHint || '',
        slug: data.slug || '',
        content: data.content || '',
    };
}


export default function EditNewsPage({ params }: { params: { id: string } }) {
  const updateActionWithId = updateNewsArticle.bind(null, params.id);
  const [state, formAction] = useActionState(updateActionWithId, initialState);
  const { toast } = useToast();
  const [article, setArticle] = useState<EditableArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (state.message) {
      toast({
        title: "Sucesso!",
        description: state.message,
      });
    }
    if (state.error && !state.errors) {
      toast({
        variant: 'destructive',
        title: 'Erro!',
        description: state.error,
      });
    }
  }, [state, toast]);

  useEffect(() => {
    async function fetchArticle() {
      if (!db) {
        toast({ variant: 'destructive', title: 'Erro de Configuração', description: 'Banco de dados não configurado.' });
        setLoading(false);
        return;
      }
      try {
        const docRef = doc(db, 'news', params.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setArticle(mapDocToEditableArticle(docSnap));
        } else {
          toast({ variant: 'destructive', title: 'Erro', description: 'Notícia não encontrada.' });
        }
      } catch (error) {
        toast({ variant: 'destructive', title: 'Erro', description: 'Falha ao carregar a notícia.' });
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchArticle();
  }, [params.id, toast]);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Editar Notícia</CardTitle>
          <CardDescription>Carregando dados da notícia...</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center py-10">
          <Loader2 className="h-8 w-8 animate-spin" />
        </CardContent>
      </Card>
    );
  }

  if (!article) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Erro</CardTitle>
          <CardDescription>A notícia que você está tentando editar não foi encontrada.</CardDescription>
        </CardHeader>
        <CardContent>
            <Button asChild variant="outline">
                <Link href="/admin/noticias">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar para a lista
                </Link>
            </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Editar Notícia</CardTitle>
        <CardDescription>
          Faça as alterações necessárias e clique em salvar.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input id="title" name="title" defaultValue={article.title} />
            {state.errors?.title && <p className="text-sm text-destructive">{state.errors.title[0]}</p>}
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <Label htmlFor="category">Categoria</Label>
                <Input id="category" name="category" defaultValue={article.category} />
                {state.errors?.category && <p className="text-sm text-destructive">{state.errors.category[0]}</p>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="image">URL da Imagem</Label>
                <Input id="image" name="image" defaultValue={article.image} />
                {state.errors?.image && <p className="text-sm text-destructive">{state.errors.image[0]}</p>}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="dataAiHint">Dica para IA (para imagem)</Label>
            <Input id="dataAiHint" name="dataAiHint" defaultValue={article.dataAiHint} />
            {state.errors?.dataAiHint && <p className="text-sm text-destructive">{state.errors.dataAiHint[0]}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Conteúdo da Matéria (suporta HTML)</Label>
            <Textarea id="content" name="content" rows={15} defaultValue={article.content} />
            {state.errors?.content && <p className="text-sm text-destructive">{state.errors.content[0]}</p>}
          </div>

          <div className="flex justify-between items-center">
            <Button asChild variant="outline">
                <Link href="/admin/noticias">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Cancelar
                </Link>
            </Button>
            <SubmitButton />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
