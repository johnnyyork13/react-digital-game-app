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
    const [game, setGame] = React.useState(null)
    const [screenshots, setScreenshots] = React.useState(null);

    const [openCart, setOpenCart] = React.useState(false);

    //console.log(user);
    React.useEffect(() => {
        if (user.currentGame.id) {
            console.log("BOOOOOOOOOOOOOOOOOOOB")
            const data = getScreenshots(user.currentGame.id)
            data.then((d) => {console.log("DATA SET"); return d})
            .then((d) => setScreenshots(d));
        }
    }, [page.name])

    React.useEffect(() => {
        setUser({...transferUser.state});

    }, [page.name])

    //console.log("SCREENSHOTS", screenshots);

    //console.log(user);

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
                    game={game}
                    screenshots={screenshots}
                    user={user}
                />
                <GameInfo 
                    game={game}
                    user={user}
                    setUser={setUser}
                    apiKey={user.apiKey}
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