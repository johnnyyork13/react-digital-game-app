import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Colors.css';
import './styles/Nav.css';
import './styles/main.css';
import './styles/Hero.css';

export default function Nav(props) {

    return (
        <nav className="nav">
            <div className="nav-btn-container">
                <Link 
                    to="/" 
                    className="logo"
                    state={{
                        ...props.user
                    }}
                    >LOGO
                </Link>
                <Link 
                    className="nav-btn"
                    to="/"
                    state={{
                        ...props.user
                    }}
                    >Store
                </Link>
                <Link 
                    className="nav-btn"
                    to="/wishlist"
                    state={{
                        ...props.user
                    }}
                >Wishlist
                </Link>
                <Link className="nav-btn">Roll the Dice</Link>
            </div>
            <div className="search-container">
                <input type="search" className="search-bar" placeholder="Search for a Game"></input>
                <button className="search-btn">Search</button>
                <button 
                    onClick={() => props.setOpenCart(true)}
                    className="cart-btn"
                    >View Cart ({props.cartLength})
                </button>
            </div>
        </nav>
    )
}