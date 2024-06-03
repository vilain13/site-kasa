
import logementsDatas from '../../datas/logementsList.json';


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GalleryCards = () => {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
      // Charge les données JSON depuis le fichier d'import mis dans "logementsDatas"
      setLogements(logementsDatas);
    }, []);

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