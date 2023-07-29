import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Receitas from './components/Receitas';
import Cardapio from "./components/Cardapio"
import Footer from "./components/Footer"
import Lista from "./components/Lista" 

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receitas" element={<Receitas />} />
          <Route path="/lista" element={<Lista />} /> 
          <Route path="/cardapio" element={<Cardapio />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;


