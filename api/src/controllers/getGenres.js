require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');

const getGenres = async (req, res) => {

    const genreInfo = []
    try {
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const {results} = response.data;
        if(results){ 
            results.forEach((genre) => {
                genreInfo.push({
                  id: genre.id,
                  name: genre.name, 
                });
              });
            res.status(200).json(genreInfo);
        } else{
            res.status(404).json({message: 'not found'})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports = getGenres;

