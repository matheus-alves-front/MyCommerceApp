import { useState } from 'react';
import {
  BrowserRouter,
  NavLink
} from "react-router-dom";

// https://react-icons.github.io/react-icons/icons?name=md
import { MdOutlineMenu, 
  MdAddShoppingCart, 
  MdClose, 
  MdSpaceDashboard, 
  MdOutlinePersonalInjury,
  MdLightbulb } from 'react-icons/md';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import Logo from '../../assets/images/logoBaumgratz.png'
import { Container } from './styles';

export function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
      <Container>
        <nav className={isMenuOpen ? 'opened' : ''}>
          <MdClose onClick={() => setIsMenuOpen(false)} className="Icon" />
            <NavLink to="/" className='menuItem'><MdSpaceDashboard className="Icon" /> Pedidos</NavLink>
            <NavLink to="/" className='menuItem'><MdOutlinePersonalInjury className="Icon" /> Profile</NavLink>
          <MdLightbulb className='Icon'/>
        </nav>
        
        <a href=""><BsInstagram  className="Icon" /></a>
        <img src={Logo} className="Logo" />
        <a href=""><BsWhatsapp className="Icon" /></a>
      </Container>
  )
}