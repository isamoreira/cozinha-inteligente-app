import axios from 'axios';


const API_KEY = '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'; 

const getHealthyRecipes = async (ingredients) => {
  try {
    const prompt = `Quero receitas saudáveis e práticas usando estes ingredientes: ${ingredients.join(", ")}.`;

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        prompt,
        max_tokens: 150,
        n: 3, // Gerar 3 receitas
        stop: "\n",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
      }
    );

    const recipes = response.data.choices.map((choice) => choice.text.trim());
    return recipes;
  } catch (error) {
    console.error("Erro na chamada da API:", error.message);
    return [];
  }
};

export default getHealthyRecipes;
