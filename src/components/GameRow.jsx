import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/Colors.css';
import './styles/main.css';
import SmallCard from './SmallCard';

export default function GameRow(props) {

    //function that makes game list
    // const games = props.gameList.map((game, index) => {(
    //     <SmallCard 
    //         key={uuidv4()}
    //         game={game[index]}
    //     />
    // )})
    const games = props.gameList.map(function(game) {
        //console.log(game);
        return <SmallCard game={game}/>;
    })

    return (
        <div className="game-row">
            {games}
        </div>
    )
}