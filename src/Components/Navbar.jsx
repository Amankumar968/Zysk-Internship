import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import avatar from '../assets/Avatar.png';
import Firstlogo1 from "../assets/Firstlogo.png";
import DownArrow1 from "../assets/downarrow.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
     
      {showMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={() => setShowMenu(false)}>
          <div className="absolute left-0 top-0 w-2/3 bg-white p-6 z-30">
            <ul>
              <NavLink to="/" onClick={() => setShowMenu(false)}>
                <li>Home</li>
              </NavLink>
              <NavLink to="/product1" onClick={() => setShowMenu(false)}>
                <li>Product 1</li>
              </NavLink>
              <NavLink to="/resources" onClick={() => setShowMenu(false)}>
                <li>Resources</li>
              </NavLink>
              <NavLink to="/contact" onClick={() => setShowMenu(false)}>
                <li>Pricing</li>
              </NavLink>
            </ul>
          </div>
        </div>
      )}

     
      <div className="flex items-center justify-between py-4 border-b">
      
        <div className="flex items-center gap-1">
          <img src={Firstlogo1} alt="Logo" />
        </div>

        <button onClick={() => setShowMenu(!showMenu)} className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <div className="hidden md:flex gap-5 items-center justify-start flex-grow">
          <NavLink to="/" className="py-2 px-4 hover:text-orange-600">Home</NavLink>

          
          <NavLink to="/product1" className="py-2 px-4 hover:text-orange-600 flex items-center">
            Product
            <img src={DownArrow1} alt="Down Arrow" className="ml-2" />
          </NavLink>

    
          <NavLink to="/resources" className="py-2 px-4 hover:text-orange-600 flex items-center">
            Resources
            <img src={DownArrow1} alt="Down Arrow" className="ml-2" />
          </NavLink>

          <NavLink to="/contact" className="py-2 px-4 hover:text-orange-600">Pricing</NavLink>
        </div>

        
        <div className="hidden md:flex items-center gap-4">
          <img className="w-8 rounded-full" src={avatar} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
