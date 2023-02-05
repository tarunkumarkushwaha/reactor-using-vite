import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <header>
        <div className="flex-row-center appnamediv">
          <img className='appname' src='src\assets\images\image.png' alt="Utility Box" />
        </div>
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
            {/* <li>
              <NavLink to={"/numbersorter"}>NumberSorter</NavLink>
            </li> */}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar