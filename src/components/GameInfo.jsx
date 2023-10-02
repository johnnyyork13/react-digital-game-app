import React from 'react';
import './styles/GameInfo.css';

export default function GameInfo(props) {

    const [game, setGame] = React.useState({});
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        async function getGame() {
            const url = `https://api.rawg.io/api/games/${props.id}?token&key=${props.apiKey}`;
            fetch(url)
            .then((res) => res.json())
            .then((data) => setGame(data))
            .catch((err) => setError(err));
        }
        getGame();
    }, [])

    const style = {
        backgroundImage: `url(${game.background_image})`
    }

    console.log(game);

    return (
        <div className="game-info-container">
            <div className="game-info-image" style={style}></div>
            <div className="game-info-text">
                <p>{game.description_raw}</p>
            </div>
        </div>
    )
}