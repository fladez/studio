
"use server";

import { z } from "zod";

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

  // Em uma aplicação real, aqui você atualizaria o banco de dados.
  // Por enquanto, vamos apenas logar os dados no console para demonstração.
  console.log("Dados do próximo jogo recebidos (não salvos):", validatedFields.data);

  // AVISO: A atualização não persistirá pois os dados estão em um arquivo estático (src/data/next-game.ts).
  // Para persistir, seria necessário conectar a um banco de dados como o Firestore.

  return {
    message: "Dados do 'Próximo Jogo' recebidos com sucesso! (Ação de demonstração)",
    error: null,
  };
}
