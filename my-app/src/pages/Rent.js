import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useRentData } from '../components/RentContext'
import Carousel from '../components/Carousel'
import Rating from '../components/Rating'
import Collapse from '../components/Collapse'
import '../styles/pages/rent.scss'
import '../styles/components/carousel.scss'

/**
 * Composant ActiveRent qui affiche les détails d'un logement spécifique
 * @returns {JSX.Element} Le composant ActiveRent
 */
const ActiveRent = () => {
  // Récupère l'id du logement dans l'url
  const { id } = useParams()
  const { logements } = useRentData()
}