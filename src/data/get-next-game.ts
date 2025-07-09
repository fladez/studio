import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export type NextGameData = {
  home: string;
  away: string;
  competition: string;
  date: string;
  time: string;
};

// This is the default data if nothing is in the database.
const defaultNextGame: NextGameData = {
    home: "Flamengo",
    away: "Vasco",
    competition: "Brasileirão Série A - Rodada 18",
    date: "20 de Julho, 2024",
    time: "16:00",
};

export async function getNextGame(): Promise<NextGameData> {
  if (!db) {
    console.warn("Firestore não está configurado. Retornando dados padrão.");
    return defaultNextGame;
  }

  try {
    const nextGameRef = doc(db, "siteData", "nextGame");
    const docSnap = await getDoc(nextGameRef);

    if (docSnap.exists()) {
      return docSnap.data() as NextGameData;
    } else {
      // Document doesn't exist, maybe it's the first run.
      // Return default data. The admin panel can be used to create it.
      console.log("Documento 'nextGame' não encontrado, retornando dados padrão.");
      return defaultNextGame;
    }
  } catch (error: any) {
    if (error.code === 'permission-denied') {
        console.warn("Permissão do Firestore negada. A API Cloud Firestore pode não estar ativada ou as regras de segurança podem estar incorretas. Retornando dados padrão.");
    } else {
        console.error("Erro ao buscar dados do próximo jogo:", error);
    }
    // Return default data on error to prevent site crash.
    return defaultNextGame;
  }
}
