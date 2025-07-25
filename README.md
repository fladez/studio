# Nação Rubro-Negra News (Firebase Studio Project)

Este é um projeto Next.js criado e editado no Firebase Studio.

## Onde está o meu projeto?

**O seu projeto já está no seu computador!** O Firebase Studio edita os arquivos diretamente na sua máquina. A maneira mais fácil de encontrar a pasta do projeto é olhar no terminal que você usou para iniciar o servidor.

## Como publicar o site na web (Deploy)

Você pode publicar seu site para que o mundo inteiro o veja usando o Firebase App Hosting. Siga estes passos no terminal do Firebase Studio:

### 1. Instale o Firebase CLI

Se você ainda não tem as ferramentas de linha de comando do Firebase, instale-as globalmente. Você só precisa fazer isso uma vez.
```bash
npm install -g firebase-tools
```

### 2. Faça Login no Firebase

Faça login com a sua conta do Google. Uma janela do navegador será aberta para você autenticar.
```bash
firebase login
```

### 3. Publique o Site

Depois de logado, você pode usar o comando que adicionei para fazer o deploy do seu site.
```bash
npm run deploy
```
Ao final do processo, o terminal mostrará a URL pública do seu site (algo como `https://seu-projeto-id.web.app`). Pronto, seu site está no ar!

---

## Como fazer o download (usando a extensão do GitHub no VS Code)

A melhor maneira de "baixar" seu projeto é publicá-lo no GitHub. De lá, você pode baixar um arquivo ZIP a qualquer momento. Como você já tem a extensão, siga estes passos visuais:

### 1. Inicialize o Repositório no VS Code

*   Clique no ícone de **Source Control** (Controle do Código-Fonte) na barra lateral esquerda (parece com três pontos conectados por linhas).
*   Clique no botão "**Initialize Repository**" (Inicializar Repositório). Isso prepara seu projeto para o Git.

### 2. Faça o Primeiro "Commit" (Salve as Alterações)

*   Depois de inicializar, todos os seus arquivos aparecerão na lista de alterações.
*   No campo de mensagem no topo, digite uma descrição para suas alterações, como: `Primeiro commit do projeto`.
*   Clique no botão **"Commit"** (a marca de verificação ✓) para salvar um "snapshot" do seu projeto.

### 3. Publique no GitHub

*   Após o commit, você verá um botão chamado **"Publish Branch"** (Publicar Branch) ou algo similar. Clique nele.
*   O VS Code vai te perguntar onde publicar. Escolha a opção **"Publish to GitHub"**.
*   Ele vai sugerir um nome para o repositório (pode manter o padrão) e te dará a opção de torná-lo **privado** ou **público**. Escolha o que preferir e confirme.

### 4. Baixe seu projeto do GitHub a qualquer momento

Pronto! Seu projeto está seguro no GitHub. Agora, você pode ir até a página do seu repositório no site do GitHub, clicar no botão verde **"<> Code"** e selecionar **"Download ZIP"** para baixar uma cópia completa sempre que quiser.
