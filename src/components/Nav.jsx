import React from 'react';
import './styles/Colors.css';
import './styles/Nav.css';
import './styles/main.css';
import './styles/Hero.css';

export default function Nav(props) {

    return (
        <nav className="nav">
            <div className="nav-btn-container">
                <button className="nav-btn">Popular</button>
                <button className="nav-btn">Library</button>
                <button className="nav-btn">Random Game</button>
            </div>
            <div className="search-container">
                <input type="search" className="search-bar" placeholder="Search for a Game"></input>
                <button className="search-btn">Search</button>
                <button className="cart-btn">View Cart ({props.cartLength})</button>
            </div>
        </nav>
    )
}