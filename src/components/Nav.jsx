import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Colors.css';
import './styles/Nav.css';
import './styles/main.css';
import './styles/Hero.css';

export default function Nav(props) {

    const [game, setGame] = React.useState({
        name: ""
    });

    const [queryParam, setQueryParam] = React.useState(null);


    function updateQueryParam(e) {
        if (e.target.name === "search") {
            setQueryParam(function(prev) {
                return {
                    ...prev,
                    name: e.target.value
                }
            })
            console.log(queryParam)
        } else {
            setQueryParam(Math.floor(Math.random() * 500000));
        }
    }

    //API call for random game button
    React.useEffect(() => {
        if (queryParam) {

            async function getGames() {
                const url = `https://api.rawg.io/api/games/${queryParam.name ? queryParam.name : queryParam}?token&key=${props.apiKey}`;
                  fetch(url)
                  .then((res) => res.json())
                  .then((data) => setGame(data));
                }
                getGames();
        }
    }, [queryParam]);

    // console.log(randomGame);

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
                        currentGame: game
                    }}
                    to={`/game/${game.name}`}
                    >Roll the Dice
                </Link>
            </div>
            <div className="search-container">
                <input 
                    type="search"
                    name="search"
                    onChange={updateQueryParam} 
                    className="search-bar" 
                    placeholder="Search for a Game"></input>
                <Link 
                    className="search-btn"
                    to={`/game/${game.name}`}
                    state={{
                        ...props.user,
                        currentGame: game
                    }}
                    >Search
                </Link>
                <button 
                    onClick={() => props.setOpenCart(true)}
                    className="cart-btn"
                    >View Cart ({props.cartLength})
                </button>
            </div>
        </nav>
    )
}