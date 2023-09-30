import React from 'react';
import './styles/Colors.css';
import './styles/main.css';
import './styles/Sidebar.css';
import './styles/GameRow.css';

export default function Sidebar(props) {

    return (
        <div className="sidebar">
            <h2>Genres</h2>
            <button type="genre-btn">Genre</button>
            <button type="genre-btn">Genre</button>
            <button type="genre-btn">Genre</button>
            <button type="genre-btn">Genre</button>
            <button type="genre-btn">Genre</button>
            <button type="genre-btn">Genre</button>
            <button type="genre-btn">Genre</button>
            <button type="genre-btn">Genre</button>
        </div>
    )
}