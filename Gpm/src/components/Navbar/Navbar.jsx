import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importando Link do react-router-dom
import logo from '../../assets/Logo GP .jpg'

import './Navbar.css';

const Navbar = () => {
 const [toggleMenu, setToggleMenu] = useState(false);

 return (
    <nav className='app__navbar'>
      <button className="menu-icon" onClick={() => setToggleMenu(!toggleMenu)}>
       
      </button>
      <ul className={`app__navbar-links ${toggleMenu ? 'active' : ''}`}>
        
        <li className='p__opensans'><Link to="/home">Home</Link></li>
        <li className='p__opensans'><Link to="/equipe">Equipe</Link></li>
        <li className='p__opensans'><Link to="/analisederequisitos">Análise de Requisitos</Link></li>
        <li className='p__opensans'><Link to="/descricaodoproblema">Descrição do Problema</Link></li>
        <li className='p__opensans'><Link to="/propostademer">Proposta de MER</Link></li>
        
      </ul>
    </nav>
 );
}

export default Navbar;
