
import logements from '../../datas/logementsList.json';


import React from 'react';
import { Link } from 'react-router-dom';

const GalleryCards = () => {

  return (
    
    <div className="gallery-cards">
      {logements.map(logement => (
        <Link to={`/logement/${logement.id}`} className="gallery-cards__card"  key={logement.id}>  
          <article  >
            <h3>{logement.title}</h3>
            <img src={logement.cover} alt={logement.title} />
          </article>
        </Link>
      ))}
    </div>
  );
};

export default GalleryCards