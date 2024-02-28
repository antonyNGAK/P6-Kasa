import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useDataLocation } from '../components/LocationContext'
//import Carousel from '../components/Carousel'
//import Rating from '../components/Rating'
//import Collapse from '../components/Collapse'
//import '../styles/pages/rent.scss'
//import '../styles/components/carousel.scss'

/**
 * Composant ActiveLocation qui affiche les détails d'un logement spécifique
 * @returns {JSX.Element} Le composant ActiveLocation
 */
const ActiveLocation = () => {
  // Récupère l'id du logement dans l'url
  const { id } = useParams()
  const { logements } = useDataLocation()

  const logement = logements.find((logement) => logement.id === id)

  const equipements = logement?.equipements.map((equipement, index) => {
    return <li key={index}>{equipement}</li>
  })

  return (
    <>
      {
        logement ? (
          <main className="active-Location">
            <div className ="active-Location__carousel">
              <Carousel image = {logement.pictures} alt = {logement.title} />
            </div>
            <div className="active-Location__container">
            <div className="active-Location__title">
              <section className="active-Location__name">
                <h2>{logement.title}</h2>
                <p>{logement.location}</p>
              </section>
              <div className="active-Location__tags">
                {logement.tags.map((tag, index) => {
                  return (
                    <div key={index} className="tags__btn">
                      {tag}
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="active-Location__position">
              <div className="active-Location__host">
                <p>{logement.host.name}</p>
                <img src={logement.host.picture} alt={logement.host.name} />
              </div>
              <Rating score={logement.rating} />
            </div>
          </div>
          <div className="active-Location__description">
            <Collapse
              key={`${id}-description`}
              label="Description"
              children={logement.description}
            />
            <Collapse
              key={`${id}-equipments`}
              label="Équipements"
              children={'equipments'}
            />
          </div>
          </main>
        ) :(
          <Navigate to = "/404" />
        )}
    </>
  )
}
export default ActiveLocation