import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rates }) => {
    const fullStars = parseInt(rates.rating);
    const emptyStars = 5 - fullStars;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }

    return (
        <div className="flex items-center gap-3 mt-2">
            <span className="flex gap-1">{stars}</span>
            {rates.stock !== undefined && (
                <span className="text-sm text-gray-500 mt-0.5">{rates.stock}</span>
            )}
        </div>
    );
};

export default StarRating;
