

const getHealthyShoppingListMock = async (ingredients) => {
    try {
  
      const mockListaResponse = {
        data: {
          choices: [
            { text: " Durante a semana, você pode saborear um cardápio diversificado e saudável com os ingredientes disponíveis. Para duas pessoas, sugerimos as seguintes quantidades de ingredientes: Frango: 6 filés de frango (para segunda, terça, quarta, sábado e domingo) Ervas finas: Suficiente para temperar os filés de frango Quinoa: 3 xícaras (para segunda, terça, quinta e sábado) Berinjela: 1 unidade grande (para segunda-feira) Abobrinha: 3 unidades médias (para segunda, sexta e domingo) Vagem: 1 xícara (para segunda-feira) Tomate: 4 unidades (para segunda e terça-feira) Cebola: 3 unidades (para segunda e terça-feira) Carne moída: 500g (para quarta-feira e sexta-feira) Legumes variados: 500g (para quarta-feira e domingo) Azeitonas: Suficiente para a salada de terça-feira Queijo ralado: Suficiente para a abobrinha recheada de sexta-feira Curry em pó: Suficiente para temperar o frango no sábado Além desses ingredientes específicos para cada dia, você também precisará de azeite, sal, pimenta, alho e demais temperos de sua preferência, que serão utilizados ao longo da semana. Com essa lista de compras organizada, você estará pronto para preparar refeições deliciosas e nutritivas para duas pessoas durante toda a semana. Bom apetite!" },
           
          ]
        }
      };
  
      const response = mockListaResponse;
      const shoppingList = response.data.choices.map((choice) => choice.text.trim());
      return shoppingList;
    } catch (error) {
      console.error("Erro na chamada da API:", error.message);
      return [];
    }
  };
  
  export default getHealthyShoppingListMock;
  