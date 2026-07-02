import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `nav-link ${isActive ? "nav-link-active" : ""}`;

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink
        to='/'
        className='flex h-10 w-10 items-center justify-center rounded-lg bg-black-500 font-poppins text-sm font-bold text-white shadow-card transition-transform hover:-translate-y-0.5'
      >
        ZW
      </NavLink>

      <nav className='flex gap-8'>
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
