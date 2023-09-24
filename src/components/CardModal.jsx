import React from 'react';
import Slideshow from './Slideshow';
import GameDescription from './GameDescription';
import { v4 as uuidv4 } from 'uuid';
import '../styles/CardModal.css';
import '../styles/Colors.css';
import arrowLeft from '../assets/arrow-left.png';
import arrowRight from '../assets/arrow-right.png';
import GameDescriptionContainer from './GameDescriptionContainer';

export default function CardModal(props) {

    const [game, setGame] = React.useState([]);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        async function getGame() {
            const url = `https://api.rawg.io/api/games/${props.data.id}?token&key=${props.apiKey}`;
            fetch(url)
            .then((res) => res.json())
            .then((data) => setGame(data))
            .catch((err) => setError(err));
        }
        getGame();
    }, [])

    return (
        <div className="modal-background">
            <div className="modal">
                <button className="close-modal-btn" onClick={props.handleCloseModal}>X</button>
                <Slideshow
                    data={props.data}
                />
                <GameDescriptionContainer
                    game={game}
                />
                <button onClick={() => props.handleAddToCart(props.data)} className="add-btn">Add to Cart</button>
            </div>
        </div>
    )
}