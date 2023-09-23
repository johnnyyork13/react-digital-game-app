import React from 'react';
import '../styles/Cart.css';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function Cart() {

    const state = useLocation();
    const cart = state.state.cart;

    console.log("CART", cart);
    const showGames = cart ? cart.map(function(game) {
        console.log('mapped', game);
        return <p key={uuidv4()}>{game.name}</p>
     }) : console.log('boob');

    return (
        <div className="cart">
            <Nav 
                cart={cart}
            />
            {showGames}
            <Link to="/" state={{cart: cart}}>Back Home</Link>
        </div>
    )
}