import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { TeamCrest } from "./team-crest"

const standings = [
    { pos: 1, team: "Flamengo", P: 35, J: 16, V: 10, E: 5, D: 1, SG: 15 },
    { pos: 2, team: "Palmeiras", P: 32, J: 16, V: 9, E: 5, D: 2, SG: 12 },
    { pos: 3, team: "Atlético-MG", P: 30, J: 16, V: 8, E: 6, D: 2, SG: 9 },
    { pos: 4, team: "Botafogo", P: 29, J: 16, V: 8, E: 5, D: 3, SG: 7 },
    { pos: 5, team: "São Paulo", P: 28, J: 16, V: 7, E: 7, D: 2, SG: 8 },
    { pos: 6, team: "Internacional", P: 26, J: 16, V: 7, E: 5, D: 4, SG: 5 },
]

export function LeagueTable() {
    return (
        <div className="w-full overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
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
        </div>
    )
}
