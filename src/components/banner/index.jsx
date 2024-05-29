// Banner utilisée dans la page accueil et page A propos avec en argument l'image de fonds et le titre 

import { useLocation } from 'react-router-dom';  // afin de pouvoir appliquer une opacité différente à l'img banner de A propos ( condition sur la route de la paage ) 

import  './banner.scss'


function Banner({img, title}) { // lea accolades sont importantes pour récupérer les arguments au format d'array

    const location = useLocation(); /* initialisation pour adapter le style sur banner page Apropos */
    const isAproposPage = location.pathname === '/apropos'; /* initialisation pour adapter le style sur banner page Apropos utilisation condition ternaire dans le return  */

    return (
        <div className={`banner ${isAproposPage ? 'banner-apropos' : ''}`}>
            <img className="banner_img" src={img} alt="Banner"/>
            <h1> {title} </h1>
        </div>
    )
}

export default Banner