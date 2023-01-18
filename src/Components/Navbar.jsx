import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <header>
        <h1 className='appname'>Utility Box</h1>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Notepad</NavLink>
            </li>
            <li>
              <NavLink to={"/calculator"}>Calculator</NavLink>
            </li>
            <li>
              <NavLink to={"/todo"}>Todo</NavLink>
            </li>
            <li>
              <NavLink to={"/numbersorter"}>NumberSorter</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      </>
  )
}

export default Navbar