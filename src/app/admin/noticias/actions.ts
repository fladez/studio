'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { slugify } from '@/lib/utils';
import { revalidatePath } from 'next/cache';

const newsSchema = z.object({
  title: z.string().min(5, { message: "O título deve ter pelo menos 5 caracteres." }),
  category: z.string().min(3, { message: "A categoria é obrigatória." }),
  content: z.string().min(50, { message: "O conteúdo deve ter pelo menos 50 caracteres." }),
  image: z.string().url({ message: "Por favor, insira uma URL de imagem válida." }),
  dataAiHint: z.string().min(2, {message: "A dica para IA é obrigatória."}),
});

type State = {
  message?: string | null;
  error?: string | null;
  errors?: {
    title?: string[];
    category?: string[];
    content?: string[];
    image?: string[];
    dataAiHint?: string[];
  } | null;
};

export async function createNewsArticle(prevState: State, formData: FormData): Promise<State> {
  if (!db) {
    return { error: "O banco de dados não está configurado." };
  }

  const validatedFields = newsSchema.safeParse({
    title: formData.get("title"),
    category: formData.get("category"),
    content: formData.get("content"),
    image: formData.get("image"),
    dataAiHint: formData.get("dataAiHint")
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      error: "Erro de validação. Verifique os campos.",
    };
  }
  
  const { title, category, content, image, dataAiHint } = validatedFields.data;
  
  try {
    const slug = slugify(title);
    
    await addDoc(collection(db, "news"), {
      title,
      category,
      content,
      image,
      dataAiHint,
      slug,
      publishedAt: serverTimestamp(),
    });

    // Revalidate paths to show the new article
    revalidatePath('/');
    revalidatePath('/noticias');
    
    return { message: "Notícia criada com sucesso!", error: null, errors: null };
  } catch (error) {
    console.error("Erro ao criar notícia:", error);
    return { error: "Ocorreu um erro ao salvar a notícia no banco de dados." };
  }
}
