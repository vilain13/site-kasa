import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Slider from  '../../components/slider';
import Collapse from '../../components/collapse';
import logementsList from '../../datas/logementsList.json';
import './logement.scss';

function Logement() {

  const { id } = useParams();
  const logement = logementsList.find(item => item.id === id);

  if (!logement) {
      return <h2>Logement non trouvé</h2>;
  }
  

  

  return (
    <div>
      
      <Header />

      

      <div className="main-container">

        <Slider />

        <div className='various-information'>
          <div className="location">
            <h2>{logement.title}</h2>
            <h3>{logement.location}</h3>
          </div>
          <div className="host">
            <h3>{logement.host.name}</h3>
            <img src={logement.host.picture} alt='{logement.host.name}' />
          </div>
        </div>
        

        

        <div className= "collapses-container">
          
          <div className="collapses-container__collapse"> 
            <Collapse title="Description" content={logement.description} />
          </div>

          <div className="collapses-container__collapse"> 
            <Collapse title="Equipements" content={logement.equipments} />
          </div>

        </div>
      </div>

      <Footer />

  
    </div>
  
  );
}


export default Logement
/*
export default Logement;

import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from '../../components/banner';
import  './apropos.scss'
import Collapse from '../../components/collapse';

import aproposList from '../../datas/aproposList.json';
import imgBanner from '../../assets/apropos-banner.png'
const titleBanner =""

function Apropos() {

    return (
        <div>
            <Header />
            <Banner  img={imgBanner} title={titleBanner}  />
          
            <div className="apropos-container">
                {aproposList.map(item => (
                <Collapse key={item.id} title={item.title} content={item.content} />
                ))}
            </div>
            <Footer />

        </div>
    )
}

export default Apropos

*/
