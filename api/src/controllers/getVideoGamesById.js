require('dotenv').config();
const {URL_BASE, API_KEY} = process.env;
const axios = require('axios');
const {Videogame , Genre} = require('../db');

// 📍 GET | /videogames/:idVideogame
// Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con 
//la información pedida en el detalle de un videojuego.El videojuego es recibido por parámetro (ID).
// Tiene que incluir los datos del género del videojuego al que está asociado.
// Debe funcionar tanto para los videojuegos de la API como para los de la base de datos.


const getVideoGamesById = async (id, source) => {
    // FALTA GÉNERO DE BASE DE DATOS!!
    const response = (source === 'api') ?
        (await axios.get(`${URL_BASE}/${id}?key=${API_KEY}`)).data :
        await Videogame.findByPk(id);

        if(response.name){ 
            VideoG = {
                id: response.id,
                name: response.name,
                background_image: response.background_image,
                background_image_additional: response.background_image_additional,
                platforms: response.platforms.map((platform) => platform.platform.name),
                description: response.description,
                released: response.released,
                rating: response.rating,
                genres: response.genres.map((genre) => genre.name),
                website: response.website,
            };
        }

        return VideoG;
};

module.exports = getVideoGamesById;