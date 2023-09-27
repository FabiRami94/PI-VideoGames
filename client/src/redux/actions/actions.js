import { 
    GET_GAMES,
    GET_GAMES_BY_NAME, 
    RESET_GAMES_BY_NAME, 
    FILTER_GAMES_BY_GENRE,
    FILTER_GAMES_BY_CREATOR,
    FILTER_GAMES_BY_RATING,
    FILTER_GAMES_BY_ALPHABET,
} from "./actionsTypes";
import axios from 'axios';

export const getVideoGames = () => {
    return async function (dispatch){

        const videoGames = (await axios.get('http://localhost:3001/videogames')).data;

        dispatch({type: GET_GAMES, payload: videoGames});
    }
};

export const getVideoGamesByName = (name) => {
    return async function (dispatch){

        let nameTransformed = name.toLowerCase();
   
            const videoGamesByName = (await axios.get(
              `http://localhost:3001/videogames/?name=${nameTransformed}`)).data;  

        dispatch({type: GET_GAMES_BY_NAME, payload: videoGamesByName});
    }
}

export const resetGamesByName = () => {
    return {
            type: RESET_GAMES_BY_NAME, payload: []
    };
}


export const filterGamesByGenre = (genre) => {
    return {
        type: FILTER_GAMES_BY_GENRE, payload: genre
    };
}

export const filterGamesByCreator = (created) => {
    return {
        type: FILTER_GAMES_BY_CREATOR, payload: created
    };
}

export const filterGamesByRating = (rating) => {
    return {
        type: FILTER_GAMES_BY_RATING, payload: rating
    };
}

export const filterGamesByAlphabet = (name) => {
    return {
        type: FILTER_GAMES_BY_ALPHABET, payload: name
    };
}
