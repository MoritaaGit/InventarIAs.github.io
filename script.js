// --- 1. BASE DE DATOS MAESTRA (Extendida a +50 herramientas) ---
const inventarioIA = [
    // 💬 Modelos y Chatbots
    { nombre: "ChatGPT", categoria: "modelos", emoji: "💬", desc: "El estándar de la industria. Excelente para razonamiento, redacción estructurada y análisis de datos.", link: "https://chatgpt.com/", tags: ["general", "openai", "texto"] },
    { nombre: "Gemini", categoria: "modelos", emoji: "✨", desc: "IA multimodal de Google integrada con Workspace. Ideal para análisis de datos y ecosistema Google.", link: "https://gemini.google.com/", tags: ["general", "google", "multimodal"] },
    { nombre: "Claude 3.5", categoria: "modelos", emoji: "🧠", desc: "Líder en análisis de documentos largos y redacción con tono humano.", link: "https://claude.ai/", tags: ["general", "anthropic", "lectura"] },
    { nombre: "Perplexity AI", categoria: "modelos", emoji: "🔍", desc: "Buscador inteligente que cita fuentes en tiempo real. Ideal para investigación académica.", link: "https://www.perplexity.ai/", tags: ["buscador", "investigacion", "web"] },
    { nombre: "Llama 3", categoria: "modelos", emoji: "🦙", desc: "El modelo open source más potente de Meta para uso local o privado.", link: "https://llama.meta.com/", tags: ["opensource", "meta", "local"] },
    { nombre: "Mistral AI", categoria: "modelos", emoji: "🇪🇺", desc: "Modelos eficientes y potentes de origen europeo, excelentes para integración en apps.", link: "https://mistral.ai/", tags: ["opensource", "eficiencia", "desarrollo"] },
    { nombre: "Grok", categoria: "modelos", emoji: "🐦", desc: "IA de xAI integrada en X (Twitter) con acceso a datos en tiempo real de la red social.", link: "https://x.ai/", tags: ["realtime", "x", "noticias"] },

    // 🎨 Visual y Audio
    { nombre: "Midjourney", categoria: "visual", emoji: "🎨", desc: "La mayor calidad artística en generación de imágenes a partir de texto.", link: "https://www.midjourney.com/", tags: ["imagenes", "arte", "diseño"] },
    { nombre: "DALL-E 3", categoria: "visual", emoji: "🖼️", desc: "IA de OpenAI que entiende instrucciones complejas para crear imágenes precisas.", link: "https://openai.com/dall-e-3", tags: ["imagenes", "openai", "facil"] },
    { nombre: "Sora", categoria: "visual", emoji: "🎬", desc: "Generación de video hiperrealista a partir de texto (OpenAI).", link: "https://openai.com/sora", tags: ["video", "animacion", "futuro"] },
    { nombre: "Runway Gen-3", categoria: "visual", emoji: "🎥", desc: "Herramientas profesionales para edición y generación de video con IA.", link: "https://runwayml.com/", tags: ["video", "edicion", "cine"] },
    { nombre: "ElevenLabs", categoria: "visual", emoji: "🎙️", desc: "La mejor IA para clonación de voz y texto a voz (TTS) profesional.", link: "https://elevenlabs.io/", tags: ["audio", "voz", "clonacion"] },
    { nombre: "Suno", categoria: "visual", emoji: "🎵", desc: "Crea canciones completas (voz, letra y música) con un solo prompt.", link: "https://suno.com/", tags: ["musica", "audio", "creatividad"] },
    { nombre: "Udio", categoria: "visual", emoji: "🎼", desc: "Competidor de Suno con alta fidelidad musical y control de estilos.", link: "https://udio.com/", tags: ["musica", "calidad", "pro"] },
    { nombre: "Leonardo.ai", categoria: "visual", emoji: "🦁", desc: "Generación de imágenes con control avanzado de poses y estilos.", link: "https://leonardo.ai/", tags: ["imagenes", "gaming", "assets"] },
    { nombre: "HeyGen", categoria: "visual", emoji: "👤", desc: "Crea videos con avatares que hablan y traducen tu voz perfectamente.", link: "https://www.heygen.com/", tags: ["avatares", "marketing", "video"] },

    // 💻 Programación
    { nombre: "Cursor", categoria: "codigo", emoji: "💻", desc: "El mejor editor de código actual con IA integrada en el núcleo.", link: "https://cursor.com/", tags: ["ide", "programacion", "refactorizacion"] },
    { nombre: "GitHub Copilot", categoria: "codigo", emoji: "🤖", desc: "El asistente estándar para programadores en VS Code y otros IDEs.", link: "https://github.com/features/copilot", tags: ["autocompletado", "github", "asistente"] },
    { nombre: "Replit Agent", categoria: "codigo", emoji: "🚀", desc: "Crea aplicaciones completas desde cero solo describiéndolas.", link: "https://replit.com/", tags: ["web", "apps", "desarrollo"] },
    { nombre: "Codeium", categoria: "codigo", emoji: "💎", desc: "Alternativa gratuita y potente a Copilot para programadores.", link: "https://codeium.com/", tags: ["gratis", "extension", "codigo"] },
    { nombre: "v0.dev", categoria: "codigo", emoji: "📱", desc: "Genera interfaces de usuario (UI) en React y Tailwind solo con texto.", link: "https://v0.dev/", tags: ["frontend", "ui", "vercel"] },
    { nombre: "Arduino Cloud AI", categoria: "codigo", emoji: "⚙️", desc: "Asistente para escribir código para microcontroladores y proyectos IoT.", link: "https://cloud.arduino.cc/", tags: ["iot", "arduino", "hardware"] },
    { nombre: "Blackbox AI", categoria: "codigo", emoji: "⬛", desc: "Buscador de código y autocompletado extremadamente rápido.", link: "https://www.blackbox.ai/", tags: ["busqueda", "python", "javascript"] },

    // ⚙️ Productividad y Finanzas
    { nombre: "Gamma", categoria: "productividad", emoji: "📊", desc: "Crea presentaciones y sitios web espectaculares en segundos.", link: "https://gamma.app/", tags: ["diapositivas", "diseño", "web"] },
    { nombre: "Julius AI", categoria: "productividad", emoji: "📈", desc: "Analista de datos personal. Sube archivos y obtén gráficos y análisis.", link: "https://julius.ai/", tags: ["finanzas", "datos", "excel"] },
    { nombre: "Notion AI", categoria: "productividad", emoji: "📒", desc: "IA integrada en Notion para organizar notas, resumir y escribir.", link: "https://www.notion.so/product/ai", tags: ["notas", "organizacion", "texto"] },
    { nombre: "Otter.ai", categoria: "productividad", emoji: "🦦", desc: "Transcribe reuniones de Zoom/Teams en tiempo real y resume acuerdos.", link: "https://otter.ai/", tags: ["reuniones", "transcripcion", "negocios"] },
    { nombre: "Fireflies.ai", categoria: "productividad", emoji: "🪰", desc: "Asistente de reuniones que graba, transcribe y analiza conversaciones.", link: "https://fireflies.ai/", tags: ["reuniones", "crm", "voz"] },
    { nombre: "Microsoft Copilot", categoria: "productividad", emoji: "🏢", desc: "La IA de Microsoft para Word, Excel, PowerPoint y Windows.", link: "https://copilot.microsoft.com/", tags: ["microsoft", "oficina", "windows"] },
    { nombre: "FormulaBot", categoria: "productividad", emoji: "🧪", desc: "Convierte instrucciones de texto en fórmulas complejas de Excel.", link: "https://formulabot.com/", tags: ["excel", "hojas de calculo", "finanzas"] },
    { nombre: "ClickUp Brain", categoria: "productividad", emoji: "🧠", desc: "IA para gestionar tareas, documentos y flujos de trabajo en equipo.", link: "https://clickup.com/ai", tags: ["proyectos", "gestion", "equipos"] },

    // 🎓 Academia (Medicina, Ingeniería, Ciencias)
    { nombre: "MONAI", categoria: "academia", emoji: "🩻", desc: "Framework para IA médica especializado en imágenes DICOM y radiología.", link: "https://monai.io/", tags: ["medicina", "dicom", "axial"] },
    { nombre: "Glass Health", categoria: "academia", emoji: "🩺", desc: "IA para médicos que ayuda en diagnósticos y planes de tratamiento clínicos.", link: "https://glass.health/", tags: ["medicina", "diagnostico", "clinico"] },
    { nombre: "Elicit", categoria: "academia", emoji: "🔬", desc: "Encuentra papers científicos y resume hallazgos con rigor académico.", link: "https://elicit.com/", tags: ["investigacion", "tesis", "ciencia"] },
    { nombre: "Consensus", categoria: "academia", emoji: "🤝", desc: "Buscador que responde preguntas basándose solo en estudios científicos reales.", link: "https://consensus.app/", tags: ["investigacion", "papers", "universidad"] },
    { nombre: "Flux.ai", categoria: "academia", emoji: "🔌", desc: "Diseño de PCBs y electrónica asistido por IA en tiempo real.", link: "https://www.flux.ai/", tags: ["electronica", "ingenieria", "pcb"] },
    { nombre: "JungleAI", categoria: "academia", emoji: "🏭", desc: "IA para mantenimiento predictivo en ingeniería mecánica e industrial.", link: "https://jungle.ai/", tags: ["ingenieria", "mecanica", "mantenimiento"] },
    { nombre: "ResearchRabbit", categoria: "academia", emoji: "🐰", desc: "El 'Spotify' de los papers. Mapea la literatura científica visualmente.", link: "https://www.researchrabbit.ai/", tags: ["investigacion", "bibliografia", "ciencia"] },
    { nombre: "Scispace", categoria: "academia", emoji: "🪐", desc: "Tu asistente para leer y entender artículos científicos complejos.", link: "https://typeset.io/", tags: ["lectura", "papers", "estudio"] },

    // 🛠️ Automatización
    { nombre: "N8N", categoria: "automatizacion", emoji: "🔄", desc: "Automatización de flujos de trabajo técnica y open source.", link: "https://n8n.io/", tags: ["flujos", "api", "opensource"] },
    { nombre: "Zapier Central", categoria: "automatizacion", emoji: "⚡", desc: "Crea bots de IA que ejecutan acciones en 6000+ aplicaciones.", link: "https://zapier.com/central", tags: ["apps", "integracion", "automatizar"] },
    { nombre: "Make", categoria: "automatizacion", emoji: "🔨", desc: "Plataforma visual para conectar apps y automatizar procesos con IA.", link: "https://www.make.com/", tags: ["visual", "automatizacion", "no-code"] },
    { nombre: "Bardeen", categoria: "automatizacion", emoji: "🪄", desc: "Automatiza tareas del navegador y scraping de datos sin código.", link: "https://www.bardeen.ai/", tags: ["browser", "scraping", "productivity"] },
    { nombre: "Pinpoint", categoria: "automatizacion", emoji: "🕵️", desc: "Herramienta de Google para analizar grandes colecciones de documentos.", link: "https://journaliststudio.google.com/pinpoint", tags: ["documentos", "periodismo", "analisis"] },

    // 📚 Recursos Educativos
    { nombre: "Platzi IA", categoria: "educacion", emoji: "💚", desc: "Cursos de IA, Prompt Engineering y Data Science en español.", link: "https://platzi.com/ia", tags: ["cursos", "español", "aprender"] },
    { nombre: "Learn Prompting", categoria: "educacion", emoji: "📖", desc: "Guía completa y gratuita desde nivel básico a avanzado en prompts.", link: "https://learnprompting.org/", tags: ["guia", "prompting", "gratis"] },
    { nombre: "DeepLearning.AI", categoria: "educacion", emoji: "🎓", desc: "Cursos de Andrew Ng sobre redes neuronales y machine learning.", link: "https://www.deeplearning.ai/", tags: ["machine learning", "avanzado", "teoria"] },
    { nombre: "PromptBase", categoria: "educacion", emoji: "🏪", desc: "Mercado para comprar y vender prompts optimizados para IA.", link: "https://promptbase.com/", tags: ["prompts", "comercio", "midjourney"] },
    { nombre: "NotebookLM", categoria: "educacion", emoji: "📓", desc: "La IA de Google para estudiar tus propios documentos y fuentes.", link: "https://notebooklm.google.com/", tags: ["estudio", "google", "notas"] },

    // 🎮 Juegos y Ocio
    { nombre: "Akinator", categoria: "juegos", emoji: "🧞", desc: "El clásico genio que adivina personajes mediante preguntas.", link: "https://es.akinator.com/", tags: ["juego", "clasico", "diversion"] },
    { nombre: "Character.ai", categoria: "juegos", emoji: "🎭", desc: "Chatea con personajes históricos, de ficción o creados por ti.", link: "https://character.ai/", tags: ["rol", "chat", "npc"] },
    { nombre: "Inworld AI", categoria: "juegos", emoji: "🕹️", desc: "IA para crear personajes no jugables (NPCs) con personalidad.", link: "https://www.inworld.ai/", tags: ["gaming", "desarrollo", "npc"] },
    { nombre: "AI Dungeon", categoria: "juegos", emoji: "⚔️", desc: "Juego de rol infinito donde la IA es el Master de la mazmorra.", link: "https://aidungeon.com/", tags: ["rol", "texto", "aventura"] },
    { nombre: "Rosebud AI", categoria: "juegos", emoji: "🌹", desc: "Crea juegos completos a partir de descripciones de texto.", link: "https://www.rosebud.ai/", tags: ["gamedev", "creacion", "ia"] }
];

// --- 2. LÓGICA DE INTERFAZ Y FILTRADO ---
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
const buscador = document.getElementById('buscador');
const botonesCategoria = document.querySelectorAll('.btn-categoria');
const resultadosInfo = document.getElementById('resultados-info');

function renderizarTarjetas(datos, mensaje = "") {
    contenedorTarjetas.innerHTML = '';
    if (datos.length === 0) {
        resultadosInfo.textContent = "No se encontraron resultados para tu búsqueda.";
        return;
    }
    resultadosInfo.textContent = mensaje || `Mostrando ${datos.length} herramientas`;

    datos.forEach(ia => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta';
        const tagsHTML = ia.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('');
        tarjeta.innerHTML = `
            <div class="emoji-header">
                <div class="emoji">${ia.emoji}</div>
                <div class="tags-container">${tagsHTML}</div>
            </div>
            <h3>${ia.nombre}</h3>
            <p>${ia.desc}</p>
            <a href="${ia.link}" target="_blank">Probar herramienta ↗</a>
        `;
        contenedorTarjetas.appendChild(tarjeta);
    });
}

// Inicialización
renderizarTarjetas(inventarioIA, "Explorando la base de datos completa (+50 IAs)");

// Búsqueda inteligente
buscador.addEventListener('input', (e) => {
    const texto = e.target.value.toLowerCase().trim();
    if (texto === '') {
        const catActiva = document.querySelector('.btn-categoria.activo')?.getAttribute('data-categoria') || 'todas';
        renderizarTarjetas(catActiva === 'todas' ? inventarioIA : inventarioIA.filter(ia => ia.categoria === catActiva));
        return;
    }
    const filtradas = inventarioIA.filter(ia => 
        ia.nombre.toLowerCase().includes(texto) || 
        ia.desc.toLowerCase().includes(texto) ||
        ia.tags.some(tag => tag.toLowerCase().includes(texto))
    );
    renderizarTarjetas(filtradas, `Resultados para: "${texto}"`);
});

// Filtrado Sidebar
botonesCategoria.forEach(boton => {
    boton.addEventListener('click', (e) => {
        botonesCategoria.forEach(b => b.classList.remove('activo'));
        e.currentTarget.classList.add('activo');
        buscador.value = '';
        const cat = e.currentTarget.getAttribute('data-categoria');
        renderizarTarjetas(cat === 'todas' ? inventarioIA : inventarioIA.filter(ia => ia.categoria === cat));
    });
});

// --- 3. LÓGICA DEL CHATBOT (SISTEMA AMIGABLE E INTELIGENTE) ---
const chatToggle = document.getElementById('chat-toggle');
const chatCuerpo = document.getElementById('chat-cuerpo');
const chatMensajes = document.getElementById('chat-mensajes');
const chatInput = document.getElementById('chat-input');
const chatEnviar = document.getElementById('chat-enviar');

chatToggle.addEventListener('click', () => {
    chatCuerpo.style.display = (chatCuerpo.style.display === 'none' || chatCuerpo.style.display === '') ? 'flex' : 'none';
});

function agregarMensaje(texto, remitente) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('mensaje', remitente);
    msgDiv.textContent = texto;
    chatMensajes.appendChild(msgDiv);
    chatMensajes.scrollTop = chatMensajes.scrollHeight;
    return msgDiv;
}

async function enviarPregunta() {
    const pregunta = chatInput.value.trim();
    if (!pregunta) return;

    // Mensaje del usuario
    agregarMensaje(pregunta, 'usuario');
    chatInput.value = '';

    // Burbuja de espera amigable
    const cargando = agregarMensaje("Pensando algo brillante... 🧠", 'bot'); 

    try {
        const respuesta = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mensaje: pregunta })
        });

        const datos = await respuesta.json();
        
        // Quitamos el mensaje de carga
        chatMensajes.removeChild(cargando); 
        
        if (datos.choices && datos.choices[0].message) {
            agregarMensaje(datos.choices[0].message.content, 'bot');
        } else {
            throw new Error("Respuesta vacía");
        }
    } catch (error) {
        if(chatMensajes.contains(cargando)) chatMensajes.removeChild(cargando);
        agregarMensaje("¡Ups! Parece que MORITA desconectó un cable por accidente. 🔌 Inténtalo de nuevo en un momento.", 'bot');
    }
}

chatEnviar.addEventListener('click', enviarPregunta);
chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') enviarPregunta(); });
