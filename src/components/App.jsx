import './styles/main.css';
import './styles/Colors.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocation, useParams, Navigate, Outlet } from 'react-router-dom';

//component imports
import Nav from './Nav';
import Cart from './Cart';
import Home from './Home';
import Gamepage from './Gamepage';
import Footer from './Footer';

function App() {

  const key = "367870d561b44d5fbcf3e024eed11f3e";
  const transferUser = useLocation();
  const page = useParams();

  const [openCart, setOpenCart] = React.useState(false);

  const [user, setUser] = React.useState(function(){
    return {
      currentGame: transferUser.state && transferUser.state.currentGame ? transferUser.state.currentGame : {},
      cart: transferUser.state && transferUser.state.cart ? transferUser.state.cart : [],
      wishList: transferUser.state && transferUser.state.wishList ? transferUser.state.wishList : [],
      apiKey: key
    }
  });

  return (
    <div className="App">
      <Nav
        user={user}
        cartLength={user.cart.length}
        setOpenCart={setOpenCart}
        apiKey={key}
      />
      {/* {openCart && <Cart 
        setOpenCart={setOpenCart}
        setUser={setUser}
        user={user}
        // setFireRender={setFireRender}
      />} */}
      <Home 
        user={user}
        setUser={setUser}
        apiKey={key}
      />
      <Footer />
    </div>
  )
}

export default App
