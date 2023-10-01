import React from 'react';
import './styles/main.css';
import './styles/SmallCard.css';

export default function SmallCard(props) {

    console.log(props.game);

    const style = {
        backgroundImage: `url(${props.game.background_image})`
    }

    return (
        <div className="small-card" style={style}>
            
        </div>
    )
}