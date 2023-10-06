import { NavLink } from "react-router-dom"
import { FaBars } from 'react-icons/fa';
import OutsideClickHandler from 'react-outside-click-handler'
import  './Navbar.css'
import { useState } from "react";


const Navbar = () => {
    const [menuopened , setMenuOpened]=useState(false);
    const getMenuStyles =()=> {
        if(setMenuOpened){
         return {right: !menuopened && '-100%'}
        }
       }


       
  return (
    <>

    <div className="wapper-n">

    <div className="container">

    <div className="logo"><img src="../../../logo.png" alt="logo" /><span>MF</span>itnees</div>

    
    
    
    <OutsideClickHandler 
    onOutsideClick={
      ()=>{
        setMenuOpened(false)
      }
    }
    >
    
    <div className="meun" style={getMenuStyles(menuopened)}>
    

    <NavLink to='home' >Home</NavLink>
    <NavLink to='about'>About</NavLink>
    </div>
    <div className="bar" onClick={()=>setMenuOpened((open)=> !open)}><FaBars color="white" /></div>
    </OutsideClickHandler >
    </div>

    </div>

    </>
  )
}

export default Navbar
