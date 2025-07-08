import { TeamCrest } from "./team-crest"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "./ui/scroll-area"

const teams = [
    { pos: 1, name: "Flamengo", p: 74, j: 38, v: 22, e: 8, d: 8, sg: 30 },
    { pos: 2, name: "Palmeiras", p: 70, j: 38, v: 20, e: 10, d: 8, sg: 28 },
    { pos: 3, name: "Atlético-MG", p: 68, j: 38, v: 19, e: 11, d: 8, sg: 25 },
    { pos: 4, name: "Botafogo", p: 65, j: 38, v: 18, e: 11, d: 9, sg: 20 },
    { pos: 5, name: "São Paulo", p: 63, j: 38, v: 17, e: 12, d: 9, sg: 15 },
    { pos: 6, name: "Internacional", p: 60, j: 38, v: 16, e: 12, d: 10, sg: 12 },
    { pos: 7, name: "Cruzeiro", p: 58, j: 38, v: 15, e: 13, d: 10, sg: 10 },
    { pos: 8, name: "Grêmio", p: 55, j: 38, v: 15, e: 10, d: 13, sg: 5 },
    { pos: 9, name: "Vasco", p: 52, j: 38, v: 14, e: 10, d: 14, sg: 0 },
    { pos: 10, name: "Fluminense", p: 50, j: 38, v: 13, e: 11, d: 14, sg: -2 },
    { pos: 11, name: "Corinthians", p: 48, j: 38, v: 12, e: 12, d: 14, sg: -5 },
    { pos: 12, name: "Bahia", p: 47, j: 38, v: 12, e: 11, d: 15, sg: -8 },
    { pos: 13, name: "Fortaleza", p: 45, j: 38, v: 11, e: 12, d: 15, sg: -10 },
    { pos: 14, name: "Athletico-PR", p: 44, j: 38, v: 11, e: 11, d: 16, sg: -12 },
    { pos: 15, name: "Criciúma", p: 43, j: 38, v: 10, e: 13, d: 15, sg: -15 },
    { pos: 16, name: "Vitória", p: 42, j: 38, v: 10, e: 12, d: 16, sg: -18 },
    { pos: 17, name: "Juventude", p: 40, j: 38, v: 9, e: 13, d: 16, sg: -20 },
    { pos: 18, name: "Cuiabá", p: 38, j: 38, v: 8, e: 14, d: 16, sg: -22 },
    { pos: 19, name: "Red Bull Bragantino", p: 35, j: 38, v: 7, e: 14, d: 17, sg: -25 },
    { pos: 20, name: "Atlético-GO", p: 32, j: 38, v: 6, e: 14, d: 18, sg: -28 },
];

export function LeagueTable() {
    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <ScrollArea className="h-[400px]">
                <Table>
                    <TableHeader className="sticky top-0 bg-card z-10">
                        <TableRow>
                            <TableHead className="w-[50px] text-center">#</TableHead>
                            <TableHead>Time</TableHead>
                            <TableHead className="text-center">P</TableHead>
                            <TableHead className="text-center">J</TableHead>
                            <TableHead className="text-center">V</TableHead>
                            <TableHead className="text-center">E</TableHead>
                            <TableHead className="text-center">D</TableHead>
                            <TableHead className="text-center">SG</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {teams.map((team) => (
                            <TableRow key={team.pos} className={team.pos <= 4 ? "bg-green-500/10" : team.pos >= 17 ? "bg-destructive/10" : ""}>
                                <TableCell className="text-center font-medium">{team.pos}</TableCell>
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-3">
                                        <TeamCrest teamName={team.name} />
                                        <span>{team.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-center font-bold">{team.p}</TableCell>
                                <TableCell className="text-center">{team.j}</TableCell>
                                <TableCell className="text-center">{team.v}</TableCell>
                                <TableCell className="text-center">{team.e}</TableCell>
                                <TableCell className="text-center">{team.d}</TableCell>
                                <TableCell className="text-center">{team.sg}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </ScrollArea>
        </div>
    )
}
