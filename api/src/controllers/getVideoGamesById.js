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
    
    const response = (source === 'api') ?
        (await axios.get(`${URL_BASE}/${id}?key=${API_KEY}`)).data :
        (await Videogame.findByPk(id, {
            include: [
                {
                    model: Genre,
                    attributes: ["genres"],
                    through: { attributes: [] },
                },
            ],
        })).dataValues;

        
        if(source === 'api' && response.name){ 
            console.log(response.name);
            let VideoGApi = {
                id: response.id,
                name: response.name,
                // background_image_additional: response.background_image_additional,
                platforms: response.platforms.map((platform) => platform.platform.name),
                description: response.description,
                background_image: response.background_image,
                released: response.released,
                rating: response.rating,
                genres: response.genres,
                genres: response.genres.map((genre) => genre.name),
                website: response.website,
            };
            return VideoGApi;
        }
        
        let generalGenre = response.Genres.map((genre) => genre.dataValues);

        if(source === 'bdd' && response.name){ 
            console.log(response.name);
            let VideoGBdd = {
                id: response.id,
                name: response.name,
                // background_image_additional: response.background_image_additional,
                platforms: response.platforms.map((platform) => platform),
                description: response.description,
                background_image: response.background_image,
                released: response.released,
                rating: response.rating,
                genres: generalGenre.map((genre) => genre.genres),
                website: response.website,
            };
            return VideoGBdd;
        }
        
};

module.exports = getVideoGamesById;