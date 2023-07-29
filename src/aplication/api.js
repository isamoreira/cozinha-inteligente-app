const mockApiResponse = {
    data: {
      choices: [
        { text: " salada de quinoa é uma opção saudável e deliciosa para refeições leves e nutritivas. Para prepará-la, cozinhe a quinoa em água até que fique macia e soltinha. Em seguida, misture-a com legumes frescos, como pepino, tomate, pimentão e cebola roxa, cortados em pedaços pequenos. Adicione um punhado de folhas verdes, como rúcula ou espinafre, para dar um toque de frescor. Prepare um molho de limão e azeite com uma pitada de sal e pimenta, e regue sobre a salada, misturando delicadamente para incorporar todos os sabores. Por fim, adicione algumas sementes de girassol ou amêndoas laminadas para dar uma textura crocante. Sirva a salada de quinoa em temperatura ambiente ou refrigerada, e desfrute de uma refeição saudável e saborosa!" },
        { text: "O quibe de quinoa é uma opção deliciosa e saudável para quem busca uma versão vegetariana ou sem glúten do tradicional quibe. Para prepará-lo, comece cozinhando a quinoa até que esteja macia e absorva toda a água. Em seguida, refogue cebola e alho em azeite e acrescente a quinoa cozida, lentilha cozida e temperos como cominho, hortelã, salsa, pimenta-do-reino e sal, misturando tudo muito bem. Deixe a mistura esfriar um pouco antes de adicionar farinha de trigo ou farinha de aveia para ajudar a dar liga ao quibe. Modele pequenos quibes em formato de bolinhas ou croquetes e asse em forno pré-aquecido até que fiquem dourados e crocantes. Sirva com um molho de iogurte e hortelã ou com uma salada fresca para uma refeição saborosa e nutritiva!" },
      ]
    }
  };
  

  const getHealthyRecipesMock = async (ingredients) => {
    try {

      const response = mockApiResponse;
      
      const recipes = response.data.choices.map((choice) => choice.text.trim());
      return recipes;
    } catch (error) {
      console.error("Erro na chamada da API:", error.message);
      return [];
    }
  };

  export default getHealthyRecipesMock; 

  

  const ingredientsList = [""];
  getHealthyRecipesMock(ingredientsList)
    .then((recipes) => {
      if (recipes.length > 0) {
        console.log("Receitas geradas:");
        recipes.forEach((recipe, index) => {
          console.log(`Receita ${index + 1}: ${recipe}`);
        });
      } else {
        console.log("Nenhuma receita foi gerada.");
      }
    })
    .catch((error) => {
      console.error(error.message);
    });