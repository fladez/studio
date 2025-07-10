
import { AdBanner } from "@/components/ad-banner";
import { Mail, MessageCircle, Send, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FaleConoscoPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="mb-12">
        <AdBanner width={728} height={90} />
      </div>

      <header className="text-center mb-16">
        <div className="relative mx-auto h-48 w-48 mb-4">
          <Image
            src="https://i.postimg.cc/L5LSvrxM/2511818.png"
            alt="Fale Conosco Icon"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Fale Conosco</h1>
        <p className="text-xl text-muted-foreground mt-2">Entre em contato com o FLA10 News</p>
      </header>

      <main className="prose prose-lg max-w-none text-foreground/90 text-justify space-y-12 
                       [&_h2]:font-headline [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-primary 
                       [&_h2]:border-b [&_h2]:pb-2 [&_h2]:mb-4 [&_h2]:flex [&_h2]:items-center [&_h2]:gap-3
                       [&_strong]:font-bold [&_p]:leading-relaxed
                       [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">

        <section>
          <p className="text-center text-xl !leading-relaxed">
            Tem alguma dúvida, sugestão, crítica ou quer simplesmente mandar aquele salve rubro-negro? O canal está aberto para você!
          </p>
          <p className="text-center">
            Aqui no FLA10 News, valorizamos a participação da Nação. Toda mensagem é lida com atenção e respeito, porque acreditamos que a torcida também faz parte da notícia.
          </p>
        </section>

        <section>
          <h2><Mail />E-mail de contato</h2>
          <div className="text-center bg-muted/50 p-6 rounded-lg">
            <p className="text-2xl font-mono font-bold text-primary break-all">fladeznews@gmail.com</p>
            <p className="text-muted-foreground mt-2">Envie sua mensagem a qualquer momento. Respondemos o mais breve possível.</p>
          </div>
        </section>
        
        <section>
            <h2><MessageCircle />Sobre o que você pode falar com a gente?</h2>
             <ul>
                <li>Sugestões de pauta ou cobertura</li>
                <li>Correções ou observações sobre conteúdo publicado</li>
                <li>Parcerias, divulgação e mídia</li>
                <li>Dúvidas sobre o portal</li>
                <li>Mensagens para a equipe</li>
                <li>Envio de fotos, vídeos ou relatos como colaborador da Nação</li>
            </ul>
        </section>

        <section>
            <h2><CheckCircle />Política de Atendimento</h2>
            <ul>
                <li><strong className="text-primary"><Clock className="inline-block h-5 w-5 mr-2" />Tempo de Resposta:</strong> Nosso tempo médio de resposta é de até 72 horas úteis.</li>
                <li><strong className="text-primary"><Send className="inline-block h-5 w-5 mr-2" />Conteúdo das Mensagens:</strong> Não aceitamos ou respondemos mensagens ofensivas ou com conteúdo impróprio.</li>
                <li><strong className="text-primary"><Mail className="inline-block h-5 w-5 mr-2" />Direitos Autorais:</strong> Em caso de denúncias relacionadas a direitos autorais, enviar informações completas e comprovadas.</li>
            </ul>
        </section>

        <footer className="text-center pt-8 border-t">
          <h2 className="font-headline text-2xl font-bold text-foreground">📣 Sua voz tem espaço aqui</h2>
          <p className="mt-4">
            O FLA10 News é feito por flamenguistas e para flamenguistas. Queremos ouvir você, porque juntos somos mais fortes.
          </p>
        </footer>

      </main>

      <div className="mt-12">
        <AdBanner width={728} height={90} />
      </div>
    </div>
  );
}
