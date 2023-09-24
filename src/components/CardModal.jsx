import React from 'react';
import Slideshow from './Slideshow';
import { v4 as uuidv4 } from 'uuid';
import '../styles/CardModal.css';
import '../styles/Colors.css';
import starEmpty from '../assets/star-empty.png';
import starFull from '../assets/star-full.png';
import starHalf from '../assets/star-half.png';
import arrowLeft from '../assets/arrow-left.png';
import arrowRight from '../assets/arrow-right.png';

export default function CardModal(props) {

    const [game, setGame] = React.useState([]);
    const [screenshots, setScreenshots] = React.useState([])

    React.useEffect(() => {
        async function getGame() {
            const url = `https://api.rawg.io/api/games/${props.data.id}?token&key=${props.apiKey}`;
            fetch(url)
            .then((res) => res.json())
            .then((data) => setGame(data));
        }
        getGame();
    }, [])

    console.log(props.data);
    //console.log(game);
    const ratingArray = [];
    const low = Math.floor(parseFloat(props.data.rating));
    const high = Math.ceil(parseFloat(props.data.rating));
    //console.log(low, props.data.rating);
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
        <div className="modal-background">
            <div className="modal">
                <button className="close-modal-btn" onClick={props.handleCloseModal}>X</button>
                <Slideshow
                    data={props.data}
                />
                <div className="modal-description-container">
                    <p className="modal-header">{props.data.name}</p>
                    <p className="modal-description" dangerouslySetInnerHTML={{__html: `${game.description}`}}></p>
                    <button onClick={() => props.handleAddToCart(props.data)} className="add-btn">Add to Cart</button>
                    <div className="modal-rating">
                    <p className="modal-rating-p">{props.data.rating}</p>
                        <div className="modal-rating-stars">{renderStars}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}