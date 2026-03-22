import React from 'react';
import { NavLink } from 'react-router-dom';

const linkClass = ({ isActive }) =>
  isActive ? 'text-white-100' : 'text-secondary';

const Navbar = () => {
  return (
    <header className='flex w-full items-center justify-between bg-primary px-8 py-5'>
      <NavLink
        to='/'
        className='flex h-10 w-10 items-center justify-center rounded-lg bg-white-100 font-bold shadow-card'
      >
        <p className='blue-text-gradient'>AH</p>
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
