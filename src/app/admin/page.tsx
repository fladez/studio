
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Painel Administrativo</h2>
      <p className="text-muted-foreground mb-8">
        Use o menu à esquerda para gerenciar o conteúdo do site.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Gerenciar Próximo Jogo</CardTitle>
            <CardDescription>Atualize a barra de próximo jogo exibida em todo o site.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/proximo-jogo" className="text-primary font-semibold hover:underline">
              Atualizar jogo
            </Link>
          </CardContent>
        </Card>
        <Card className="opacity-50 cursor-not-allowed">
          <CardHeader>
            <CardTitle>Gerenciar Notícias</CardTitle>
            <CardDescription>Adicione, edite ou remova notícias do portal.</CardDescription>
          </CardHeader>
          <CardContent>
            <span className="text-muted-foreground">Gerenciar notícias (em breve)</span>
          </CardContent>
        </Card>
         <Card className="opacity-50 cursor-not-allowed">
          <CardHeader>
            <CardTitle>Gerenciar Colunas</CardTitle>
            <CardDescription>Adicione, edite ou remova colunas de opinião.</CardDescription>
          </CardHeader>
          <CardContent>
            <span className="text-muted-foreground">Gerenciar colunas (em breve)</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
