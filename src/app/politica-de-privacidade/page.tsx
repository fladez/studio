
export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-headline font-bold mb-2">Política de Privacidade</h1>
          <p className="text-lg text-muted-foreground">FLA10 News – Canal Fla Dez</p>
          <p className="text-sm text-muted-foreground">Última atualização: 09/07/2025</p>
        </header>

        <div className="prose prose-lg max-w-none text-foreground text-justify space-y-6 [&_h2]:font-headline [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary [&_strong]:font-bold">
          <p>
            A sua privacidade é muito importante para nós. Esta Política de Privacidade descreve como o portal FLA10 News, pertencente ao grupo Canal Fla Dez, coleta, utiliza, armazena e protege as informações dos visitantes e usuários.
          </p>

          <section>
            <h2>1. Coleta de Informações</h2>
            <p>
              Ao acessar o portal FLA10 News, podemos coletar automaticamente algumas informações técnicas, como:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Endereço IP</li>
              <li>Tipo de navegador e sistema operacional</li>
              <li>Páginas acessadas e tempo de permanência</li>
              <li>Cookies e tecnologias de rastreamento</li>
            </ul>
            <p>
              Caso o usuário opte por interagir com o portal (por exemplo, ao se inscrever em newsletters, comentar notícias ou participar de enquetes), podemos coletar dados adicionais, como:
            </p>
             <ul className="list-disc pl-6 space-y-1">
              <li>Nome</li>
              <li>Endereço de e-mail</li>
              <li>Outras informações fornecidas voluntariamente</li>
            </ul>
          </section>

          <section>
            <h2>2. Uso das Informações</h2>
            <p>
              As informações coletadas são utilizadas para:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Melhorar o conteúdo e a experiência do usuário no portal</li>
              <li>Enviar atualizações e boletins informativos (quando autorizado)</li>
              <li>Entender as preferências dos leitores</li>
              <li>Cumprir obrigações legais ou regulatórias, se necessário</li>
            </ul>
          </section>

          <section>
            <h2>3. Compartilhamento de Informações</h2>
            <p>
              O FLA10 News não vende nem compartilha seus dados pessoais com terceiros, exceto:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Com serviços de análise e hospedagem confiáveis (como Google Analytics), que auxiliam no bom funcionamento do portal</li>
              <li>Quando exigido por lei ou por ordem judicial</li>
              <li>Com o consentimento expresso do usuário</li>
            </ul>
          </section>

          <section>
            <h2>4. Cookies</h2>
            <p>
              Utilizamos cookies para melhorar a navegação, personalizar conteúdo e analisar o tráfego. O usuário pode desativar os cookies nas configurações do navegador, embora isso possa limitar algumas funcionalidades do site.
            </p>
          </section>

          <section>
            <h2>5. Segurança das Informações</h2>
            <p>
              Adotamos medidas de segurança apropriadas para proteger os dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Ainda assim, nenhum sistema na internet é completamente seguro.
            </p>
          </section>
          
          <section>
            <h2>6. Direitos dos Usuários</h2>
            <p>
                Você tem o direito de:
            </p>
            <ul className="list-disc pl-6 space-y-1">
                <li>Solicitar acesso aos seus dados</li>
                <li>Corrigir ou atualizar informações pessoais</li>
                <li>Cancelar o recebimento de newsletters e comunicações</li>
                <li>Solicitar a exclusão dos seus dados, quando aplicável</li>
            </ul>
            <p>
                Para exercer esses direitos, entre em contato conosco pelo e-mail: <strong>canalfladez@gmail.com</strong>
            </p>
          </section>

          <section>
            <h2>7. Links para Sites de Terceiros</h2>
            <p>
                Nosso portal pode conter links para sites externos. Não nos responsabilizamos pelas práticas de privacidade ou conteúdo desses sites. Recomendamos que você leia suas respectivas políticas de privacidade.
            </p>
          </section>

          <section>
            <h2>8. Alterações nesta Política</h2>
            <p>
                Podemos atualizar esta Política de Privacidade a qualquer momento. Alterações importantes serão destacadas na página inicial do portal. A data da última modificação estará sempre indicada no topo do documento.
            </p>
          </section>

          <section>
            <h2>9. Contato</h2>
            <p>
                Se você tiver qualquer dúvida sobre esta Política de Privacidade ou sobre o uso de suas informações, entre em contato:
            </p>
            <div className="mt-2">
                <p><strong>Canal Fla Dez – Grupo responsável pelo FLA10 News</strong></p>
                <p>📧 E-mail: <strong>canalfladez@gmail.com</strong></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
