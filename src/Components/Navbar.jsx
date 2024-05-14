import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/image.png';

const Navbar = () => {
  return (
    <>
      <header>
        <div className="flex h-20 items-center justify-center bg-blue-400 border border-blue-300 rounded-md appnamediv">
          <img className='w-44 h-16' src={Logo} alt="Utility Box" />
        </div>
        <nav className="bg-gradient-to-b from-blue-400 to-blue-100 rounded-md">
          <ul className="flex flex-wrap justify-center">
            <li className="list-none">
              <NavLink to={"/"} className="block px-4 py-3 text-black no-underline hover:bg-blue-200 rounded-md">Notepad</NavLink>
            </li>
            <li className="list-none">
              <NavLink to={"/tools"} className="block px-4 py-3 text-black no-underline hover:bg-blue-200 rounded-md">Tools</NavLink>
            </li>
            <li className="list-none">
              <NavLink to={"/calculator"} className="block px-4 py-3 text-black no-underline hover:bg-blue-200 rounded-md">Calculator</NavLink>
            </li>
            <li className="list-none">
              <NavLink to={"/todo"} className="block px-4 py-3 text-black no-underline hover:bg-blue-200 rounded-md">Todo</NavLink>
            </li>
            <li className="list-none">
              <NavLink to={"/AlarmClock"} className="block px-4 py-3 text-black no-underline hover:bg-blue-200 rounded-md">AlarmClock</NavLink>
            </li>
            <li className="list-none">
              <NavLink to={"/currencyconverter"} className="block px-4 py-3 text-black no-underline hover:bg-blue-200 rounded-md">Currency</NavLink>
            </li>
            <li className="list-none">
              <NavLink to={"/weather"} className="block px-4 py-3 text-black no-underline hover:bg-blue-200 rounded-md">Weather</NavLink>
            </li>
            <li className="list-none">
              <NavLink to={"/dictionary"} className="block px-4 py-3 text-black no-underline hover:bg-blue-200 rounded-md">Dictionary</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
