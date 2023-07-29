import React, { useState } from 'react';
import getHealthyShoppingListMock from '../aplication/api-lista';
import "../module.style/ListadeCompras.css";
import Logo from "../imagens/logo-ci.png";

const ListaDeCompras = () => {
  const [ingredients, setIngredients] = useState('');
  const [shoppingList, setShoppingList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const shoppingListResult = await getHealthyShoppingListMock(ingredients.split(',').map(ingredient => ingredient.trim()));

    setShoppingList(shoppingListResult);
  };

  return (
    <div className='container-receitas'>
      <div className="container-text-form">
        <img src={Logo} alt="Logo" className="logo2" />
        <h2>Lista de Compras</h2>
        <p>Aqui você pode obter uma lista de compras sustentável e econômica com o menu sugerido.</p>
        <form onSubmit={handleSubmit}>
          <label className='formulario'>
            Ingredientes e quantidade de pessoas (separados por vírgula):
            <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
          </label>
          <button className="submit" type="submit">Buscar Lista de Compras</button>
        </form>
        <div className='conteiner-encontradas'>
          <h3>Lista de Compras Sugerida:</h3>
          <ul>
            {shoppingList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListaDeCompras;
