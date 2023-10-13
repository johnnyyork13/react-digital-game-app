import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getGame, getScreenshots } from './helpers/getGames';
import Nav from './Nav'
import Cart from './Cart';
import Slideshow from './Slideshow';
import GameInfo from './GameInfo';
import Footer from './Footer';
import './styles/main.css';
import './styles/Gamepage.css';

export default function Gamepage(props) {

    const transferUser = useLocation();
    const page = useParams();

    const [user, setUser] = React.useState({...transferUser.state})
    const [searchError, setSearchError] = React.useState(false);
    const [openCart, setOpenCart] = React.useState(false);

    React.useEffect(() => {
        setUser({...transferUser.state});
    }, [page.name])


    return (
        <div className="gamepage">
            <Nav 
                cartLength={user.cart.length}
                user={user}
                setOpenCart={setOpenCart}
                apiKey={user.apiKey}
                setSearchError={setSearchError}
            />
            <div className="banner">
                {user.currentGame.name}
            </div>
            <div className="game-container">
                <Slideshow
                    user={user}
                    searchError={searchError}
                />
                <GameInfo 
                    user={user}
                    setUser={setUser}
                    apiKey={user.apiKey}
                    // searchError={searchError}
                />
            </div>
            {/* {/* {openCart && <Cart 
                setOpenCart={setOpenCart}
                setUser={setUser}
                user={user}
            />} */}
            <Footer />
        </div>
    )
}