/* ===== Ícones (SVG inline, estilo Lucide) ===== */
const ICONS={
panel:'<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
axiom:'<path d="M12 4 5 20M12 4l7 16M8.5 14h7"/>',
chat:'<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
arrow:'<path d="M12 19V5M5 12l7-7 7 7"/>',
settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
chevron:'<path d="m6 9 6 6 6-6"/>',
x:'<path d="M18 6 6 18M6 6l12 12"/>',
logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
code:'<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
pen:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
bulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z"/>',
plane:'<path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2 3 8l6 3-3 3-3-.5L2 15l4 1 1 4 1.5-1-.5-3 3-3 3 6z"/>'};
Object.assign(ICONS,{back:'<path d="M19 12H5M12 19l-7-7 7-7"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',sparkles:'<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 3v4M17 5h4"/>',download:'<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',dots:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',trash:'<path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6"/>'});
Object.assign(ICONS,{copy:'<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>',check:'<path d="M20 6 9 17l-5-5"/>',refresh:'<path d="M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5"/>',stop:'<rect x="6" y="6" width="12" height="12" rx="2"/>'});
const Icon=n=>`<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]}</svg>`;
const $=s=>document.querySelector(s);
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ===== Idiomas (pt, en, es) ===== */
const I18N={
pt:{newChat:'Nova conversa',searchChats:'Pesquisar conversas',collapse:'Recolher barra lateral',openSidebar:'Abrir barra lateral',sidebar:'Barra lateral',toggleTheme:'Alternar tema',settings:'Configurações',visitor:'Visitante',freePlan:'Plano gratuito',
 today:'Hoje',yesterday:'Ontem',earlier:'Anteriores',noneFound:'Nenhuma conversa encontrada.',noneYet:'Nenhuma conversa ainda.',offlineHint:'Servidor offline. Rode "npm start" na pasta server.',offlineFull:'Servidor offline. Rode "npm start" na pasta server e abra http://localhost:3000.',
 welcome:'Como posso ajudar hoje?',placeholder:'Envie uma mensagem para o Axiom',messageLabel:'Mensagem',disclaimer:'O Axiom pode cometer erros. Considere verificar informações importantes.',
 send:'Enviar',stopResp:'Parar resposta',chatOptions:'Opções da conversa',copy:'Copiar',copyReply:'Copiar resposta',regen:'Gerar novamente',copyCode:'Copiar código',
 interrupted:'Resposta interrompida.',errServer:'Não foi possível falar com o servidor.',errGeneric:'Falha ao gerar a resposta.',errNoProvider:'Nenhum provedor de IA configurado. Cole uma chave em Configurações → Chaves de API (ou no arquivo server/.env).',errAllFailed:'Não foi possível gerar a resposta agora ({detail}). Pode ser limite de uso ou chave inválida; veja o terminal do servidor.',errInterrupted:'A conexão com a IA foi interrompida no meio da resposta.',errEmpty:'A IA devolveu uma resposta vazia.',
 rename:'Renomear',del:'Excluir',cancel:'Cancelar',close:'Fechar',newName:'Novo nome da conversa',delTitle:'Excluir conversa?',delText:'"{title}" será apagada permanentemente.',
 wipeRow:'Apagar todas as conversas',wipeSub:'Remove todo o histórico salvo',wipeBtn:'Apagar tudo',wipeTitle:'Apagar todas as conversas?',wipeText:'Todas as conversas e mensagens serão apagadas permanentemente. Essa ação não pode ser desfeita.',
 theme:'Tema',themeSub:'Aparência da interface',dark:'Escuro',light:'Claro',language:'Idioma',languageSub:'Idioma da interface',enterSend:'Enviar com Enter',enterSub:'Shift + Enter quebra a linha',
 profile:'Perfil',myProfile:'Meu perfil',logout:'Sair',guestEmail:'visitante@exemplo.com',profileNote:'Tela ilustrativa. O perfil completo e o login serão criados em uma próxima etapa.',logoutNote:'O login e o logout reais serão implementados em uma próxima etapa.',
 sug:[['code','Explicar um conceito','Como funciona uma API REST?'],['pen','Ajudar a escrever','Escreva um e-mail profissional pedindo um prazo maior'],['bulb','Gerar ideias','Sugira 5 ideias de projetos para meu portfólio'],['plane','Planejar algo','Monte um roteiro de 3 dias no Rio de Janeiro']]},
en:{newChat:'New chat',searchChats:'Search chats',collapse:'Collapse sidebar',openSidebar:'Open sidebar',sidebar:'Sidebar',toggleTheme:'Toggle theme',settings:'Settings',visitor:'Guest',freePlan:'Free plan',
 today:'Today',yesterday:'Yesterday',earlier:'Earlier',noneFound:'No chats found.',noneYet:'No chats yet.',offlineHint:'Server offline. Run "npm start" in the server folder.',offlineFull:'Server offline. Run "npm start" in the server folder and open http://localhost:3000.',
 welcome:'How can I help today?',placeholder:'Message Axiom',messageLabel:'Message',disclaimer:'Axiom can make mistakes. Consider checking important information.',
 send:'Send',stopResp:'Stop response',chatOptions:'Chat options',copy:'Copy',copyReply:'Copy response',regen:'Regenerate',copyCode:'Copy code',
 interrupted:'Response stopped.',errServer:'Could not reach the server.',errGeneric:'Failed to generate the response.',errNoProvider:'No AI provider configured. Paste a key in Settings → API keys (or in the server/.env file).',errAllFailed:'Could not generate a response right now ({detail}). It may be a usage limit or an invalid key; check the server terminal.',errInterrupted:'The connection to the AI was interrupted mid-response.',errEmpty:'The AI returned an empty response.',
 rename:'Rename',del:'Delete',cancel:'Cancel',close:'Close',newName:'New chat name',delTitle:'Delete chat?',delText:'"{title}" will be permanently deleted.',
 wipeRow:'Delete all chats',wipeSub:'Removes your entire saved history',wipeBtn:'Delete all',wipeTitle:'Delete all chats?',wipeText:'All chats and messages will be permanently deleted. This action cannot be undone.',
 theme:'Theme',themeSub:'Interface appearance',dark:'Dark',light:'Light',language:'Language',languageSub:'Interface language',enterSend:'Send with Enter',enterSub:'Shift + Enter adds a new line',
 profile:'Profile',myProfile:'My profile',logout:'Log out',guestEmail:'guest@example.com',profileNote:'Illustrative screen. The full profile and login will be built in a later stage.',logoutNote:'Real login and logout will be implemented in a later stage.',
 sug:[['code','Explain a concept','How does a REST API work?'],['pen','Help me write','Write a professional email asking for a longer deadline'],['bulb','Generate ideas','Suggest 5 project ideas for my portfolio'],['plane','Plan something','Plan a 3-day itinerary in Rio de Janeiro']]},
es:{newChat:'Nueva conversación',searchChats:'Buscar conversaciones',collapse:'Contraer barra lateral',openSidebar:'Abrir barra lateral',sidebar:'Barra lateral',toggleTheme:'Cambiar tema',settings:'Configuración',visitor:'Invitado',freePlan:'Plan gratuito',
 today:'Hoy',yesterday:'Ayer',earlier:'Anteriores',noneFound:'No se encontraron conversaciones.',noneYet:'Aún no hay conversaciones.',offlineHint:'Servidor sin conexión. Ejecuta "npm start" en la carpeta server.',offlineFull:'Servidor sin conexión. Ejecuta "npm start" en la carpeta server y abre http://localhost:3000.',
 welcome:'¿En qué puedo ayudarte hoy?',placeholder:'Envía un mensaje a Axiom',messageLabel:'Mensaje',disclaimer:'Axiom puede cometer errores. Considera verificar la información importante.',
 send:'Enviar',stopResp:'Detener respuesta',chatOptions:'Opciones de la conversación',copy:'Copiar',copyReply:'Copiar respuesta',regen:'Regenerar',copyCode:'Copiar código',
 interrupted:'Respuesta detenida.',errServer:'No se pudo conectar con el servidor.',errGeneric:'Error al generar la respuesta.',errNoProvider:'Ningún proveedor de IA configurado. Pega una clave en Configuración → Claves de API (o en el archivo server/.env).',errAllFailed:'No se pudo generar la respuesta ahora ({detail}). Puede ser un límite de uso o una clave inválida; revisa la terminal del servidor.',errInterrupted:'La conexión con la IA se interrumpió a mitad de la respuesta.',errEmpty:'La IA devolvió una respuesta vacía.',
 rename:'Renombrar',del:'Eliminar',cancel:'Cancelar',close:'Cerrar',newName:'Nuevo nombre de la conversación',delTitle:'¿Eliminar conversación?',delText:'"{title}" se eliminará de forma permanente.',
 wipeRow:'Eliminar todas las conversaciones',wipeSub:'Elimina todo el historial guardado',wipeBtn:'Eliminar todo',wipeTitle:'¿Eliminar todas las conversaciones?',wipeText:'Todas las conversaciones y mensajes se eliminarán de forma permanente. Esta acción no se puede deshacer.',
 theme:'Tema',themeSub:'Apariencia de la interfaz',dark:'Oscuro',light:'Claro',language:'Idioma',languageSub:'Idioma de la interfaz',enterSend:'Enviar con Enter',enterSub:'Shift + Enter inserta un salto de línea',
 profile:'Perfil',myProfile:'Mi perfil',logout:'Cerrar sesión',guestEmail:'invitado@ejemplo.com',profileNote:'Pantalla ilustrativa. El perfil completo y el inicio de sesión se crearán en una próxima etapa.',logoutNote:'El inicio y cierre de sesión reales se implementarán en una próxima etapa.',
 sug:[['code','Explicar un concepto','¿Cómo funciona una API REST?'],['pen','Ayudar a escribir','Escribe un correo profesional pidiendo un plazo mayor'],['bulb','Generar ideas','Sugiere 5 ideas de proyectos para mi portafolio'],['plane','Planificar algo','Haz un itinerario de 3 días en Río de Janeiro']]}
};
Object.assign(I18N.pt,{errOutdated:'O servidor está desatualizado ou não foi reiniciado. Feche o terminal, rode npm start de novo na pasta server e recarregue a página.',attach:'Anexar imagem',imageMode:'Criar imagem',placeholderImg:'Descreva a imagem que você quer criar',removeImage:'Remover imagem',auto:'Automático',chooseProvider:'Escolher provedor de IA',noKeysHint:'Adicione chaves no server/.env',generating:'Gerando imagem...',download:'Baixar',imageTitle:'Imagem',imgAlt:'Imagem anexada',genAlt:'Imagem gerada',
 errImgType:'Formato não aceito. Use PNG, JPEG, WEBP ou GIF.',errImgSize:'A imagem é grande demais (máximo de 5 MB).',errImgCount:'No máximo 4 imagens por mensagem.',errImgInvalid:'Não foi possível ler essa imagem.',errTooLarge:'As imagens juntas são grandes demais para enviar.',
 errNeedVision:'Para analisar imagens configure o Gemini ou o OpenAI (chave em Configurações → Chaves de API) e use o modo Automático ou um deles.',errProviderUnavailable:'O provedor escolhido não está configurado. Escolha outro no seletor.',errNeedOpenAIImg:'Para criar imagens configure CLOUDFLARE_ACCOUNT_ID e CLOUDFLARE_API_TOKEN (grátis) ou OPENAI_API_KEY no arquivo server/.env.',errAttachImgMode:'Ainda não é possível editar imagens. Remova o anexo ou desative "Criar imagem".',
 errImgAuth:'A chave do serviço de imagens foi recusada. Confira as chaves de imagem no server/.env.',errImgForbidden:'A OpenAI negou o acesso à geração de imagens. Esse modelo pode exigir a verificação da organização no painel da OpenAI.',errImgRate:'Limite de uso do serviço de imagens atingido. Tente de novo mais tarde.',errImgQuota:'Sem créditos na conta da OpenAI. Verifique o saldo e o plano de cobrança.',errImgModeration:'A OpenAI recusou esse pedido por política de segurança. Tente descrever a imagem de outro jeito.',errImgUnavailable:'Não foi possível falar com o serviço de imagens agora. Tente novamente.',errImgBusy:'Já existe uma imagem sendo gerada. Aguarde terminar.',errImgHourly:'Limite de imagens por hora atingido (proteção contra gastos). Tente mais tarde ou ajuste IMAGE_LIMIT_PER_HOUR.',errImgPrompt:'Descreva a imagem em até 4000 caracteres.',errImgGeneric:'Não foi possível gerar a imagem.'});
Object.assign(I18N.en,{errOutdated:'The server is outdated or was not restarted. Stop it, run npm start again in the server folder and reload the page.',attach:'Attach image',imageMode:'Create image',placeholderImg:'Describe the image you want to create',removeImage:'Remove image',auto:'Automatic',chooseProvider:'Choose AI provider',noKeysHint:'Add keys in server/.env',generating:'Generating image...',download:'Download',imageTitle:'Image',imgAlt:'Attached image',genAlt:'Generated image',
 errImgType:'Unsupported format. Use PNG, JPEG, WEBP or GIF.',errImgSize:'The image is too large (5 MB maximum).',errImgCount:'At most 4 images per message.',errImgInvalid:'Could not read that image.',errTooLarge:'The images together are too large to send.',
 errNeedVision:'To analyze images, set up Gemini or OpenAI (key in Settings → API keys) and use Automatic or one of them.',errProviderUnavailable:'The selected provider is not configured. Pick another one in the selector.',errNeedOpenAIImg:'To create images set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN (free) or OPENAI_API_KEY in the server/.env file.',errAttachImgMode:'Editing images is not available yet. Remove the attachment or turn off "Create image".',
 errImgAuth:'The image service key was rejected. Check the image keys in server/.env.',errImgForbidden:'OpenAI denied access to image generation. This model may require organization verification in the OpenAI dashboard.',errImgRate:'Image service usage limit reached. Try again later.',errImgQuota:'No credits on the OpenAI account. Check your balance and billing plan.',errImgModeration:'OpenAI declined this request under its safety policy. Try describing the image differently.',errImgUnavailable:'Could not reach the image service right now. Try again.',errImgBusy:'An image is already being generated. Wait for it to finish.',errImgHourly:'Hourly image limit reached (spending protection). Try later or adjust IMAGE_LIMIT_PER_HOUR.',errImgPrompt:'Describe the image in up to 4000 characters.',errImgGeneric:'Could not generate the image.'});
Object.assign(I18N.es,{errOutdated:'El servidor está desactualizado o no se reinició. Deténlo, ejecuta npm start de nuevo en la carpeta server y recarga la página.',attach:'Adjuntar imagen',imageMode:'Crear imagen',placeholderImg:'Describe la imagen que quieres crear',removeImage:'Quitar imagen',auto:'Automático',chooseProvider:'Elegir proveedor de IA',noKeysHint:'Añade claves en server/.env',generating:'Generando imagen...',download:'Descargar',imageTitle:'Imagen',imgAlt:'Imagen adjunta',genAlt:'Imagen generada',
 errImgType:'Formato no admitido. Usa PNG, JPEG, WEBP o GIF.',errImgSize:'La imagen es demasiado grande (máximo 5 MB).',errImgCount:'Máximo 4 imágenes por mensaje.',errImgInvalid:'No se pudo leer esa imagen.',errTooLarge:'Las imágenes juntas son demasiado grandes para enviar.',
 errNeedVision:'Para analizar imágenes, configura Gemini u OpenAI (clave en Configuración → Claves de API) y usa el modo Automático o uno de ellos.',errProviderUnavailable:'El proveedor elegido no está configurado. Elige otro en el selector.',errNeedOpenAIImg:'Para crear imágenes configura CLOUDFLARE_ACCOUNT_ID y CLOUDFLARE_API_TOKEN (gratis) u OPENAI_API_KEY en el archivo server/.env.',errAttachImgMode:'Aún no se pueden editar imágenes. Quita el adjunto o desactiva "Crear imagen".',
 errImgAuth:'Se rechazó la clave del servicio de imágenes. Revisa las claves de imagen en server/.env.',errImgForbidden:'OpenAI denegó el acceso a la generación de imágenes. Este modelo puede requerir la verificación de la organización en el panel de OpenAI.',errImgRate:'Se alcanzó el límite del servicio de imágenes. Inténtalo más tarde.',errImgQuota:'Sin créditos en la cuenta de OpenAI. Revisa el saldo y el plan de facturación.',errImgModeration:'OpenAI rechazó esta solicitud por su política de seguridad. Intenta describir la imagen de otra forma.',errImgUnavailable:'No se pudo conectar con el servicio de imágenes. Inténtalo de nuevo.',errImgBusy:'Ya se está generando una imagen. Espera a que termine.',errImgHourly:'Se alcanzó el límite de imágenes por hora (protección de gasto). Inténtalo más tarde o ajusta IMAGE_LIMIT_PER_HOUR.',errImgPrompt:'Describe la imagen en un máximo de 4000 caracteres.',errImgGeneric:'No se pudo generar la imagen.'});
Object.assign(I18N.pt,{gallery:'Galeria',galleryEmpty:'Nenhuma imagem criada ainda. Use "Criar imagem" no chat e ela aparece aqui.',galleryCount:'{n} imagem(ns) criada(s)',openChat:'Abrir conversa',back:'Voltar ao chat',
 secAppearance:'Aparência e idioma',secChat:'Conversa',secPersona:'Personalidade do Axiom',personaHelp:'Descreva o tom e o jeito de responder. Vale para as próximas respostas, em todas as conversas.',personaPlaceholder:'Ex.: Responda de forma descontraída, com exemplos curtos.',personaSave:'Salvar personalidade',personaReset:'Restaurar padrão',personaSaved:'Personalidade salva.',personaCleared:'Voltou ao padrão.',personaError:'Não foi possível salvar a personalidade.',presets:'Modelos prontos',presetDefault:'Padrão',presetFriendly:'Descontraído',presetFormal:'Formal',presetTeacher:'Professor',presetConcise:'Conciso',
 pFriendly:'Responda de forma descontraída e amigável, com linguagem simples e, quando ajudar, exemplos curtos.',pFormal:'Responda de forma formal e profissional, com linguagem precisa e bem estruturada.',pTeacher:'Aja como um professor paciente: explique passo a passo, use analogias e confirme no final se ficou claro.',pConcise:'Seja direto e conciso: respostas curtas, sem rodeios, e só detalhe se eu pedir.',
 secKeys:'Chaves de API',keysHelp:'As chaves ficam salvas só no arquivo server/.env do seu computador e nunca voltam para o navegador (aqui você só vê se estão configuradas). Cole, salve e pronto: não precisa reiniciar.',keysLocked:'A edição de chaves está desativada neste servidor. Edite o arquivo server/.env.',keySet:'Configurada',keyUnset:'Não configurada',keyPaste:'Cole aqui (não será exibida depois)',keySave:'Salvar',keyRemove:'Remover',keySaved:'Chave salva.',keyRemoved:'Chave removida.',keyInvalid:'Valor inválido. Cole só a chave, sem espaços nem aspas.',keyForbidden:'Só é possível alterar chaves a partir do próprio computador.',keySaveError:'Não foi possível salvar a chave.',keyWhere:'Onde pegar',useChat:'Chat',useImage:'Imagens',useBoth:'Chat e imagens',secData:'Dados',settingsOffline:'Servidor offline: personalidade e chaves ficam indisponíveis até o servidor voltar.'});
Object.assign(I18N.en,{gallery:'Gallery',galleryEmpty:'No images created yet. Use "Create image" in the chat and it will show up here.',galleryCount:'{n} image(s) created',openChat:'Open chat',back:'Back to chat',
 secAppearance:'Appearance and language',secChat:'Chat',secPersona:'Axiom personality',personaHelp:'Describe the tone and style of the replies. It applies to upcoming replies in all chats.',personaPlaceholder:'E.g.: Reply in a relaxed tone with short examples.',personaSave:'Save personality',personaReset:'Restore default',personaSaved:'Personality saved.',personaCleared:'Back to default.',personaError:'Could not save the personality.',presets:'Ready-made styles',presetDefault:'Default',presetFriendly:'Relaxed',presetFormal:'Formal',presetTeacher:'Teacher',presetConcise:'Concise',
 pFriendly:'Reply in a relaxed, friendly tone with simple language and, when helpful, short examples.',pFormal:'Reply in a formal, professional tone with precise, well-structured language.',pTeacher:'Act like a patient teacher: explain step by step, use analogies and check at the end that it is clear.',pConcise:'Be direct and concise: short answers, no fluff, and only add detail if I ask.',
 secKeys:'API keys',keysHelp:'Keys are saved only in the server/.env file on your computer and never go back to the browser (here you only see whether they are set). Paste, save and done: no restart needed.',keysLocked:'Key editing is disabled on this server. Edit the server/.env file.',keySet:'Configured',keyUnset:'Not configured',keyPaste:'Paste here (it will not be shown again)',keySave:'Save',keyRemove:'Remove',keySaved:'Key saved.',keyRemoved:'Key removed.',keyInvalid:'Invalid value. Paste only the key, without spaces or quotes.',keyForbidden:'Keys can only be changed from the computer running the server.',keySaveError:'Could not save the key.',keyWhere:'Where to get it',useChat:'Chat',useImage:'Images',useBoth:'Chat and images',secData:'Data',settingsOffline:'Server offline: personality and keys are unavailable until the server is back.'});
Object.assign(I18N.es,{gallery:'Galería',galleryEmpty:'Aún no hay imágenes creadas. Usa "Crear imagen" en el chat y aparecerá aquí.',galleryCount:'{n} imagen(es) creada(s)',openChat:'Abrir conversación',back:'Volver al chat',
 secAppearance:'Apariencia e idioma',secChat:'Conversación',secPersona:'Personalidad de Axiom',personaHelp:'Describe el tono y el estilo de las respuestas. Vale para las próximas respuestas en todas las conversaciones.',personaPlaceholder:'Ej.: Responde de forma relajada, con ejemplos cortos.',personaSave:'Guardar personalidad',personaReset:'Restaurar predeterminado',personaSaved:'Personalidad guardada.',personaCleared:'Vuelta a lo predeterminado.',personaError:'No se pudo guardar la personalidad.',presets:'Estilos listos',presetDefault:'Predeterminado',presetFriendly:'Relajado',presetFormal:'Formal',presetTeacher:'Profesor',presetConcise:'Conciso',
 pFriendly:'Responde de forma relajada y amistosa, con lenguaje sencillo y, cuando ayude, ejemplos cortos.',pFormal:'Responde de forma formal y profesional, con lenguaje preciso y bien estructurado.',pTeacher:'Actúa como un profesor paciente: explica paso a paso, usa analogías y confirma al final si quedó claro.',pConcise:'Sé directo y conciso: respuestas cortas, sin rodeos, y solo detalla si lo pido.',
 secKeys:'Claves de API',keysHelp:'Las claves se guardan solo en el archivo server/.env de tu computadora y nunca vuelven al navegador (aquí solo ves si están configuradas). Pega, guarda y listo: no hace falta reiniciar.',keysLocked:'La edición de claves está desactivada en este servidor. Edita el archivo server/.env.',keySet:'Configurada',keyUnset:'No configurada',keyPaste:'Pega aquí (no se mostrará después)',keySave:'Guardar',keyRemove:'Quitar',keySaved:'Clave guardada.',keyRemoved:'Clave eliminada.',keyInvalid:'Valor inválido. Pega solo la clave, sin espacios ni comillas.',keyForbidden:'Las claves solo se pueden cambiar desde el propio equipo.',keySaveError:'No se pudo guardar la clave.',keyWhere:'Dónde conseguirla',useChat:'Chat',useImage:'Imágenes',useBoth:'Chat e imágenes',secData:'Datos',settingsOffline:'Servidor sin conexión: personalidad y claves no están disponibles hasta que vuelva.'});
Object.assign(I18N.pt,{via:'via {name}',
 errImgFormat:'Esse formato de imagem não é aceito para análise. Use PNG, JPEG ou WEBP (GIF não).'});
Object.assign(I18N.en,{via:'via {name}',
 errImgFormat:'That image format is not supported for analysis. Use PNG, JPEG or WEBP (not GIF).'});
Object.assign(I18N.es,{via:'vía {name}',
 errImgFormat:'Ese formato de imagen no se admite para el análisis. Usa PNG, JPEG o WEBP (no GIF).'});
Object.assign(I18N.pt,{errTimeout:'O provedor demorou demais para responder (tempo esgotado). Isso não costuma ser problema da chave; tente de novo, use uma imagem menor ou escolha outro provedor.'});
Object.assign(I18N.en,{errTimeout:'The provider took too long to respond (timed out). This is usually not a key problem; try again, use a smaller image or pick another provider.'});
Object.assign(I18N.es,{errTimeout:'El proveedor tardó demasiado en responder (tiempo agotado). Normalmente no es un problema de la clave; inténtalo de nuevo, usa una imagen más pequeña o elige otro proveedor.'});
const LANGS={pt:['Português (Brasil)','pt-BR'],en:['English','en'],es:['Español','es']};
const savedLang=(()=>{try{return localStorage.getItem('axiom.lang');}catch{return null;}})();
const tx=(k,p={})=>String((I18N[state.lang]||I18N.pt)[k]??I18N.pt[k]??k).replace(/\{(\w+)\}/g,(_,n)=>p[n]??'');
const sug=()=>(I18N[state.lang]||I18N.pt).sug;
function translateDom(){
 document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=tx(e.dataset.i18n));
 document.querySelectorAll('[data-i18n-ph]').forEach(e=>e.placeholder=tx(e.dataset.i18nPh));
 document.querySelectorAll('[data-i18n-aria]').forEach(e=>e.setAttribute('aria-label',tx(e.dataset.i18nAria)));
 document.querySelectorAll('[data-i18n-title]').forEach(e=>e.title=tx(e.dataset.i18nTitle));
}

const savedProvider=(()=>{try{return localStorage.getItem('axiom.provider');}catch{return null;}})();
const state={view:'chat',lang:I18N[savedLang]?savedLang:'pt',provider:savedProvider||'auto',providers:[],caps:{openai:false,image:false},attachments:[],imageMode:false,active:null,busy:false,stopped:false,ctrl:null,online:true,convs:[],settings:{enter:true}};

/* ===== Componentes ===== */
const ConversationItem=c=>`<div class="conv-row${state.active===c.id?' active':''}" data-row="${c.id}"><button class="conv" data-id="${c.id}">${Icon('chat')}<span>${esc(c.title)}</span></button><button class="conv-more" data-more="${c.id}" aria-label="${tx('chatOptions')}">${Icon('dots')}</button></div>`;
const SuggestionCard=([i,t,p])=>`<button class="card" data-prompt="${esc(p)}">${Icon(i)}<b>${t}</b><span>${p}</span></button>`;
const actions=()=>`<div class="actions"><button class="act" data-copy data-i18n-aria="copyReply" data-i18n-title="copy" aria-label="${tx('copyReply')}" title="${tx('copy')}">${Icon('copy')}</button><button class="act" data-regen data-i18n-aria="regen" data-i18n-title="regen" aria-label="${tx('regen')}" title="${tx('regen')}">${Icon('refresh')}</button></div>`;
const Message=(role,html,raw='',extra={})=>role==='user'
 ?`<div class="msg user"><div class="bubble">${thumbs(extra.images||[])}${html?`<div class="txt">${esc(html)}</div>`:''}</div></div>`
 :`<div class="msg ai${extra.cls?' '+extra.cls:''}" data-raw="${esc(raw)}"${extra.attrs||''}><div class="avatar">${Icon('axiom')}</div><div class="col"><div class="bubble">${html}</div>${actions()}</div></div>`;
const Skeleton='<div class="skeleton"><i></i><i></i><i></i></div>';
const Welcome=()=>`<div class="welcome"><h1>${tx('welcome')}</h1><div class="cards">${sug().map(SuggestionCard).join('')}</div></div>`;

function groupOf(iso){
 const d=new Date(iso.replace(' ','T')+'Z'),t=new Date();t.setHours(0,0,0,0);
 const days=Math.round((t-new Date(d.getFullYear(),d.getMonth(),d.getDate()))/864e5);
 return days<=0?'today':days===1?'yesterday':'earlier';
}
function renderSidebar(filter=''){
 const f=filter.trim().toLowerCase(),g={};
 state.convs.filter(c=>c.title.toLowerCase().includes(f)).forEach(c=>(g[groupOf(c.updated_at)]??=[]).push(c));
 const html=['today','yesterday','earlier'].filter(k=>g[k]).map(k=>`<div class="group-title">${tx(k)}</div>${g[k].map(ConversationItem).join('')}`).join('');
 const hint=!state.online?tx('offlineHint'):f?tx('noneFound'):tx('noneYet');
 $('#history').innerHTML=html||`<p class="empty-hint">${hint}</p>`;
}
/* ===== API local ===== */
async function api(path,opts){
 try{const r=await fetch('/api'+path,{headers:{'Content-Type':'application/json'},...opts});
  if(!r.ok)return undefined;return r.status===204?null:await r.json();}catch{return undefined;}
}
async function loadConversations(){
 const r=await api('/conversations');
 state.online=r!==undefined;state.convs=r||[];renderSidebar($('#search').value);
}
function mountSidebar(){
 $('#sidebar').innerHTML=`
 <div class="sb-head"><div class="logo"><div class="logo-mark">${Icon('axiom')}</div><span class="logo-text">Axiom</span></div>
  <button class="icon-btn" id="closeSidebar" aria-label="${tx('collapse')}">${Icon('panel')}</button></div>
 <button class="new-chat" id="newChat">${Icon('plus')}${tx('newChat')}</button>
 <button class="nav-btn${state.view==='gallery'?' active':''}" id="galleryBtn">${Icon('image')}${tx('gallery')}</button>
 <label class="search">${Icon('search')}<input id="search" type="search" placeholder="${tx('searchChats')}" aria-label="${tx('searchChats')}"></label>
 <nav class="history" id="history"></nav>
 <div class="sb-foot">
  <button class="profile" id="profileBtn"><div class="avatar">VC</div><div><div>${tx('visitor')}</div><small>${tx('freePlan')}</small></div></button>
  <button class="icon-btn" id="settingsBtn" aria-label="${tx('settings')}">${Icon('settings')}</button>
 </div>`;
 renderSidebar();
}

/* ===== Chat ===== */
function showWelcome(){setViewDom('chat');state.active=null;$('#chat').innerHTML=Welcome();renderSidebar($('#search').value);}
function ensureThread(){let t=$('.thread');if(!t){$('#chat').innerHTML='<div class="thread"></div>';t=$('.thread');}return t;}
function scrollDown(){const c=$('#chat');c.scrollTo({top:c.scrollHeight,behavior:'smooth'});}
/* ===== Markdown (seguro: todo texto é escapado antes de virar HTML) ===== */
const HL_ALIAS={javascript:'js',js:'js',jsx:'js',ts:'js',tsx:'js',typescript:'js',node:'js',python:'py',py:'py',bash:'sh',sh:'sh',shell:'sh',zsh:'sh',powershell:'sh',bat:'sh',sql:'sql',json:'json',html:'html',xml:'html',svg:'html',css:'css',scss:'css',c:'c',cpp:'c','c++':'c',cs:'c',csharp:'c',java:'c',go:'c',rust:'c',rs:'c',php:'c',kotlin:'c',swift:'c',dart:'c'};
const HL_KW={
 js:'async await break case catch class const continue debugger default delete do else export extends finally for from function if import in instanceof let new of return static super switch this throw try typeof var void while with yield null undefined true false',
 py:'and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield None True False self',
 sh:'if then else elif fi for while do done case esac function in until echo export return exit local source cd set unset',
 sql:'select from where insert into values update set delete create table alter drop join left right inner outer on group by order having limit offset as and or not null is in like distinct union all primary key foreign references index default exists case when then else end',
 c:'abstract auto bool break case catch char class const continue default delete do double else enum extern false final finally float for func fn goto if impl import int interface let long match mod mut namespace new nil null nullptr package private protected pub public return short signed sizeof static string struct super switch this throw trait true try type typedef union unsigned use using var virtual void volatile while'};
const HL_RE={
 dq:/"(?:\\.|[^"\\\n])*"?/.source,
 sq:/'(?:\\.|[^'\\\n])*'?/.source,
 bt:/`(?:\\.|[^`\\])*`?/.source,
 tq:/"""[\s\S]*?(?:"""|$)|'''[\s\S]*?(?:'''|$)/.source,
 num:/\b(?:0x[0-9a-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/.source,
 cc:/\/\/[^\n]*|\/\*[\s\S]*?(?:\*\/|$)/.source,
 hash:/#[^\n]*/.source,
 dash:/--[^\n]*|\/\*[\s\S]*?(?:\*\/|$)/.source,
 html:/<!--[\s\S]*?(?:-->|$)/.source,
 tag:/<\/?[A-Za-z][\w:-]*|\/?>/.source,
 attr:/\b[\w:-]+(?==)/.source,
 fn:/\b[A-Za-z_]\w*(?=\()/.source,
 key:/"(?:\\.|[^"\\\n])*"(?=\s*:)/.source};
// Realce de sintaxe simples (só para linguagens conhecidas; o resto fica sem cor)
function highlight(code,lang){
 const k=HL_ALIAS[String(lang||'').toLowerCase()]||'';
 if(!k)return esc(code);
 const kw=HL_KW[k];let parts;
 if(k==='json')parts=[[HL_RE.key,'f'],[HL_RE.dq,'s'],[HL_RE.num,'n'],[/\b(?:true|false|null)\b/.source,'k']];
 else if(k==='html')parts=[[HL_RE.html,'c'],[HL_RE.tag,'k'],[HL_RE.attr,'f'],[HL_RE.dq,'s'],[HL_RE.sq,'s']];
 else if(k==='css')parts=[[HL_RE.cc,'c'],[HL_RE.dq,'s'],[HL_RE.sq,'s'],[/#[0-9a-fA-F]{3,8}\b/.source,'n'],[/-?\d*\.?\d+(?:px|em|rem|%|vh|vw|s|ms|deg)?\b/.source,'n'],[/@[\w-]+/.source,'k'],[/[\w-]+(?=\s*:)/.source,'f']];
 else{
  parts=[[k==='py'||k==='sh'?HL_RE.hash:k==='sql'?HL_RE.dash:HL_RE.cc,'c']];
  if(k==='py')parts.push([HL_RE.tq,'s']);
  parts.push([HL_RE.dq,'s'],[HL_RE.sq,'s']);
  if(k==='js')parts.push([HL_RE.bt,'s']);
  parts.push([HL_RE.num,'n']);
  if(kw)parts.push([`\\b(?:${kw.split(' ').join('|')})\\b`,'k']);
  parts.push([HL_RE.fn,'f']);
 }
 const re=new RegExp(parts.map(p=>'('+p[0]+')').join('|'),k==='sql'?'gi':'g');
 let out='',last=0,m;
 while((m=re.exec(code))){
  if(m[0]===''){re.lastIndex++;continue;}
  let g=0;for(let i=1;i<m.length;i++)if(m[i]!==undefined){g=i-1;break;}
  out+=esc(code.slice(last,m.index))+`<span class="tk-${parts[g][1]}">${esc(m[0])}</span>`;
  last=m.index+m[0].length;
 }
 return out+esc(code.slice(last));
}
// Inline: links http/https/mailto, **negrito**, *itálico*, ~~riscado~~ e `código`. Recebe texto JÁ ESCAPADO.
function mdSpan(s){
 s=s.replace(/\u0000/g,'');
 const hold=[],put=h=>{hold.push(h);return `\u0000${hold.length-1}\u0000`;};
 const safe=u=>/^(https?:\/\/|mailto:)/i.test(u);
 const a=(u,t)=>`<a href="${u}" target="_blank" rel="noopener noreferrer">${t}</a>`;
 s=s.replace(/!?\[([^\]\n]+)\]\(([^)\s]+)(?:\s+&quot;[^\n]*?&quot;)?\)/g,(_,t,u)=>safe(u)?put(a(u,mdSpan(t))):t);
 s=s.replace(/(^|[\s(])(https?:\/\/(?:(?!&quot;|&lt;|&gt;)[^\s<])+)/g,(_,p,u)=>{const t=(/[.,;:!?)\]']+$/.exec(u)||[''])[0],url=t?u.slice(0,-t.length):u;return url.length>8?p+put(a(url,url))+t:_;});
 s=s.replace(/\*\*\*([^\s*][^*]*?)\*\*\*/g,'<strong><em>$1</em></strong>')
  .replace(/\*\*([^\s*][^*]*?)\*\*|__([^\s_][^_]*?)__/g,(_,x,y)=>`<strong>${x??y}</strong>`)
  .replace(/(^|[^*\w])\*([^\s*][^*]*?)\*(?!\*)/g,'$1<em>$2</em>')
  .replace(/(^|[^\w_])_([^\s_][^_]*?)_(?![\w_])/g,'$1<em>$2</em>')
  .replace(/~~([^\s~][^~]*?)~~/g,'<del>$1</del>');
 return s.replace(/\u0000(\d+)\u0000/g,(_,i)=>hold[+i]);
}
function mdInline(t){
 let out='',last=0,m;const re=/(`+)([^`][\s\S]*?)\1(?!`)/g;
 while((m=re.exec(t))){out+=mdSpan(t.slice(last,m.index))+`<code>${m[2]}</code>`;last=re.lastIndex;}
 return out+mdSpan(t.slice(last));
}
const MD_FENCE=/^\s*```\s*([\w+#.-]*)[^`]*$/,MD_FENCE_END=/^\s*```\s*$/,MD_HR=/^\s*([-*_])(?:\s*\1){2,}\s*$/,MD_LI=/^(\s*)([-*+]|\d{1,9}[.)])\s+(.*)$/,MD_SEP=/^\s*\|?\s*:?-{2,}:?\s*(?:\|\s*:?-{2,}:?\s*)*\|?\s*$/;
const mdCells=l=>{let s=l.trim();if(s.startsWith('|'))s=s.slice(1);if(s.endsWith('|'))s=s.slice(0,-1);return s.split('|').map(c=>c.trim());};
function mdCode(code,lang){
 const l=esc(lang||'');
 return `<div class="code">${l?`<span class="code-lang">${l}</span>`:''}<button class="code-copy" data-copycode aria-label="${tx('copyCode')}" title="${tx('copyCode')}" data-i18n-aria="copyCode" data-i18n-title="copyCode">${Icon('copy')}</button><pre><code>${highlight(code,lang)}</code></pre></div>`;
}
function mdList(items){
 let pos=0;
 const item=t=>{const m=/^\[([ xX])\]\s+([\s\S]*)$/.exec(t);const body=mdInline(esc(m?m[2]:t)).replace(/\n/g,'<br>');return m?`<input type="checkbox" disabled${m[1]!==' '?' checked':''}> ${body}`:body;};
 const build=ind=>{
  const ord=items[pos].ord,start=items[pos].num;let h='';
  while(pos<items.length){
   const it=items[pos];
   if(it.ind<ind)break;
   if(it.ind>ind){const sub=build(it.ind);h=h?h.replace(/<\/li>$/,sub+'</li>'):h+sub;continue;}
   if(it.ord!==ord)break;
   pos++;h+=`<li>${item(it.text)}</li>`;
  }
  return ord?`<ol${start!==1?` start="${start}"`:''}>${h}</ol>`:`<ul>${h}</ul>`;
 };
 let out='';while(pos<items.length)out+=build(items[pos].ind);return out;
}
function mdRender(lines){
 let html='',i=0;
 while(i<lines.length){
  const ln=lines[i];let m;
  if(!ln.trim()){i++;continue;}
  if((m=MD_FENCE.exec(ln))){
   const lang=m[1],buf=[];i++;
   while(i<lines.length&&!MD_FENCE_END.test(lines[i])){buf.push(lines[i]);i++;}
   i++;html+=mdCode(buf.join('\n'),lang);continue;
  }
  if((m=/^(#{1,6})\s+(.*?)\s*#*\s*$/.exec(ln))){html+=`<h${m[1].length}>${mdInline(esc(m[2]))}</h${m[1].length}>`;i++;continue;}
  if(MD_HR.test(ln)){html+='<hr>';i++;continue;}
  if(/^\s*>/.test(ln)){const buf=[];while(i<lines.length&&/^\s*>/.test(lines[i])){buf.push(lines[i].replace(/^\s*>\s?/,''));i++;}html+=`<blockquote>${mdRender(buf)}</blockquote>`;continue;}
  if(ln.includes('|')&&i+1<lines.length&&lines[i+1].includes('-')&&MD_SEP.test(lines[i+1])){
   const head=mdCells(ln),al=mdCells(lines[i+1]).map(c=>/^:-+:$/.test(c)?'center':/-:$/.test(c)?'right':/^:-/.test(c)?'left':'');
   i+=2;const rows=[];
   while(i<lines.length&&lines[i].trim()&&lines[i].includes('|')){rows.push(mdCells(lines[i]));i++;}
   const cell=(t,k,tag)=>`<${tag}${al[k]?` style="text-align:${al[k]}"`:''}>${mdInline(esc(t))}</${tag}>`;
   html+=`<div class="tbl"><table><thead><tr>${head.map((t,k)=>cell(t,k,'th')).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map((t,k)=>cell(t,k,'td')).join('')}</tr>`).join('')}</tbody></table></div>`;
   continue;
  }
  if(MD_LI.test(ln)){
   const items=[];
   while(i<lines.length){
    const mm=MD_LI.exec(lines[i]);
    if(mm){items.push({ind:mm[1].replace(/\t/g,'    ').length,ord:/\d/.test(mm[2]),num:parseInt(mm[2],10)||1,text:mm[3]});i++;continue;}
    if(!lines[i].trim()&&i+1<lines.length&&MD_LI.test(lines[i+1])){i++;continue;}
    if(items.length&&/^\s{2,}\S/.test(lines[i])){items[items.length-1].text+='\n'+lines[i].trim();i++;continue;}
    break;
   }
   html+=mdList(items);continue;
  }
  const buf=[];
  while(i<lines.length&&lines[i].trim()&&!MD_FENCE.test(lines[i])&&!/^#{1,6}\s/.test(lines[i])&&!MD_HR.test(lines[i])&&!/^\s*>/.test(lines[i])&&!MD_LI.test(lines[i])){buf.push(lines[i]);i++;}
  if(!buf.length){buf.push(ln);i++;}
  html+=`<p>${buf.map(x=>mdInline(esc(x))).join('<br>')}</p>`;
 }
 return html;
}
function formatText(s){return mdRender(String(s).replace(/\r\n?/g,'\n').split('\n'));}
/* ===== /Markdown ===== */
const CARET='<span class="caret"></span>';
function stick(){const c=$('#chat');if(c.scrollHeight-c.scrollTop-c.clientHeight<140)c.scrollTop=c.scrollHeight;}
// Lê a resposta em streaming (SSE) e vai desenhando o texto aos poucos
async function streamAI(cid,bubble,{regenerate=false,signal}={}){
 const note=m=>`<p class="err">${m}</p>`;
 const errText=(d,st)=>{if(d.code==='NOT_FOUND'||(!d.code&&!d.error&&st===404))return esc(tx('errOutdated'));if(!d.code&&!d.error&&st)return esc(tx('errGeneric')+' (HTTP '+st+')');const k={NO_PROVIDER:'errNoProvider',ALL_FAILED:'errAllFailed',INTERRUPTED:'errInterrupted',EMPTY:'errEmpty',NEED_VISION:'errNeedVision',PROVIDER_UNAVAILABLE:'errProviderUnavailable',IMAGE_FORMAT:'errImgFormat',IMAGE_TOO_LARGE:'errTooLarge'}[d.code];const det=d.detail||'',k2=d.code==='ALL_FAILED'&&/\b408\b/.test(det)?'errTimeout':k;return esc(k2?tx(k2,{detail:det}):d.error||tx('errGeneric'));};
 let r;
 try{r=await fetch(`/api/conversations/${cid}/reply`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({regenerate,provider:state.provider}),signal});}
 catch(e){bubble.innerHTML=note(tx(e.name==='AbortError'?'interrupted':'errServer'));return{text:'',ok:false};}
 if(!r.ok){
  const d=await r.json().catch(()=>({}));
  bubble.innerHTML=note(errText(d,r.status));return{text:'',ok:false};
 }
 let text='',shown=0,err='',buf='',tm=0,aborted=false,provider='',vision=false;
 const html=(caret,t=text)=>{let h=formatText(t);if(caret)h=h.endsWith('</p>')?h.slice(0,-4)+CARET+'</p>':h+CARET;return h;};
 // Mostra o texto aos poucos: mesmo que o provedor mande um bloco grande de uma vez, ele aparece em ritmo agradável
 const tick=()=>{
  tm=0;
  if(state.stopped)shown=text.length;
  const back=text.length-shown;
  if(back>0){
   shown=Math.min(text.length,shown+Math.max(1,Math.ceil(back/14)));
   if(/[\uD800-\uDBFF]/.test(text[shown-1]||''))shown++;
   bubble.innerHTML=html(true,text.slice(0,shown));stick();
  }
  if(shown<text.length)tm=setTimeout(tick,16);
 };
 const kick=()=>{if(!tm)tm=setTimeout(tick,0);};
 const reader=r.body.getReader(),dec=new TextDecoder();
 try{
  for(;;){
   const {done,value}=await reader.read();
   if(done)break;
   buf+=dec.decode(value,{stream:true});
   const blocks=buf.split('\n\n');buf=blocks.pop();
   for(const b of blocks){
    const ev=/^event: (.+)$/m.exec(b)?.[1],data=/^data: (.+)$/m.exec(b)?.[1];
    if(!ev||!data)continue;
    const d=JSON.parse(data);
    if(ev==='start'){provider=d.provider||'';vision=Boolean(d.vision);}
    else if(ev==='delta'){text+=d.text;kick();}
    else if(ev==='error')err=errText(d);
   }
  }
 }catch(e){if(e.name==='AbortError')aborted=true;else err=err||tx('errInterrupted');}
 if(!aborted&&!err)await new Promise(res=>{const w=()=>shown>=text.length||state.stopped?res():setTimeout(w,16);w();});
 clearTimeout(tm);
 bubble.innerHTML=html(false)+(aborted?note(tx('interrupted')):err?note(err):'');
 stick();
 return{text,ok:!err&&!aborted&&text.trim()!=='',provider,vision};
}
// Cuida do ciclo de uma resposta: streaming, ações, título automático
async function runReply(cid,msgEl,{regenerate=false,isNew=false,via=false}={}){
 const bubble=msgEl.querySelector('.bubble');
 msgEl.classList.add('streaming');
 let res={text:'',ok:false};
 if(state.stopped)bubble.innerHTML=`<p class="err">${tx('interrupted')}</p>`;
 else if(state.online&&cid)res=await streamAI(cid,bubble,{regenerate,signal:state.ctrl.signal});
 else bubble.innerHTML=`<p class="err">${tx('offlineFull')}</p>`;
 msgEl.dataset.raw=res.text||'';
 if((via||res.vision)&&state.provider==='auto'&&res.provider&&res.text)bubble.insertAdjacentHTML('afterend',`<p class="via">${tx('via',{name:esc(res.provider)})}</p>`);
 msgEl.classList.remove('streaming');
 state.busy=false;state.ctrl=null;updateSend();stick();
 await loadConversations();
 if(res.ok&&isNew){await api(`/conversations/${cid}/title`,{method:'POST'});loadConversations();}
 return res.ok;
}
function stop(){if(!state.busy)return;state.stopped=true;state.ctrl?.abort();}
async function copyText(t){
 try{await navigator.clipboard.writeText(t);return true;}
 catch{
  const a=document.createElement('textarea');a.value=t;a.style.cssText='position:fixed;opacity:0';
  document.body.appendChild(a);a.select();
  let ok=false;try{ok=document.execCommand('copy');}catch{}
  a.remove();return ok;
 }
}
function flash(btn){const old=btn.innerHTML;btn.innerHTML=Icon('check');btn.classList.add('ok');setTimeout(()=>{btn.innerHTML=old;btn.classList.remove('ok');},1500);}

/* ===== Renomear / excluir conversas ===== */
const closeCtx=()=>{document.querySelector('.ctx')?.remove();document.querySelectorAll('.menu-open').forEach(r=>r.classList.remove('menu-open'));};
function openConvMenu(btn,id){
 const same=document.querySelector('.ctx')?.dataset.id==id;
 closeCtx();if(same)return;
 const row=btn.closest('.conv-row');row.classList.add('menu-open');
 const m=document.createElement('div');m.className='ctx';m.dataset.id=id;
 m.innerHTML=`<button data-ctx="rename">${Icon('pen')}${tx('rename')}</button><button class="danger" data-ctx="delete">${Icon('trash')}${tx('del')}</button>`;
 document.body.appendChild(m);
 const r=btn.getBoundingClientRect();
 m.style.left=Math.max(8,Math.min(r.right-m.offsetWidth,innerWidth-m.offsetWidth-8))+'px';
 m.style.top=(r.bottom+m.offsetHeight+8>innerHeight?r.top-m.offsetHeight-4:r.bottom+4)+'px';
 m.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  closeCtx();
  if(b.dataset.ctx==='rename')startRename(id);
  else{const c=state.convs.find(x=>x.id===id);confirmModal(tx('delTitle'),tx('delText',{title:c?c.title:''}),id,tx('del'));}
 });
}
function startRename(id){
 const row=document.querySelector(`.conv-row[data-row="${id}"]`),c=state.convs.find(x=>x.id===id);
 if(!row||!c)return;
 row.innerHTML=`<input class="conv-edit" maxlength="120" value="${esc(c.title)}" aria-label="${tx('newName')}">`;
 const i=row.querySelector('input');i.focus();i.select();
 let done=false;
 const finish=async save=>{
  if(done)return;done=true;
  const v=i.value.trim();
  if(save&&v&&v!==c.title){const r=await api(`/conversations/${id}`,{method:'PATCH',body:JSON.stringify({title:v})});if(r)c.title=r.title;}
  renderSidebar($('#search').value);
 };
 i.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();finish(true);}else if(e.key==='Escape'){e.preventDefault();e.stopPropagation();finish(false);}});
 i.addEventListener('blur',()=>finish(true));
}
function confirmModal(title,text,target,label){
 openModal(`<header>${esc(title)}<button class="icon-btn" data-close aria-label="${tx('close')}">${Icon('x')}</button></header>
 <p class="txt">${esc(text)}</p>
 <div class="modal-actions"><button class="btn" data-close>${tx('cancel')}</button><button class="btn danger" data-del="${target}">${esc(label)}</button></div>`);
}
async function doDelete(id){
 const ok=(await api(id==='all'?'/conversations':`/conversations/${id}`,{method:'DELETE'}))!==undefined;
 closeModal();
 if(!ok){loadConversations();return;}
 if(id==='all'){state.convs=[];showWelcome();return;}
 id=+id;state.convs=state.convs.filter(c=>c.id!==id);
 if(state.active===id)showWelcome();else renderSidebar($('#search').value);
}
/* ===== Imagens: anexos, geração, visualização ===== */
const IMG_OK=['image/png','image/jpeg','image/webp','image/gif'],IMG_MAX=5*1024*1024,IMG_N=4;
const IMG_REQ=/\b(?:(?:gere|gera|gerar|crie|cria|criar|desenhe|desenha|desenhar|fa[cç]a|fazer|produza|produzir|ilustre|renderize)\b[^.?!\n]{0,40}\b(?:imagem|imagens|foto|fotos|ilustra[cç][aã]o|desenho|desenhos|logotipo|logo|[ií]cone|wallpaper|papel de parede|pintura)|(?:generate|create|draw|make|design|paint|render|produce|illustrate)\b[^.?!\n]{0,40}\b(?:image|images|picture|pictures|photo|photos|illustration|drawing|logo|icon|wallpaper|painting|artwork)|(?:genera|generar|crea|crear|dibuja|dibujar|haz|hacer|dise[nñ]a|dise[nñ]ar|ilustra)\b[^.?!\n]{0,40}\b(?:imagen|im[aá]genes|foto|fotos|ilustraci[oó]n|dibujo|logo|logotipo|icono|fondo de pantalla|pintura))/i;
const IMG_NOT=/docker|container|contêiner|contenedor|dockerfile|\biso\b|virtual machine|m[aá]quina virtual|kubernetes|\bvm\b|ami\b|snapshot/i;
const looksLikeImageRequest=s=>IMG_REQ.test(s)&&!IMG_NOT.test(s);
function toast(msg){
 document.querySelector('.toast')?.remove();
 const t=document.createElement('div');t.className='toast';t.setAttribute('role','status');t.textContent=msg;
 document.body.appendChild(t);setTimeout(()=>t.remove(),5000);
}
function downscale(file){
 return new Promise((res,rej)=>{
  const img=new Image(),u=URL.createObjectURL(file);
  img.onload=()=>{URL.revokeObjectURL(u);const s=Math.min(1,2048/Math.max(img.width,img.height)),c=document.createElement('canvas');
   c.width=Math.round(img.width*s);c.height=Math.round(img.height*s);c.getContext('2d').drawImage(img,0,0,c.width,c.height);
   c.toBlob(b=>b?res(b):rej(),'image/jpeg',.9);};
  img.onerror=()=>{URL.revokeObjectURL(u);rej();};img.src=u;
 });
}
async function addFiles(list){
 for(const f of [...list]){
  if(state.attachments.length>=IMG_N){toast(tx('errImgCount'));break;}
  if(!IMG_OK.includes(f.type)){toast(tx('errImgType'));continue;}
  let blob=f;
  if(f.size>IMG_MAX){
   try{blob=await downscale(f);}catch{toast(tx('errImgInvalid'));continue;}
   if(blob.size>IMG_MAX){toast(tx('errImgSize'));continue;}
  }
  let dataUrl=await new Promise((ok,no)=>{const r=new FileReader();r.onload=()=>ok(r.result);r.onerror=no;r.readAsDataURL(blob);}).catch(()=>null);
  if(!dataUrl){toast(tx('errImgInvalid'));continue;}
  state.attachments.push({dataUrl,name:f.name});
 }
 renderAttach();updateSend();
}
function attachFiles(list){
 if(!state.caps.vision){toast(tx('errNeedVision'));return;}
 addFiles(list);
}
function renderAttach(){
 const row=$('#attachRow');row.hidden=!state.attachments.length;
 row.innerHTML=state.attachments.map((a,i)=>`<div class="att"><img src="${a.dataUrl}" alt=""><button type="button" data-rmatt="${i}" aria-label="${tx('removeImage')}">${Icon('x')}</button></div>`).join('');
}
function setImageMode(on){
 state.imageMode=on;
 const b=$('#imgModeBtn');b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);
 $('#input').placeholder=tx(on?'placeholderImg':'placeholder');
}
const thumbs=imgs=>imgs.length?`<div class="msg-imgs">${imgs.map(i=>`<img class="thumb" src="${esc(i.src)}" data-full="${esc(i.src)}"${i.id?` data-id="${i.id}"`:''} alt="${esc(tx('imgAlt'))}">`).join('')}</div>`:'';
const genHtml=(id,prompt)=>`<div class="gen"><img class="thumb gen-img" src="/api/images/${id}" data-full="/api/images/${id}" data-id="${id}" alt="${esc(tx('genAlt'))}"><p class="img-cap">${esc(prompt||'')}</p></div>`;
function msgHtml(m){
 const imgs=m.images||[];
 if(m.role==='user')return Message('user',m.content,'',{images:imgs.map(i=>({src:`/api/images/${i.id}`,id:i.id}))});
 const g=imgs.find(i=>i.kind==='generated');
 if(g)return Message('ai',genHtml(g.id,g.prompt),'',{cls:'img',attrs:` data-prompt="${esc(g.prompt||'')}"`});
 return Message('ai',formatText(m.content),m.content);
}
function openLightbox(src,id,alt,extra={}){
 document.querySelector('.lightbox')?.remove();
 const lb=document.createElement('div');lb.className='lightbox';
 lb.innerHTML=`<img src="${esc(src)}" alt="${esc(alt||'')}">${extra.prompt?`<p class="lb-cap">${esc(extra.prompt)}</p>`:''}<div class="lb-bar"><a class="btn" href="${esc(id?`/api/images/${id}?download=1`:src)}" download="axiom-image">${Icon('download')}${tx('download')}</a>${extra.conv?`<button class="btn" data-lbconv="${extra.conv}">${tx('openChat')}</button>`:''}<button class="btn" data-lbclose>${tx('close')}</button></div>`;
 document.body.appendChild(lb);
 lb.addEventListener('click',e=>{
  const c=e.target.closest('[data-lbconv]');
  if(c){lb.remove();openConversation(+c.dataset.lbconv);return;}
  if(e.target===lb||e.target.closest('[data-lbclose]'))lb.remove();
 });
}
const IMG_ERR={NO_OPENAI:'errNeedOpenAIImg',AUTH:'errImgAuth',FORBIDDEN:'errImgForbidden',RATE_LIMIT:'errImgRate',QUOTA:'errImgQuota',MODERATION:'errImgModeration',UNAVAILABLE:'errImgUnavailable',BUSY:'errImgBusy',HOURLY_LIMIT:'errImgHourly',BAD_PROMPT:'errImgPrompt',TOO_LARGE:'errTooLarge'};
const imgErrText=code=>tx(IMG_ERR[code]||'errImgGeneric');
const POST_ERR={IMG_TYPE:'errImgType',IMG_SIZE:'errImgSize',IMG_COUNT:'errImgCount',IMG_INVALID:'errImgInvalid',TOO_LARGE:'errTooLarge'};
async function postUserMessage(cid,text,atts){
 try{
  const r=await fetch(`/api/conversations/${cid}/messages`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({role:'user',content:text,images:atts.map(a=>a.dataUrl)})});
  if(r.ok)return{ok:true};
  const d=await r.json().catch(()=>({}));return{ok:false,msg:tx(POST_ERR[d.code]||'errServer')};
 }catch{return{ok:false,msg:tx('errServer')};}
}
// Pede a geração de uma imagem (rota separada da conversa de texto)
async function runImage(cid,msgEl,prompt,{regenerate=false,isNew=false}={}){
 const bubble=msgEl.querySelector('.bubble'),prev=bubble.innerHTML;
 msgEl.classList.add('streaming');
 bubble.innerHTML=`<div class="img-skel">${tx('generating')}</div>`;
 let ok=false,errMsg='';
 if(state.stopped)errMsg=tx('interrupted');
 else if(!state.online||!cid)errMsg=tx('offlineFull');
 else{
  try{
   const r=await fetch(`/api/conversations/${cid}/image`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt,regenerate}),signal:state.ctrl.signal});
   const d=await r.json().catch(()=>({}));
   if(r.ok){
    const img=d.message.images[0];
    bubble.innerHTML=genHtml(img.id,img.prompt);msgEl.classList.add('img');msgEl.dataset.prompt=prompt;ok=true;
   }else errMsg=imgErrText(d.code);
  }catch(e){errMsg=tx(e.name==='AbortError'?'interrupted':'errServer');}
 }
 if(!ok){
  if(regenerate){bubble.innerHTML=prev;toast(errMsg);}
  else bubble.innerHTML=`<p class="err">${esc(errMsg)}</p>`;
 }
 msgEl.classList.remove('streaming');
 state.busy=false;state.ctrl=null;updateSend();stick();
 await loadConversations();
 if(ok&&isNew){await api(`/conversations/${cid}/title`,{method:'POST'});loadConversations();}
}
/* ===== Seletor de provedor ===== */
async function loadProviders(){
 applyProviders(await api('/providers'));
}
function updateProviderLabel(){
 const p=state.providers.find(x=>x.id===state.provider);
 $('#providerLabel').textContent='Axiom · '+(p?p.name:tx('auto'));
}
function openProviderMenu(btn){
 const had=document.querySelector('.pmenu');closeCtx();if(had)return;
 const list=[{id:'auto',name:tx('auto')},...state.providers.filter(p=>p.configured)];
 const m=document.createElement('div');m.className='ctx pmenu';
 m.innerHTML=list.map(p=>`<button data-prov="${p.id}">${state.provider===p.id?Icon('check'):'<span class="sp"></span>'}${esc(p.name)}</button>`).join('')+(state.providers.some(p=>p.configured)?'':`<p class="hint">${esc(tx('noKeysHint'))}</p>`);
 document.body.appendChild(m);
 const r=btn.getBoundingClientRect();
 m.style.left=Math.max(8,Math.min(r.left,innerWidth-m.offsetWidth-8))+'px';m.style.top=(r.bottom+4)+'px';
 m.addEventListener('click',e=>{
  const b=e.target.closest('[data-prov]');if(!b)return;
  state.provider=b.dataset.prov;try{localStorage.setItem('axiom.provider',state.provider);}catch{}
  updateProviderLabel();closeCtx();
 });
}

async function regenerate(){
 const thread=$('.thread'),msgEl=thread?.lastElementChild;
 if(state.busy||!state.online||!state.active||!msgEl||!msgEl.classList.contains('ai'))return;
 state.busy=true;state.stopped=false;state.ctrl=new AbortController();updateSend();
 if(msgEl.classList.contains('img')){
  const prompt=msgEl.dataset.prompt||'';
  if(!prompt){state.busy=false;state.ctrl=null;updateSend();return;}
  await runImage(state.active,msgEl,prompt,{regenerate:true});return;
 }
 const bubble=msgEl.querySelector('.bubble'),previous=bubble.innerHTML,raw=msgEl.dataset.raw;
 bubble.innerHTML=Skeleton;
 const ok=await runReply(state.active,msgEl,{regenerate:true});
 if(!ok){
  toast(bubble.querySelector('.err')?.textContent||tx('errServer'));
  bubble.innerHTML=previous;
  msgEl.dataset.raw=raw;
 }
}
async function openConversation(id){
 const msgs=await api(`/conversations/${id}/messages`);
 if(!msgs)return;
 setViewDom('chat');state.active=id;
 $('#chat').innerHTML=`<div class="thread">${msgs.map(msgHtml).join('')}</div>`;
 renderSidebar($('#search').value);closeOnMobile();
 const c=$('#chat');c.scrollTop=c.scrollHeight;
}
async function send(){
 const input=$('#input'),text=input.value.trim(),atts=state.attachments.slice();
 if((!text&&!atts.length)||state.busy)return;
 if(atts.length&&state.imageMode){toast(tx('errAttachImgMode'));return;}
 const wantsImg=!atts.length&&(state.imageMode||(state.caps.image&&looksLikeImageRequest(text)));
 if(wantsImg&&!state.caps.image){toast(tx('errNeedOpenAIImg'));return;}
 state.busy=true;state.stopped=false;state.ctrl=new AbortController();updateSend();
 state.attachments=[];renderAttach();setImageMode(false);
 const t=ensureThread();
 t.insertAdjacentHTML('beforeend',Message('user',text,'',{images:atts.map(a=>({src:a.dataUrl}))}));
 t.insertAdjacentHTML('beforeend',Message('ai',Skeleton));
 const msgEl=t.lastElementChild;
 input.value='';autosize();scrollDown();
 let cid=state.active;const isNew=!cid;
 if(state.online){
  if(!cid){
   const title=text?(text.length>40?text.slice(0,40)+'…':text):tx('imageTitle');
   const c=await api('/conversations',{method:'POST',body:JSON.stringify({title})});
   if(c){cid=state.active=c.id;}else state.online=false;
  }
  if(cid){
   const r=await postUserMessage(cid,text,atts);
   if(!r.ok){
    msgEl.previousElementSibling?.remove();
    msgEl.remove();
    toast(r.msg);
    input.value=text;
    state.attachments=atts;
    renderAttach();
    autosize();
    state.busy=false;state.ctrl=null;updateSend();return;
   }
  }
 }
 if(wantsImg)await runImage(cid,msgEl,text,{isNew});else await runReply(cid,msgEl,{isNew,via:atts.length>0&&state.provider==='auto'});
}
function autosize(){const i=$('#input');i.style.height='auto';i.style.height=Math.min(i.scrollHeight,200)+'px';updateSend();}
function updateSend(){
 const b=$('#send'),label=state.busy?tx('stopResp'):tx('send');
 b.classList.toggle('stop',state.busy);
 b.disabled=!state.busy&&!($('#input').value.trim()||state.attachments.length);
 if(b.dataset.mode!==label){b.dataset.mode=label;b.innerHTML=Icon(state.busy?'stop':'arrow');b.setAttribute('aria-label',label);b.title=label;}
}

/* ===== Layout / tema ===== */
const isMobile=()=>matchMedia('(max-width:860px)').matches;
const toggleSidebar=()=>$('#app').classList.toggle('collapsed');
function closeOnMobile(){if(isMobile())$('#app').classList.add('collapsed');}
function setTheme(t,save=true){
 document.documentElement.dataset.theme=t;if(save)try{localStorage.setItem('axiom.theme',t);}catch{}
 $('#themeBtn').innerHTML=Icon(t==='dark'?'sun':'moon');document.querySelectorAll('.seg [data-theme]').forEach(b=>b.classList.toggle('on',b.dataset.theme===t));}

/* ===== Modal e menu ===== */
function openModal(html){const m=$('#modalBg');m.innerHTML=`<div class="modal" role="dialog" aria-modal="true">${html}</div>`;m.hidden=false;}
const closeModal=()=>{$('#modalBg').hidden=true;};
function openSettings(){showView('settings');}
function openProfile(){
 openModal(`<header>${tx('profile')}<button class="icon-btn" data-close aria-label="${tx('close')}">${Icon('x')}</button></header>
 <div class="row"><div class="avatar" style="width:52px;height:52px;font-size:16px">VC</div><div style="flex:1"><div>${tx('visitor')}</div><small style="color:var(--muted)">${tx('guestEmail')}</small></div></div>
 <p style="color:var(--muted);font-size:14px">${tx('profileNote')}</p>`);
}
function openLogout(){
 openModal(`<header>${tx('logout')}<button class="icon-btn" data-close aria-label="${tx('close')}">${Icon('x')}</button></header><p style="color:var(--muted)">${tx('logoutNote')}</p>`);
}
function toggleMenu(){
 const ex=$('.menu');if(ex){ex.remove();return;}
 $('.sb-foot').insertAdjacentHTML('beforeend',`<div class="menu"><button data-act="profile">${Icon('user')}${tx('myProfile')}</button><button data-act="settings">${Icon('settings')}${tx('settings')}</button><button data-act="logout">${Icon('logout')}${tx('logout')}</button></div>`);
}
/* ===== Páginas: configurações e galeria ===== */
const KEYS=[
 {n:'GEMINI_API_KEY',l:'Gemini',u:'https://aistudio.google.com',use:'useBoth'},
 {n:'GROQ_API_KEY',l:'Groq',u:'https://console.groq.com/keys',use:'useChat'},
 {n:'MISTRAL_API_KEY',l:'Mistral',u:'https://console.mistral.ai',use:'useChat'},
 {n:'OPENAI_API_KEY',l:'OpenAI',u:'https://platform.openai.com/api-keys',use:'useBoth'},
 {n:'CLOUDFLARE_ACCOUNT_ID',l:'Cloudflare · Account ID',u:'https://dash.cloudflare.com',use:'useImage'},
 {n:'CLOUDFLARE_API_TOKEN',l:'Cloudflare · API Token',u:'https://dash.cloudflare.com/profile/api-tokens',use:'useImage'}];
const PRESETS={friendly:'pFriendly',formal:'pFormal',teacher:'pTeacher',concise:'pConcise'};
function setViewDom(name){
 state.view=name;
 $('#main').dataset.view=name==='chat'?'chat':'page';
 $('#page').hidden=name==='chat';
 $('#galleryBtn')?.classList.toggle('active',name==='gallery');
}
function showView(name){
 setViewDom(name);
 if(name!=='chat')closeOnMobile();
 if(name==='settings')renderSettings();else if(name==='gallery')renderGallery();
}
const pageShell=(title,body)=>`<div class="page-inner"><div class="page-head"><button class="icon-btn" data-back aria-label="${tx('back')}" title="${tx('back')}">${Icon('back')}</button><h2>${esc(title)}</h2></div>${body}</div>`;
async function renderSettings(keep={}){
 const cfg=await api('/settings');
 if(state.view!=='settings')return;
 const th=document.documentElement.dataset.theme,sec=(t,b)=>`<section class="set-sec"><h3>${t}</h3>${b}</section>`;
 const persona=keep.persona!==undefined?keep.persona:(cfg?cfg.systemPrompt:'');
 const max=cfg?.maxPrompt||2000;
 const general=sec(tx('secAppearance'),`
  <div class="row"><div>${tx('theme')}<small>${tx('themeSub')}</small></div><div class="seg"><button data-theme="dark" class="${th==='dark'?'on':''}">${tx('dark')}</button><button data-theme="light" class="${th==='light'?'on':''}">${tx('light')}</button></div></div>
  <div class="row"><div>${tx('language')}<small>${tx('languageSub')}</small></div><select class="sel" id="langSel" aria-label="${tx('language')}">${Object.entries(LANGS).map(([k,v])=>`<option value="${k}"${state.lang===k?' selected':''}>${v[0]}</option>`).join('')}</select></div>`)
  +sec(tx('secChat'),`<div class="row"><div>${tx('enterSend')}<small>${tx('enterSub')}</small></div><button class="switch${state.settings.enter?' on':''}" id="enterSw" role="switch" aria-checked="${state.settings.enter}" aria-label="${tx('enterSend')}"></button></div>`);
 const personaSec=cfg?sec(tx('secPersona'),`
  <p class="hint">${tx('personaHelp')}</p>
  <div class="chips" role="group" aria-label="${tx('presets')}"><button class="chip" data-preset="default">${tx('presetDefault')}</button>${Object.keys(PRESETS).map(k=>`<button class="chip" data-preset="${k}">${tx('preset'+k[0].toUpperCase()+k.slice(1))}</button>`).join('')}</div>
  <textarea class="persona" id="personaText" maxlength="${max}" rows="5" placeholder="${esc(tx('personaPlaceholder'))}">${esc(persona)}</textarea>
  <div class="row"><small id="personaCount" class="count">${persona.length}/${max}</small><div class="btns"><button class="btn" data-persona-reset>${tx('personaReset')}</button><button class="btn primary" data-persona-save>${tx('personaSave')}</button></div></div>`):'';
 const keysSec=cfg?sec(tx('secKeys'),`
  <p class="hint">${tx('keysHelp')}</p>
  ${cfg.canEditKeys?'':`<p class="hint warn">${tx('keysLocked')}</p>`}
  ${KEYS.map(k=>{const on=cfg.keys[k.n];return `<div class="key-row"><div class="key-top"><b>${esc(k.l)}</b><span class="badge ${on?'ok':''}">${tx(on?'keySet':'keyUnset')}</span><span class="use">${tx(k.use)}</span><a class="where" href="${k.u}" target="_blank" rel="noopener noreferrer">${tx('keyWhere')}</a></div>
   <div class="key-edit"><input type="password" autocomplete="off" spellcheck="false" data-key="${k.n}" placeholder="${esc(tx('keyPaste'))}" aria-label="${esc(k.l)}"${cfg.canEditKeys?'':' disabled'}><button class="btn" data-key-save="${k.n}"${cfg.canEditKeys?'':' disabled'}>${tx('keySave')}</button>${on?`<button class="btn danger" data-key-del="${k.n}"${cfg.canEditKeys?'':' disabled'}>${tx('keyRemove')}</button>`:''}</div></div>`;}).join('')}`)
  :`<p class="hint warn">${tx('settingsOffline')}</p>`;
 const data=sec(tx('secData'),`<div class="row"><div>${tx('wipeRow')}<small>${tx('wipeSub')}</small></div><button class="btn danger" data-wipe>${tx('wipeBtn')}</button></div>`);
 $('#page').innerHTML=pageShell(tx('settings'),general+personaSec+keysSec+data);
}
async function renderGallery(){
 const items=await api('/gallery');
 if(state.view!=='gallery')return;
 const list=items||[];
 const body=!items?`<p class="hint warn">${tx('offlineFull')}</p>`:list.length
  ?`<p class="hint">${tx('galleryCount',{n:list.length})}</p><div class="gallery">${list.map(i=>`<button class="g-item" data-gid="${i.id}" data-conv="${i.conversation_id}" data-prompt="${esc(i.prompt||'')}" title="${esc(i.prompt||'')}"><img src="/api/images/${i.id}" alt="${esc(tx('genAlt'))}" loading="lazy"></button>`).join('')}</div>`
  :`<p class="hint">${tx('galleryEmpty')}</p>`;
 $('#page').innerHTML=pageShell(tx('gallery'),body);
}
async function putJson(path,body){
 try{const r=await fetch('/api'+path,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});return{ok:r.ok,status:r.status,data:await r.json().catch(()=>({}))};}
 catch{return{ok:false,status:0,data:{}};}
}
function applyProviders(r){
 state.providers=r?.providers||[];
 state.caps.openai=state.providers.some(p=>p.id==='openai'&&p.configured);
 state.caps.vision=state.providers.some(p=>p.configured&&p.vision);
 state.caps.image=Boolean(r?.imageEnabled);
 if(state.provider!=='auto'&&!state.providers.some(p=>p.id===state.provider&&p.configured))state.provider='auto';
 updateProviderLabel();
}
async function saveKey(name,value){
 if(!value.trim()){toast(tx('keyInvalid'));return;}
 const r=await putJson('/settings/keys',{keys:{[name]:value.trim()}});
 if(r.ok){applyProviders(r.data);toast(tx('keySaved'));renderSettings({persona:$('#personaText')?.value});return;}
 toast(tx(r.data.code==='KEY_INVALID'?'keyInvalid':r.data.code==='KEYS_LOCKED'||r.status===403?'keyForbidden':'keySaveError'));
}
async function removeKey(name){
 const r=await putJson('/settings/keys',{keys:{[name]:null}});
 if(r.ok){applyProviders(r.data);toast(tx('keyRemoved'));renderSettings({persona:$('#personaText')?.value});}
 else toast(tx(r.status===403?'keyForbidden':'keySaveError'));
}
async function savePersona(text){
 const r=await putJson('/settings/prompt',{prompt:text});
 if(r.ok){toast(tx(text.trim()?'personaSaved':'personaCleared'));if(!text.trim()&&$('#personaText')){$('#personaText').value='';$('#personaCount').textContent='0/'+($('#personaText').maxLength);}}
 else toast(tx('personaError'));
}
function bindPages(){
 const page=$('#page');
 page.addEventListener('click',e=>{
  const b=e.target.closest('button,.g-item');if(!b)return;
  if(b.hasAttribute('data-back'))return showView('chat');
  if(b.dataset.theme)return(setTheme(b.dataset.theme),page.querySelectorAll('.seg button').forEach(x=>x.classList.toggle('on',x.dataset.theme===b.dataset.theme)));
  if(b.id==='enterSw'){state.settings.enter=!state.settings.enter;b.classList.toggle('on');b.setAttribute('aria-checked',state.settings.enter);return;}
  if(b.dataset.preset){const t=$('#personaText');t.value=b.dataset.preset==='default'?'':tx(PRESETS[b.dataset.preset]);$('#personaCount').textContent=`${t.value.length}/${t.maxLength}`;return;}
  if(b.hasAttribute('data-persona-save'))return savePersona($('#personaText').value);
  if(b.hasAttribute('data-persona-reset'))return savePersona('');
  if(b.dataset.keySave)return saveKey(b.dataset.keySave,page.querySelector(`[data-key="${b.dataset.keySave}"]`).value);
  if(b.dataset.keyDel)return removeKey(b.dataset.keyDel);
  if(b.hasAttribute('data-wipe'))return confirmModal(tx('wipeTitle'),tx('wipeText'),'all',tx('wipeBtn'));
  if(b.dataset.gid)return openLightbox(`/api/images/${b.dataset.gid}`,b.dataset.gid,tx('genAlt'),{prompt:b.dataset.prompt,conv:+b.dataset.conv});
 });
 page.addEventListener('change',e=>{if(e.target.id==='langSel')setLang(e.target.value);});
 page.addEventListener('input',e=>{if(e.target.id==='personaText')$('#personaCount').textContent=`${e.target.value.length}/${e.target.maxLength}`;});
 page.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.dataset.key){e.preventDefault();saveKey(e.target.dataset.key,e.target.value);}});
}

/* ===== Troca de idioma ===== */
function applyLang(){
 document.documentElement.lang=LANGS[state.lang][1];
 translateDom();
 const q=$('#search')?$('#search').value:'';
 mountSidebar();$('#search').value=q;renderSidebar(q);
 if(!$('.thread'))$('#chat').innerHTML=Welcome();
 setImageMode(state.imageMode);updateProviderLabel();renderAttach();updateSend();
 $('#galleryBtn')?.classList.toggle('active',state.view==='gallery');
 if(state.view==='settings')renderSettings({persona:$('#personaText')?.value});else if(state.view==='gallery')renderGallery();
}
function setLang(l){
 if(!I18N[l]||l===state.lang)return;
 state.lang=l;
 try{localStorage.setItem('axiom.lang',l);}catch{}
 applyLang();
}

/* ===== Inicialização ===== */
function init(){
 mountSidebar();
 document.querySelectorAll('[data-icon]').forEach(e=>e.innerHTML=Icon(e.dataset.icon));
 setTheme((()=>{try{return localStorage.getItem('axiom.theme');}catch{return null;}})()==='light'?'light':'dark',false);showWelcome();loadConversations();
 document.documentElement.lang=LANGS[state.lang][1];translateDom();setImageMode(false);loadProviders();
 const input=$('#input');
 input.addEventListener('input',autosize);
 input.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey&&state.settings.enter){e.preventDefault();send();}});
 bindPages();
 $('#send').onclick=()=>state.busy?stop():send();
 $('#attachBtn').onclick=()=>state.caps.vision?$('#fileInput').click():toast(tx('errNeedVision'));
 $('#fileInput').addEventListener('change',e=>{attachFiles(e.target.files);e.target.value='';});
 $('#imgModeBtn').onclick=()=>{if(!state.imageMode&&!state.caps.image){toast(tx('errNeedOpenAIImg'));return;}setImageMode(!state.imageMode);input.focus();};
 $('#attachRow').addEventListener('click',e=>{const b=e.target.closest('[data-rmatt]');if(b){state.attachments.splice(+b.dataset.rmatt,1);renderAttach();updateSend();}});
 $('#providerBtn').onclick=e=>{e.stopPropagation();openProviderMenu(e.currentTarget);};
 input.addEventListener('paste',e=>{const f=[...(e.clipboardData?.files||[])].filter(x=>x.type.startsWith('image/'));if(f.length){e.preventDefault();attachFiles(f);}});
 const comp=$('#composer');
 comp.addEventListener('dragover',e=>{if([...(e.dataTransfer?.types||[])].includes('Files'))e.preventDefault();});
 comp.addEventListener('drop',e=>{const f=[...(e.dataTransfer?.files||[])].filter(x=>x.type.startsWith('image/'));if(f.length){e.preventDefault();attachFiles(f);}});
 $('#openSidebar').onclick=toggleSidebar;
 $('#overlay').onclick=toggleSidebar;
 $('#themeBtn').onclick=()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark');
 $('#sidebar').addEventListener('click',e=>{
  const c=e.target.closest('button');if(!c)return;
  if(c.id==='closeSidebar')toggleSidebar();
  else if(c.id==='newChat'){showWelcome();input.value='';autosize();closeOnMobile();input.focus();}
  else if(c.id==='settingsBtn'){showView('settings');}
  else if(c.id==='galleryBtn'){showView('gallery');}
  else if(c.id==='profileBtn'){toggleMenu();}
  else if(c.dataset.more)openConvMenu(c,+c.dataset.more);
  else if(c.dataset.id)openConversation(+c.dataset.id);
  else if(c.dataset.act){$('.menu')?.remove();const ac=c.dataset.act;ac==='profile'?openProfile():ac==='settings'?showView('settings'):openLogout();}
 });
 $('#sidebar').addEventListener('dblclick',e=>{const c=e.target.closest('.conv');if(c)startRename(+c.dataset.id);});
 $('#sidebar').addEventListener('input',e=>{if(e.target.id==='search')renderSidebar(e.target.value);});
 $('#chat').addEventListener('click',async e=>{
  const th=e.target.closest('.thumb');if(th){openLightbox(th.dataset.full,th.dataset.id,th.alt);return;}
  const c=e.target.closest('.card');if(c){input.value=c.dataset.prompt;autosize();input.focus();return;}
  const b=e.target.closest('[data-copy],[data-copycode],[data-regen]');if(!b)return;
  if(b.hasAttribute('data-regen'))return regenerate();
  const txt=b.hasAttribute('data-copy')?b.closest('.msg').dataset.raw:b.parentElement.querySelector('code').textContent;
  if(txt&&await copyText(txt))flash(b);
 });
 $('#modalBg').addEventListener('click',e=>{
  if(e.target.id==='modalBg'||e.target.closest('[data-close]'))return closeModal();
  const del=e.target.closest('[data-del]');if(del)return doDelete(del.dataset.del);
  if(e.target.closest('[data-wipe]'))return confirmModal(tx('wipeTitle'),tx('wipeText'),'all',tx('wipeBtn'));
  const th=e.target.closest('[data-theme]');if(th)setTheme(th.dataset.theme);
  const sw=e.target.closest('#enterSw');if(sw){state.settings.enter=!state.settings.enter;sw.classList.toggle('on');sw.setAttribute('aria-checked',state.settings.enter);}
 });
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelector('.lightbox')?.remove();closeModal();closeCtx();$('.menu')?.remove();}});
 document.addEventListener('click',e=>{if(!e.target.closest('.ctx,[data-more],#providerBtn'))closeCtx();});
 $('#history').addEventListener('scroll',closeCtx);
 if(isMobile())$('#app').classList.add('collapsed');
}
init();
