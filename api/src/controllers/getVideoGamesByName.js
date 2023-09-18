
require('dotenv').config();
const {URL_BASE, API_KEY} = process.env;
const axios = require('axios');
const {Videogame, Genre} = require('../db');

// 📍 GET | /videogames/name?="..."
// Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el videojuego, debe mostrar un mensaje adecuado.
// Debe buscar tanto los de la API como los de la base de datos.

const getVideoGamesByName = async (name) => {

    let pageNumber = 1;
    const gamesInfo = [];

    const databaseGameByName = await Videogame.findAll({where:{name: name}});

    while(pageNumber <= 10){
        const apiVideoGames = (
          await axios.get(`${URL_BASE}?key=${API_KEY}&page=${pageNumber}`)).data.results
        
        if(apiVideoGames && apiVideoGames.length > 0){
          apiVideoGames.forEach((game) => {
            gamesInfo.push({
                id: game.id,
                name: game.name,
                background_image: game.background_image,
                genres: game.genres.map((genre) => genre.name),
                created: false,
            });
          });
          pageNumber ++;
        } else {
          break;
        }
        };

    const filteredApi = gamesInfo.filter(
        (game) => game.name.toLowerCase().includes(name.toLowerCase()));
    
    return [...databaseGameByName, ...filteredApi];
};

module.exports = getVideoGamesByName;

