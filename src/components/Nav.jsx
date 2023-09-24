import React from 'react';
import '../styles/Nav.css';
import '../styles/Colors.css';
import { Link } from 'react-router-dom';

export default function Nav(props) {

    return (
        <div className="nav">
            <Link to="/" state={{cart: props.cart}}>Back Home</Link>
            <input className="search-bar" type="search" placeholder="Search for games..."/>
            <button className="search-btn" type="button">Search</button>
            <h1>Items in Cart: {props.cart.length}</h1>
            <Link to="/cart" state={{cart: props.cart}}>View Cart</Link>
        </div>
    )
}