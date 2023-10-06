import React from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import Hero from './Hero';
import Sidebar from './Sidebar';
import GameRow from './GameRow';
import './styles/Home.css';

export default function Home(props) {

    const [allGames, setAllGames] = React.useState([])
    const [fireRender, setFireRender] = React.useState(false);
  
    React.useEffect(() => {
      async function getGames() {
        const url = `https://api.rawg.io/api/games?token&key=${props.apiKey}`
        // const url = `https://api.rawg.io/api/games?genres=racing&token&key=${props.apiKey}`
        fetch(url)
        .then((res) => res.json())
        .then((data) => setAllGames(data.results));
      }
  
      getGames();
    }, []);

    //console.log(allGames);

    return (
        <div className="home">
            <Hero 
            img={allGames.length > 0 ? allGames[4].background_image : allGames}
            game={allGames[4] && allGames[4]}
            user={props.user}
            />
            <Sidebar 
                apiKey={props.apiKey}
                user={props.user}
            />
            <div className="all-game-rows">
                <GameRow 
                title="Popular"
                gameList={allGames.slice(0, 10)}
                user={props.user}
                setUser={props.setUser}
                />
                <GameRow 
                title="Recommended"
                gameList={allGames.slice(10, 20)}
                user={props.user}
                setUser={props.setUser}
                />
            </div>
        </div>
    )
}