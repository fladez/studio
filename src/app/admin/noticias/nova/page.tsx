'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { createNewsArticle } from '../actions';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Save } from 'lucide-react';

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
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Publicando...
        </>
      ) : (
        <>
          <Save className="mr-2 h-4 w-4" /> Publicar Notícia
        </>
      )}
    </Button>
  );
}

export default function CreateNewsPage() {
  const [state, formAction] = useFormState(createNewsArticle, initialState);
  const { toast } = useToast();

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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Criar Nova Notícia</CardTitle>
        <CardDescription>
          Preencha o formulário abaixo para publicar uma nova notícia no portal.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input id="title" name="title" placeholder="Flamengo vence de virada..." />
            {state.errors?.title && <p className="text-sm text-destructive">{state.errors.title[0]}</p>}
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <Label htmlFor="category">Categoria</Label>
                <Input id="category" name="category" placeholder="Futebol Profissional" />
                {state.errors?.category && <p className="text-sm text-destructive">{state.errors.category[0]}</p>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="image">URL da Imagem</Label>
                <Input id="image" name="image" placeholder="https://placehold.co/1200x600.png" />
                {state.errors?.image && <p className="text-sm text-destructive">{state.errors.image[0]}</p>}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="dataAiHint">Dica para IA (para imagem)</Label>
            <Input id="dataAiHint" name="dataAiHint" placeholder="soccer celebration" />
            {state.errors?.dataAiHint && <p className="text-sm text-destructive">{state.errors.dataAiHint[0]}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Conteúdo da Matéria (suporta HTML)</Label>
            <Textarea id="content" name="content" rows={15} placeholder="<p>Em uma noite eletrizante...</p>" />
            {state.errors?.content && <p className="text-sm text-destructive">{state.errors.content[0]}</p>}
          </div>

          <div className="flex justify-end">
            <SubmitButton />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
