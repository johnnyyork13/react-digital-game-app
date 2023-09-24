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
                    handleDeleteCartItem={handleDeleteCartItem}
                    handleAddCartItem={handleAddCartItem}
                    game={game}
                />)
     }) : [];

    function handleDeleteCartItem(game) {
        setCart((prev) => prev.filter((e) => e.name !== game.name && e));
    }

    function handleAddCartItem(game) {
        setCart(function(prev) {
            const copies = game.copies; 
            console.log("BEFORE", prev);
            return prev.map((e) => e.name === game.name ? {...e, copies: copies + 1} : e)
            
            console.log("AFTER", prev);
        })
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