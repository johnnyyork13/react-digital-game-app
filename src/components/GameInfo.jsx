import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import './styles/GameInfo.css';

export default function GameInfo(props) {

    const [game, setGame] = React.useState({});
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        async function getGame() {
            const url = `https://api.rawg.io/api/games/${props.user.currentGame.id}?token&key=${props.apiKey}`;
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

    // console.log(props.user.currentGame);
    // console.log(game);

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
                            ...props.user,
                            cart: [
                                ...props.user.cart,
                                {...props.user.currentGame,
                                    key: uuidv4()
                                }
                            ]
                        }}
                        >Add to Cart
                    </Link>
                    <button 
                        className="game-info-btn wishlist-btn"
                        onClick={() => props.setUser((prev) => ({
                            ...prev,
                            wishList: [
                                ...prev.wishList,
                                props.user.currentGame
                            ]
                        }))}
                    >Add to Wishlist
                </button>
            </div>
        </div>
    )
}