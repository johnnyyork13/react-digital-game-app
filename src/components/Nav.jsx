import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Colors.css';
import './styles/Nav.css';
import './styles/main.css';
import './styles/Hero.css';

export default function Nav(props) {

    const [randomGame, setRandomGame] = React.useState({
        name: "test",
    });

    //API call for random game button
    React.useEffect(() => {
        const randomGameInt = Math.floor(Math.random() * 500000);
        async function getGames() {
        const url = `https://api.rawg.io/api/games/${randomGameInt}?token&key=${props.apiKey}`;
          fetch(url)
          .then((res) => res.json())
          .then((data) => setRandomGame(data.results));
        }
        getGames();
    }, []);

    console.log(randomGame);

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
                <Link 
                    className="nav-btn"
                    state={{
                        ...props.user,
                        currentGame: randomGame
                    }}
                    // to={`/game/${randomGame.name}`}
                    >Roll the Dice
                </Link>
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