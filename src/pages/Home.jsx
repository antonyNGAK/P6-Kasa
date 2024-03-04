import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import BannerImage from '../assets/home.png'
import '../styles/scss pages/home.scss'

/**
 * @returns {JSX.Element} Home page
 * @title {string} Titre page
 * @BannerImage {string} Image de la bannière 
 */

const Home = () => {
  return (
  <>  
  <main className="home">
  <Banner title="Chez vous, partout et ailleurs" BannerImage={BannerImage}/>
  <Gallery />
  </main>
  </>
  )
}

export default Home