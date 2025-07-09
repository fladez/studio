"use server";

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { redirect } from 'next/navigation';

type State = {
  error?: string | null;
};

export async function handleLogin(prevState: State, formData: FormData): Promise<State> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e: any) {
    console.error(e);
    if (e.code) {
        switch (e.code) {
            case 'auth/user-not-found':
            case 'auth/wrong-password':
            case 'auth/invalid-credential':
                return { error: 'E-mail ou senha inválidos.' };
            case 'auth/invalid-email':
                return { error: 'O formato do e-mail é inválido.' };
            default:
                return { error: 'Ocorreu um erro ao tentar fazer login.' };
        }
    }
    return { error: "Ocorreu um erro desconhecido." };
  }

  return redirect('/');
}
