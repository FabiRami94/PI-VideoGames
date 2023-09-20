import { GET_GAMES, GET_GAMES_BY_NAME, RESET_GAMES_BY_NAME } from "./actions/actionsTypes";

const initialState = {
    videoGames: [],
    videoGamesByName: [],
}

function rootReducer (state = initialState, action) {
    switch(action.type){
        case GET_GAMES:
            return {...state, videoGames: action.payload};
        case GET_GAMES_BY_NAME:
            return {...state, videoGamesByName: [action.payload, ...state.videoGamesByName]};
        case RESET_GAMES_BY_NAME:
            return {...state, videoGamesByName: action.payload};
        default: 
            return {...state}
    }
}

export default rootReducer;
