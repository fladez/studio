
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy, limit, Timestamp, doc, getDoc } from 'firebase/firestore';

export type HistoryArticle = {
    id: string; // Firestore document ID
    title: string;
    subtitle: string;
    author: string;
    image: string; // URL to the image
    videoUrl?: string;
    slug: string;
    publishedAt: Date;
    content: string;
    dataAiHint?: string;
};

const fromFirestore = (doc: any): HistoryArticle => {
    const data = doc.data();
    return {
        id: doc.id,
        title: data.title || '',
        subtitle: data.subtitle || '',
        author: data.author || 'Redação NRN',
        image: data.image || 'https://placehold.co/1200x675.png',
        videoUrl: data.videoUrl,
        slug: data.slug || '',
        publishedAt: data.publishedAt instanceof Timestamp ? data.publishedAt.toDate() : new Date(),
        content: data.content || '',
        dataAiHint: data.dataAiHint || 'historic event',
    };
};

export async function getHistoryArticles(count?: number): Promise<HistoryArticle[]> {
    try {
        const historyCollection = collection(db, 'history');
        const q = count
            ? query(historyCollection, orderBy('publishedAt', 'desc'), limit(count))
            : query(historyCollection, orderBy('publishedAt', 'desc'));

        const snapshot = await getDocs(q);
        if (snapshot.empty) {
            return [];
        }
        return snapshot.docs.map(fromFirestore);
    } catch (error) {
        console.error("Error fetching history articles:", error);
        return [];
    }
}

export async function getHistoryArticleById(id: string): Promise<HistoryArticle | null> {
    try {
        const docRef = doc(db, 'history', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return fromFirestore(docSnap);
        } else {
            console.log("No such history article document!");
            return null;
        }
    } catch (error) {
        console.error(`Error fetching history article by id ${id}:`, error);
        return null;
    }
}
