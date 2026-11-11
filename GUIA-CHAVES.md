# Guia: como pegar as chaves de API e configurar o Axiom

O Axiom usa serviços de IA de terceiros. Para eles funcionarem, **cada pessoa que rodar o projeto precisa criar as próprias chaves (gratuitas)** e colocá-las no arquivo `server/.env`.

> **Importante:** você não precisa de todas as chaves. **Uma só já basta para o chat funcionar.** As do Cloudflare servem apenas para criar imagens.

## Resumo rápido

| O que você quer | Chave necessária | Custo |
|---|---|---|
| Conversar com a IA | `GEMINI_API_KEY` **ou** `GROQ_API_KEY` **ou** `MISTRAL_API_KEY` (uma basta) | Gratuito (com limites de uso) |
| Analisar imagens que você anexa | `GEMINI_API_KEY` (a mesma do chat, gratuita) ou `OPENAI_API_KEY` (paga) | Gemini: gratuito; OpenAI: pago |
| Criar imagens | `CLOUDFLARE_ACCOUNT_ID` + `CLOUDFLARE_API_TOKEN` | Gratuito (com limite diário) |

Os limites e as regras dos planos gratuitos mudam com o tempo. Confira os valores atuais no painel de cada serviço.

---

## Jeito mais fácil: colar as chaves no próprio site

Depois que o servidor estiver rodando (Passo 5), você pode pular a edição manual do `.env`:

1. Abra o Axiom, clique na engrenagem (canto inferior da barra lateral) e vá em **Chaves de API**.
2. Cole cada chave no campo correspondente e clique em **Salvar**. Não precisa reiniciar.
3. O site mostra apenas se a chave está **Configurada**; ela nunca é exibida de volta. Para trocar, cole outra; para apagar, clique em **Remover**.

Por trás, o Axiom grava a chave no arquivo `server/.env` do seu computador (o mesmo arquivo dos passos abaixo). As chaves nunca ficam no banco de dados nem no navegador. Os passos 2 e 3 explicam **onde pegar** cada chave, e valem para os dois jeitos.

---

## Passo 1 — Criar o arquivo `.env` (só se preferir editar à mão)

1. Abra a pasta `server` do projeto.
2. Copie o arquivo `.env.example` e renomeie a cópia para **`.env`** (sem `.example`).
   - Windows (Prompt de Comando, dentro da pasta `server`): `copy .env.example .env`
   - Mac/Linux: `cp .env.example .env`
3. Atenção no Windows: o nome precisa ser exatamente `.env`, e não `.env.txt`. Para ver as extensões, ative **Exibir → Extensões de nomes de arquivos** no Explorador de Arquivos.

Você vai preencher este arquivo nos próximos passos.

---

## Passo 2 — Pegar as chaves de chat (escolha pelo menos uma)

### Opção A: Gemini (Google)
1. Acesse **https://aistudio.google.com** e entre com sua conta Google.
2. Clique em **Get API key** (Obter chave de API).
3. Clique em **Create API key** e copie a chave gerada.
4. No `.env`, cole depois do `=`:
   ```
   GEMINI_API_KEY=sua_chave_aqui
   ```

### Opção B: Groq
1. Acesse **https://console.groq.com** e crie uma conta.
2. No menu, abra **API Keys** e clique em **Create API Key**.
3. Dê um nome, crie e copie a chave (ela costuma ser mostrada só uma vez).
4. No `.env`:
   ```
   GROQ_API_KEY=sua_chave_aqui
   ```

### Opção C: Mistral
1. Acesse **https://console.mistral.ai** e crie uma conta.
2. Escolha o plano gratuito, se ele pedir para selecionar um plano (a tela pode pedir verificações extras).
3. Abra **API Keys** e crie uma chave. Copie-a.
4. No `.env`:
   ```
   MISTRAL_API_KEY=sua_chave_aqui
   ```

Se você configurar mais de uma, o Axiom tenta uma de cada vez e troca automaticamente se alguma atingir o limite de uso.

---

## Passo 3 — Pegar as chaves para criar imagens (Cloudflare, opcional)

### 3.1 Criar a conta
1. Acesse **https://dash.cloudflare.com** e crie uma conta gratuita (não pede cartão).

### 3.2 Copiar o Account ID
1. Entre no painel da Cloudflare.
2. Seu **Account ID** aparece na página inicial da conta (ao lado do nome da conta, no menu de três pontinhos) ou na área de **Workers AI**.
3. Copie esse código.

### 3.3 Criar o API Token
1. Clique no seu perfil (canto superior direito) → **My Profile** → **API Tokens**.
2. Clique em **Create Token**.
3. Procure o modelo (template) chamado **Workers AI** e clique em **Use template**.
   - Se preferir criar do zero, use a permissão **Account → Workers AI → Read** (ou **Edit**) e selecione a sua conta em *Account Resources*.
4. Clique em **Continue to summary** e depois em **Create Token**.
5. **Copie o token na hora.** A Cloudflare só mostra o valor uma vez.

### 3.4 Colar no `.env`
```
CLOUDFLARE_ACCOUNT_ID=seu_account_id_aqui
CLOUDFLARE_API_TOKEN=seu_token_aqui
```

---

## Passo 4 — Como o `.env` deve ficar

Exemplo (use as suas chaves; não precisa preencher todas):

```
GEMINI_API_KEY=AIza...
GROQ_API_KEY=gsk_...
MISTRAL_API_KEY=
CLOUDFLARE_ACCOUNT_ID=0123456789abcdef
CLOUDFLARE_API_TOKEN=abcdef...
PROVIDER_ORDER=gemini,groq,mistral
```

Regras de formato:
- Uma variável por linha, no formato `NOME=valor`.
- **Sem aspas, sem espaços** antes ou depois do `=`.
- Deixe em branco (`NOME=`) as chaves que você não tem.

---

## Passo 5 — Instalar e iniciar

Requisito: **Node.js 22.13 ou superior** (https://nodejs.org).

Dentro da pasta `server`:

```
npm install
npm start
```

Abra **http://localhost:3000** no navegador.

Sempre que editar o `.env`, **pare o servidor (Ctrl + C) e rode `npm start` de novo**.

### O que o terminal deve mostrar
- `Provedores de IA ativos no modo automático (em ordem): ...` → o chat está configurado.
- `Criação de imagens ativa (cloudflare).` → a criação de imagens está configurada.
- Se aparecer `⚠ Arquivo server/.env NÃO encontrado`, o arquivo está com o nome ou o local errado (revise o Passo 1).

---

## Problemas comuns


| Mensagem no chat ou no terminal | O que significa | O que fazer |
|---|---|---|
| `408` / tempo esgotado | O provedor não respondeu a tempo (serviço lento, rede ou imagem grande). Normalmente não é a chave | Tente de novo, use uma imagem menor ou outro provedor |
| "Nenhum provedor de IA configurado" | O `.env` não foi encontrado ou está sem chaves | Revise o Passo 1 e o Passo 4, e reinicie o servidor |
| "Não foi possível gerar a resposta agora (... 401 ou 403)" | Chave inválida | Gere uma nova chave e cole de novo, sem espaços |
| "... 429" | Limite de uso do plano gratuito | Aguarde alguns minutos ou configure outro provedor |
| "... 404" | O nome do modelo mudou ou foi desativado | Veja o nome atual no painel do serviço e coloque no `.env` (por exemplo `GROQ_MODEL=`) |
| "... 408" | Tempo esgotado | Tente de novo; pode ser lentidão do serviço ou da sua internet |
| Botão de criar imagem avisa que falta configuração | Faltam as chaves do Cloudflare | Revise o Passo 3 |
| Imagem falha com erro de chave recusada | Token sem a permissão **Workers AI** ou Account ID errado | Recrie o token pelo template **Workers AI** e confira o ID |
| "servidor desatualizado" | O servidor está rodando uma versão antiga | Pare e inicie de novo com `npm start`, depois Ctrl + F5 no navegador |

Para ver o motivo exato de uma falha, olhe o terminal do servidor: as linhas que começam com `[IA]` trazem o detalhe de cada provedor.

---

## Segurança (leia antes de compartilhar o projeto)

- Se o seu `.env` ainda tiver uma linha `NVIDIA_API_KEY=` de uma versão anterior, apague-a (não é mais usada) e revogue essa chave no painel da NVIDIA.

- **Nunca compartilhe o arquivo `.env`** nem cole suas chaves em chats, prints ou no GitHub. O `.gitignore` já ignora o `.env`.
- Se uma chave vazar, apague-a no painel do serviço e crie outra.
- **Antes de enviar o projeto para alguém, não inclua** a pasta `server/node_modules`, o arquivo `server/.env` (suas chaves) nem `server/axiom.db` (suas conversas). Compartilhe só o código; quem receber roda `npm install` e cria as próprias chaves.
- A página de **Chaves de API** só funciona a partir do próprio computador: o servidor recusa pedidos vindos de outros endereços ou de outros sites. Para desativá-la por completo, coloque `DISABLE_KEY_EDITING=1` no `.env`.
- **Não envie o arquivo `server/axiom.db`**: ele guarda as suas conversas. Cada pessoa terá o próprio banco, criado automaticamente ao iniciar.
- O servidor foi feito para uso **local**: ele só aceita conexões da própria máquina (`127.0.0.1`) e **não tem login**. Não o exponha na internet sem antes adicionar autenticação, porque qualquer pessoa com acesso poderia usar suas chaves e gastar seus limites.
- Nos planos gratuitos, os provedores podem usar o que você envia para melhorar seus produtos. Evite dados sensíveis.
