import React from 'react';
import './styles/Colors.css';
import './styles/main.css';
import './styles/Sidebar.css';
import './styles/GameRow.css';

export default function Sidebar(props) {

    return (
        <div className="sidebar">
            <h2>Genres</h2>
            <button class="genre-btn">Action</button>
            <button class="genre-btn">Adventure</button>
            <button class="genre-btn">Casual</button>
            <button class="genre-btn">Indie</button>
            <button class="genre-btn">MMORPG</button>
            <button class="genre-btn">Racing</button>
            <button class="genre-btn">Simulation</button>
            <button class="genre-btn">Sports</button>
            <button class="genre-btn">Strategy</button>
        </div>
    )
}