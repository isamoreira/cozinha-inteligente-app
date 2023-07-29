import React, { useState } from 'react';
import getHealthyRecipesMock from '../aplication/api'; 
import "../module.style/Receitas.css"
import Logo from "../imagens/logo-ci.png"

const Receitas = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipesResult = await getHealthyRecipesMock(ingredients.split(',').map(ingredient => ingredient.trim())); // Usando o mock

    setRecipes(recipesResult);
  };

  return (
    <div className='container-receitas'>
       
      <div className="container-text-form">
      <img src={Logo} alt="Logo" className="logo2"/>
      <h2>Receitas</h2>
      <p>Aqui você encontrará diversas receitas saudáveis e práticas.</p>
      <form onSubmit={handleSubmit}>
        <label className='formulario'>
          Ingredientes (separados por vírgula):
          <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        </label>
        <button className="submit" type="submit">Buscar Receitas</button>
      </form>
      <div className='conteiner-encontradas'>
        <h3>Receitas Encontradas:</h3>
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>{recipe}</li>
          ))}
        </ul>
      </div>
      </div>
     

    
    
    </div>
  );
};

export default Receitas;
