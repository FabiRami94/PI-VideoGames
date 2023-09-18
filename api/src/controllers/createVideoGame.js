const {Videogame , Genre} = require('../db');

// 📍 POST | /videogames
// Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus 
// géneros solicitados.
// Toda la información debe ser recibida por body.
// Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros 
// indicados (al menos uno).

const createVideoGame = async (name, description, platforms, image, released, rating, genre) => {
  
    const newVideoGame = await Videogame.create({
        name, description, platforms, image, released, rating
    });

    await newVideoGame.addGenre(genre);

    return newVideoGame;
    
};

module.exports = createVideoGame;
