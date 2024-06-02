import React, { useState } from 'react';
import upArrow from '../../assets/up-arrow.png';


const Collapse = ({ title, content }) => {
   // Déclare un état local isOpen pour gérer l'état d'ouverture/fermeture
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div >
        <div className='collapse-container-title'>
          <h3 className="collapse-container-title__title">
            {title}
          </h3>
          <img 
            onClick={toggle}
            src={upArrow}
            alt={isOpen ? 'Fermer' : 'Ouvrir'}
            className={`arrow ${isOpen ? 'arrow-down' : 'arrow-up'}`}
            style={{ width: '20px', height: '20px' }}
          />
        </div>
        {isOpen && (
          <div className={`collapse-container-title__text ${isOpen ? 'fade-in' : ''}`}>
            {Array.isArray(content) ? (
              <ul>
                {content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{content}</p>
            )}
          </div>
        )}
      </div>
    );
  };

  export default Collapse
  
