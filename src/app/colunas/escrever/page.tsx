"use client"

import { useFormState, useFormStatus } from "react-dom"
import { handleContextualize } from "./actions"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, Loader2, Send } from "lucide-react"

const initialState = {
  highlightedText: "",
  error: "",
}

function SubmitAIButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} variant="outline" size="sm">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processando...
        </>
      ) : (
        <>
          <Bot className="mr-2 h-4 w-4" /> Contextualizar com IA
        </>
      )}
    </Button>
  )
}

export default function WriteColumnPage() {
  const [state, formAction] = useFormState(handleContextualize, initialState)
  const [content, setContent] = useState("")

  useEffect(() => {
    if (state.highlightedText) {
      setContent(state.highlightedText)
    }
  }, [state.highlightedText])

  return (
    <div className="container mx-auto py-12">
      <form>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Escreva sua Coluna</CardTitle>
            <CardDescription>
              Compartilhe sua opinião com a Nação Rubro-Negra. Use a IA para identificar pessoas em seu texto e adicionar contexto de declarações anteriores para enriquecer sua análise.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="title">Título da Coluna</Label>
              <Input id="title" placeholder="Um título impactante para sua coluna" />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="content">Conteúdo</Label>
                <Textarea
                    id="content"
                    name="text"
                    placeholder="Escreva sua análise, opinião ou crônica aqui... Destaque nomes de jogadores, técnicos ou dirigentes para a IA contextualizar."
                    className="min-h-[250px]"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
          </CardContent>
        </Card>
      </form>
      
      <div className="max-w-4xl mx-auto mt-4 flex justify-between items-start">
        <form action={formAction}>
          <input type="hidden" name="text" value={content} />
          <SubmitAIButton />
          {state.error && <p className="text-sm text-destructive mt-2">{state.error}</p>}
        </form>
        <Button>
          <Send className="mr-2 h-4 w-4" />
          Publicar Coluna
        </Button>
      </div>

      <div className="max-w-4xl mx-auto mt-8 pt-6 border-t">
        <h3 className="text-xl font-headline font-bold mb-2">Pré-visualização</h3>
        <div
          className="p-4 bg-muted rounded-md border min-h-[100px] text-sm space-y-4 [&_strong]:text-primary [&_strong]:font-bold [&_p]:m-0"
          dangerouslySetInnerHTML={{ __html: content || "<p class='text-muted-foreground'>Sua pré-visualização aparecerá aqui...</p>" }}
        />
      </div>
    </div>
  )
}
