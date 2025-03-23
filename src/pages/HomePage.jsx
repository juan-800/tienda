import React from 'react';
import logo from '../assets/logo.jpg';
//Página de inicio de la tienda Naturis
export const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className='title'>Bienvenidos a Naturis</h1>
      <img src={logo} alt="Logo" className="home-image" />
    </div>
  );
};

