import React, { useContext } from 'react';
import Mode from '../ToggleMode/Mode';
import logo from "../../assets/Logo.png";
import Darklogo from "../../assets/DarkLogo.png";
import { ModeContext } from '../../Context/ModeContext';

function Nav() {
  const {theme} = useContext(ModeContext);
  return (
   <>
   <div className="navbar bg-base-100 shadow-md fixed top-0 left-0 px-8 md:px-14 lg:px-28 z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <li><a href='#'>Home</a></li>
         <li><a href='#'>Features</a></li>
         <li><a href='#'>Community</a></li>
         <li><a href='#'>Blog</a></li>
         <li><a href='#'>Pricing</a></li>
         <li><button className='btn'>register now </button></li>
       
      </ul>
    </div>
    {theme === "light" ? <img src={logo} alt='logo' /> : <img src={Darklogo} alt='darklogo' />}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 items-center">
        <li><a href='#'>Home</a></li>
         <li><a href='#'>Features</a></li>
         <li><a href='#'>Community</a></li>
         <li><a href='#'>Blog</a></li>
         <li><a href='#'>Pricing</a></li>
         <li><button className="btn btn-accent px-8">register now</button></li>
    </ul>
  </div>
  <div className="navbar-end">
   <Mode />
  </div>
</div>
   
    </>
  )
}

export default Nav