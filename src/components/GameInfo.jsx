import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import './styles/GameInfo.css';

export default function GameInfo(props) {

    const state = useLocation();

    const [game, setGame] = React.useState({});
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        async function getGame() {
            const url = `https://api.rawg.io/api/games/${props.id}?token&key=${props.apiKey}`;
            fetch(url)
            .then((res) => res.json())
            .then((data) => setGame(data))
            .catch((err) => setError(err));
        }
        getGame();
    }, [])

    const style = {
        backgroundImage: `url(${game.background_image})`
    }

    //console.log(game);

    return (
        <div className="game-info-container">
            <div className="game-info-image" style={style}></div>
            <div className="game-info-text">
                <p>{game.description_raw}</p>
            </div>
            <div className="game-info-publishers">
                    <p>Publisher: publisher</p>
                    <p>Developer: developer</p>
                    <p>Release Date: xx/xx/xxxx</p>
                    <Link 
                        className="game-info-btn add-cart-btn"
                        to="/"
                        state={{
                            currentGame: state.state.currentGame,
                            cart: [
                                ...state.state.cart,
                                state.state.currentGame
                            ]
                        }}
                        >Add to Cart
                    </Link>
                    <button className="game-info-btn wishlist-btn">Add to Wishlist</button>
            </div>
        </div>
    )
}