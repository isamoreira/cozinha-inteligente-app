
import React, { useState } from 'react';
import getHealthyMenuMock from '../aplication/api-cardapio';
import "../module.style/Cardapio.css";
import Logo from "../imagens/logo-ci.png";

const ingredientsList = [
  "quinoa", "pepino", "tomate", "pimentão", "cebola roxa", "rúcula", "espinafre", "limão", "azeite",
  "sal", "pimenta", "sementes de girassol", "amêndoas laminadas", "lentilha", "cominho", "hortelã",
  "salsa", "pimenta-do-reino", "farinha de trigo", "farinha de aveia", "iogurte"
];

const Cardapio = () => {
  const [ingredients, setIngredients] = useState('');
  const [menus, setMenus] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const menusResult = await getHealthyMenuMock(ingredients.split(',').map(ingredient => ingredient.trim()));

    setMenus(menusResult);
  };

  return (
    <div className='container-receitas'>
      <div className="container-text-form">
        <img src={Logo} alt="Logo" className="logo2" />
        <h2>Cardápio Semanal</h2>
        <p>Aqui você pode planejar seu cardápio de forma simples e prática.</p>
        <form onSubmit={handleSubmit}>
          <label className='formulario'>
            Ingredientes (separados por vírgula):
            <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
          </label>
          <button className="submit" type="submit">Buscar Cardápio</button>
        </form>
        <div className='conteiner-encontradas'>
          <h3>Cardápio Sugerido:</h3>
          <ul>
            {menus.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cardapio;
