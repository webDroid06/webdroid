import "./NavBar.css"
import React, {useRef} from 'react';
import {FaTimes, FaBars} from "react-icons/fa"

export const Navbar1 = () => {

  const navRef=useRef()

  const showNavbar=()=>{
    navRef.current.classList.toggle("rsponsive_nav")
  }

  return (
    <nav ref={navRef}>
     
        <ul className="list">
            <li className="items">SignIn</li>
            <li className="items">SignOut</li>
            <li className="items">Support</li>
        </ul>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>
        <button className="nav-btn" onClick={showNavbar}><FaBars/></button>
    </nav>
    
  )
}




