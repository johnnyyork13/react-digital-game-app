import React from 'react';
import './styles/Cart.css';
import CartItem from './CartItem';
import { v4 as uuidv4 } from 'uuid';

export default function Cart(props) {

    const cartItems = props.user.cart.map((cartItem) => {
        return <CartItem 
            key={uuidv4()}
            game={cartItem}
            setUser={props.setUser}
        />
    })

    return (
        <div className="cart-container">
            <button onClick={() => props.setOpenCart(false)}>Close</button>
            {cartItems}
        </div>
    )
}