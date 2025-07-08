import { Calendar, Clock } from 'lucide-react';
import { TeamCrest } from './team-crest';

function TeamDisplay({ name, logoSize }: { name: string; logoSize: 'lg' }) {
    return (
        <div className="flex items-center gap-2">
            <TeamCrest teamName={name} size={logoSize} />
            <span className="text-lg md:text-2xl font-bold font-headline text-primary-foreground">{name}</span>
        </div>
    )
}

export function NextGameBanner() {
    const nextGame = {
        home: "Flamengo",
        away: "Vasco",
        competition: "Brasileirão Série A - Rodada 18",
        date: "20 de Julho, 2024",
        time: "16:00",
    };

    return (
        <div className="sticky top-16 z-40 w-full bg-accent text-accent-foreground border-b border-white/10 shadow-md">
            <div className="container mx-auto flex items-center justify-center h-24 px-4">
                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">

                    <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{nextGame.date}</span>
                        <Clock className="h-4 w-4 ml-2" />
                        <span>{nextGame.time}</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <TeamDisplay name={nextGame.home} logoSize="lg" />
                        <span className="text-2xl font-light text-muted-foreground">vs</span>
                        <TeamDisplay name={nextGame.away} logoSize="lg" />
                    </div>

                    <div className="text-center md:text-right">
                        <p className="font-bold font-headline text-primary-foreground">{nextGame.competition}</p>
                        <div className="flex md:hidden items-center justify-center gap-2 text-sm text-muted-foreground mt-1">
                            <Calendar className="h-4 w-4" />
                            <span>{nextGame.date}</span>
                            <Clock className="h-4 w-4 ml-2" />
                            <span>{nextGame.time}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
