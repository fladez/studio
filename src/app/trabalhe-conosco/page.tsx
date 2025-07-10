
import { AdBanner } from "@/components/ad-banner";
import { Briefcase, PenSquare, Video, Camera, Paintbrush, Mic, Share2, Lightbulb, Trophy, Mail, Award, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function TrabalheConoscoPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="mb-12">
        <AdBanner width={728} height={90} />
      </div>

      <header className="text-center mb-16">
        <div className="relative mx-auto h-48 w-48 mb-4">
          <Image
            src="https://i.postimg.cc/zBDpxWpD/trabalhe-conosco-icone.png"
            alt="Trabalhe Conosco Icon"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground"><Briefcase className="inline-block h-10 w-10 mr-2" /> Trabalhe Conosco</h1>
        <p className="text-xl text-muted-foreground mt-2">Faça parte do time que vive o Flamengo todos os dias</p>
      </header>

      <main className="prose prose-lg max-w-none text-foreground/90 text-justify space-y-12 
                       [&_h2]:font-headline [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-primary 
                       [&_h2]:border-b [&_h2]:pb-2 [&_h2]:mb-4 [&_h2]:flex [&_h2]:items-center [&_h2]:gap-3
                       [&_strong]:font-bold [&_p]:leading-relaxed
                       [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">

        <section>
          <p>
            Você é apaixonado pelo Flamengo? Gosta de escrever, criar conteúdo, editar vídeos ou trabalhar com redes sociais? Então venha fazer parte do FLA10 News, o portal feito por rubro-negros e para rubro-negros!
          </p>
           <p>
            Se você tem informações, fez fotos ou videos sobre o Flamengo, mande para nós, receba os créditos e faça parte da nossa equipe.
          </p>
        </section>
        
        <section>
            <h2><Lightbulb /> Procuramos Perfis Como:</h2>
             <ul>
                <li><PenSquare className="inline-block h-5 w-5 mr-2" />Redatores esportivos (foco em Flamengo, futebol e bastidores)</li>
                <li><Video className="inline-block h-5 w-5 mr-2" />Editores de vídeo e clipes para redes sociais</li>
                <li><Camera className="inline-block h-5 w-5 mr-2" />Fotógrafos de jogos ou eventos rubro-negros</li>
                <li><Paintbrush className="inline-block h-5 w-5 mr-2" />Designers gráficos para artes, capas e chamadas</li>
                <li><Mic className="inline-block h-5 w-5 mr-2" />Apresentadores e comentaristas para projetos em vídeo/podcast</li>
                <li><Share2 className="inline-block h-5 w-5 mr-2" />Social media (planejamento de postagens, engajamento e trends)</li>
                <li><Lightbulb className="inline-block h-5 w-5 mr-2" />Colaboradores voluntários e correspondentes regionais</li>
            </ul>
        </section>
        
        <section>
            <h2><Trophy />O que oferecemos?</h2>
             <ul>
                <li><CheckCircle className="inline-block h-5 w-5 mr-2 text-primary" />Participação em um projeto de mídia esportiva independente e em expansão</li>
                <li><CheckCircle className="inline-block h-5 w-5 mr-2 text-primary" />Visibilidade nas redes sociais e no portal</li>
                <li><CheckCircle className="inline-block h-5 w-5 mr-2 text-primary" />Credenciamento em eventos esportivos (conforme disponibilidade)</li>
                <li><CheckCircle className="inline-block h-5 w-5 mr-2 text-primary" />Certificados e cartas de recomendação para seu portfólio</li>
                <li><CheckCircle className="inline-block h-5 w-5 mr-2 text-primary" />Trabalho 100% remoto, com horários que você faz</li>
                <li><CheckCircle className="inline-block h-5 w-5 mr-2 text-primary" />Possibilidade de remuneração futura em projetos específicos ou patrocinados</li>
            </ul>
        </section>

        <section>
            <h2><Mail />Como se candidatar?</h2>
            <p>Envie um e-mail para:</p>
            <div className="text-center bg-muted/50 p-6 rounded-lg">
                <p className="text-2xl font-mono font-bold text-primary break-all">fladeznews@gmail.com</p>
                <p className="text-muted-foreground mt-2">com o assunto: “Trabalhe Conosco – [Sua Área de Interesse]”</p>
            </div>
             <p className="mt-4">Inclua:</p>
             <ul>
                <li>Nome completo</li>
                <li>Área de interesse (ex: redação, vídeo, design)</li>
                <li>Disponibilidade</li>
            </ul>
        </section>

        <footer className="text-center pt-8 border-t">
          <h2 className="font-headline text-2xl font-bold text-foreground">🔴⚫ Vem com a gente!</h2>
          <p className="mt-4">
            No FLA10 News, cada conteúdo publicado tem alma, voz e amor pela camisa. Se você sente o Flamengo pulsar no peito e quer fazer parte de algo maior, seja bem-vindo ao time.
          </p>
        </footer>

      </main>

      <div className="mt-12">
        <AdBanner width={728} height={90} />
      </div>
    </div>
  );
}
