import { Link } from 'react-router-dom'
import logoHeader from '../../assets/logo-black.png'
 
function Header() {
    const currentRoute=window.location.pathname; // sert à appliquer le style ( classe activ-link ) supplementaire si le lien de nav est actif
    return (
        <header className='header'>
            <img src= {logoHeader} alt="logo Kasa location d'appartements" />
            <nav className="header__nav">
                <ul className="header__nav__list">
                    <li className="header__nav__list__item">
                        <Link className={ currentRoute ==='/' ? "header__nav__list__item__link activ-link" : "header__nav__list__item__link"}  to="/">Accueil</Link>
                    </li>
                    <li className="header__nav__list__item">
                        <Link className={ currentRoute ==='/apropos' ? "header__nav__list__item__link activ-link" : "header__nav__list__item__link"} to="/apropos">A Propos</Link>
                    </li>
                </ul>
            </nav>
         </header>
        
    )
}

export default Header