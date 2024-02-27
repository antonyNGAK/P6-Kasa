import React, { createContext, useContext, useState, useEffect } from 'react'

/**
 * Crée un nouveau contexte pour les logements
 */
const LocationContext = createContext()

/**
 * Fournit les logements et une fonction pour les mettre à jour à tous les composants enfants
 * @param {React.children} children Les composants enfants du fournisseur
 * @useEffect {Function} Utilisation de useEffect pour récupérer les données de l'API
 * @returns {React.Element} Un éléement du contexte 
 * 
 */
export const LocationProvider = ({ children }) => {
  
  const [logements, setLogements] = useState([])
  const LocationAPI = '/logements.json'

  useEffect(() => {
    fetch(LocationAPI)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erreur HTTP')
      }
      return response.json()
    })
      .then((data) => {
        setLogements(data)
      })
      .catch((error) => {
        console.error("Une erreur est survenue lors de la récupération des données")
    })
  }, [setLogements])

  return (
    <LocationContext.Provider value={{ logements, setLogements }}>
      {children}
    </LocationContext.Provider>
  )
}

/**
 * Fournit aux composants enfants les logements et une fonction pour les mettre à jour
 * @returns {React.Context<{logements: Array, setLogements: Function}>}}
 */
export const useDataLocation = () => {
   return useContext(LocationContext)
}