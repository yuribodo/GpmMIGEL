import React from 'react';
import Gp from '../../assets/GP.png'; // Importing image
import './Hero.css'; // Importing CSS file
import logo from '../../assets/Logo.png';

const Hero = () => {
  return (
    <div className='container'>
      <div >
      <h1 className='fadeInUp-animation'>Encontre os mais novos projetos <br /> do IFRO</h1>
      <button className="animated-button">
        <span>Explore Agora</span>
      </button>
      </div>
      <img src={logo} alt="Descrição da imagem" />  
    
    </div>
    
  );
}

export default Hero;
