const {Videogame , Genre} = require('../db');

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