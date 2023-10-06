import React from 'react';
import './styles/main.css';
import { Link } from 'react-router-dom';

export default function Hero(props) {

    const style = {
        backgroundImage: `url(${props.img})`
    }

    let title = props.game && props.game.name.split(" ").join('');

    return (
        <Link 
            className="hero" style={style}
            to={`/game/${title}`}
            state={{
                ...props.user,
                currentGame: props.game
            }}
        >
        </Link>
    )
}