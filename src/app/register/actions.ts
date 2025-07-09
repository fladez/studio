'use server';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { redirect } from 'next/navigation';

type State = {
    error?: string | null;
}

export async function handleRegister(prevState: State, formData: FormData): Promise<State> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      role: 'user',
      createdAt: serverTimestamp(),
    });

  } catch (e: any)
   {
    console.error(e);
    if (e.code) {
        switch (e.code) {
            case 'auth/email-already-in-use':
                return { error: 'Este e-mail já está em uso.' };
            case 'auth/weak-password':
                return { error: 'A senha é muito fraca. Use pelo menos 6 caracteres.' };
            case 'auth/invalid-email':
                return { error: 'O formato do e-mail é inválido.' };
            default:
                return { error: 'Ocorreu um erro ao tentar criar a conta.' };
        }
    }
    return { error: "Ocorreu um erro desconhecido." };
  }

  return redirect('/');
}
