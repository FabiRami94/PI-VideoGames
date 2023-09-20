import { GET_GAMES, GET_GAMES_BY_NAME, RESET_GAMES_BY_NAME } from "./actionsTypes";
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
    return async function (dispatch){
        dispatch({
            type: RESET_GAMES_BY_NAME, payload: []
        });
    }
}
