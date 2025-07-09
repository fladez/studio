
export default function CookiesPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-headline font-bold mb-2">🍪 Aviso de Cookies – FLA10 News</h1>
          <p className="text-sm text-muted-foreground">Última atualização: 09/07/2025</p>
        </header>

        <div className="prose prose-lg max-w-none text-foreground text-justify space-y-6 [&_h2]:font-headline [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary [&_strong]:font-bold">
          <p>
            O portal FLA10 News utiliza cookies e tecnologias semelhantes para melhorar sua experiência de navegação, analisar o uso do site e personalizar conteúdos. Ao continuar navegando, você concorda com o uso desses recursos, conforme descrito neste aviso.
          </p>

          <section>
            <h2>O que são cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita um site. Eles ajudam a lembrar preferências, identificar visitas repetidas e coletar informações sobre o uso da página.
            </p>
          </section>

          <section>
            <h2>Para que usamos cookies?</h2>
            <p>
              No FLA10 News, utilizamos cookies para:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Garantir o funcionamento adequado do site</li>
              <li>Salvar preferências de navegação</li>
              <li>Coletar dados estatísticos sobre acessos e interações</li>
              <li>Exibir conteúdos e anúncios mais relevantes (quando aplicável)</li>
            </ul>
          </section>

          <section>
            <h2>Tipos de cookies que podemos utilizar:</h2>
            <ul className="list-disc pl-6 space-y-1">
                <li><strong>Essenciais:</strong> necessários para o funcionamento do site (ex: segurança, carregamento)</li>
                <li><strong>Analíticos:</strong> usados para entender como os visitantes usam o site (ex: Google Analytics)</li>
                <li><strong>Funcionais:</strong> armazenam preferências como idioma ou região</li>
                <li><strong>Publicidade:</strong> ajudam a exibir anúncios relevantes (caso sejam usados no site)</li>
            </ul>
          </section>

          <section>
            <h2>Como controlar ou desativar os cookies?</h2>
            <p>
              Você pode configurar seu navegador para bloquear ou apagar cookies a qualquer momento. No entanto, isso pode afetar a funcionalidade de certas partes do site.
            </p>
            <p>Confira como ajustar as configurações no seu navegador:</p>
            <ul className="list-disc pl-6 space-y-1">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/pt-BR/kb/impeca-que-sites-armazenem-cookies-e-dados-no-fir" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>
            <p>(Consulte a seção de ajuda do navegador para instruções atualizadas.)</p>
          </section>

          <section>
            <h2>Atualizações neste aviso</h2>
            <p>
              Este aviso pode ser alterado para refletir mudanças no uso de cookies ou nas leis aplicáveis. A data da última atualização estará sempre indicada no topo do documento.
            </p>
          </section>

          <section>
            <h2>Contato</h2>
            <p>
              Em caso de dúvidas sobre o uso de cookies ou proteção de dados, fale com a gente:
            </p>
            <div className="mt-2">
                <p>📧 E-mail: <strong>canalfladez@gmail.com</strong></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
