import React from 'react';
import '../styles/CartItem.css';

export default function CartItem(props) {

    return (
        <div className="cart-item">
            <img src={props.game.background_image}/>
            <div className="cart-item-description">
                <h2>{props.game.name}</h2>
            </div>
        </div>
    )
}