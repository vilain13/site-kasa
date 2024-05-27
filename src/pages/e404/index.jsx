import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import  './e404.scss'



function E404() {
    return (
      <div>
        < Header/>

        <div className="e404">
          <p className="e404__title">404</p>
          <p className="e404__text">Oups! La page que vous demandez n'existe pas.</p>
          <Link className='e404__link' to='/'>Retourner sur la page d'accueil</Link>
        </div>
       
        < Footer/>
      </div>
    );
  }
  
  export default E404;  