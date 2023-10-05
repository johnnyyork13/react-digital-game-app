import React from 'react';
import './styles/CartItem.css';
import { Link, useLocation } from 'react-router-dom';

export default function CartItem(props) {

    const transferUser = useLocation();

    return (
        <div className="cart-item">
            <img src={props.game.background_image} alt={`${props.game.name} Thumbnail`} />
            <div className="cart-item-description">
                {props.game.name}
                <button
                    className="remove-cart-btn"
                    onClick={() => props.setUser((prev) => ({
                        ...prev,
                        cart: prev.cart.filter((cartItem) => cartItem.key !== props.game.key && cartItem)
                    }))}
                >
                    Remove
                </button>
            </div>
            
        </div>
    )
}