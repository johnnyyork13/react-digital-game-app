import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Nav from './Nav'
import Cart from './Cart';
import Slideshow from './Slideshow';
import GameInfo from './GameInfo';
import './styles/main.css';
import './styles/Gamepage.css';

export default function Gamepage(props) {

    const transferUser = useLocation();

    const [user, setUser] = React.useState({...transferUser.state})

    const [openCart, setOpenCart] = React.useState(false);

    return (
        <div className="gamepage">
            <Nav 
                cartLength={user.cart.length}
                user={user}
                setOpenCart={setOpenCart}
                apiKey={user.apiKey}
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
                    apiKey={user.apiKey}
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