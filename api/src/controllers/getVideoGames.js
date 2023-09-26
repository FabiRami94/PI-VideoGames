
require('dotenv').config();
const {URL_BASE, API_KEY} = process.env;
const axios = require('axios');
const {Videogame, Genre} = require('../db');

// 📍 GET | /videogames
// Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información.

const getVideoGames = async () => {

    let pageNumber = 1;
    const gamesInfo = [];

    const databaseVideoGames = await Videogame.findAll({
      include: [
        {
          model: Genre,
          attributes: ["genres"],
          through: { attributes: [] },
        },
    ],});
    
    const genresVideoGames = databaseVideoGames.map((game) => ({
      id: game.id,
      name: game.name,
      description: game.description,
      platforms: game.platforms,
      background_image: game.background_image,
      released: game.released,
      rating: game.rating,
      created: game.created,
      genres: game.Genres.map((genre) => genre.genres),
    }));

    gamesInfo.push(...genresVideoGames);
    
    while(pageNumber <= 5){
    const apiVideoGames = (
      await axios.get(`${URL_BASE}?key=${API_KEY}&page=${pageNumber}`)).data.results
    
    if(apiVideoGames && apiVideoGames.length > 0){
      apiVideoGames.forEach((game) => {
        gamesInfo.push({
          id: game.id,
          name: game.name,
          background_image: game.background_image,
          genres: game.genres.map((genre) => genre.name),
          rating: game.rating,
          created: false,
        });
      });
      pageNumber ++;
    } else {
      break;
    }
    };
    
    return [ ...gamesInfo];
};

module.exports = getVideoGames;
