require('dotenv').config();
const {URL_BASE, API_KEY} = process.env;
const axios = require('axios');

// 📍 GET | /videogames
// Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información.

const getVideoGames = async (req, res) => {

    try {
        let pageNumber = 1;
        const gamesInfo = [];
    
        while (pageNumber <= 5) {
          const response = await axios.get(`${URL_BASE}?key=${API_KEY}&page=${pageNumber}`);
          const { results } = response.data;
    
          if (results && results.length > 0) {
            results.forEach((game) => {
              gamesInfo.push({
                id: game.id,
                name: game.name,
                background_image: game.background_image,
                platforms: game.platforms.map((platform) => platform.name),
                released: game.released,
                rating: game.rating,
                genres: game.genres.map((genre) => genre.name)
              });
            });
            pageNumber++;
          } else {
            break;
          }
        }   
        res.status(200).json(gamesInfo);
        } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = getVideoGames;