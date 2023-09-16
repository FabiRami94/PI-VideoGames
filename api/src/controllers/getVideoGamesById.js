require('dotenv').config();
const {URL_BASE, API_KEY} = process.env;
const axios = require('axios');

// 📍 GET | /videogames/:idVideogame
// Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con 
//la información pedida en el detalle de un videojuego.El videojuego es recibido por parámetro (ID).
// Tiene que incluir los datos del género del videojuego al que está asociado.
// Debe funcionar tanto para los videojuegos de la API como para los de la base de datos.


const getVideoGamesById = async (req, res) => {
    const {id} = req.params;
    
    try {
        const response = await axios.get(`${URL_BASE}/${id}?key=${API_KEY}`);
        const data = response.data;
        if(data.name){ 
            videoGame = {
                id: data.id,
                name: data.name,
                background_image: data.background_image,
                background_image_additional: data.background_image_additional,
                platforms: data.platforms.map((platform) => platform.platform.name),
                description: data.description,
                released: data.released,
                rating: data.rating,
                genres: data.genres.map((genre) => genre.name),
                website: data.website,
            };
            res.status(200).json(videoGame);
        } else{
            res.status(404).json({message: 'not found'})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};


module.exports = getVideoGamesById;