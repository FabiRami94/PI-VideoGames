const {Videogame , Genre} = require('../db');

// 📍 POST | /videogames
// Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus 
// géneros solicitados.
// Toda la información debe ser recibida por body.
// Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros 
// indicados (al menos uno).

const createVideoGames = async (req, res) => {
    try {
        const {name, description, platforms, image, released, rating} = req.body;

        const newVideoGame = await Videogame.create({
            name, description, platforms, image, released, rating});
    
        res.status(200).json(newVideoGame);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};

module.exports = createVideoGames;