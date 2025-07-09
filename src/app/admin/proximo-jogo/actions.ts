
"use server";

import { z } from "zod";
import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";

const nextGameSchema = z.object({
  home: z.string().min(1, { message: "O time da casa é obrigatório." }),
  away: z.string().min(1, { message: "O time visitante é obrigatório." }),
  competition: z.string().min(1, { message: "A competição é obrigatória." }),
  date: z.string().min(1, { message: "A data é obrigatória." }),
  time: z.string().min(1, { message: "A hora é obrigatória." }),
});

type State = {
  message?: string | null;
  error?: string | null;
};

export async function handleUpdateNextGame(prevState: State, formData: FormData): Promise<State> {
  if (!db) {
    return { error: "O banco de dados não está configurado." };
  }
  
  const validatedFields = nextGameSchema.safeParse({
    home: formData.get("home"),
    away: formData.get("away"),
    competition: formData.get("competition"),
    date: formData.get("date"),
    time: formData.get("time"),
  });

  if (!validatedFields.success) {
    const firstError = validatedFields.error.errors[0]?.message;
    return {
      error: firstError || "Erro de validação. Verifique os campos.",
    };
  }

  try {
    const nextGameRef = doc(db, "siteData", "nextGame");
    await setDoc(nextGameRef, validatedFields.data, { merge: true });
    return {
      message: "Próximo jogo atualizado com sucesso!",
      error: null,
    };
  } catch (error: any) {
    console.error("Erro ao atualizar o próximo jogo:", error);
    if (error.code === 'permission-denied') {
      return { error: "Permissão negada no Firestore. Verifique se a API está ativada e se as regras de segurança permitem escrita." };
    }
    return {
      error: "Ocorreu um erro ao salvar os dados no banco de dados.",
    };
  }
}
