import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Slider from  '../../components/slider';
import Collapse from '../../components/collapse';
import StarsRatingContainer from '../../components/logement-rating';
import TagButtons from '../../components/logement-tags';
import logementsList from '../../datas/logementsList.json';

import './logement.scss';


function Logement() {

  const { id } = useParams();
  const logement = logementsList.find(item => item.id === id);

  // Conversion de logement.rating en nombre pour comptage du nombre d'étoiles valides et non valides à afficher
  const starValidCount = parseInt(logement.rating);
  const starInvalidCount = 5 - starValidCount;


  if (!logement) {
      return <h2>Logement non trouvé</h2>;
  }
  

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

