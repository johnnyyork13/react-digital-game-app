import React from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import Hero from './Hero';
import Sidebar from './Sidebar';
import GameRow from './GameRow';
import './styles/Home.css';

export default function Home(props) {

    // const [allGames, setAllGames] = React.useState([])
    const [popular, setPopular] = React.useState([]);
    const [recommended, setRecommended] = React.useState([]);
    const [fireRender, setFireRender] = React.useState(false);

    // const idURL = `https://api.rawg.io/api/games/${game.id}?token&key=${props.apiKey}`;
  
    React.useEffect(() => {
      async function getGames() {
        const url = `https://api.rawg.io/api/collections/2023-top-must-plays/feed?token&key=${props.apiKey}`
        // const url = `https://api.rawg.io/api/games?genres=racing&token&key=${props.apiKey}`
        fetch(url)
        .then((res) => res.json())
        .then((data) => data.results)
        .then((data) => data.map((game) => game.game))
        .then((data) => setPopular(data));
      }
      getGames();
    }, []);

    React.useEffect(() => {
        async function getGames() {
            // const url = `https://api.rawg.io/api/collections/lists/popular?token&key=${props.apiKey}`
          const url = `https://api.rawg.io/api/collections/steam-85/feed?token&key=${props.apiKey}`
          // const url = `https://api.rawg.io/api/games?genres=racing&token&key=${props.apiKey}`
          fetch(url)
          .then((res) => res.json())
          .then((data) => data.results)
          .then((data) => data.map((game) => game.game))
          .then((data) => setRecommended(data));
        }
        getGames();
      }, []);

    //console.log(allGames);
    
    return (
        <div className="home">
            <Hero 
            img={popular.length > 0 ? popular[0].background_image : popular}
            game={popular[0] && popular[0]}
            user={props.user}
            />
            <Sidebar 
                apiKey={props.apiKey}
                user={props.user}
            />
            {popular.length > 0 && <div className="all-game-rows">
                <GameRow 
                title="Popular"
                gameList={popular.slice(0, 12)}
                user={props.user}
                setUser={props.setUser}
                />
                <GameRow 
                title="Recommended"
                gameList={recommended.slice(0, 12)}
                user={props.user}
                setUser={props.setUser}
                />
            </div>}
        </div>
    )
}