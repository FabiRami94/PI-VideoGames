const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getVideoGamesById = require('../controllers/getVideoGamesById');
const getVideoGamesByName = require('../controllers/getVideoGamesByName');
const getGenres = require('../controllers/getGenres');
const getVideoGames = require('../controllers/getVideoGames');
const createVideoGames = require('../controllers/createVideoGames');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', (req, res) => {
    res.send('Hola aprende perro...')
})

router.post('/createvideogame', createVideoGames);

router.get('/genres', getGenres);

router.get('/videogames', getVideoGames);

router.get('/videogames/:id', getVideoGamesById);

router.get('/videogames/?name', getVideoGamesByName);



module.exports = router;
