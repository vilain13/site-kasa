import React from 'react';

import starValidImg from '../../assets/star-valid.png';
import starInvalidImg from '../../assets/star-invalid.png';





function StarsRatingContainer({ starValidCount, starInvalidCount }) {
    const renderStars = (count, starImg) => {
        return Array.from({ length: count }, (_, index) => (
            <img className='star' key={index} src={starImg} alt={`Star`} />
        ));
    };

    return (
        <div className="star-rating">
            {renderStars(starValidCount, starValidImg)}
            {renderStars(starInvalidCount, starInvalidImg)}
        </div>
    );
}


export default StarsRatingContainer