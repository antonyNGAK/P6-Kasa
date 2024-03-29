import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.svg'

/**
 * Composant Header pour afficher la barre de navigation avec le logo et les liens
 * @returns {JSX.Element} Le composant
 */
const Header = () => {
  return (
    <header className="header">
      <div>
        <img className="header__logo" src={Logo} alt="Kasa" />
        <h1 className='visually-hidden'>Kasa</h1>
      </div>
      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header