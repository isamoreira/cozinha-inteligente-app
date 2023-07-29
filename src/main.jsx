import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');

// Renderizar o aplicativo usando createRoot
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

createRoot(root).render(rootElement);

