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
    videoGamesGenres: [],
    videoGamesGenresByName: [],
    videoGamesOwn: [],
    videoGamesOwnByName: [],
}

function rootReducer (state = initialState, action) {
    switch(action.type){

        case GET_GAMES:
            return {...state, videoGames: action.payload, videoGamesGenres: action.payload,  
                videoGamesOwn: action.payload};

        case GET_GAMES_BY_NAME:
            return {...state, videoGamesByName: [action.payload, ...state.videoGamesByName],
                videoGamesGenresByName: [action.payload, ...state.videoGamesByName],
                videoGamesOwnByName: [action.payload, ...state.videoGamesByName]};
            
        case RESET_GAMES_BY_NAME:
            return {...state, videoGamesByName: action.payload};

        case FILTER_GAMES_BY_GENRE: 

            const filteredGenres = state.videoGamesGenres.filter((
                game) => game.genres.includes(action.payload)
            );
            
            const filteredGenresByName = state.videoGamesGenresByName.flat().filter((
                game) => game.genres.includes(action.payload)
            );

            if (action.payload === 'S') {
                window.alert('¡You must select a gender!');
                return state; 
            } 

            return {...state, videoGames: filteredGenres, videoGamesByName: filteredGenresByName
            };

        case FILTER_GAMES_BY_CREATOR:

            let filteredOwns = state.videoGamesOwn;
            let filteredOwnsByName = state.videoGamesOwnByName.flat();
            
            if(action.payload === 'true'){
                filteredOwns = filteredOwns.filter((
                    own) => own.created === true);
                    filteredOwnsByName = filteredOwnsByName.filter((
                        own) => own.created === true);
                        
                    } else if(action.payload === 'false'){
                        filteredOwns = filteredOwns.filter((
                            own) => own.created === false);
                            filteredOwnsByName = filteredOwnsByName.filter((
                                own) => own.created === false);     
                            } else if (action.payload === 'S') {
                                window.alert('¡You must select a creator!');
                                return state; 
                            } 
                        
            if (filteredOwnsByName.length < 1 && action.payload === 'true') {
                window.alert('No video games were found with that feature.');
            } else if (filteredOwns.length < 1 && action.payload === 'false'){
                window.alert('No video games were found with that feature.');
            }
   
            return {...state, videoGames: filteredOwns, videoGamesByName: filteredOwnsByName};

        case FILTER_GAMES_BY_RATING:

            let gamesRating = [...state.videoGames];
            let gamesRatingByName = [...state.videoGamesByName].flat();

            if(action.payload === 'M'){
                gamesRating.sort((a, b) => b.rating - a.rating);
                gamesRatingByName.sort((c, d) => d.rating - c.rating);
            } else if(action.payload === 'L'){
                gamesRating.sort((a, b) => a.rating - b.rating);
                gamesRatingByName.sort((c, d) => c.rating - d.rating);
            } else if(action.payload === 'S'){
                window.alert('¡You must select a rating, they will be organized by Id!');
                gamesRating.sort((a, b) => b.id - a.id);
                gamesRatingByName.sort((c, d) => c.id - d.id);
            }
        
            return {...state, videoGames: gamesRating, videoGamesByName: gamesRatingByName};

        case FILTER_GAMES_BY_ALPHABET:

            let sortedCharacters = [...state.videoGames];
            let sortedCharactersByName = [...state.videoGamesByName].flat();

            if (action.payload === 'A') {
                sortedCharacters.sort((a, b) => a.name.localeCompare(b.name)); 
                sortedCharactersByName.sort((c, d) => c.name.localeCompare(d.name));
            } else if (action.payload === 'D') {
                sortedCharacters.sort((a, b) => b.name.localeCompare(a.name));
                sortedCharactersByName.sort((c, d) => d.name.localeCompare(c.name));
            } else if(action.payload === 'S'){
                window.alert('¡You must select a alphabet, they will be organized by Id!');
                sortedCharacters.sort((a, b) => b.id - a.id);
                sortedCharactersByName.sort((c, d) => c.id - d.id);
            }
            return {...state, videoGames: sortedCharacters, videoGamesByName: sortedCharactersByName};

        default: 
            return {...state}
    }
}

export default rootReducer;
