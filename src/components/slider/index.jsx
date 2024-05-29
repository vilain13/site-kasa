import React from 'react';
import { useParams } from 'react-router-dom';
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'



import logementsList from '../../datas/logementsList.json';
import '../../styles/main.scss'

function Slider() {

    const { id } = useParams();
    const logement = logementsList.find(item => item.id === id);
  
    if (!logement) {
        return <h2>Logement non trouvé</h2>;
    }
    
  
    
  
    return (
        <div className='slider-container'>
             <img className='arrow-left' src= {arrowLeft} alt="flêche vers la gauche" />
             <img className='slider-img' src= {logement.cover} alt={logement.name} />
             <img className='arrow-right' src= {arrowRight} alt="flêche vers la droite" />
        </div>
       

    )
}


export default Slider