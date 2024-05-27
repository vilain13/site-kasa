import  './card.scss';
import logementsList from '../../datas/logementsList.json';



function Card() {
    return (
        <div className='gallery'>
            <article className='gallery__card'> 
                <h3> Premier hebergement</h3>
            </article>
            <article className='gallery__card'> 
                <h3> Premier hebergement</h3>
            </article>
            <article className='gallery__card'> 
                <h3> Premier hebergement</h3>
            </article>
            <article className='gallery__card'> 
                <h3> Premier hebergement</h3>
            </article> <article className='gallery__card'> 
                <h3> Premier hebergement</h3>
            </article>
        </div>
    )
}

export default Card