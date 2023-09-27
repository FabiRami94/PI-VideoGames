const {Videogame , Genre} = require('../db');

// 📍 POST | /videogames
// Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus 
// géneros solicitados.
// Toda la información debe ser recibida por body.
// Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros 
// indicados (al menos uno).

const createVideoGame = async (name, description, platforms, background_image, released, rating, genres) => {

    const existingVideoGame = await Videogame.findOne({
        where: { name }
    });

    if (existingVideoGame) {
        throw new Error('The name of the video game already exists.');
    }

    const newVideoGame = await Videogame.create({
        name, description, platforms, background_image, released , rating 
    });

    genres.forEach(async(g) =>{
        let genresDB = await Genre.findAll({
            where: {genres: g},
        }); 
           
        await newVideoGame.addGenre(genresDB);
    })

    return newVideoGame;
};

module.exports = createVideoGame;
