import React, { useState } from 'react';


import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'


function Slider({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Slider avec gestion du mouvement perpetuel

    // si affichage premiere image la precedante  sera la derniere ( retour arriere donc le prochain index sera nbe d'imgs à afficher -1 car demarre index 0 ) si ce n'est pas la premiere img affichée, le prochain index à afficher sera  prevIndex-1 ( index precedant ) 
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };
    // si affichage derniere image la suivante  sera la premiere ( retour arriere donc le prochain index sera nbe d'imgs à afficher -1 car demarre index 0 ) si ce n'est pas la premiere img affcihée, le prochain index sera le suivant prevIndex-1 ( car demarre à 0 ) 
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };
  
    
  
    return (
        <div className='slider-container'>
             {/* Test sur le nombre d'img à afficher pour le logement si 1 img disparition des fleches de direction et du compteur slider */}

            {pictures.length > 1 && ( 
                <div>
                    <img className='arrow-left' src= {arrowLeft} alt="flêche vers la gauche"  onClick={handlePrevious} />
                    <img className='arrow-right' src= {arrowRight} alt="flêche vers la droite" onClick={handleNext} />
                </div>
            )}
            <img className='slider-img' src={pictures[currentIndex]} alt={`Logement ${currentIndex + 1}`} />
            
            {pictures.length > 1 && ( 
                <div className='img-count'>
                    {currentIndex + 1} / {pictures.length}
                </div>
            )}
      
        </div>

    ); 
}




export default Slider