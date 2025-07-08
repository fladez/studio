import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { TeamCrest } from "./team-crest"
import { ScrollArea } from "@/components/ui/scroll-area"

const standings = [
    { pos: 1, team: "Flamengo", P: 38, J: 17, V: 11, E: 5, D: 1, SG: 18 },
    { pos: 2, team: "Botafogo", P: 35, J: 17, V: 10, E: 5, D: 2, SG: 14 },
    { pos: 3, team: "Palmeiras", P: 34, J: 17, V: 10, E: 4, D: 3, SG: 11 },
    { pos: 4, team: "São Paulo", P: 31, J: 17, V: 8, E: 7, D: 2, SG: 9 },
    { pos: 5, team: "Atlético-MG", P: 30, J: 17, V: 8, E: 6, D: 3, SG: 8 },
    { pos: 6, team: "Internacional", P: 28, J: 17, V: 8, E: 4, D: 5, SG: 4 },
    { pos: 7, team: "Cruzeiro", P: 27, J: 17, V: 7, E: 6, D: 4, SG: 3 },
    { pos: 8, team: "Athletico-PR", P: 26, J: 17, V: 7, E: 5, D: 5, SG: 5 },
    { pos: 9, team: "Grêmio", P: 25, J: 17, V: 7, E: 4, D: 6, SG: 1 },
    { pos: 10, team: "Fortaleza", P: 24, J: 17, V: 6, E: 6, D: 5, SG: 0 },
    { pos: 11, team: "Vasco", P: 22, J: 17, V: 6, E: 4, D: 7, SG: -2 },
    { pos: 12, team: "Corinthians", P: 21, J: 17, V: 5, E: 6, D: 6, SG: -3 },
    { pos: 13, team: "Fluminense", P: 20, J: 17, V: 5, E: 5, D: 7, SG: -5 },
    { pos: 14, team: "Bahia", P: 19, J: 17, V: 4, E: 7, D: 6, SG: -4 },
    { pos: 15, team: "Red Bull Bragantino", P: 18, J: 17, V: 4, E: 6, D: 7, SG: -6 },
    { pos: 16, team: "Criciúma", P: 17, J: 17, V: 4, E: 5, D: 8, SG: -8 },
    { pos: 17, team: "Vitória", P: 16, J: 17, V: 3, E: 7, D: 7, SG: -9 },
    { pos: 18, team: "Juventude", P: 15, J: 17, V: 3, E: 6, D: 8, SG: -11 },
    { pos: 19, team: "Cuiabá", P: 13, J: 17, V: 2, E: 7, D: 8, SG: -12 },
    { pos: 20, team: "Atlético-GO", P: 12, J: 17, V: 2, E: 6, D: 9, SG: -14 },
]

export function LeagueTable() {
    return (
        <ScrollArea className="w-full h-[460px] rounded-lg border bg-card text-card-foreground shadow-sm">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-12 text-center font-bold">#</TableHead>
                        <TableHead className="font-bold">Clube</TableHead>
                        <TableHead className="text-center font-bold">P</TableHead>
                        <TableHead className="text-center hidden sm:table-cell font-bold">J</TableHead>
                        <TableHead className="text-center hidden sm:table-cell font-bold">V</TableHead>
                        <TableHead className="text-center hidden md:table-cell font-bold">E</TableHead>
                        <TableHead className="text-center hidden md:table-cell font-bold">D</TableHead>
                        <TableHead className="text-center hidden sm:table-cell font-bold">SG</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {standings.map((row) => (
                        <TableRow key={row.pos} className={row.team === 'Flamengo' ? 'bg-primary/10 hover:bg-primary/20' : ''}>
                            <TableCell className="text-center font-medium">{row.pos}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-3">
                                    <TeamCrest teamName={row.team} size="md" />
                                    <span className="font-medium">{row.team}</span>
                                </div>
                            </TableCell>
                            <TableCell className="text-center font-bold text-lg">{row.P}</TableCell>
                            <TableCell className="text-center hidden sm:table-cell">{row.J}</TableCell>
                            <TableCell className="text-center hidden sm:table-cell">{row.V}</TableCell>
                            <TableCell className="text-center hidden md:table-cell">{row.E}</TableCell>
                            <TableCell className="text-center hidden md:table-cell">{row.D}</TableCell>
                            <TableCell className="text-center hidden sm:table-cell">{row.SG}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </ScrollArea>
    )
}
