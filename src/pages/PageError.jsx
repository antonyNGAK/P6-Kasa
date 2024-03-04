import {Link} from 'react-router-dom';



/**
 * @returns {JSX.Element} Page d'erreur 404
 */

const PageError = () => {
    return (
      <div className='pageerror__container'>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    )
  }
  
  export default PageError