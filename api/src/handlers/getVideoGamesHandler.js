 
const getVideoGames = require('../controllers/getVideoGames');
const getVideoGamesByName = require('../controllers/getVideoGamesByName');

const getVideoGamesHandler = async (req, res) => {
  
  try {
    const {name} = req.query;

    const result = (name) ? await getVideoGamesByName(name) : await getVideoGames();

    res.status(200).json(result);
  
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

module.exports = getVideoGamesHandler;