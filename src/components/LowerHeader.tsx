import { NavLink } from 'react-router-dom';
import LogoIcon from '../assets/logo-icon.svg?react';

const LowerHeader = () => {
  const options = [
    {
      path: '/',
      text: 'HOME'
    },
    {
      path: '/about',
      text: 'ABOUT'
    },
    {
      path: '/contact',
      text: 'CONTACT'
    },
  ]
  return (
    <>
      <header>
        <div className="flex gap-3 items-center mr-12">
          <LogoIcon />
          <h4 className="font-bold text-dark text-2xl">byznes synu</h4>
        </div>

        <nav className="flex gap-8 sm:gap-12 lg:gap-16 items-center">
          {options.map((opt) => (
            <NavLink to={opt.path}
              className={({ isActive }) =>
                `text-3xl transition-all duration-150 ${isActive ? "text-accent1 underline" : "hover:text-accent1-hover"}`}
            >{opt.text}</NavLink>
          ))}
        </nav>
      </header>
    </>
  )
}

export default LowerHeader