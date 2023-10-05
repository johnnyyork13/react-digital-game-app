import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import GameRow from './GameRow';
import Nav from './Nav';
import Sidebar from './Sidebar';

import './styles/Results.css';

export default function Results(props) {

    const transferUser = useLocation();
    const page = useParams();

    const [user, setUser] = React.useState({...transferUser.state});
    const [allGames, setAllGames] = React.useState([])
    const [openCart, setOpenCart] = React.useState(false);
    const [render, setRender] = React.useState(false);

    console.log(user.genre);

    React.useEffect(() => {
        setUser({...transferUser.state});
        async function getGames() {
          const url = `https://api.rawg.io/api/games?genres=${user.genre}&token&key=${user.apiKey}`
          fetch(url)
          .then((res) => res.json())
          .then((data) => setAllGames(data.results));
        }
        getGames();
      }, [page.name]);

      //console.log(allGames);

    return (
        <div className="results-container">
            <Nav
                user={user}
                cartLength={user.cart.length}
                setOpenCart={setOpenCart}
            />
            <Sidebar 
                apiKey={user.apiKey}
                user={user}
                setRender={setRender}
            />
            <div className="all-game-rows">
                <GameRow
                    title="Popular"
                    gameList={allGames.slice(0, 10)}
                    user={user}
                    setUser={setUser}
                />
                <GameRow
                    title="Popular"
                    gameList={allGames.slice(10, 20)}
                    user={user}
                    setUser={setUser}
                />
            </div>
        </div>
    )
}