
const getVideoGameById = require("../controllers/getVideoGamesById");

// 📍 GET | /videogames/:idVideogame
// Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con 
//la información pedida en el detalle de un videojuego.El videojuego es recibido por parámetro (ID).
// Tiene que incluir los datos del género del videojuego al que está asociado.
// Debe funcionar tanto para los videojuegos de la API como para los de la base de datos.


const getVideoGameByIdHandler = async (req, res) => {

    const {id} = req.params;
    
    const source = isNaN(id) ? 'bdd' : 'api';

    try {
        const videoGameById = await getVideoGameById(id, source);
        res.status(200).json(videoGameById);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
};

module.exports = getVideoGameByIdHandler;
