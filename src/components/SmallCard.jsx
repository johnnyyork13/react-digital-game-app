import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import './styles/main.css';
import './styles/SmallCard.css';

export default function SmallCard(props) {

    const style = {
        // transitionProperty: "transform",
        // transitionDuration: '0.5s',
        // transitionTimingFunction: 'ease-in-out',
        backgroundImage: `url(${props.game.background_image})`,
        transform: `translateX(${props.position}px)`
    }

    //console.log("SMALLCARD STATE", props.game);

    let title = props.game.name.split(" ").join('');

    return (
        <Link 
            to={`/game/${title}`} 
            className="small-card" 
            style={style} 
            state={{
                ...props.user,
                currentGame: props.game,
            }} 
        />
    )
}