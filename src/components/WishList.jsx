import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Nav from './Nav';
import WishListItem from './WishListItem';
import Footer from './Footer';
import GameRow from './GameRow';
import './styles/WishList.css';

export default function Wishlist(props) {

    let checkState = useLocation();
    const [user, setUser] = React.useState({...checkState.state});
    const [openCart, setOpenCart] = React.useState(false);

    //console.log(user.wishList)

    const wishlistMapped = user.wishList.map((item) => {
        return <WishListItem 
                    key={uuidv4()}
                    game={item}
                    user={user}
                    setUser={setUser}
                    // handleRemoveItem={handleRemoveItem}
                />
    })

    return (
        <div className="wishList-container">
            <Nav 
                cartLength={user.cart.length}
                user={user}
                setOpenCart={setOpenCart}
                apiKey={user.apiKey}
            />
            <h2 className="wishList-header">My Wishlist</h2>
            {user.wishList.length > 0 ? <div className="wishList-item-container-all">
                {wishlistMapped}
            </div> : <div className="wishList-empty-text">Your wishlist is empty... <br></br>Click "Browse" to search for games</div>}
            <Footer />
        </div>
    )
}