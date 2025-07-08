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
    { pos: 1, team: "Flamengo", P: 35, J: 16, V: 10, E: 5, D: 1, SG: 15 },
    { pos: 2, team: "Palmeiras", P: 32, J: 16, V: 9, E: 5, D: 2, SG: 12 },
    { pos: 3, team: "Atlético-MG", P: 30, J: 16, V: 8, E: 6, D: 2, SG: 9 },
    { pos: 4, team: "Botafogo", P: 29, J: 16, V: 8, E: 5, D: 3, SG: 7 },
    { pos: 5, team: "São Paulo", P: 28, J: 16, V: 7, E: 7, D: 2, SG: 8 },
    { pos: 6, team: "Internacional", P: 26, J: 16, V: 7, E: 5, D: 4, SG: 5 },
    { pos: 7, team: "Cruzeiro", P: 25, J: 16, V: 7, E: 4, D: 5, SG: 2 },
    { pos: 8, team: "Grêmio", P: 24, J: 16, V: 7, E: 3, D: 6, SG: 1 },
    { pos: 9, team: "Athletico-PR", P: 23, J: 16, V: 6, E: 5, D: 5, SG: 4 },
    { pos: 10, team: "Vasco", P: 22, J: 16, V: 6, E: 4, D: 6, SG: -1 },
    { pos: 11, team: "Corinthians", P: 20, J: 16, V: 5, E: 5, D: 6, SG: -2 },
    { pos: 12, team: "Fluminense", P: 19, J: 16, V: 5, E: 4, D: 7, SG: -4 },
    { pos: 13, team: "Bahia", P: 18, J: 16, V: 4, E: 6, D: 6, SG: -3 },
    { pos: 14, team: "Fortaleza", P: 17, J: 16, V: 4, E: 5, D: 7, SG: -5 },
    { pos: 15, team: "Criciúma", P: 16, J: 16, V: 3, E: 7, D: 6, SG: -6 },
    { pos: 16, team: "Vitória", P: 15, J: 16, V: 3, E: 6, D: 7, SG: -7 },
    { pos: 17, team: "Juventude", P: 14, J: 16, V: 3, E: 5, D: 8, SG: -9 },
    { pos: 18, team: "Cuiabá", P: 12, J: 16, V: 2, E: 6, D: 8, SG: -10 },
    { pos: 19, team: "Atlético-GO", P: 11, J: 16, V: 2, E: 5, D: 9, SG: -11 },
    { pos: 20, team: "Red Bull Bragantino", P: 10, J: 16, V: 2, E: 4, D: 10, SG: -13 },
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
