import './styles/App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import Card from './components/Card';
import CardModal from './components/CardModal';
import Cart from './components/Cart';
import { useLocation, useParams } from 'react-router-dom';
import './styles/Colors.css';

function App() {

  const key = "6edf5284267f4b93812855603bb5435a";
  const cartHistory = useLocation();
  const page = useParams();
  console.log("PAGE", page);

  const [games, setGames] = React.useState(null);
  const [cart, setCart] = React.useState(function() {
    console.log("HISTORY", cartHistory);
    return cartHistory.state ? cartHistory.state.cart : [];
  })
  const [modal, setModal] = React.useState({
    show: false,
    data: []
  });

  React.useEffect(() => {
    async function getGames(){
      const url = `https://api.rawg.io/api/games?token&key=${key}`
      fetch(url)
      .then((res) => res.json())
      .then((data) => setGames(data))
    }
    getGames();
  }, []);

  const cardList = games ? games.results.map(function(game) {
    return <Card data={game} apiKey={key} key={uuidv4()} handleCardClick={handleCardClick}/>
    }) : [];


  function handleCardClick(data) {
    setModal({
      show: true,
      data: data
    })
  }

  function handleCloseModal() {
    setModal({
      show: false,
      data: []
    })
  }

  function handleAddToCart(data) {
    setCart((prev) => ([
      ...prev,
      data
    ]))
  }

  return (
    <div className="App">
      {modal.show && 
          <CardModal 
            data={modal.data}
            handleCloseModal={handleCloseModal}
            handleAddToCart={handleAddToCart}
            apiKey={key}
          />}
      <Nav
        cart={cart}
      />
      {page !== "cart" ? <div className="main-section">
        <Sidebar />
        <div className="card-container">
        {cardList}
        </div>
      </div> : 
      <Cart />}
    </div>
  )
}

export default App
