import React from 'react';
import  './logement-tags.scss'



function TagButtons({ tags }) {


    return (
        /* génére un tabelau de tags pour créer les boutons html correspondant */
        <div className='tags'>

            {tags.map((tag, index) => (
                <button key={index}>{tag}</button>
            ))}

        </div>
    )
}

export default TagButtons