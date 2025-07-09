import { db } from '@/lib/firebase';
import { collection, getDocs, query, where, orderBy, limit, Timestamp, doc, getDoc } from 'firebase/firestore';

export type NewsArticle = {
    id: string; // Firestore document ID
    title: string;
    excerpt: string;
    category: string;
    image: string; // URL to the image
    dataAiHint: string;
    slug: string;
    publishedAt: Date;
    content?: string;
    author?: string;
    views: number;
};

const fromFirestore = (doc: any): NewsArticle => {
    const data = doc.data();
    return {
        id: doc.id,
        title: data.title || '',
        excerpt: data.excerpt || '',
        category: data.category || 'Geral',
        image: data.image || 'https://placehold.co/1200x600.png',
        dataAiHint: data.dataAiHint || 'soccer news',
        slug: data.slug || '',
        publishedAt: data.publishedAt instanceof Timestamp ? data.publishedAt.toDate() : new Date(),
        content: data.content || '',
        author: data.author || 'Redação NRN',
        views: data.views || 0,
    };
};

export async function getNews(count?: number): Promise<NewsArticle[]> {
    try {
        const newsCollection = collection(db, 'news');
        const q = count 
            ? query(newsCollection, orderBy('publishedAt', 'desc'), limit(count))
            : query(newsCollection, orderBy('publishedAt', 'desc'));
        
        const snapshot = await getDocs(q);
        if (snapshot.empty) {
            return [];
        }
        return snapshot.docs.map(fromFirestore);
    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
    try {
        const q = query(collection(db, "news"), where("slug", "==", slug), limit(1));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            return null;
        }
        return fromFirestore(snapshot.docs[0]);
    } catch (error) {
        console.error(`Error fetching news by slug ${slug}:`, error);
        return null;
    }
}

export async function getAllNewsSlugs(): Promise<{ slug: string }[]> {
    try {
        const snapshot = await getDocs(collection(db, 'news'));
        if (snapshot.empty) {
            return [];
        }
        return snapshot.docs.map(doc => ({ slug: doc.data().slug as string })).filter(item => item.slug);
    } catch (error) {
        console.error("Error fetching all news slugs:", error);
        return [];
    }
}
