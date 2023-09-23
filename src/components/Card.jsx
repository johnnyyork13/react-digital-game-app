import React from 'react';
import '../styles/Card.css';
import '../styles/Colors.css';

export default function Card(props) {
    const [cardData, setCardData] = React.useState([]);

    const style = {
        backgroundImage: `url(${props.data.background_image})`,
    }
    // React.useEffect(() => {
    //     async function getCardInfo() {
    //         console.log(props.data);
    //         const url = `https://api.rawg.io/api/games/${props.data.id}?token&key=${props.apiKey}`
    //         fetch(url)
    //         .then((res) => res.json())
    //         .then((data) => setCardData(data));
    //     }
    //     getCardInfo();
    // }, []);
    
    return (
        <div style={style} className="card" onClick={() => props.handleCardClick(props.data)}>
            <div className="card-overlay">
                <p>{props.data.name}</p>
            </div>
            {/* <img src={props.data.background_image} /> */}
        </div>
    )
}