async function getGame(id) {
    const key = "6edf5284267f4b93812855603bb5435a";
    let game;
    const url = `https://api.rawg.io/api/games/${id}?token&key=${key}`;
    fetch(url)
    .then((res) => res.json())
    //.then(function(data) {console.log(data)})
    .then((data) => game = data);
    // .catch(() => game = "error");

    return game;
}

/////////////////////////////////////////////////////////////////////////////////
//Figure out how to resolve promises from an async function
/////////////////////////////////////////////////////////////////////////////////

async function getScreenshots(id) {

    const key = "6edf5284267f4b93812855603bb5435a";
    const url = `https://api.rawg.io/api/games/${id}/screenshots?token&key=${key}`;
    const req = await fetch(url);
    const res = await req.json();
    const data = await res.results;
    return data;
}

// async function getGames(link) {
//     const key = "6edf5284267f4b93812855603bb5435a";
//     let game;
//     // const url = `https://api.rawg.io/api/collections/lists/popular?token&key=${props.apiKey}`
//     const url = `https://api.rawg.io/api/collections/steam-85/feed?token&key=${key}`
//   // const url = `https://api.rawg.io/api/games?genres=racing&token&key=${props.apiKey}`
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => data.results)
//     .then((data) => data.map((game) => game.game))
//     .then((data) => game = data)
//     .catch(() => game = "error");

//     return game;
//     // .then((data) => setRecommended(data));
// }

export {getGame, getScreenshots};