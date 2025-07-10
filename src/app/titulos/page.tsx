
import { AdBanner } from "@/components/ad-banner";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Globe, Shield, Trophy } from "lucide-react";
import Image from "next/image";

type TrophyItemProps = {
    title: string;
    count: number;
    years: string;
    details?: string;
};

function TrophyItem({ title, count, years, details }: TrophyItemProps) {
    return (
        <div className="py-4">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-headline">{title}</h3>
                <Badge variant="default" className="text-lg">{count}</Badge>
            </div>
            <p className="mt-2 text-sm text-muted-foreground font-medium tracking-wide">{years}</p>
            {details && <p className="mt-1 text-xs text-muted-foreground/80">{details}</p>}
        </div>
    )
}

export default function TitulosPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
       <div className="mb-12">
        <AdBanner width={728} height={90} />
      </div>

       <header className="text-center mb-16">
        <div className="relative mx-auto h-32 w-32 mb-4">
            <Image
                src="https://i.postimg.cc/k5FNN5S6/trofeu-removebg-preview.png"
                alt="Troféu"
                fill
                className="object-contain"
            />
        </div>
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Títulos do Flamengo</h1>
        <p className="text-xl text-muted-foreground mt-2">Futebol Profissional Masculino (Atualizado até Julho de 2025)</p>
      </header>

      <div className="space-y-12">
         {/* Competições Nacionais */}
        <Card className="overflow-hidden">
            <CardHeader className="bg-muted/30">
                <div className="flex items-center gap-4">
                    <Shield className="h-8 w-8 text-primary" />
                    <div>
                        <CardTitle className="text-2xl font-headline">Competições Nacionais</CardTitle>
                        <CardDescription>Conquistas em todo o Brasil</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-6 divide-y">
                <TrophyItem 
                    title="Campeonato Brasileiro – Série A"
                    count={8}
                    years="1980, 1982, 1983, 1987, 1992, 2009, 2019, 2020"
                    details="*1987 (Copa União – Módulo Verde)"
                />
                 <TrophyItem 
                    title="Copa do Brasil"
                    count={4}
                    years="1990, 2006, 2013, 2022"
                />
                 <TrophyItem 
                    title="Supercopa do Brasil"
                    count={2}
                    years="2020, 2021"
                />
                 <TrophyItem 
                    title="Torneio Rio-São Paulo"
                    count={1}
                    years="1961"
                />
                 <TrophyItem 
                    title="Copa dos Campeões Mundiais"
                    count={1}
                    years="1997"
                    details="Competição não oficial reconhecida"
                />
            </CardContent>
        </Card>

         {/* Competições Internacionais */}
        <Card className="overflow-hidden">
            <CardHeader className="bg-muted/30">
                <div className="flex items-center gap-4">
                    <Globe className="h-8 w-8 text-primary" />
                    <div>
                        <CardTitle className="text-2xl font-headline">Competições Internacionais</CardTitle>
                        <CardDescription>A glória através do continente e do mundo</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-6 divide-y">
                 <TrophyItem 
                    title="Copa Libertadores da América"
                    count={3}
                    years="1981, 2019, 2022 (invicto)"
                />
                <TrophyItem 
                    title="Mundial Interclubes"
                    count={1}
                    years="1981"
                    details="Campeão contra o Liverpool (3 x 0, Tóquio)"
                />
                 <TrophyItem 
                    title="Recopa Sul-Americana"
                    count={1}
                    years="2020"
                    details="Campeão sobre o Independiente del Valle (3 x 0 no Maracanã)"
                />
                 <TrophyItem 
                    title="Copa Mercosul"
                    count={1}
                    years="1999"
                />
                <TrophyItem 
                    title="Copa Ouro"
                    count={1}
                    years="1996"
                />
            </CardContent>
        </Card>

        {/* Competições Estaduais */}
        <Card className="overflow-hidden">
            <CardHeader className="bg-muted/30">
                <div className="flex items-center gap-4">
                    <Trophy className="h-8 w-8 text-primary" />
                    <div>
                        <CardTitle className="text-2xl font-headline">Competições Estaduais (RJ)</CardTitle>
                        <CardDescription>A soberania no Rio de Janeiro</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-6 divide-y">
                <TrophyItem 
                    title="Campeonato Carioca"
                    count={39}
                    years="1914, 1915 (invicto), 1920 (invicto), 1921, 1925, 1927, 1939, 1942, 1943, 1944, 1953, 1954, 1955, 1963, 1965, 1972, 1974, 1978, 1979, 1979 (especial - invicto), 1981, 1986, 1991, 1996 (invicto), 1999, 2000, 2001, 2004, 2007, 2008, 2009, 2011 (invicto), 2014, 2017 (invicto), 2019, 2020, 2021, 2024 (invicto) e 2025."
                />
                <TrophyItem 
                    title="Taça Guanabara"
                    count={25}
                    years="1970, 1972 (invicto), 1973 (invicto), 1978, 1979, 1980 (invicto), 1981, 1982, 1984, 1988, 1989 (invicto), 1995, 1996 (invicto), 1999 (invicto), 2001, 2004, 2007, 2008, 2011 (invicto),  2014, 2018, 2020, 2021, 2024 (invicto) e 2025."
                />
                <TrophyItem 
                    title="Taça Rio"
                    count={10}
                    years="1978 (invicto), 1983, 1985 (invicto), 1986, 1991(invicto), 1996 (invicto), 2000, 2009, 2011 (invicto) e 2019."
                />
            </CardContent>
        </Card>

        {/* Observações */}
        <div>
            <h2 className="text-2xl font-headline font-bold mb-4">📝 Observações</h2>
            <div className="text-sm text-muted-foreground space-y-2 bg-muted/30 p-4 rounded-lg">
                <p>O título de 1987 do Campeonato Brasileiro é reconhecido oficialmente pela CBF para o Flamengo, apesar de polêmicas com o Sport.</p>
                <p>A conquista do Mundial de 1981 é reconhecida pela FIFA como Copa Intercontinental, equivalente aos antigos campeões mundiais.</p>
                <p>O Flamengo também tem diversos títulos em categorias de base, futebol feminino e outras modalidades.</p>
            </div>
        </div>
      </div>
       <div className="mt-12">
        <AdBanner width={728} height={90} />
      </div>
    </div>
  );
}
