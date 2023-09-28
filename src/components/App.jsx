import './styles/App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useLocation, useParams } from 'react-router-dom';

function App() {

  const key = "6edf5284267f4b93812855603bb5435a";
  const cartHistory = useLocation();
  // const page = useParams();
  // console.log("PAGE", page);

  // React.useEffect(() => {
  //   async function getGames(){
  //     const url = `https://api.rawg.io/api/games?token&key=${key}`
  //     fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setGames(data))
  //   }
  //   getGames();
  // }, []);


  return (
    <div className="App">
       
    </div>
  )
}

export default App
