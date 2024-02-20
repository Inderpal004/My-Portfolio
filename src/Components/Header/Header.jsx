import React, { useState } from 'react';
import './Header.css';
import useHeaderShadow from '../../hooks/useHeaderShadow';
import { motion } from "framer-motion";
import {headerVariants} from '../motion';
import { Link } from 'react-scroll';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerShadow = useHeaderShadow()

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
    <motion.nav initial="hidden" whileInView="show" viewport={{once :false, amount:0.25}}
    variants={headerVariants}  style={{ boxShadow: headerShadow }}>
        <h1 className="logo"><span>I</span>NDER</h1>
        <ul id="sidemenu" style={{ right: menuOpen ? '0' : '-200px' }}>
          <li><Link to="home">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="services">Services</Link></li>
          <li><Link to="portfolio">Portfolio</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <i className="ri-close-line fas" onClick={closeMenu}></i>
        </ul>
        <i className="ri-menu-line fas" onClick={openMenu}></i>
      </motion.nav>
    </>
  )
}

export default Header;
