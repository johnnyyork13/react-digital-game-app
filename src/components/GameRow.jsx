import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/Colors.css';
import './styles/main.css';
import SmallCard from './SmallCard';

export default function GameRow(props) {

    const [slidePosition, setSlidePosition] = React.useState(0)

    const style = {
        display: "grid",
        gridTemplateColumns: `repeat(${props.gameList.length}, 250px)`
    }

    function slideshow(e) {
        const adjustment = 100;
        const min = 0;
        const max = -1800;
        if (e.target.name === "left") {
            setSlidePosition((prev) => prev + adjustment > min ? prev : prev + adjustment);
        } else if (e.target.name === "right") {
            setSlidePosition(function(prev) {
                return prev - adjustment < max ? prev : prev - adjustment;
            })
        }
    }

    const games = props.gameList.map(function(game, index) {
        //console.log(game);
        return <SmallCard
                    key={index}
                    game={game}
                    position={slidePosition}
                    user={props.user}
                    setUser={props.setUser}
                />;
    })

    return (
        <div className="game-row-container">
            <h2>{props.title}</h2>
            <div className="game-row" style={style}>
                <button className="left-btn" onClick={slideshow} name="left">{`<`}</button>
                {games}
                <button className="right-btn" onClick={slideshow} name="right">{'>'}</button>
            </div>
        </div>
    )
}