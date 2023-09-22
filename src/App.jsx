import './styles/App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import Card from './components/Card';
import './styles/Colors.css';

function App() {

  const [games, setGames] = React.useState(null);
  const key = "6edf5284267f4b93812855603bb5435a";

  React.useEffect(() => {
    async function getGames(){
      const url = `https://api.rawg.io/api/platforms?token&key=${key}`
      fetch(url)
      .then((res) => res.json())
      .then((data) => setGames(data));
    }
    getGames();
  }, []);

  const cardList = games ? games.results.map(function(game) {
    return <Card data={game} apiKey={key}/>
    }) : [];

  return (
    <div className="App">
      <Nav />
      <div className="main-section">
        <Sidebar />
        <div className="card-container">
        {cardList}
        </div>
      </div>
    </div>
  )
}

export default App
