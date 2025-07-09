"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { nextGame as currentGameData } from '@/data/next-game';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export default function ProximoJogoPage() {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [gameData, setGameData] = useState(currentGameData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setGameData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Em uma aplicação real, aqui você chamaria uma server action
        // para atualizar os dados no banco de dados (ex: Firestore).
        // Por enquanto, vamos simular uma chamada de API.
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log("Dados para salvar:", gameData);

        setLoading(false);
        toast({
            title: "Sucesso!",
            description: "Informações do próximo jogo foram atualizadas (simulação).",
        });
    };


    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Atualizar Próximo Jogo</h1>
            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader>
                        <CardTitle>Informações da Partida</CardTitle>
                        <CardDescription>
                            Edite os dados abaixo para atualizar a barra de próximo jogo no topo do site.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="home">Time da Casa</Label>
                                <Input id="home" name="home" value={gameData.home} onChange={handleChange} />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="away">Time Visitante</Label>
                                <Input id="away" name="away" value={gameData.away} onChange={handleChange} />
                            </div>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="competition">Competição</Label>
                            <Input id="competition" name="competition" value={gameData.competition} onChange={handleChange} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="date">Data</Label>
                                <Input id="date" name="date" value={gameData.date} onChange={handleChange} placeholder="Ex: 20 de Julho, 2024" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="time">Hora</Label>
                                <Input id="time" name="time" value={gameData.time} onChange={handleChange} placeholder="Ex: 16:00" />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" disabled={loading}>
                             {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Salvando...</> : 'Salvar Alterações'}
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}
