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

    try {
        const videoGames = (await axios.get('http://localhost:3001/videogames')).data;
        
        if (videoGames.length === 0) {
            window.alert('there is no connection with the api.');
        } else {
            dispatch({type: GET_GAMES, payload: videoGames});       
        }
    } catch (error) {
        window.alert({error: error.message});
    }

    }
};

export const getVideoGamesByName = (name) => {
    return async function (dispatch){

        let nameTransformed = name.toLowerCase();

        try {
            const videoGamesByName = (await axios.get(
                `http://localhost:3001/videogames/?name=${nameTransformed}`)).data;
    
            if (videoGamesByName.length === 0) {
                window.alert('No video games with that name were found.');
            } else {
                dispatch({type: GET_GAMES_BY_NAME, payload: videoGamesByName});
            }
        } catch (error) {
            console.error('Error when searching for video games by name:', error);
            window.alert('An error occurred when searching for video games by name.');
        }
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
