const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getVideoGamesById = require('../controllers/getVideoGamesById');
const getVideoGamesByName = require('../controllers/getVideoGamesByName');
const getGenres = require('../controllers/getGenres');
const getVideoGames = require('../controllers/getVideoGames');
const createVideoGamesHandler = require('../handlers/createVideoGameHandler');
// const createVideoGameController = require('../controllers/createVideoGameController');

const router = Router();

// Configurar los routers

// Ejemplo: router.use('/auth', authRouter);

router.post('/createvideogame', createVideoGamesHandler);

router.get('/genres', getGenres);

router.get('/videogames', getVideoGames);

router.get('/videogames/:id', getVideoGamesById);

// router.get('/videogames/?name', getVideoGamesByName);


module.exports = router;
