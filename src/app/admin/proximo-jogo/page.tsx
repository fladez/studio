
"use client"

import { useFormStatus } from "react-dom"
import { handleUpdateNextGame } from "./actions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2, Save } from "lucide-react"
import { useEffect, useState, useActionState } from "react"
import { useToast } from "@/hooks/use-toast"
import { db } from "@/lib/firebase"
import { doc, getDoc } from "firebase/firestore"
import type { NextGameData } from "@/data/get-next-game"

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
  const [state, formAction] = useActionState(handleUpdateNextGame, initialState);
  const { toast } = useToast();
  const [nextGame, setNextGame] = useState<NextGameData | null>(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    async function fetchNextGame() {
      if (!db) {
        toast({ variant: "destructive", title: "Erro", description: "Banco de dados não configurado." });
        setLoading(false);
        return;
      }
      try {
        const docRef = doc(db, "siteData", "nextGame");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setNextGame(docSnap.data() as NextGameData);
        } else {
          setNextGame(null); 
          toast({ title: "Aviso", description: "Nenhum dado de jogo encontrado. Preencha o formulário para criar." });
        }
      } catch (error: any) {
        if (error.code === 'permission-denied') {
          toast({ variant: "destructive", title: "Erro de Permissão", description: "Não foi possível carregar os dados. Verifique as configurações do Firestore." });
        } else {
          toast({ variant: "destructive", title: "Erro", description: "Não foi possível carregar os dados do jogo." });
        }
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchNextGame();
  }, [toast]);

  if (loading) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Atualizar Próximo Jogo</CardTitle>
                <CardDescription>
                Modifique as informações da barra que exibe o próximo jogo do Flamengo. As alterações serão salvas no banco de dados e refletidas em todo o site.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </CardContent>
        </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Atualizar Próximo Jogo</CardTitle>
        <CardDescription>
          Modifique as informações da barra que exibe o próximo jogo do Flamengo. As alterações serão salvas no banco de dados e refletidas em todo o site.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="home">Time da Casa</Label>
              <Input id="home" name="home" defaultValue={nextGame?.home || "Flamengo"} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="away">Time Visitante</Label>
              <Input id="away" name="away" defaultValue={nextGame?.away || ""} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="competition">Competição</Label>
            <Input id="competition" name="competition" defaultValue={nextGame?.competition || ""} />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="date">Data</Label>
              <Input id="date" name="date" defaultValue={nextGame?.date || ""} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Hora</Label>
              <Input id="time" name="time" defaultValue={nextGame?.time || ""} />
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
