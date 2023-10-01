import './styles/main.css';
import './styles/Colors.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocation, useParams } from 'react-router-dom';

//component imports
import Nav from './Nav';
import Sidebar from './Sidebar';
import Hero from './Hero';
import GameRow from './GameRow';

function App() {

  const key = "6edf5284267f4b93812855603bb5435a";
  const cartHistory = useLocation();

  const [allGames, setAllGames] = React.useState([])
  // const page = useParams();
  // console.log("PAGE", page);

  React.useEffect(() => {
    async function getGames() {
      const url = `https://api.rawg.io/api/games?token&key=${key}`
      fetch(url)
      .then((res) => res.json())
      .then((data) => setAllGames(data.results));
    }

    getGames();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Hero 
        img={allGames.length > 0 ? allGames[4].background_image : allGames}
      />
      <Sidebar />
      <div className="game-row-container">
        <GameRow 
          gameList={allGames.slice(0, 10)}
        />
        <GameRow 
          gameList={allGames.slice(10, 20)}
        />
      </div>
    </div>
  )
}

export default App
