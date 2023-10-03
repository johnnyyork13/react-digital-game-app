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
import Cart from './Cart';

function App() {

  // const page = useParams();
  // console.log("PAGE", page);

  const key = "6edf5284267f4b93812855603bb5435a";
  let checkState = useLocation();

  const [state, setState] = React.useState(function(){
    return {
      currentGame: checkState.state && checkState.state.currentGame ? checkState.state.currentGame : {},
      cart: checkState.state && checkState.state.cart ? checkState.state.cart : []
    }
  });

  const [allGames, setAllGames] = React.useState([])
  const [openCart, setOpenCart] = React.useState(false);

  React.useEffect(() => {
    async function getGames() {
      const url = `https://api.rawg.io/api/games?token&key=${key}`
      fetch(url)
      .then((res) => res.json())
      .then((data) => setAllGames(data.results));
    }

    getGames();
  }, []);

  function handleRemoveCartItem(item) {
    console.log(item);
  }
  // console.log(state);

  return (
    <div className="App">
      <Nav
        cartLength={state.cart.length}
        setOpenCart={setOpenCart}
      />
      <Hero 
        img={allGames.length > 0 ? allGames[4].background_image : allGames}
      />
      <Sidebar />
      <div className="all-game-rows">
        <GameRow 
          title="Recommended"
          gameList={allGames.slice(0, 10)}
        />
        <GameRow 
          title="Popular"
          gameList={allGames.slice(10, 20)}
        />
      </div>
      {openCart && <Cart 
          setOpenCart={setOpenCart}
          cart={state.cart}
          handleRemoveCartItem={handleRemoveCartItem}
      />}
    </div>
  )
}

export default App
