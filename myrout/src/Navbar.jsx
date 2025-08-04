import React from 'react'
import Frout from './Rout/Frout';
import {Link }from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="nav">
        <ul>
            <li><Link to="/home">Frout</Link></li>
            <li><Link to="/about">Srout</Link></li>
            <li><Link to="/contact">Trout</Link></li>
            <li><Link to="/services">Forouter</Link></li>
        </ul>
    </div>
     )
}

export default Navbar