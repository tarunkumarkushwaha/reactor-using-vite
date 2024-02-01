import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/image.png'
const Navbar = () => {
  return (
    <>
      <header>
        <div className="flex-row-center appnamediv">
          <img className='appname' src={Logo} alt="Utility Box" />
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
            <li>
              <NavLink to={"/AlarmClock"}>AlarmClock</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar