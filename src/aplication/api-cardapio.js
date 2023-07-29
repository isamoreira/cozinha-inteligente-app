const ingredientsList = ["quinoa", "pepino", "tomate", "pimentão", "cebola roxa", "rúcula", "espinafre", "limão", "azeite", "sal", "pimenta", "sementes de girassol", "amêndoas laminadas", "lentilha", "cominho", "hortelã", "salsa", "pimenta-do-reino", "farinha de trigo", "farinha de aveia", "iogurte"];

const mockMenuResponse = {
  data: {
    choices: [
      { text: " Durante a semana, você pode saborear um cardápio diversificado e saudável com os ingredientes disponíveis. Na segunda-feira, sugerimos um almoço de frango grelhado com ervas finas, acompanhado de quinoa cozida e legumes refogados, como berinjela, abobrinha, vagem, tomate e cebola. À noite, experimente um delicioso espaguete de abobrinha ao molho de tomate e carne moída. Na terça-feira, uma salada refrescante de quinoa com frango desfiado, tomate, cebola e azeitonas é perfeita para o almoço, enquanto um saboroso refogado de carne moída com legumes é a opção para o jantar. Ao longo da semana, você pode desfrutar de pratos como frango assado com batatas e cebolas, risoto de quinoa com legumes, salada de folhas verdes com cubos de frango grelhado, abobrinha recheada com carne moída e queijo, frango ao curry com quinoa, omelete de legumes com queijo, e para encerrar, um domingo com frango assado com legumes assados. Essas opções variadas proporcionarão uma semana repleta de sabores, nutrientes e refeições saudáveis. Bom apetite!" },
     
    ]
  }
};

const getHealthyMenuMock = async (ingredients) => {
  try {
    const response = mockMenuResponse;
    const menus = response.data.choices.map((choice) => choice.text.trim());
    return menus;
  } catch (error) {
    console.error("Erro na chamada da API:", error.message);
    return [];
  }
};



const menuList = [""];
getHealthyMenuMock(ingredientsList)
  .then((menus) => {
    if (menus.length > 0) {
      console.log("Cardápio Sugerido:");
      menus.forEach((menu, index) => {
       
      });
    } else {
      console.log("Nenhuma receita foi gerada.");
    }
  })
  .catch((error) => {
    console.error(error.message);
  });

  export default getHealthyMenuMock;