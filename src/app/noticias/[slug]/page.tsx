import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // In a real app, you'd fetch article data based on the slug
  const article = {
    title: "Flamengo vence de virada e assume a liderança do campeonato",
    author: "Redação NRN",
    date: "15 de Julho de 2024",
    category: "Futebol Profissional",
    image: "https://placehold.co/1200x500.png",
    dataAiHint: "soccer celebration",
    content: `
      <p>Em uma noite eletrizante no Maracanã, o Flamengo mostrou sua força e superou o adversário por 2 a 1, de virada, garantindo a ponta da tabela do Campeonato Brasileiro. A partida, válida pela 15ª rodada, foi marcada por muita emoção e uma atuação de gala do time rubro-negro no segundo tempo.</p>
      <p>O adversário abriu o placar logo no início do jogo, aproveitando um momento de desatenção da zaga. O gol silenciou o Maracanã por um instante, mas a Nação não parou de cantar, empurrando o time para a reação. O primeiro tempo foi truncado, com o Flamengo encontrando dificuldades para furar o bloqueio defensivo.</p>
      <h3 class="text-2xl font-headline font-bold my-4">Segundo tempo avassalador</h3>
      <p>A história do jogo mudou na segunda etapa. Com as alterações promovidas pelo técnico, o time voltou com outra postura. A pressão foi intensa desde o primeiro minuto. O gol de empate saiu dos pés de <strong>Pedro</strong>, após uma bela jogada de <strong>Arrascaeta</strong>. O Maracanã explodiu em festa.</p>
      <p>O gol da vitória, que sacramentou a liderança, foi uma pintura. <strong>Gabigol</strong>, que entrou no segundo tempo, recebeu na entrada da área, driblou o zagueiro e tocou com categoria na saída do goleiro. Uma festa indescritível tomou conta do estádio, consolidando uma vitória fundamental para as pretensões do clube no campeonato.</p>
      <p>Com o resultado, o Flamengo chega a 32 pontos e assume a liderança isolada, ultrapassando seu rival direto na classificação.</p>
    `
  }

  return (
    <div className="container mx-auto max-w-4xl py-12">
      <article>
        <header className="mb-8">
          <Badge className="mb-2">{article.category}</Badge>
          <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight mb-4">{article.title}</h1>
          <div className="text-sm text-muted-foreground">
            <span>Por {article.author}</span> &bull; <span>{article.date}</span>
          </div>
        </header>

        <div className="overflow-hidden rounded-lg mb-8">
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={500}
            className="w-full h-auto object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            data-ai-hint={article.dataAiHint}
            priority
          />
        </div>

        <div 
          className="text-lg space-y-6 [&_h3]:text-2xl [&_h3]:font-headline [&_h3]:font-bold [&_h3]:my-4 [&_strong]:font-bold"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-lg font-bold mb-4">Compartilhe esta notícia</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" aria-label="Compartilhar no Twitter">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Compartilhar no Facebook">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Compartilhar no LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline"size="icon" aria-label="Copiar link">
              <LinkIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}
