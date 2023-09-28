import React from 'react';
import '../styles/CartItem.css';

export default function CartItem(props) {

    return (
        <div className="cart-item" onClick={() => props.handleCartItemClick()}>
            <img src={props.game.background_image}/>
            <div className="cart-item-description">
                <h2>{props.game.name}</h2>
                <p>Price: $59.99</p>
                <p>Copies: {props.game.copies}</p>
                <p>Total: {`$${59.99 * props.game.copies}`}</p>
                <button onClick={() => props.handleAddCartItem(props.game)}>Add +</button>
                <button onClick={() => props.handleDeleteCartItem(props.game)}>Remove</button>
            </div>
        </div>
    )
}