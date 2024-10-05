import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './files/Routing';
import Header from './files/header';
import { CartProvider } from './files/CartContext'; 

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
