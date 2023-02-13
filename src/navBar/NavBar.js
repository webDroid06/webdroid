import "./NavBar.css"
import React, {useState, useEffect} from 'react'

export const NavBar = () =>{
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
           if(screenWidth > 500 ){
          setToggleMenu(false)
        }
        }
        window.addEventListener('resize', changeWidth)       
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
      }, [])
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }
    return(
         <nav>   
        {(toggleMenu || screenWidth > 500 ) && (
      <ul className="list">
      <li className="items">Home</li>
      <li className="items">Services</li>
      <li className="items">Contact</li>
    </ul>
      )}
      <button onClick={toggleNav} className="btn">MENU</button>
      </nav>)
}