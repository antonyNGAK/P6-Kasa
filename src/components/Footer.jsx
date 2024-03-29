import React from "react"
import LogoTransparent from '../assets/Logo-Transparent.svg'

/**
 * Composant Footer qui affiche un pied de page avec un logo et un texte de copyright
 * @returns {JSX.Element} Le composant Footer
 */
const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__container">
          <img className="footer__logo" src={LogoTransparent} alt="logo app Kasa" />
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    )
  }
  
  export default Footer