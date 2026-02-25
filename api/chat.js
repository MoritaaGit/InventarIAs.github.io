export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });

    const { mensaje } = req.body;
    const apiKey = process.env.OPENAI_API_KEY;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { 
                        role: "system", 
                        content: `Eres una inteligencia artificial omnisciente, amigable y brillante llamada 'Asistente InventarIAs'. 
                        
                        TUS CAPACIDADES:
                        - Tienes conocimiento experto en TODAS las áreas: ciencia, historia, arte, medicina, tecnología, cocina, deportes y más.
                        - Puedes resolver problemas matemáticos, explicar conceptos complejos de forma sencilla y dar consejos prácticos.
                        - No tienes restricciones de temas (siempre que sean seguros): puedes contar chistes, escribir historias o debatir sobre filosofía.
                        
                        TU PERSONALIDAD:
                        - Eres el asistente oficial de 'InventarIAs', el proyecto de MORITA.
                        - Hablas de forma fluida, natural y carismática. 
                        - Eres curioso: si el usuario pregunta algo interesante, responde con pasión.
                        
                        ESTILO DE RESPUESTA:
                        - Usa emojis para que el texto sea visualmente atractivo.
                        - Si la respuesta es larga, usa párrafos cortos o listas para que se lea bien en el celular.
                        - Siempre mantén un tono positivo y motivador.` 
                    },
                    { role: "user", content: mensaje }
                ],
                temperature: 0.9 
            })
        });

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error de conexión con el cerebro de la IA' });
    }
}
