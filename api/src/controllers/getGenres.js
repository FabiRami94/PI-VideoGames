require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const {Genre} = require('../db')

// 📍 GET | /genres
// Obtiene un arreglo con todos los géneros existentes de la API.
// En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los géneros 
// que encuentres en la API.
// Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos 
// de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

const getGenres = async () => {

    const genreInfo = []
  
    const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const {results} = response.data;
    
    if(results){ 
        results.forEach((genre) => {
            genreInfo.push({
                name: genre.name, 
            });
        });
    }

    await Genre.bulkCreate(genreInfo);

    return genreInfo;
};

module.exports = getGenres;

