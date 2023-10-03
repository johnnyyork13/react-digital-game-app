import React from 'react';
import './styles/Colors.css';
import './styles/main.css';
import './styles/Sidebar.css';
import './styles/GameRow.css';

export default function Sidebar(props) {

    return (
        <div className="sidebar">
            <h2>Genres</h2>
            <button className="genre-btn">Action</button>
            <button className="genre-btn">Adventure</button>
            <button className="genre-btn">Casual</button>
            <button className="genre-btn">Indie</button>
            <button className="genre-btn">MMORPG</button>
            <button className="genre-btn">Racing</button>
            <button className="genre-btn">Simulation</button>
            <button className="genre-btn">Sports</button>
            <button className="genre-btn">Strategy</button>
        </div>
    )
}