import React from 'react';
import './styles/WishListItem.css';

export default function WishListItem(props) {

    return (
        <div className="wishList-item-container">
            <div className="wishList-item-top">
                <img className="wishList-img" src={props.game.background_image}/>
                <div className="wishList-description">
                    <p>{props.game.name}</p>
                    <div className="btn-container">
                        <button>Go to Gamepage</button>
                        <button>Remove from Wishlist</button>
                    </div>
                </div>
            </div>
            <div className="wishList-item-bottom">

            </div>
        </div>
    )
}
