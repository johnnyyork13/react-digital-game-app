import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Colors.css';
import './styles/Nav.css';
import './styles/main.css';
import './styles/Hero.css';

export default function Nav(props) {

    const transferUser = useLocation();

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
                <button className="nav-btn">Popular Games</button>
                <button className="nav-btn">My Games</button>
                <button 
                    className="nav-btn"
                    onClick={function() {console.log(props.user.wishList)}}
                >Wishlist
                </button>
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