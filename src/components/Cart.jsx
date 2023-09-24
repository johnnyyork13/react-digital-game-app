import React from 'react';
import '../styles/Cart.css';
import '../styles/Colors.css';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import GameDescription from './GameDescription';
import Sidebar from './Sidebar';
import CartItem from './CartItem';

export default function Cart() {

    const state = useLocation();

    const [cart, setCart] = React.useState(state.state.cart);
    const [currentGame, setCurrentGame] = React.useState(cart[0]);

    //console.log("CART", cart);
    const showGames = cart ? cart.map(function(game) {
        //console.log("game", game);
        return (<CartItem
                    key={uuidv4()}
                    onClick={() => handleClickGameInCart(game)}
                    game={game}
                />)
     }) : [];

    function handleClickGameInCart(game) {
        removeGameFromCart(game);
    }

    function removeGameFromCart(game) {
        setCart((prev) => prev.filter((e) => e.name !== game.name && e));
    }

    return (
        <div className="cart">
            <Nav 
                cart={cart}
            />
            <div className="main-section">
                <Sidebar
                    type="cart"
                />
                <div className="cart-details">
                    {/* <GameDescription 
                        description={currentGame.description}
                    /> */}
                    {showGames}
                    {/* <Link to="/" state={{cart: cart}}>Back Home</Link> */}
                </div>
            </div>
            
            
        </div>
    )
}