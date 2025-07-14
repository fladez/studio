
"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp, doc, deleteDoc, updateDoc } from "firebase/firestore";

const HistorySchema = z.object({
  title: z.string().min(5, { message: "O título deve ter pelo menos 5 caracteres." }),
  subtitle: z.string().min(10, { message: "O subtítulo deve ter pelo menos 10 caracteres." }),
  author: z.string().min(3, { message: "O nome do autor é obrigatório." }),
  image: z.string().url({ message: "Por favor, insira um link de imagem válido." }),
  videoUrl: z.string().url({ message: "Por favor, insira um link de vídeo válido." }).optional().or(z.literal('')),
  content: z.string().min(50, { message: "A matéria deve ter pelo menos 50 caracteres." }),
  dataAiHint: z.string().optional(),
});

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

export async function createHistoryArticle(prevState: any, formData: FormData) {
  const validatedFields = HistorySchema.safeParse({
    title: formData.get("title"),
    subtitle: formData.get("subtitle"),
    author: formData.get("author"),
    image: formData.get("image"),
    videoUrl: formData.get("videoUrl"),
    content: formData.get("content"),
    dataAiHint: formData.get("dataAiHint"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Erro de validação. Verifique os campos.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const slug = generateSlug(validatedFields.data.title);

    await addDoc(collection(db, "history"), {
      ...validatedFields.data,
      slug: slug,
      publishedAt: serverTimestamp(),
    });

    revalidatePath("/admin/historia");
    revalidatePath("/");

    return { success: true, message: "Artigo histórico criado com sucesso!" };
  } catch (error) {
    console.error("Error creating history article:", error);
    return { success: false, message: "Ocorreu um erro no servidor. Tente novamente." };
  }
}

export async function updateHistoryArticle(id: string, prevState: any, formData: FormData) {
  const validatedFields = HistorySchema.safeParse({
    title: formData.get("title"),
    subtitle: formData.get("subtitle"),
    author: formData.get("author"),
    image: formData.get("image"),
    videoUrl: formData.get("videoUrl"),
    content: formData.get("content"),
    dataAiHint: formData.get("dataAiHint"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Erro de validação. Verifique os campos.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const historyDocRef = doc(db, "history", id);
    await updateDoc(historyDocRef, validatedFields.data);

    revalidatePath("/admin/historia");
    revalidatePath("/");

    return { success: true, message: "Artigo histórico atualizado com sucesso!" };
  } catch (error) {
    console.error("Error updating history article:", error);
    return { success: false, message: "Ocorreu um erro no servidor ao atualizar. Tente novamente." };
  }
}

export async function deleteHistoryArticle(id: string) {
  if (!id) {
    return { success: false, message: "ID do artigo é inválido." };
  }

  try {
    const historyDocRef = doc(db, "history", id);
    await deleteDoc(historyDocRef);

    revalidatePath("/admin/historia");
    revalidatePath("/");
    
    return { success: true, message: "Artigo histórico deletado com sucesso!" };
  } catch (error) {
    console.error("Error deleting history article:", error);
    return { success: false, message: "Ocorreu um erro ao deletar o artigo." };
  }
}
