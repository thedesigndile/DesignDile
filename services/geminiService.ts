import { GoogleGenAI } from "@google/genai";

// Note: In a real scenario, the key comes from process.env.API_KEY
// The system instruction emphasizes not creating UI for keys, but assuming process.env.API_KEY works.
const apiKey = process.env.API_KEY || ''; 

export const generateDesignConcept = async (bookTitle: string, genre: string, description: string) => {
  if (!apiKey) {
    // Mock response if no key is present for demo purposes (prevent crashing)
    // In production, proper error handling for missing key is needed.
    console.warn("API Key missing. Returning mock data.");
    return `
**Concept: The Minimalist Echo**

*   **Typography:** Large, sans-serif (Helvetica Now or Akzidenz-Grotesk). The title should dominate the top half.
*   **Color Palette:** Stark monochrome (Black/White) with a single strike of Electric Blue (#0000FF).
*   **Imagery:** A single, abstract geometric shape centered in the lower third, representing the core conflict.
*   **Layout:** Asymmetrical grid, plenty of negative space to let the design breathe.
    `;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash';
    
    const prompt = `
      Act as a world-class Swiss Design Art Director.
      I have a book titled "${bookTitle}" in the genre "${genre}".
      Description: "${description}".
      
      Please provide a concise, high-end minimalist design concept for the cover.
      Format the response with these headers:
      - Typography Choice
      - Color Palette (Hex codes)
      - Visual Metaphor
      - Layout Strategy
      
      Keep it sophisticated, abstract, and strictly Swiss Style (International Typographic Style).
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate design concept.");
  }
};