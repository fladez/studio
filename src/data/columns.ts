import { db } from '@/lib/firebase';
import { collection, getDocs, query, where, orderBy, limit, Timestamp, doc, getDoc, addDoc, serverTimestamp, updateDoc, deleteDoc } from 'firebase/firestore';

export type OpinionColumn = {
    id: string; // Firestore document ID
    columnName: string;
    title: string;
    author: string;
    authorImage: string;
    dataAiHint?: string;
    slug: string;
    excerpt: string;
    publishedAt: Date;
    category: string;
    content: string;
    views: number;
};

const fromFirestore = (doc: any): OpinionColumn => {
    const data = doc.data();
    return {
        id: doc.id,
        columnName: data.columnName || 'Coluna do Leitor',
        title: data.title || '',
        author: data.author || 'Anônimo',
        authorImage: data.authorImage || 'https://placehold.co/100x100.png',
        dataAiHint: data.dataAiHint || 'opinion piece',
        slug: data.slug || '',
        excerpt: data.excerpt || '',
        publishedAt: data.publishedAt instanceof Timestamp ? data.publishedAt.toDate() : new Date(),
        category: data.category || 'Opinião',
        content: data.content || '',
        views: data.views || 0,
    };
};

export async function getColumns(count?: number): Promise<OpinionColumn[]> {
    try {
        const columnsCollection = collection(db, 'columns');
        const q = count 
            ? query(columnsCollection, orderBy('publishedAt', 'desc'), limit(count))
            : query(columnsCollection, orderBy('publishedAt', 'desc'));
        
        const snapshot = await getDocs(q);
        if (snapshot.empty) {
            return [];
        }
        return snapshot.docs.map(fromFirestore);
    } catch (error) {
        console.error("Error fetching columns:", error);
        return [];
    }
}

export async function getColumnById(id: string): Promise<OpinionColumn | null> {
    try {
        const docRef = doc(db, 'columns', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return fromFirestore(docSnap);
        } else {
            console.log("No such column document!");
            return null;
        }
    } catch (error) {
        console.error(`Error fetching column by id ${id}:`, error);
        return null;
    }
}

export async function getColumnBySlug(slug: string): Promise<OpinionColumn | null> {
    try {
        const q = query(collection(db, "columns"), where("slug", "==", slug), limit(1));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            return null;
        }
        return fromFirestore(snapshot.docs[0]);
    } catch (error) {
        console.error(`Error fetching column by slug ${slug}:`, error);
        return null;
    }
}

export async function getAllColumnSlugs(): Promise<{ slug: string }[]> {
    try {
        const snapshot = await getDocs(collection(db, 'columns'));
        if (snapshot.empty) {
            return [];
        }
        return snapshot.docs.map(doc => ({ slug: doc.data().slug as string })).filter(item => item.slug);
    } catch (error) {
        console.error("Error fetching all column slugs:", error);
        return [];
    }
}
