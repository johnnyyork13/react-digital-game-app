import './styles/main.css';
import './styles/Colors.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocation, useParams, Navigate } from 'react-router-dom';

//component imports
import Nav from './Nav';
import Sidebar from './Sidebar';
import Hero from './Hero';
import GameRow from './GameRow';
import Cart from './Cart';

function App() {

  // const page = useParams();
  // console.log("PAGE", page);

  const key = "6edf5284267f4b93812855603bb5435a";
  const transferUser = useLocation();

  const [user, setUser] = React.useState(function(){
    return {
      currentGame: transferUser.state && transferUser.state.currentGame ? transferUser.state.currentGame : {},
      cart: transferUser.state && transferUser.state.cart ? transferUser.state.cart : [],
      wishList: transferUser.state && transferUser.state.wishList ? transferUser.state.wishList : []
    }
  });

  const [allGames, setAllGames] = React.useState([])
  const [openCart, setOpenCart] = React.useState(false);
  const [fireRender, setFireRender] = React.useState(false);

  React.useEffect(() => {
    if (transferUser.state) {
      setUser(() => ({
        ...transferUser.state
      }))
    }
  }, [fireRender])

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
      <Nav
        user={user}
        cartLength={user.cart.length}
        setOpenCart={setOpenCart}
      />
      <Hero 
        img={allGames.length > 0 ? allGames[4].background_image : allGames}
        game={allGames[4] && allGames[4]}
        user={user}
      />
      <Sidebar />
      <div className="all-game-rows">
        <GameRow 
          title="Popular"
          gameList={allGames.slice(0, 10)}
          user={user}
        />
        <GameRow 
          title="Recommended"
          gameList={allGames.slice(10, 20)}
          user={user}
        />
      </div>
      {openCart && <Cart 
          setOpenCart={setOpenCart}
          setUser={setUser}
          user={user}
          setFireRender={setFireRender}
      />}
    </div>
  )
}

export default App
