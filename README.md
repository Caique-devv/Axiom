# Axiom — AI Chat

Axiom é um chatbot de uso pessoal com respostas em streaming, histórico local em SQLite e suporte a múltiplos provedores de IA.

O repositório pode ser publicado no GitHub. Execute o aplicativo na sua máquina seguindo [Como executar](#como-executar). O servidor compartilha um único histórico e não tem autenticação para hospedagem pública.

## O que o site tem

- Tema escuro (padrão) e claro, responsivo para computador, tablet e celular
- Barra lateral recolhível com busca, "Nova conversa" e histórico agrupado em **Hoje / Ontem / Anteriores**
- Tela inicial com sugestões clicáveis, campo de mensagem que cresce com o texto e estado de carregamento
- **Página de Configurações** (engrenagem na barra lateral): tema, **idioma da interface**, Enter para enviar, **personalidade do Axiom**, **chaves de API** e apagar tudo; menu de perfil ilustrativo
- **Galeria** (botão na barra lateral) com todas as imagens criadas pela IA: clique para ampliar, baixar ou abrir a conversa de origem
- Respostas que **aparecem aos poucos**, mesmo quando o provedor manda o texto em blocos grandes
- Interface em **português, inglês e espanhol**: troque em Configurações → Idioma. A escolha fica salva no navegador, assim como o tema (escuro ou claro). A IA responde no idioma em que você escrever, independente do idioma da interface.
- **Conversas e mensagens persistidas** no arquivo `server/axiom.db`

## Estrutura

```
axiom/
├── index.html · styles.css · app.js   Front-end
├── README.md
├── .gitignore
└── server/
    ├── server.js     Servidor Express (entrega o site e a API)
    ├── settings.js   Personalidade (banco) e chaves de API (arquivo .env)
    ├── images.js     Validação das imagens enviadas (formato, tamanho, quantidade)
    ├── providers/    Um serviço por provedor + escolha e failover
    │   ├── index.js · common.js
    │   └── gemini.js · groq.js · mistral.js · openai.js
    ├── .env.example  Modelo do arquivo de chaves (copie para .env)
    ├── db.js         Abre/cria o banco SQLite
    ├── schema.sql    Estrutura das tabelas
    ├── axiom.db      Arquivo do banco de dados
    └── package.json
```

## Como executar

Requisito: [Node.js](https://nodejs.org) **22.13 ou superior** (o banco usa o SQLite embutido no Node, então não é preciso compilar nada).

```bash
cd server
npm ci             # instala as versões do package-lock.json
npm start          # inicia o servidor
```

O Node pode mostrar um aviso de "ExperimentalWarning: SQLite" ao iniciar; é normal e não afeta o funcionamento.

Abra **http://localhost:3000** no navegador. Use esse endereço, e não o arquivo `index.html` direto: sem o servidor não há conversa nem histórico (a barra lateral avisa "Servidor offline").

Para encerrar, pressione `Ctrl + C` no terminal.

> **Primeira vez aqui?** Veja o passo a passo ilustrado para pegar as chaves e configurar: [GUIA-CHAVES.md](GUIA-CHAVES.md).

## Configurar a IA (gratuita)

O Axiom usa até três provedores e tenta um de cada vez, na ordem definida. Se um falhar antes de começar a responder (limite de uso, erro, chave inválida), passa automaticamente para o próximo. Você não precisa ter os três.

1. Crie uma chave em cada provedor que quiser usar:
   - Gemini: https://aistudio.google.com (Get API key)
   - Groq: https://console.groq.com
   - Mistral: https://console.mistral.ai
2. Na pasta `server`, copie `.env.example` para `.env` (no Windows: `copy .env.example .env`).
3. Abra o `.env` no Bloco de Notas e cole cada chave depois do `=`, sem aspas nem espaços.
4. Reinicie o servidor (`Ctrl + C` e `npm start`). O terminal mostra "Provedores de IA ativos: ...".

No `.env` também dá para mudar a ordem (`PROVIDER_ORDER`) e o modelo de cada provedor (`GEMINI_MODEL`, `GROQ_MODEL`, `MISTRAL_MODEL`). Os nomes de modelos mudam com o tempo, então confira os atuais nos painéis. Os limites gratuitos também mudam; veja os valores atuais em cada console.

**Segurança:** as chaves ficam só no servidor (`.env`), nunca no navegador. Não envie o `.env` para o GitHub (o `.gitignore` já o ignora) nem cole chaves em chats ou prints. Se uma chave vazar, apague-a no painel do provedor e crie outra. Nos planos gratuitos, os provedores podem usar o que você enviar para melhorar seus produtos, então evite dados sensíveis.

Se aparecer "Nenhum provedor de IA configurado", o `.env` não foi encontrado ou está sem chaves. Se aparecer "Não foi possível gerar a resposta" com um número (429, 401...), veja o terminal do servidor: 429 é limite de uso e 401/403 é chave inválida.

## Solução de problemas

- **"Falha ao gerar a resposta (HTTP 404)" ou "servidor desatualizado":** o servidor ainda está rodando a versão antiga. Feche o terminal, rode `npm start` de novo na pasta `server` e recarregue a página (Ctrl + F5).
- **O chat não responde:** falta o arquivo `server/.env` com ao menos uma chave (Gemini, Groq ou Mistral). Ao iniciar, o terminal avisa se o `.env` não foi encontrado. No Windows, confira que o nome é `.env` e não `.env.txt` (ative "Extensões de nome de arquivo" no Explorador).
- **Não dá para criar imagens:** a criação de imagens usa o OpenAI, que é pago. Sem `OPENAI_API_KEY` no `.env` o botão avisa e nada é gerado. Isso não afeta o chat de texto.
- Depois de editar o `.env`, sempre reinicie o servidor.

## Gemini: análise de imagens (gratuita)

O Gemini (mesma chave do chat) analisa as imagens que você anexa, tudo no servidor (`server/providers/gemini.js`).

- **Configurar:** a chave `GEMINI_API_KEY` já serve para texto e imagens. Cole em **Configurações → Chaves de API** (ou no `server/.env`). Passo a passo no `GUIA-CHAVES.md`.
- **Usar:** clique no ícone de imagem (ou cole/arraste), escreva a pergunta e envie. No modo **Automático**, mensagens com imagem vão para um provedor com visão: o Gemini (mesmo que não esteja em `PROVIDER_ORDER`) e, se ele não puder, o OpenAI, quando configurado. A resposta mostra "via Gemini" para você saber quem analisou.
- **Formatos e limites:** PNG, JPEG e WEBP (**GIF não**), até 4 imagens por mensagem e 5 MB cada, e cerca de 18 MB no total por pedido. Com um formato ou tamanho que o Gemini não aceita, o Axiom usa o OpenAI (se configurado) ou explica o que fazer.
- **Conversa sobre a imagem:** o Gemini recebe as imagens recentes da conversa (até 4), então dá para fazer perguntas seguintes ("e a cor do céu?"). Se outro provedor de texto responder (por exemplo o Groq), ele não vê a imagem e pede para reenviá-la.
- **Custos:** a camada gratuita do Gemini tem limite de uso por minuto/dia (veja o valor atual no Google AI Studio). Se o limite for atingido, o Axiom avisa e **não** troca sozinho para o OpenAI pago.
- **Ajustes:** `GEMINI_MODEL` (padrão `gemini-flash-latest`) no `.env`.

## OpenAI: conversa, análise e geração de imagens

O OpenAI é o quarto provedor (usa o SDK oficial `openai`, só no servidor). Ele é **pago**: precisa de créditos na conta da OpenAI. Gemini, Groq e Mistral continuam funcionando como antes.

**Configurar:** crie uma chave em https://platform.openai.com, abra `server/.env` e preencha `OPENAI_API_KEY=` (a chave nunca vai para o navegador). Reinicie o servidor; o terminal mostra "OpenAI configurado".

- **Seletor de provedor:** o botão no topo ("Axiom · Automático") lista os provedores com chave. *Automático* usa a ordem de `PROVIDER_ORDER` com troca se um falhar. Escolhendo um provedor específico, só ele é usado (sem troca). O OpenAI **não** entra no modo automático por ser pago; para incluí-lo, acrescente `,openai` em `PROVIDER_ORDER`. A escolha fica salva no navegador.
- **Analisar imagens:** clique no ícone de imagem (ou cole/arraste imagens para o campo de mensagem), veja as miniaturas, escreva a pergunta e envie. Aceita PNG, JPEG, WEBP e GIF, até 4 imagens por mensagem e 5 MB cada (imagens maiores são reduzidas no navegador quando possível). O servidor confere o formato real do arquivo, não só a extensão. Só provedores com visão analisam imagens (hoje, o OpenAI): com imagem anexada o modo Automático usa o OpenAI mesmo fora da ordem; se escolher outro provedor, aparece um aviso.
- **Criar imagens:** ligue o botão de faíscas ("Criar imagem") e descreva a imagem, ou escreva um pedido claro como "crie uma imagem de..." / "generate an image of..." (o chat reconhece esse tipo de frase em português, inglês e espanhol e ignora casos como "imagem Docker"). Mensagens comuns nunca geram imagem. A imagem aparece na conversa; clique para ampliar e baixar, e use o botão de gerar novamente para outra versão. Não é possível combinar anexo com "Criar imagem" (a edição de imagens ainda não existe).
- **Custos e limites:** cada imagem gerada custa créditos. Há proteção local: uma geração por vez e no máximo 20 por hora (`IMAGE_LIMIT_PER_HOUR`). Qualidade e tamanho padrão: `medium` e `1024x1024` (`OPENAI_IMAGE_QUALITY`, `OPENAI_IMAGE_SIZE`).
- **Modelos:** padrão `gpt-5.6-luna` (conversa e visão) e `gpt-image-2` (imagens), configuráveis por `OPENAI_MODEL` e `OPENAI_IMAGE_MODEL`. Os nomes mudam com frequência; confira os atuais em https://developers.openai.com. Os modelos de imagem podem exigir a **verificação da organização** no painel da OpenAI; sem ela a API responde com acesso negado (o Axiom avisa).
- **Armazenamento:** imagens enviadas e geradas ficam dentro do `axiom.db` (tabela `images`), então o arquivo cresce com o uso. Apagar a conversa apaga suas imagens.
- **Preparado para o futuro:** a edição de imagens pode ser adicionada ao serviço `providers/openai.js` (a API de edição existe), reutilizando a validação e o tratamento de erros.

## Como usar

1. Clique em uma sugestão ou escreva no campo de mensagem e envie (Enter envia, Shift + Enter quebra a linha).
2. A primeira mensagem cria a conversa, e o título é o início do texto. Ela aparece na barra lateral.
3. Clique em uma conversa do histórico para reabri-la. Use **Nova conversa** para começar outra.
4. Use a busca da barra lateral para filtrar conversas pelo título.
5. Passe o mouse sobre uma conversa e clique nos três pontos para **renomear** ou **excluir** (no celular os três pontos ficam sempre visíveis). Dois cliques no título também iniciam a renomeação; Enter salva e Esc cancela.
6. Enquanto a IA responde, o botão de enviar vira **Parar** (quadrado): clique para interromper; o trecho já recebido fica salvo.
7. Abaixo de cada resposta há **Copiar** e, na última, **Gerar novamente** (troca a resposta por outra). Os blocos de código têm seu próprio botão de copiar.
8. O título de uma conversa nova é criado automaticamente pela IA depois da primeira resposta, a menos que você já tenha renomeado (para desligar, use `AUTO_TITLE=off` no `.env`; ele usa 1 chamada extra de IA por conversa nova).
9. Em **Configurações → Personalidade do Axiom**, escolha um modelo pronto (Descontraído, Formal, Professor, Conciso) ou escreva o seu (até 2000 caracteres) e salve. Vale para todas as conversas e para as próximas respostas.
10. Em **Configurações → Chaves de API**, cole as chaves de cada serviço e salve, sem editar o `.env` e sem reiniciar (veja `GUIA-CHAVES.md`).
11. Em **Configurações → Dados** há o botão **Apagar tudo**, que remove todas as conversas.

## Banco de dados

O banco é um único arquivo SQLite: `server/axiom.db`. Se ele não existir, é criado automaticamente ao iniciar o servidor.

| Tabela | Colunas |
|---|---|
| `conversations` | `id`, `title`, `created_at`, `updated_at` |
| `messages` | `id`, `conversation_id` → conversations, `role` (`user` ou `assistant`), `content`, `created_at` |

Apagar uma conversa apaga suas mensagens (`ON DELETE CASCADE`). A data de atualização da conversa é ajustada automaticamente por um gatilho a cada mensagem nova. As datas ficam em UTC.

### Como baixar o banco de dados

- **Pelo navegador:** com o servidor rodando, acesse **http://localhost:3000/api/database/download** e o arquivo `axiom.db` será baixado.
- **Copiando o arquivo:** copie `server/axiom.db` (de preferência com o servidor parado).
- **Só a estrutura, sem dados:** use o arquivo `server/schema.sql`.

### Como abrir e consultar

- Interface gráfica: [DB Browser for SQLite](https://sqlitebrowser.org), abrindo o arquivo `axiom.db`.
- Terminal (se tiver o `sqlite3`):

```bash
sqlite3 server/axiom.db "SELECT id, title, updated_at FROM conversations;"
```

### Zerar o banco

Para apagar todas as conversas, use **Configurações → Dados → Apagar tudo** no site, ou pare o servidor, apague o arquivo `server/axiom.db` e inicie de novo: um banco vazio é criado automaticamente.

## API local

O servidor escuta apenas em `127.0.0.1` (só a sua máquina acessa).

| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/conversations` | Lista as conversas (mais recentes primeiro) |
| POST | `/api/conversations` | Cria conversa (`{ "title": "..." }`) |
| PATCH | `/api/conversations/:id` | Renomeia a conversa (`{ "title": "..." }`) |
| DELETE | `/api/conversations` | Apaga todas as conversas e mensagens |
| DELETE | `/api/conversations/:id` | Apaga a conversa e suas mensagens |
| GET | `/api/conversations/:id/messages` | Lista as mensagens |
| POST | `/api/conversations/:id/messages` | Salva mensagem (`{ "role": "user", "content": "...", "images": ["data:image/png;base64,..."] }`; imagens só em mensagens do usuário) |
| GET | `/api/settings` | Personalidade e status das chaves (só se estão configuradas, nunca os valores) |
| PUT | `/api/settings/prompt` | Salva a personalidade (`{ "prompt": "..." }`, vazio restaura o padrão) |
| PUT | `/api/settings/keys` | Salva/remove chaves (`{ "keys": { "GROQ_API_KEY": "..." } }`, `null` remove); só da própria máquina |
| GET | `/api/gallery` | Lista as imagens geradas, da mais recente para a mais antiga |
| GET | `/api/providers` | Provedores disponíveis (sem expor chaves) |
| GET | `/api/images/:id` | Entrega uma imagem (`?download=1` para baixar) |
| POST | `/api/conversations/:id/image` | Gera uma imagem com o OpenAI (`{ "prompt": "..." }`, `regenerate` opcional) |
| POST | `/api/conversations/:id/reply` | Gera a resposta da IA em streaming (SSE: eventos `start`, `delta`, `done`, `error`) e a salva ao final. Com `{ "regenerate": true }` descarta a última resposta antes e `{ "provider": "openai" }` escolhe o provedor |
| POST | `/api/conversations/:id/title` | Gera um título curto com IA (só se a conversa não foi renomeada) |
| GET | `/api/database/download` | Baixa o arquivo `axiom.db` |

## Segurança das chaves e da página de Configurações

- As chaves ficam **só** no arquivo `server/.env` do computador onde o servidor roda. A API informa apenas se cada chave está configurada; **nunca devolve o valor**, e o navegador também não as guarda. Elas não vão para o `axiom.db`, para os logs (que as ocultam) nem para o download do banco.
- Salvar uma chave pela página valida o formato (sem espaços, aspas nem quebras de linha, para ninguém injetar linhas no `.env`), grava o arquivo preservando comentários e outras linhas, e já vale sem reiniciar.
- A API só responde ao endereço `localhost`/`127.0.0.1` e recusa pedidos que alteram dados vindos de outros sites (proteção contra CSRF e DNS rebinding). Trocar chaves só é aceito de conexões da própria máquina. Para desativar a edição de chaves pelo site: `DISABLE_KEY_EDITING=1` no `.env`. Se usar outro nome de host (por exemplo atrás de um proxy), liste-o em `ALLOWED_HOSTS` (separado por vírgulas, com a porta).
- A **personalidade** fica no banco (`settings`), pois não é secreta.

## Como compartilhar o projeto com outras pessoas

Envie apenas o código. **Não inclua**: `server/.env` (suas chaves), `server/node_modules` (cada pessoa roda `npm install`) e `server/axiom.db` (suas conversas e imagens). Quem receber segue o `GUIA-CHAVES.md` para criar as próprias chaves, ou cola as chaves na página de Configurações.

## Observações

- Não há autenticação: o banco é de uso pessoal e local. Não exponha o servidor na internet.
- Se for versionar o projeto no Git, considere colocar `server/node_modules/` no `.gitignore` e decidir se `server/axiom.db` deve ser versionado (ele contém suas conversas).

## Próximas etapas

Login e perfil, markdown completo, busca no conteúdo das mensagens e, se o projeto crescer, migração do SQLite para um banco em nuvem.
