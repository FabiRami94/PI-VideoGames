import { 
    GET_GAMES,
    GET_GAMES_BY_NAME, 
    RESET_GAMES_BY_NAME, 
    FILTER_GAMES_BY_GENRE,
    FILTER_GAMES_BY_CREATOR,
    FILTER_GAMES_BY_RATING,
    FILTER_GAMES_BY_ALPHABET, 
} from "./actions/actionsTypes";

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
        case FILTER_GAMES_BY_GENRE:        
            let allGenres = [...state.videoGames, ...state.videoGamesByName].flat();
            let genres = allGenres.map((gen) => gen.genres);

            // allGenres.filter((game) => game.genres.some(() =>  action.payload));
           
            return {...state, videoGames: allGenres};
        case FILTER_GAMES_BY_CREATOR:
            return {...state};
        case FILTER_GAMES_BY_RATING:

            let gamesRating = [...state.videoGames, ...state.videoGamesByName].flat();

            if(action.payload === 'M'){
                gamesRating.sort((a, b) => b.rating - a.rating);
            } else if(action.payload === 'L'){
                gamesRating.sort((a, b) => a.rating - b.rating);
            } else if(action.payload === 'S'){
                gamesRating.sort((a, b) => b.id - a.id);
            }
            return {...state, videoGames: gamesRating};

        case FILTER_GAMES_BY_ALPHABET:

            let sortedCharacters = [...state.videoGames, ...state.videoGamesByName].flat();

            if (action.payload === 'A') {
                sortedCharacters.sort((a, b) => a.name.localeCompare(b.name)); 
            } else if (action.payload === 'D') {
                sortedCharacters.sort((a, b) => b.name.localeCompare(a.name));
            }
            return {...state, videoGames: sortedCharacters};
        default: 
            return {...state}
    }
}



export default rootReducer;
