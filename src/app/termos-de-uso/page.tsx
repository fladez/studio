
export default function TermsOfUsePage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-headline font-bold mb-2">Termos de Uso – FLA10 News</h1>
          <p className="text-sm text-muted-foreground">Última atualização: 09/07/2025</p>
        </header>

        <div className="prose prose-lg max-w-none text-foreground text-justify space-y-6 [&_h2]:font-headline [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary [&_strong]:font-bold">
          <p>
            Bem-vindo ao FLA10 News, portal de notícias independente sobre o Clube de Regatas do Flamengo, operado pelo grupo Canal Fla Dez.
          </p>
          <p>
            Ao acessar e utilizar este site, você concorda com os termos e condições abaixo. Se você não concorda, recomendamos que não utilize nosso conteúdo.
          </p>

          <section>
            <h2>1. Objetivo do Site</h2>
            <p>
              O FLA10 News tem como objetivo fornecer notícias, análises, opiniões e conteúdos informativos relacionados ao Flamengo. Somos um canal independente, sem vínculo oficial com o clube.
            </p>
          </section>

          <section>
            <h2>2. Uso do Conteúdo</h2>
            <p>
              Todo o conteúdo publicado (textos, imagens, vídeos, áudios e gráficos) é protegido por direitos autorais e pertence ao FLA10 News, salvo quando indicado o contrário.
            </p>
            <strong>Você pode:</strong>
            <ul className="list-disc pl-6 space-y-1">
              <li>Compartilhar links dos nossos conteúdos em redes sociais ou outros sites, com os devidos créditos.</li>
            </ul>
            <strong>Você não pode:</strong>
            <ul className="list-disc pl-6 space-y-1">
              <li>Copiar, reproduzir ou republicar nossos conteúdos em outros sites sem autorização prévia por escrito.</li>
              <li>Usar nosso conteúdo para fins comerciais sem permissão.</li>
              <li>Modificar ou distorcer as informações publicadas.</li>
            </ul>
          </section>

          <section>
            <h2>3. Comentários e Interações</h2>
            <p>
              O portal pode permitir que os leitores comentem ou interajam com conteúdos.
            </p>
            <p>Ao participar:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Você concorda em manter o respeito e não publicar conteúdos ofensivos, discriminatórios, ameaçadores ou ilegais.</li>
              <li>Nos reservamos o direito de remover comentários que violem estes termos, sem aviso prévio.</li>
            </ul>
          </section>

          <section>
            <h2>4. Responsabilidade</h2>
            <p>
              Embora nos esforcemos para publicar informações precisas e atualizadas, o FLA10 News não se responsabiliza por erros, atrasos, omissões ou por decisões tomadas com base no conteúdo publicado.
            </p>
            <p>
              As opiniões expressas em artigos assinados são de responsabilidade de seus autores.
            </p>
          </section>

          <section>
            <h2>5. Links para Terceiros</h2>
            <p>
              Nosso site pode conter links para sites externos. Não somos responsáveis pelo conteúdo, práticas ou políticas de privacidade desses sites.
            </p>
          </section>

          <section>
            <h2>6. Alterações nos Termos</h2>
            <p>
              Estes Termos de Uso podem ser atualizados a qualquer momento, sem aviso prévio. Recomendamos que você os revise periodicamente.
            </p>
            <p>
              A data da última atualização estará sempre indicada no início do documento.
            </p>
          </section>

          <section>
            <h2>7. Contato</h2>
            <p>
              Para dúvidas, sugestões ou solicitações relacionadas a este Termo de Uso, entre em contato com a equipe do FLA10 News:
            </p>
            <div className="mt-2">
              <p>📧 E-mail: <strong>canalfladez@gmail.com</strong></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
