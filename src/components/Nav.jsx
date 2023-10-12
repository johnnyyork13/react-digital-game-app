import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Colors.css';
import './styles/Nav.css';
import './styles/main.css';
import './styles/Hero.css';
import logo from '../assets/logo.png';

export default function Nav(props) {

    const [game, setGame] = React.useState({
        name: ""
    });

    const [queryParam, setQueryParam] = React.useState(Math.floor(Math.random() * 500000));

    function handleSearch() {

    }

    function updateQueryParam(e) {
        if (e.target.name === "search") {
            setQueryParam(function(prev) {
                return {
                    ...prev,
                    name: e.target.value.toLowerCase()
                }
            })
            //console.log(queryParam)
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
                //   .then(function(data) {console.log("DATA", data); return data})
                  .then((data) => {if(data.name === 'undefined') {console.log("TRUE");} return data})
                  .then((data) => setGame(data));
                }
                getGames();
        }
    }, [queryParam]);

    return (
        <nav className="nav">
            <Link 
                    to="/" 
                    style={{backgroundImage: `url(${logo})`}}
                    className="logo"
                    state={{
                        ...props.user
                    }}
                    >
                </Link>
            <div className="nav-btn-container">
                <Link 
                    className="nav-btn"
                    to="/"
                    state={{
                        ...props.user
                    }}
                    >Browse
                </Link>
                <Link 
                    className="nav-btn"
                    to="/wishList"
                    state={{
                        ...props.user
                    }}
                >My Wishlist
                </Link>
                <Link 
                    className="nav-btn"
                    state={{
                        ...props.user,
                        currentGame: game
                    }}
                    onClick={updateQueryParam}
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
                    onClick={handleSearch}
                    >Search
                </Link>
                {/* <button 
                    onClick={() => props.setOpenCart(true)}
                    className="cart-btn"
                    >View Cart ({props.cartLength})
                </button> */}
            </div>
        </nav>
    )
}