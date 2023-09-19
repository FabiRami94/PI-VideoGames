import { GET_GAMES, GET_GAMES_BY_NAME } from "./actionsTypes";
import axios from 'axios';

export const getVideoGames = () => {
    return async function (dispatch){

        const videoGames = (await axios.get('http://localhost:3001/videogames')).data;

        dispatch({type: GET_GAMES, payload: videoGames});
    }

};

export const getVideoGamesByName = () => {
    return async function (dispatch){

        dispatch({type: GET_GAMES_BY_NAME, })
    }
}
