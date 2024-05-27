import  './gallery-cards.scss'
import logementsDatas from '../../datas/logementsList.json';


import React, { useState, useEffect } from 'react';

const GalleryCards = () => {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
      // Charge les données JSON depuis le fichier d'import mis dans "logementsDatas"
      setLogements(logementsDatas);
    }, []);

  return (
    <div className="gallery-cards">
      {logements.map(logement => (
        <article className="gallery-cards__card" key={logement.id}>
          <h3>{logement.title}</h3>
          <img src={logement.cover} alt={logement.title} />
        </article>
      ))}
    </div>
  );
};

export default GalleryCards