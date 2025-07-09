
"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp, doc, deleteDoc, updateDoc } from "firebase/firestore";

const NewsSchema = z.object({
  title: z.string().min(5, { message: "O título deve ter pelo menos 5 caracteres." }),
  excerpt: z.string().min(10, { message: "O subtítulo deve ter pelo menos 10 caracteres." }),
  category: z.string().min(3, { message: "A categoria deve ter pelo menos 3 caracteres." }),
  content: z.string().min(50, { message: "O conteúdo da matéria deve ter pelo menos 50 caracteres." }),
  image: z.string().url({ message: "Por favor, insira um link de imagem válido." }),
  dataAiHint: z.string().optional(),
  author: z.string().optional(),
});

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD") // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, "") // remove all previously split accents
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

export async function createNewsArticle(prevState: any, formData: FormData) {
  const validatedFields = NewsSchema.safeParse({
    title: formData.get("title"),
    excerpt: formData.get("excerpt"),
    category: formData.get("category"),
    content: formData.get("content"),
    image: formData.get("image"),
    dataAiHint: formData.get("dataAiHint"),
    author: formData.get("author"),
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

    const dataToSave = {
      ...validatedFields.data,
      author: validatedFields.data.author || 'Redação NRN',
      slug: slug,
      publishedAt: serverTimestamp(),
      views: 0,
    };

    await addDoc(collection(db, "news"), dataToSave);

    revalidatePath("/");
    revalidatePath("/noticias");
    revalidatePath(`/noticias/${slug}`);

  } catch (error) {
    console.error("Error creating news article:", error);
    return { success: false, message: "Ocorreu um erro no servidor. Tente novamente." };
  }

  // This will be returned to the client and handled in useEffect
  return { success: true, message: "Notícia criada com sucesso!" };
}

export async function updateNewsArticle(id: string, slug: string, prevState: any, formData: FormData) {
  if (!id) {
    return { success: false, message: "ID da matéria é inválido." };
  }

  const validatedFields = NewsSchema.safeParse({
    title: formData.get("title"),
    excerpt: formData.get("excerpt"),
    category: formData.get("category"),
    content: formData.get("content"),
    image: formData.get("image"),
    dataAiHint: formData.get("dataAiHint"),
    author: formData.get("author"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Erro de validação. Verifique os campos.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const newsDocRef = doc(db, "news", id);
    
    const dataToUpdate = {
      ...validatedFields.data,
      author: validatedFields.data.author || 'Redação NRN',
    };
    
    await updateDoc(newsDocRef, dataToUpdate);
    
    revalidatePath("/admin/materias");
    revalidatePath("/");
    revalidatePath("/noticias");
    revalidatePath(`/noticias/${slug}`);

    return { success: true, message: "Notícia atualizada com sucesso!" };

  } catch (error) {
    console.error("Error updating news article:", error);
    return { success: false, message: "Ocorreu um erro no servidor ao atualizar. Tente novamente." };
  }
}

export async function deleteNewsArticle(id: string) {
  if (!id) {
    return { success: false, message: "ID da matéria é inválido." };
  }

  try {
    const newsDocRef = doc(db, "news", id);
    await deleteDoc(newsDocRef);

    revalidatePath("/admin/materias");
    revalidatePath("/");
    revalidatePath("/noticias");
    
    return { success: true, message: "Notícia deletada com sucesso!" };
  } catch (error) {
    console.error("Error deleting news article:", error);
    return { success: false, message: "Ocorreu um erro ao deletar a notícia." };
  }
}
