import "./Navbar.scss";
import { useState } from "react";
import {NavLink, Link } from "react-router-dom";

function Navbar(this: any) {
    const [active, setActive] = useState(false) //navbar mobile useState
  return (
    <div>
      <nav id='nav' className={active ? "mactive" : "nav"}>
        <div className="logo"><h1><Link to="/techdesign" className="logoinside">TechDesign</Link></h1></div>
        <ul>
          <NavLink activeClassName={'active'} to='/Home' onClick={()=> setActive(false)}>Home</NavLink>
          <NavLink to='/techdesign/About'     onClick={()=> setActive(false)}>About</NavLink>
          <NavLink to='/techdesign/HowTo'     onClick={()=> setActive(false)}>How to start</NavLink>
          <NavLink to='/techdesign/Advice'    onClick={()=> setActive(false)}>Advice</NavLink>
          <NavLink to='/techdesign/Resources' onClick={()=> setActive(false)}>Free Resources</NavLink>
          <li id='closebtn'><i className='bx bx-x-circle' onClick={()=> setActive(!active)}></i></li>
        </ul>
        <div className="theme-changer">
        <i className='bx bx-menu' id='btn-menu' onClick={()=> setActive(!active)}></i>
        <a href="https://discord.gg/Q8RgZEub86" className="link-d" target="_blank"  rel="noopener noreferrer"><i className='bx bxl-discord'></i></a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
