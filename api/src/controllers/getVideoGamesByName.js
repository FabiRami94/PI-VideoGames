require('dotenv').config();
const {URL_BASE, API_KEY} = process.env;
const axios = require('axios');

const getVideoGamesByName = (req, res) => {
    const {name} = req.query;
    console.log(name)

    axios.get(`${URL_BASE}/${name}?key=${API_KEY}`)
    .then(({data}) => {
        if(data.name){
            const info = {
                name: data.name,
                description: data.description,
                released: data.released,
                background_image: data.background_image,
                background_image_additional: data.background_image_additional,
                website: data.website,  
            };
            res.status(200).json(info);
        } else {
            res.status(400).json({message: 'not found'})
        }
    }).catch((error) => {
        res.status(500).json({message: error.message})
    })
};

module.exports = getVideoGamesByName;