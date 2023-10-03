import React from 'react';
import './styles/CartItem.css';

export default function CartItem(props) {

    return (
        <div className="cart-item">
            <img src={props.game.background_image} alt={`${props.game.name} Thumbnail`} />
            <div className="cart-item-description">
                {props.game.name}
                <button 
                    className="remove-cart-btn"
                    onClick={() => props.handleRemoveCartItem(props.game.key)}
                    >Remove
                </button>
            </div>
            
        </div>
    )
}