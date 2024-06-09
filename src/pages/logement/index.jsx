import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Slider from  '../../components/slider';
import Collapse from '../../components/collapse';
import StarsRatingContainer from '../../components/logement-rating';
import TagButtons from '../../components/logement-tags';
import logementsList from '../../datas/logementsList.json';



function Logement() {
  const { id } = useParams(); // récupère l'id de la page logement à afficher
  const navigate = useNavigate();   // Hook useNavigate pour redirection vers une autre page
 
  const [logement, setLogement] = useState()
  const [startValidCount, setStartValidCount] = useState(0)
  
  // s'execute lorsque id logement ou navigate changent
  useEffect(() => {
    let _logement = logementsList.find(item => item.id === id);
    if (!_logement) {
      return navigate('/404');
    }
    setLogement(_logement)   // mise à jour des elements du logement selectionné
    setStartValidCount(parseInt(_logement.rating,10))   // Conversion de logement.rating issu du json en nombre 
  }, [id, navigate]); 



  return (
    <div>
      
      <Header />
      {/* Si le logement est défini, affiche le contenu  */}
      {logement && <main className="main-container">

        <Slider pictures={logement.pictures} />

        <div className="informations">
          <div className='various-information'>
            <div className="location">
              <h2>{logement.title}</h2>
              <h3>{logement.location}</h3>
            </div>
            <TagButtons tags={logement.tags} />
          </div>

          <div className='host-rating-container'>
            <div className="host">
              <h3>{logement.host.name}</h3>
              <img src={logement.host.picture} alt={`Votre Hote ${logement.host.name}`} />
            </div>
            <StarsRatingContainer starValidCount={startValidCount} starInvalidCount={5-startValidCount} />
          </div>
        </div>

        <div className= "logement-collapses">
          <div className="logement-collapses__collapse"> 
            <Collapse title="Description" content={logement.description} />
          </div>
          <div className="logement-collapses__collapse"> 
            <Collapse title="Equipements" content={logement.equipments} />
          </div>

        </div>
      </main>}

      <Footer />
    </div>
  );
}

export default Logement

