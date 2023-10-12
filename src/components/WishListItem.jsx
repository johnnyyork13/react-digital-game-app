import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/WishListItem.css';

export default function WishListItem(props) {

    function handleRemoveItem(key) {
        props.setUser((prev) => ({
            ...prev,
            wishList: prev.wishList.filter((game) => game.key !== key && game)
        }))
    }

    return (
        <div className="wishList-item-container">
            <div className="wishList-item-top">
                <img className="wishList-img" src={props.game.background_image}/>
                <div className="wishList-description">
                    <p>{props.game.name}</p>
                    <div className="btn-container">
                        <Link 
                            className="wishList-item-btn wishList-item-btn-left"
                            to={`/game/${props.game.name}`}
                            state={{...props.user,
                                currentGame: props.game}}
                        >Go to Gamepage
                        </Link>
                        <button 
                            className="wishList-item-btn wishList-item-btn-right"
                            onClick={() => handleRemoveItem(props.game.key)}
                            >Remove from Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
