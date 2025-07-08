"use server"

import { contextualizeNames } from "@/ai/flows/contextualize-names"
import { z } from "zod"

const aISchema = z.object({
  text: z.string().min(10, { message: "O texto precisa ter pelo menos 10 caracteres." }),
})

type State = {
    highlightedText?: string | null;
    error?: string | null;
}

export async function handleContextualize(prevState: State, formData: FormData): Promise<State> {
  const text = formData.get("text") as string

  const validatedFields = aISchema.safeParse({ text })

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.text?.[0],
    }
  }

  try {
    const result = await contextualizeNames({ text: validatedFields.data.text })
    if (result.highlightedText) {
        return {
            highlightedText: result.highlightedText,
            error: null,
        }
    }
    return { error: "A IA não conseguiu processar o texto." }
  } catch (error) {
    console.error(error)
    return {
      error: "Ocorreu um erro ao processar o texto com a IA. Tente novamente.",
    }
  }
}
