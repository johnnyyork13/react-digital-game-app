import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav'
import Cart from './Cart';
import Slideshow from './Slideshow';
import GameInfo from './GameInfo';
import './styles/main.css';
import './styles/Gamepage.css';

export default function Gamepage(props) {

    const key = "6edf5284267f4b93812855603bb5435a";
    const globalState = useLocation();

    //console.log("globalstate", globalState);

    const [user, setUser] = React.useState({...globalState.state})
    const [openCart, setOpenCart] = React.useState(false);

    return (
        <div className="gamepage">
            <Nav 
                cartLength={user.cart.length}
                user={user}
                setOpenCart={setOpenCart}
            />
            <div className="banner">
                {user.currentGame.name}
            </div>
            <div className="game-container">
                <Slideshow
                    screenshots={user.currentGame.short_screenshots}
                />
                <GameInfo 
                    user={user}
                    setUser={setUser}
                    apiKey={key}
                />
            </div>
            {openCart && <Cart 
                setOpenCart={setOpenCart}
                setUser={setUser}
                user={user}
      />}
        </div>
    )
}