import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav';
import WishListItem from './WishListItem';
import GameRow from './GameRow';
import './styles/WishList.css';

export default function Wishlist(props) {

    const checkState = useLocation();
    const [user, setUser] = React.useState({...checkState.state});
    const [openCart, setOpenCart] = React.useState(false);


    const wishlistMapped = user.wishList.map((item) => {
        return <WishListItem game={item}/>
    })

    return (
        <div className="wishlist-container">
            <Nav 
                cartLength={user.cart.length}
                user={user}
                setOpenCart={setOpenCart}
                apiKey={user.apiKey}
            />
            {wishlistMapped}
        </div>
    )
}