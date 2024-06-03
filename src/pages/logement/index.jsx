import React, { useEffect } from 'react';
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
  const navigate = useNavigate();
  const logement = logementsList.find(item => item.id === id);

  useEffect(() => {
    if (!logement) {
      navigate('/404');
    }
  }, [logement, navigate]);

  if (!logement) {
    return null; // Important Bonne pratique  car usefeffet avec navigate ne redirigera pas vers la page instantanément et se declenchera seulement après le premier rendu . cela elimine le risque d'afficher une page avec mauvaises données.
  }

  // Conversion de logement.rating en nombre 
  const starValidCount = parseInt(logement.rating);
  const starInvalidCount = 5 - starValidCount;

  return (
    <div>
      
      <Header />
    
      <div className="main-container">

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
              <img src={logement.host.picture} alt='{logement.host.name}' />
            </div>
            <StarsRatingContainer starValidCount={starValidCount} starInvalidCount={starInvalidCount} />
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
      </div>

      <Footer />
    </div>
  );
}

export default Logement

