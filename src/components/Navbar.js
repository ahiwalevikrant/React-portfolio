import "./NavbarStyles.css"
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [Click,SetClick]= useState(false);
    const handleClick = () => SetClick(!Click);
  return (
    <div className="header">
        <Link to="/">
        <h1>PortFolio</h1>
        </Link>
        <ul className={Click ? "nav-menu active":
            "nav-menu"
        }>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {Click ? (  <FaTimes size={20} style={{color:"#fff"}}/>):
            (<FaBars size={20} style={{color:"#fff"}}/>)}
        </div>
    </div>
  )
}

export default Navbar