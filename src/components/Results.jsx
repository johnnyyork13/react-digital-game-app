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

    React.useEffect(() => {
        async function getGames() {
          const url = `https://api.rawg.io/api/games?page_size=30&genres=${page.name}&token&key=${user.apiKey}`
          fetch(url)
          .then((res) => res.json())
          .then(function(data) {setAllGames(data.results)});
        }
        getGames();
      }, [page.name]);

    return (
        <div className="results-container">
            <Nav
                user={user}
                cartLength={user.cart.length}
                setOpenCart={setOpenCart}
                apiKey={user.apiKey}
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
                    title="Recommended"
                    gameList={allGames.slice(10, 20)}
                    user={user}
                    setUser={setUser}
                />
                <GameRow
                    title={`More Cool ${page.name[0].toUpperCase() + page.name.slice(1)} Games`}
                    gameList={allGames.slice(20, 30)}
                    user={user}
                    setUser={setUser}
                />
            </div>
        </div>
    )
}