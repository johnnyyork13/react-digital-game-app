import React from 'react';
import '../styles/Nav.css';
import '../styles/Colors.css';
import { Link } from 'react-router-dom';
import cartLogo from '../assets/cart.png';

export default function Nav(props) {

    //style for logo
    const cartLogoStyle = {
        backgroundImage: `url(${cartLogo})`
    }

    return (
        <div className="nav">
            <Link to="/" state={{cart: props.cart}}>Back Home</Link>
            <input className="search-bar" type="search" placeholder="Search for games..."/>
            <button className="search-btn" type="button">Search</button>
            <Link className="cart-logo" style={cartLogoStyle} to="/cart" state={{cart: props.cart}}>
                {props.cart.length}
            </Link>
            
        </div>
    )
}