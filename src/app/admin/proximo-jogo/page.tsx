
"use client"

import { useFormState, useFormStatus } from "react-dom"
import { handleUpdateNextGame } from "./actions"
import { nextGame } from "@/data/next-game"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2, Save } from "lucide-react"
import { useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

const initialState = {
  message: "",
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Salvando...
        </>
      ) : (
        <>
          <Save className="mr-2 h-4 w-4" /> Salvar Alterações
        </>
      )}
    </Button>
  );
}

export default function ProximoJogoPage() {
  const [state, formAction] = useFormState(handleUpdateNextGame, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: "Sucesso!",
        description: state.message,
      });
    }
    if (state.error) {
      toast({
        variant: "destructive",
        title: "Erro!",
        description: state.error,
      });
    }
  }, [state, toast]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Atualizar Próximo Jogo</CardTitle>
        <CardDescription>
          Modifique as informações da barra que exibe o próximo jogo do Flamengo.
          Os dados atuais são apenas para demonstração e não serão salvos permanentemente.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="home">Time da Casa</Label>
              <Input id="home" name="home" defaultValue={nextGame.home} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="away">Time Visitante</Label>
              <Input id="away" name="away" defaultValue={nextGame.away} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="competition">Competição</Label>
            <Input id="competition" name="competition" defaultValue={nextGame.competition} />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="date">Data</Label>
              <Input id="date" name="date" defaultValue={nextGame.date} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Hora</Label>
              <Input id="time" name="time" defaultValue={nextGame.time} />
            </div>
          </div>
          <div className="flex justify-end">
            <SubmitButton />
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
