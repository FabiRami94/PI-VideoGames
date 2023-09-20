
import React from "react";
import Card from "../Card/Card";
import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./HomePage.module.css";
import { getVideoGames } from "../../redux/actions/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getVideoGamesByName} from "../../redux/actions/actions";


export default function HomePage (){

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getVideoGames());
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

    return(
        <div> 
            <div style={{height: '2px', backgroundColor:'rgb(213, 0, 0)'}}></div>
            <div >
                <SearchBar onSearch={onSearch}></SearchBar>
                <div style={{position: 'relative'}}>
                    <img src="./images/LogoGeneral.webp" alt="LogoGeneral" className={styles.logoGeneral}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div>
                        <h3>Genre</h3>
                        <select>
                            {/* mejorar con map */}
                            <option>Action</option>
                            <option>Indie</option>
                            <option>Adventure</option>
                            <option>RPG</option>
                            <option>Strategy</option>
                            <option>Shooter</option>
                            <option>Casual</option>
                            <option>Simulation</option>
                            <option>Puzzle</option>
                            <option>Arcade</option>
                            <option>Platformer</option>
                            <option>Massively Multiplayer</option>
                            <option>Racing</option>
                            <option>Sports</option>
                            <option>Fighting</option>
                            <option>Family</option>
                            <option>Board Games</option>
                            <option>Educational</option>
                            <option>Card</option>
                        </select>
                    </div>
                    <div>
                        <h3>Creator</h3>
                        <select>
                            <option>Owm</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <h3>Popularity</h3>
                        <select>
                            <option>Most</option>
                            <option>Less</option>
                        </select>
                    </div>
                    <div>
                        <h3>Alphabety</h3>
                        <select>
                            <option>Ascendent</option>
                            <option>Descendent</option>
                        </select>
                    </div>
                </div>
                <div className={styles.Tarjetas}>
                    {videoGamesByName.flat().map((gameN) => (    
                        <Card           
                        key={gameN.id}
                        id={gameN.id} 
                        backgroundImage={gameN.background_image}
                        name={gameN.name} 
                        genres={gameN.genres}             
                        ></Card>
                        ))}
                    <Cards></Cards>
                </div>                                  
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