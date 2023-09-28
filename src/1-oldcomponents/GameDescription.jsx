import React from 'react';

export default function GameDescription(props) {

    return (
        // <p className="modal-description" dangerouslySetInnerHTML={{__html: `${game.description}`}}></p>
        <div className="game-description" dangerouslySetInnerHTML={{__html: `${props.description}`}}>
            
        </div>
    )
}