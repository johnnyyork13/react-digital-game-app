import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import './styles/GameInfo.css';

export default function GameInfo(props) {

    const [game, setGame] = React.useState({});
    const [error, setError] = React.useState(null);
    const [onWishList, setOnWishList] = React.useState(props.user.wishList.forEach(function(item) {
        if (item.name === game.name) {
            return true
        }
    }))

    React.useEffect(() => {
        async function getGame() {
            const url = `https://api.rawg.io/api/games/${props.user.currentGame.id}?token&key=${props.apiKey}`;
            fetch(url)
            .then((res) => res.json())
            .then((data) => setGame(data))
            .catch((err) => setError(err));
        }
        getGame();
    }, [props.user])

    const mappedStores = props.user.currentGame.stores && props.user.currentGame.stores.map((store) => {
        return <a
        key={uuidv4()}
        target="_blank"
        href={`https://${store.store.domain}`}
        >
        {store.store.name}    
        </a>
    })

    const style = {
        backgroundImage: `url(${game.background_image})`
    }

    const wishListStyle = {

    }

    // console.log(props.user.currentGame);
    // console.log(game);
    //console.log(props.user.currentGame);

    //console.log(mappedStores);

    return (
        <div className="game-info-container">
            <button 
                        className="game-info-btn wishlist-btn"
                        style={wishListStyle}
                        onClick={() => props.setUser((prev) => ({
                            ...prev,
                            currentGame: {...prev.currentGame,
                                            onWishList: prev.onWishList ? false : true},
                            wishList: [
                                ...prev.wishList,
                                {...props.user.currentGame,
                                    onWishList: prev.onWishList ? false : true,
                                    key: uuidv4()}
                            ]
                        }))}
                    >{props.user.currentGame.onWishList ? "Remove from Wishlist" : "Add to Wishlist"}
                </button>
            <div className="game-info-image" style={style}></div>
            <div className="game-info-text">
                <p>{game.description_raw}</p>
            </div>
            <div className="game-info-more">
                    <div className="game-info-more-left game-info-more-container">
                        <p>Publisher: {props.user.currentGame.publishers && props.user.currentGame.publishers.length > 0 ? props.user.currentGame.publishers[0].name : "No Publisher"}</p>
                        <p>Developer: {props.user.currentGame.developers && props.user.currentGame.developers.length > 0 ? props.user.currentGame.developers[0].name : "Uncredited"}</p>
                        <p>Release Date: {props.user.currentGame.released ? props.user.currentGame.released : "Unavailable"}</p>
                    </div>
                    <div className="game-info-more-right game-info-more-container">
                        <p>Available On:</p>
                        {mappedStores}
                    </div>
                    {/* <Link 
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
                    </Link> */}
            </div>
        </div>
    )
}