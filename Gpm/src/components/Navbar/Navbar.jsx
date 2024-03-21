import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';


import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#equipe'>equipe</a></li>
        <li className='p__opensans'><a href='#analise de requisitos'>analise de requisitos</a></li>
        <li className='p__opensans'><a href='#descricaodoproblema'>descricaodoproblema</a></li>
        <li className='p__opensans'><a href='#propostademer'>propostademer</a></li>
      </ul>
      
    </nav>
  );
}
export default Navbar;