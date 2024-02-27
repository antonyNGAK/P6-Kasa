import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useDataLocation } from '../components/LocationContext'
import Carousel from '../components/Carousel'
import Rating from '../components/Rating'
import Collapse from '../components/Collapse'
import '../styles/pages/rent.scss'
import '../styles/components/carousel.scss'

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
            
          </main>
        )
      }
    </>
  )
}