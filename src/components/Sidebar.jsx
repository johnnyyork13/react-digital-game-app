import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './styles/Colors.css';
import './styles/main.css';
import './styles/Sidebar.css';
import './styles/GameRow.css';

export default function Sidebar(props) {

    const [allGames, setAllGames] = React.useState([]);

    React.useEffect(() => {
        async function getGames() {
        //   const url = `https://api.rawg.io/api/games?token&key=${props.apiKey}`
          const url = `https://api.rawg.io/api/genres?token&key=${props.apiKey}`
          fetch(url)
          .then((res) => res.json())
          .then((data) => setAllGames(data.results));
        }
    
        getGames();
      }, []);

      //console.log(allGames);

      const linkElements = allGames.map((e, index) => {
        return <Link 
            key={uuidv4()}
            className="genre-btn"
            to={`/results/${e.slug}`}
            state={{
                ...props.user,
                genre: e.slug
            }}
        >{`${allGames[index].name}`}
        </Link>
      })

      return (
        <div className="sidebar">
            {/* <h2>Genres</h2> */}
            {linkElements}
        </div>
    )
}