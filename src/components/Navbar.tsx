import "./Navbar.scss";
import { useState } from "react";
import {NavLink} from "react-router-dom";

function Navbar(this: any) {
    const [active, setActive] = useState(false)
  return (
    <div>
      <nav id='nav' className={active ? "mactive" : "nav"}>
        <div className="logo"><h1>LOGO</h1></div>
        <ul>
          <NavLink activeClassName={'active'} to='/Home'>Home</NavLink>
          <NavLink to='/About'>About</NavLink>
          <NavLink to='/'>How to start</NavLink>
          <NavLink to='/'>Advice</NavLink>
          <NavLink to='/'>Resources</NavLink>
          <li id='closebtn'><i className='bx bx-x-circle' onClick={()=> setActive(!active)}></i></li>
        </ul>
        <div className="theme-changer">
        <i className='bx bx-menu' id='btn-menu' onClick={()=> setActive(!active)}></i>
        <i className='bx bx-moon'></i>
        <i className='bx bx-sun' ></i>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
