import React from 'react';
import './styles/main.css';

export default function Hero(props) {

    const style = {
        backgroundImage: `url(${props.img})`
    }

    return (
        <div className="hero" style={style}>
            
        </div>
    )
}