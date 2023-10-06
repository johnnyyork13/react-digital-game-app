import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Cart from './Cart';
import './styles/Wishlist.css';

export default function Wishlist(props) {

    const checkState = useLocation();
    const [user, setUser] = React.useState({...checkState.state});
    const [openCart, setOpenCart] = React.useState(false);

    return (
        <div className="wishlist-container">
            <Nav 
                cartLength={user.cart.length}
                user={user}
                setOpenCart={setOpenCart}
                apiKey={user.apiKey}
            />
            {/* {openCart && <Cart 
                setOpenCart={setOpenCart}
                setUser={setUser}
                user={user}
      />} */}
        </div>
    )
}