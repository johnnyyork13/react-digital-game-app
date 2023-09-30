import React from 'react';
import './styles/Colors.css';
import './styles/main.css';

export default function GameRow(props) {

    //function that makes game list

    return (
        <div className="game-row">
            <h2>Row Header</h2>
            <div className="game-row-games">
                insert game list here
            </div>
        </div>
    )
}