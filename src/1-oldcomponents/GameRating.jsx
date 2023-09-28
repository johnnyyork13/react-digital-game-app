import React from 'react';
import starEmpty from '../assets/star-empty.png';
import starFull from '../assets/star-full.png';
import starHalf from '../assets/star-half.png';
import { v4 as uuidv4 } from 'uuid';

export default function GameRating(props) {

    const ratingArray = [];
    const low = Math.floor(parseFloat(props.data.rating));
    const high = Math.ceil(parseFloat(props.data.rating));

    for (let i = 1; i <= 5; i++) {
        //assign some values to array so it can be mapped
        if (i <= low) {
            ratingArray.push("full");
        } else if (high === i && low + 0.5 < parseFloat(props.data.rating)) {
            ratingArray.push("half");
        } else {
            ratingArray.push("empty");
        }
    }

    const renderStars = ratingArray.map(function(str) {
        let starType = starEmpty;
        if (str === "full") {
            starType = starFull;
        } else if (str === "half") {
            starType = starHalf;
        }
        return <img key={uuidv4()} src={starType} />
    })

    return (
        <div className="game-rating-container">
            <p className="modal-rating-p">{props.data.rating}</p>
            <div className="modal-rating-stars">{renderStars}</div>
        </div>
    )
}