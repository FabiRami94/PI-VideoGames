const createVideoGame = require( "../controllers/createVideoGame");

// 📍 POST | /videogames
// Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus 
// géneros solicitados.
// Toda la información debe ser recibida por body.
// Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros 
// indicados (al menos uno).

const createVideoGamesHandler = async (req, res) => {
    
    try {
        const {name, description, platforms, background_image, released, rating, genres} = req.body;
        
        if(!name || !description || !platforms || !background_image  || !released  || !rating || !genres){
            throw new Error('Data Missing')}
        
        const newVideoGame = await createVideoGame(
            name, description, platforms, background_image, released, rating, genres
        );

        res.status(201).json(newVideoGame);      
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};

module.exports = createVideoGamesHandler;