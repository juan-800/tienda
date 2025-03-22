import React from 'react';
import logo from '../assets/logo.jpg';

export const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className='title'>Bienvenidos a Naturis</h1>
      <img src={logo} alt="Logo" className="home-image" />
    </div>
  );
};

