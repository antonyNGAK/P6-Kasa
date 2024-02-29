import React from 'react'
import etoileMax from '../assets/star-full.svg'
import etoileMoy from '../assets/star-empty.svg'
import '../styles/scss components/rating.scss'

/**
 * Composant Rating qui affiche une note sous forme d'étoiles
 * @param {Object} props - Les propriétés passées au composant
 * @param {number} props.score - La note à afficher
 * @returns {JSX.Element} Le composant Rating
 */
const Rating = ({ score }) => {
  /**
   * Un tableau représentant les 5 étoiles
   */
  const etoiles = [1, 2, 3, 4, 5]

  return (
    <div className="active-Location__rating">
      {etoiles.map((etoile, index) =>
        etoile <= score ? (
          // Si l'étoile est inférieure ou égale à la note, affiche une étoile pleine
          <img
            key={index}
            className="star"
            src={etoileMax}
            alt="étoile de notation"
          />
        ) : (
          // Sinon, affiche une étoile vide
          <img
            key={index}
            className="star"
            src={etoileMoy}
            alt="étoile de notation"
          />
        ),
      )}
    </div>
  )
}

export default Rating