import React from 'react';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../../pages/home';
import Apropos from '../../pages/apropos';
import E404 from '../../pages/e404';
import Logement from '../../pages/logement';

function Routage() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/logement/:id" element={<Logement/>} />  {/* prendre en compte l'id du logement dans l'url */}
                {/* Route pour définir la page à afficher si le chemin saisi sans l'url n'est pas défini au dessus */}
                <Route path="*" element={<E404 />} />
            </Routes>
         </Router>
    )
}
 
export default Routage

