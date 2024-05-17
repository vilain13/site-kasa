import { Link } from 'react-router-dom'
 
function Footer() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/survey">Questionnaire</Link>
        </nav>
    )
}

export default Footer