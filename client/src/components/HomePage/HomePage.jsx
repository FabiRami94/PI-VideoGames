
import React from "react";
import Card from "../Card/Card";
import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./HomePage.module.css";
import { genresArray } from "../../utils/genrPlatfArrays";
import {    getVideoGames, 
            getVideoGamesByName, 
            filterGamesByGenre, 
            filterGamesByCreator, 
            filterGamesByRating, 
            filterGamesByAlphabet,} from "../../redux/actions/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



export default function HomePage (){

    let [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(()=>{
        setLoading(true);
        dispatch(getVideoGames());
        setLoading(false);
    },[dispatch]);

    const videoGamesByName = useSelector(state => state.videoGamesByName);
  
    async function onSearch (name){
  
        if(!name){return window.alert('¡You must enter a name!')};
        if(!isNaN(name)){return window.alert('¡You must enter a name, not a number!')}
   
        try {
           dispatch(getVideoGamesByName(name))
        } catch (error) {
            window.alert({error: error.message});
        }
    };

    const handleFilterByGenre = (event) => {
        dispatch(filterGamesByGenre(event.target.value));
    };

    const handleFilterByCreator = (event) => {
        dispatch(filterGamesByCreator(event.target.value));
    };

    const handleFilterByRating = (event) => {
        dispatch(filterGamesByRating(event.target.value));
    };

    const handleFilterByAlphabet = (event) => {
        dispatch(filterGamesByAlphabet(event.target.value));
    };

    return(
        <div style={{backgroundImage: 'url(/images/HomeFondo.jpg)'}} className={styles.generalBackground}> 
            <div style={{height: '2px', backgroundColor:'rgb(213, 0, 0)'}}></div>
            <div>
                <SearchBar onSearch={onSearch}></SearchBar>
                <div style={{position: 'relative'}}>
                    <img src="./images/LogoGeneral.webp" alt="LogoGeneral" className={styles.logoGeneral}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <div>
                        <h3 className={styles.letters}>Genre</h3>
                        <select className={styles.generalButton} onChange={handleFilterByGenre}>
                            <option value={'S'}>Select</option>
                            {genresArray.map((genre) => (                                                      
                                <option key={genre} value={genre}>{genre}</option>                            
                            ))}
                        </select>
                    </div>
                    <div>
                        <h3 className={styles.letters}>Creator</h3>
                        <select className={styles.generalButton} onChange={handleFilterByCreator}>
                            <option value={'S'}>Select</option>
                            <option value={'true'}>Owm</option>
                            <option value={'false'}>Other</option>
                        </select>
                    </div>
                    <div>
                        <h3 className={styles.letters}>Rating</h3>
                        <select className={styles.generalButton} onChange={handleFilterByRating}>
                            <option value={'S'}>Select</option>
                            <option value={'M'}>Most Popular</option>
                            <option value={'L'}>Less Popular</option>
                        </select>
                    </div>
                    <div>
                        <h3 className={styles.letters}>Alphabet</h3>
                        <select className={styles.generalButton} onChange={handleFilterByAlphabet}>
                            <option value={'S'}>Select</option>
                            <option value={'A'}>Ascendent</option>
                            <option value={'D'}>Descendent</option>
                        </select>
                    </div>
                </div>
                {!loading && (                 
                <div className={styles.Tarjetas}>   
                    {videoGamesByName.flat().map((gameN) => (    
                        <Card style={{backgroundImage: 'url(/images/HomeFondo.jpg)'}} className={styles.generalBackground}          
                        key={gameN.id}
                        id={gameN.id} 
                        backgroundImage={gameN.background_image}
                        name={gameN.name} 
                        genres={gameN.genres}
                        created={false}             
                        ></Card>
                        ))}
                    <Cards></Cards>
                </div>  )}
                {loading && <div style={{ position: 'relative' }}>     
                        <div>  
                            <h1 style={{color: 'white', fontSize: '100px', padding: '200px'}}> Loading...</h1>                     
                        </div>  
                </div>}
            </div>         
        </div>
    )
}

// SearchBar: un input de búsqueda para encontrar videojuegos por nombre.
// Sector en el que se vea un listado de cards con los videojuegos. Al iniciar deberá cargar los 
// primeros resultados obtenidos desde la ruta GET /videogames y deberá mostrar su:

//     Imagen.
//     Nombre.
//     Géneros.

// Cuando se le hace click a una Card deberá redirigir al detalle de ese videojuego específico.
// Botones/Opciones para filtrar por género, y por si su origen es de la API o de la base de datos 
// (creados por nosotros desde el formulario).
// Botones/Opciones para ordenar tanto ascendentemente como descendentemente los videojuegos por
// orden alfabético y por rating.
// Paginado: el listado de videojuegos se hará por partes. Tu SPA debe contar con un paginado que 
// muestre un total de 15 videojuegos por página




    
