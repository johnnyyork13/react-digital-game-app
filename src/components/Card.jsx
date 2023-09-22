import React from 'react';
import '../styles/Card.css';
import '../styles/Colors.css';

export default function Card(props) {
    const [cardData, setCardData] = React.useState([]);

    React.useEffect(() => {
        async function getCardInfo() {
            console.log(props.data);
            const url = `https://api.rawg.io/api/games/${props.data.id}?token&key=${props.apiKey}`
            fetch(url)
            .then((res) => res.json())
            .then((data) => setCardData(data));
        }
        getCardInfo();
    }, []);


    function handleClick(e) {
        console.log(cardData);
    }
    
    return (
        <div className="card" onClick={handleClick}>
            <div className="card-overlay">
                
            </div>
            <img src={props.data.image_background} />
        </div>
    )
}