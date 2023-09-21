const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getVideoGamesHandler = require('../handlers/getVideoGamesHandler');
const getGenresHandler = require('../handlers/getGenresHandler');
const createVideoGamesHandler = require('../handlers/createVideoGameHandler');
const getVideoGameByIdHandler = require('../handlers/getVideoGameByIdHandler');

const router = Router();

// Configurar los routers

// Ejemplo: router.use('/auth', authRouter);

router.post('/createvideogame', createVideoGamesHandler);

router.get('/genres', getGenresHandler);

router.get('/videogames', getVideoGamesHandler);

router.get('/videogame/:id', getVideoGameByIdHandler);

module.exports = router;
