
import React, { useState, useEffect } from 'react';
import upArrow from '../../assets/up-arrow.png';




const Collapse = ({ title, content }) => {
  // Déclare un état local isOpen pour gérer l'état d'ouverture/fermeture
   const [isOpen, setIsOpen] = useState(false);


  // Déclare un etat shouldRender pour gérer le lancement du fade out  au clic si la collapse est ouverte.
   const [shouldRender, setShouldRender] = useState(false);




   useEffect(() => {
     if (isOpen) {
       setShouldRender(true);
     }
   }, [isOpen]);


   const handleAnimationEnd = () => {
     if (!isOpen) {
       setShouldRender(false);
     }
   };
  
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
       {shouldRender && (
         <div className={`collapse-container-title__text ${isOpen ? 'fade-in' : 'fade-out'}`}
         onAnimationEnd={handleAnimationEnd}
         >
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


  
  
