"use client";

import { useActionState, useRef, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { createNewsArticle } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

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

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Sucesso!",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        // Concatenate all error messages for the toast
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

  return (
    <div className="max-w-4xl mx-auto">
      <form ref={formRef} action={formAction}>
        <Card>
          <CardHeader>
            <CardTitle>Criar Nova Matéria</CardTitle>
            <CardDescription>
              Preencha os campos abaixo para publicar uma nova notícia no portal.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="title">Título</Label>
              <Input id="title" name="title" placeholder="Título que chama a atenção para a matéria" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="excerpt">Subtítulo (Resumo)</Label>
              <Textarea id="excerpt" name="excerpt" placeholder="Um resumo curto e direto que aparecerá nas listagens de notícias" required />
            </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="category">Categoria (Tag)</Label>
                    <Input id="category" name="category" placeholder="Ex: Futebol Profissional" required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="author">Autor (Opcional)</Label>
                    <Input id="author" name="author" placeholder="Padrão: Redação NRN" />
                </div>
                 <div className="grid gap-2">
                    <Label htmlFor="dataAiHint">Dica para IA da Imagem</Label>
                    <Input id="dataAiHint" name="dataAiHint" placeholder="Ex: soccer celebration" />
                </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="image">Link da Foto da Matéria</Label>
                <Input id="image" name="image" type="url" placeholder="https://exemplo.com/imagem.png" required />
                <p className="text-xs text-muted-foreground">Recomendação: Imagem na proporção 16:9 (ex: 1200x675 pixels).</p>
            </div>
             <div className="grid gap-2">
                <Label htmlFor="content">Conteúdo da Matéria</Label>
                <Textarea id="content" name="content" placeholder="Escreva a matéria completa aqui. Você pode usar tags HTML como <p>, <h3> e <strong> para formatar o texto." className="min-h-[300px]" required />
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
