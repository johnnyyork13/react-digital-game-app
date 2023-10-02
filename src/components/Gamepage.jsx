import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav'
import Slideshow from './Slideshow';
import GameInfo from './GameInfo';
import './styles/main.css';
import './styles/Gamepage.css';

export default function Gamepage(props) {

    const state = useLocation();
    const key = "6edf5284267f4b93812855603bb5435a";
    //console.log(state);

    return (
        <div className="gamepage">
            <Nav 
                cartLength={state.state ? state.state.cart.length : 0}
            />
            <div className="banner">
                {state.state.currentGame.name}
            </div>
            <div className="game-container">
                <Slideshow
                    screenshots={state.state.currentGame.short_screenshots}
                />
                <GameInfo 
                    id={state.state.currentGame.id}
                    apiKey={key}
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