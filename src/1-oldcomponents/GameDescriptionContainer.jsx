import React from 'react';
import GameDescription from './GameDescription';
import GameRating from './GameRating';

export default function GameDescriptionContainer(props) {

    return (
        <div className="game-description-container">
            <p className="modal-header">{props.game.name}</p>
            <GameDescription 
                description={props.game.description}
            />
            <GameRating 
                data={props.game}
            />
        </div>
    )
}