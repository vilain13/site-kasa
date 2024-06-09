
import logoFooter from '../../assets/logo-white.png' /** passer par une variable pour que l'url relative commence par le repertoire src et non le repertoire public */

function Footer() {
    return (
        <footer className='footer'>
            <img src={logoFooter} alt="logo Kasa" />
            {/** <img src='../../assets/logo-white.png' alt="logo Kasa" />  de cette maniere, il prend le chemin relatif à partir de public et non src*/}
            <p className='footer__copyright'> @ { new Date().getFullYear()} Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer