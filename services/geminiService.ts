import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userMessage: string, chatHistory: {role: 'user' | 'model', parts: {text: string}[]}[]) => {
  try {
    const apiKey = process.env.API_KEY;
    
    // Verificação de segurança para evitar crash se a chave não estiver configurada
    if (!apiKey) {
      console.warn("API Key do Gemini não encontrada.");
      return "Ops! O sistema de chat está passando por uma manutenção rápida. Por favor, faça seu pedido clicando no botão 'Cardápio'.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...chatHistory,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: `Você é a assistente virtual da Marmitaria Ventura. Seu objetivo é ajudar clientes de forma simpática, clara e em português do Brasil.
        
        Informações Importantes:
        - O que somos: Uma marmitaria de comida caseira de qualidade.
        - Onde estamos: QS 106 conjunto 2 lote 01 loja 02, Samambaia Sul, Brasília - DF.
        - Horário: Segunda a Sábado das 09h até as 14h. Domingo fechado.
        - Pagamento: Pix, Dinheiro e Cartões.
        - Pedidos: Devem ser feitos clicando no botão de pedidos ou no cardápio digital do site.
        
        Seja sempre educada e acolhedora. Se perguntarem algo que você não sabe ou não está nas informações acima, sugira gentilmente que façam o pedido pelo cardápio para ver as opções fresquinhas do dia.`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ops, tive um probleminha de conexão aqui. Pode tentar novamente ou clicar no botão do WhatsApp para falar com a gente?";
  }
};