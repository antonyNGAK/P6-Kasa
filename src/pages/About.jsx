import React from 'react'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import BannerImage from '../assets/about.png'
import '../styles/scss pages/about.scss'

/**
 * @returns {JSX.Element} Zone <A propos>
 * @imageBanner {string} Image de la bannière
 */

const About = () => {
  return (
    <main className="about">
      <Banner BannerImage={BannerImage} />
      <div className="about__content">
        <Collapse label="Fiabilité">
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
        </Collapse>
        <Collapse label="Respect">
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
        </Collapse>
        <Collapse label="Service">
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
        </Collapse>
        <Collapse label="Sécurité">
        <p>
          La sécurité est la priorité de Kasa. C'est pourquoi nous assurons un
          suivi qualité constant sur les logements mis en ligne. De plus, la
          totalité des transactions est gérée par nos soins.
        </p>
        </Collapse>
      </div>
    </main>
  )
}

export default About