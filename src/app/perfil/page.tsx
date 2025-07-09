'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/hooks/use-toast';
import { doc, getDoc, updateDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Calendar as CalendarIcon, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';

export default function ProfilePage() {
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();
    const { toast } = useToast();
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [dob, setDob] = useState<Date | undefined>();
    
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!authLoading && !user) {
            router.push('/login');
        }
    }, [user, authLoading, router]);

    useEffect(() => {
        async function fetchProfile() {
            if (user) {
                setLoading(true);
                try {
                    const userDocRef = doc(db, 'users', user.uid);
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        const data = userDoc.data();
                        setFirstName(data.firstName || '');
                        setLastName(data.lastName || '');
                        setUsername(data.username || '');
                        if (data.dob && typeof data.dob.toDate === 'function') {
                            setDob(data.dob.toDate());
                        }
                    }
                } catch (error) {
                    console.error("Error fetching profile:", error);
                    toast({
                        title: "Erro ao carregar perfil",
                        description: "Não foi possível buscar seus dados. Verifique sua conexão e tente novamente.",
                        variant: "destructive",
                    });
                } finally {
                    setLoading(false);
                }
            }
        }
        if (!authLoading) {
            fetchProfile();
        }
    }, [user, authLoading, toast]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;
        setSaving(true);
        try {
            const userDocRef = doc(db, 'users', user.uid);
            
            const dataToUpdate = {
                firstName,
                lastName,
                username,
                dob: dob ? Timestamp.fromDate(dob) : null,
            };

            await updateDoc(userDocRef, dataToUpdate);
            toast({
                title: 'Sucesso!',
                description: 'Seu perfil foi atualizado.',
            });
        } catch (error) {
            console.error("Error updating profile:", error);
            const errorMessage = (error instanceof Error) ? error.message : "Ocorreu um erro desconhecido.";
            toast({
                title: 'Erro ao salvar',
                description: `Não foi possível atualizar seu perfil. Detalhe: ${errorMessage}`,
                variant: 'destructive',
            });
        } finally {
            setSaving(false);
        }
    };
    
    if (authLoading || loading) {
        return (
            <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
                <Loader2 className="h-8 w-8 animate-spin" />
            </div>
        )
    }
    
    if (!user) {
        return null; // Redirect handled by useEffect
    }

    return (
        <div className="container mx-auto py-12">
            <Card className="w-full max-w-2xl mx-auto">
                <form onSubmit={handleSubmit}>
                    <CardHeader>
                        <CardTitle>Perfil de Usuário</CardTitle>
                        <CardDescription>Atualize suas informações pessoais.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="firstName">Nome</Label>
                            <Input id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Seu nome" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="lastName">Sobrenome</Label>
                            <Input id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Seu sobrenome" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="username">Nome de usuário</Label>
                            <Input id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Como você quer ser chamado" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="dob">Data de Nascimento</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !dob && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {dob ? format(dob, "PPP", { locale: ptBR }) : <span>Escolha uma data</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={dob}
                                        onSelect={setDob}
                                        locale={ptBR}
                                        initialFocus
                                        captionLayout="dropdown-buttons"
                                        fromYear={1920}
                                        toYear={new Date().getFullYear()}
                                        disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                         <div className="grid gap-2 md:col-span-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" value={user.email || ''} disabled />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" disabled={saving}>
                            {saving ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Salvando...</> : 'Salvar Alterações'}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
