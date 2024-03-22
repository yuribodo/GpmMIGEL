import React from 'react';
import Gp from '../../assets/GP.png'; // Importando a imagem
import './Hero.css'; // Importando o arquivo CSS
import logo from '../../assets/Logo.png'

const Hero = () => {
 return (
    <div className='container'>
      <h1 className='fadeInUp-animation'>Encontre os mais novos projeto <br /> do IFRO</h1>
      <img src={logo} alt="Descrição da imagem" />
    </div>
 );
}

export default Hero;
