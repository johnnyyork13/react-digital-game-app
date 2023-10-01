import React from 'react';
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

    return (
        <div className="small-card" style={style}>
            
        </div>
    )
}