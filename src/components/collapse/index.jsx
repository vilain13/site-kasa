import React, { useState } from 'react';
import aproposList from '../../datas/aproposList.json';
import upArrow from '../../assets/up-arrow.png';


const Collapse = ({ title, content }) => {
   // Déclare un état local isOpen pour gérer l'état d'ouverture/fermeture
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className='collapse-container'>
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
          <p className={`collapse-container-title__text ${isOpen ? 'fade-in' : null}`}>
            {content}
          </p>
        )}
      </div>
    );
  };

  const AppCollapse = () => {
    return (
      <div className="apropos-container">
        {aproposList.map(item => (
          <Collapse key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    );
  };

  export default AppCollapse