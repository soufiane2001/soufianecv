import React, { useState } from 'react'
import './style.css'
import mylogo from '../assets/mylogo.png'
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='header'>
      <img src={mylogo} />
      <ul className={menuOpen ? 'open' : ''}>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div class="search-container"> 
     
        <input type="text" placeholder="Search"/>
      <i id='sr' class="fa fa-search" style={{fontSize:'14pt',color:'#717374'}}></i>
    </div>
    <div className="burger-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </div>
  )
}

export default Header