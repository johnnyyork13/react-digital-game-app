import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import './styles/main.css';
import './styles/SmallCard.css';

export default function SmallCard(props) {

    let state = useLocation();

    const style = {
        // transitionProperty: "transform",
        // transitionDuration: '0.5s',
        // transitionTimingFunction: 'ease-in-out',
        backgroundImage: `url(${props.game.background_image})`,
        transform: `translateX(${props.position}px)`
    }

    let title = props.game.name.split(" ").join('');

    return (
        <Link 
            to={`/${title}`} 
            className="small-card" 
            style={style} 
            state={{
                currentGame: props.game, 
                cart: state.state.cart
            }} />
    )
}