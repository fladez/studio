'use server';

import { db } from '@/lib/firebase';
import { collection, getDocs, query, where, limit, doc, getDoc, orderBy, DocumentData, Timestamp } from 'firebase/firestore';

export type NewsArticle = {
    id: string; // Firestore document ID
    title: string;
    category: string;
    image: string; // URL to the image
    dataAiHint: string;
    slug: string;
    publishedAt: Date; // Should always be a Date object now
    content?: string;
};

// Helper to convert Firestore Timestamps to Date objects and handle data mapping
function mapDocToNewsArticle(doc: DocumentData): NewsArticle {
    const data = doc.data();
    const publishedAt = data.publishedAt;
    return {
        id: doc.id,
        title: data.title || '',
        category: data.category || '',
        image: data.image || 'https://placehold.co/1200x600.png',
        dataAiHint: data.dataAiHint || 'news article',
        slug: data.slug || '',
        publishedAt: publishedAt?.toDate ? publishedAt.toDate() : new Date(),
        content: data.content || '',
    };
}


export async function getNews(count?: number): Promise<NewsArticle[]> {
  if (!db) {
    console.warn("Firestore não está configurado. Retornando array vazio.");
    return [];
  }

  try {
    let newsQuery = query(collection(db, "news"), orderBy("publishedAt", "desc"));
    if (count) {
      newsQuery = query(collection(db, "news"), orderBy("publishedAt", "desc"), limit(count));
    }
    
    const querySnapshot = await getDocs(newsQuery);
    
    if (querySnapshot.empty) {
        return [];
    }
    
    return querySnapshot.docs.map(mapDocToNewsArticle);
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return [];
  }
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
    if (!db) {
        console.warn("Firestore não está configurado.");
        return null;
    }
    try {
        const q = query(collection(db, "news"), where("slug", "==", slug), limit(1));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return null;
        }

        return mapDocToNewsArticle(querySnapshot.docs[0]);

    } catch (error) {
        console.error("Erro ao buscar notícia por slug:", error);
        return null;
    }
}
