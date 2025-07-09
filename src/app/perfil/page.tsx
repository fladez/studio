'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/hooks/use-toast';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { db, storage } from '@/lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar as CalendarIcon, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import Compressor from 'compressorjs';

export default function ProfilePage() {
    const { user, userProfile, loading: authLoading } = useAuth();
    const router = useRouter();
    const { toast } = useToast();
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [dob, setDob] = useState<Date | undefined>();
    const [photoURL, setPhotoURL] = useState<string | null>(null);

    const [avatarFile, setAvatarFile] = useState<File | Blob | null>(null);
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!authLoading && !user) {
            router.push('/login');
        }
    }, [user, authLoading, router]);

    useEffect(() => {
        if (userProfile) {
            setFirstName(userProfile.firstName || '');
            setLastName(userProfile.lastName || '');
            setUsername(userProfile.username || '');
            setPhotoURL(userProfile.photoURL || null);
            if (userProfile.dob && typeof userProfile.dob.toDate === 'function') {
                setDob(userProfile.dob.toDate());
            }
            setLoading(false);
        } else if (!authLoading) {
            setLoading(false);
        }
    }, [userProfile, authLoading]);

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) {
            return;
        }

        new Compressor(file, {
            quality: 0.6,
            maxWidth: 800,
            maxHeight: 800,
            success(result) {
                setAvatarFile(result);
                setAvatarPreview(URL.createObjectURL(result));
            },
            error(err) {
                console.error(err.message);
                toast({
                    title: 'Erro de Imagem',
                    description: 'Não foi possível processar a imagem. Por favor, tente um arquivo diferente.',
                    variant: 'destructive',
                });
            },
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;
        
        setSaving(true);
        console.log("Saving profile... Button disabled.");

        try {
            const userDocRef = doc(db, 'users', user.uid);
            let finalPhotoURL = userProfile?.photoURL || null;

            // Step 1: Upload avatar if a new one is present
            if (avatarFile) {
                console.log("1. A new avatar file was selected. Starting upload to Firebase Storage...");
                const storageRef = ref(storage, `avatars/${user.uid}`);
                
                await uploadBytes(storageRef, avatarFile);
                console.log("2. Upload successful.");

                finalPhotoURL = await getDownloadURL(storageRef);
                console.log("3. Successfully retrieved new avatar URL:", finalPhotoURL);
            } else {
                 console.log("1. No new avatar file selected. Skipping upload.");
            }

            // Step 2: Prepare data for Firestore
            const dataToUpdate = {
                firstName,
                lastName,
                username,
                photoURL: finalPhotoURL,
                dob: dob ? Timestamp.fromDate(dob) : null,
            };
            console.log("4. Preparing to save the following data to Firestore:", dataToUpdate);

            // Step 3: Save data to Firestore
            await setDoc(userDocRef, dataToUpdate, { merge: true });
            console.log("5. Profile data successfully saved to Firestore.");

            toast({
                title: 'Sucesso!',
                description: 'Seu perfil foi atualizado.',
            });

        } catch (error) {
            console.error(">>> PROFILE UPDATE FAILED <<<", error);
            const errorMessage = (error instanceof Error) ? error.message : "Ocorreu um erro desconhecido. Verifique o console para mais detalhes.";
            toast({
                title: 'Erro ao Salvar',
                description: errorMessage,
                variant: 'destructive',
            });
        } finally {
            setSaving(false);
            console.log("Finished saving process. Button re-enabled.");
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
                        <CardDescription>Atualize suas informações pessoais e seu avatar.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                        <div className="flex flex-col items-center gap-2 md:col-span-2">
                            <Label htmlFor="avatar-upload" className="cursor-pointer">
                                <Avatar className="h-24 w-24">
                                    <AvatarImage src={avatarPreview || photoURL} alt={username} />
                                    <AvatarFallback>{firstName?.[0]}{lastName?.[0]}</AvatarFallback>
                                </Avatar>
                            </Label>
                            <Button asChild variant="outline" size="sm">
                                <Label htmlFor="avatar-upload" className="cursor-pointer">
                                    Trocar Avatar
                                </Label>
                            </Button>
                            <Input id="avatar-upload" type="file" accept="image/png, image/jpeg" className="hidden" onChange={handleAvatarChange} />
                            <p className="text-xs text-muted-foreground">Recomendado: 200x200px, JPG ou PNG</p>
                        </div>
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
