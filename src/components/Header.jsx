import React from 'react';
import { Link } from 'react-router-dom';
import "../module.style/Header.css"

const Header = () => {
  return (
    <header className="container-header">
      <nav className="navigation">
        <ul className="list-navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/receitas">Receitas</Link></li>
          <li><Link to="/cardapio">Cardápio da Semana</Link></li>
          <li><Link to="/lista">Lista de Compras</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
