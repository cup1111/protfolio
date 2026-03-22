import React from 'react';
import { NavLink } from 'react-router-dom';

const linkClass = ({ isActive }) =>
  isActive ? 'text-gray-300' : 'text-gray-600';

const Navbar = () => {
  return (
    <header className='header flex w-full items-center justify-between bg-black-500 px-8 py-5'>
      <NavLink
        to='/'
        className='logo flex h-10 w-10 items-center justify-center rounded-lg bg-white font-bold shadow-card'
      >
        <p className='blue-gradient_text'>AH</p>
      </NavLink>

      <nav className='flex gap-7 text-lg font-medium'>
        <NavLink to='/about' className={linkClass}>
          About
        </NavLink>
        <NavLink to='/projects' className={linkClass}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={linkClass}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
