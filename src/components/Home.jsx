import React from 'react';
import "../module.style/Home.css"
import Logo from "../imagens/logo-ci.png"

const Home = () => {
  return (
    <div className="container-home">
      <div className="container-text">
      <img src={Logo} alt="Logo" className="logo"/>
      <h2>Bem-vindo à Cozinha Inteligente</h2>
      <p> O seu guia para uma alimentação saudável, prática e sustentavel!</p>
      </div>
      <div className='container-list'>
      <div>
        <a href="/receitas">Receitas</a>
        <a href="/cardapio">Cardápio</a>
        <a href="/lista">Lista de Compras</a>
      </div>
      </div>
     
    </div>
  );
};

export default Home;
