import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav'
import Slideshow from './Slideshow';
import './styles/main.css';
import './styles/Gamepage.css';

export default function Gamepage(props) {

    const state = useLocation();

    //console.log(state);

    return (
        <div className="gamepage">
            <Nav 
                cartLength={state.state ? state.state.cart.length : 0}
            />
            <div className="game-container">
                <Slideshow
                    game={state.state.currentGame}
                />
                
            </div>
            {/* <Link 
                to="/" 
                state={{
                    currentGame: state.state.currentGame,
                    cart: state.state.cart
                }
                }>Go Back
            </Link> */}
        </div>
    )
}