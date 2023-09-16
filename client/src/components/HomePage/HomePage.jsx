import React from "react";
import Card from "../Card/Card";
import Cards from "../Cards/Cards";
import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./HomePage.module.css";


export default function HomePage (props){
 
    const {gameByName, onSearch , setGameByName} = props;
    
    const [games, setGames] = useState([]);

    const totalGames = games.length;

    const gamesPerPage = 15;
    const [currentPage, setCurrentPage] = useState(1);

    const lastIndex =  currentPage * gamesPerPage;
    const firstIndex = lastIndex - gamesPerPage;

    useEffect(() => {
      axios.get('http://localhost:3001/videogames')
        .then((response) => {
          const gamesData = response.data;
          setGames(gamesData);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []); 

    return(
        <div>
            <SearchBar onSearch={onSearch} setGameByName={setGameByName}></SearchBar>
            <h1>SOY EL HOME</h1>
            <div style={{position: 'relative'}}>
                <img src="./images/LogoGeneral.webp" alt="LogoGeneral" className={styles.logoGeneral}/>
            </div>
            <ul>
                <li>SearchBar: un input de búsqueda para encontrar videojuegos por nombre.</li>
                <li>Sector en el que se vea un listado de cards con los videojuegos. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /videogames y deberá mostrar su:</li>
                <ul>
                    <li>Imagen.</li>
                    <li>Nombre.</li>
                    <li>Géneros.</li>
                </ul>
                <li>Cuando se le hace click a una Card deberá redirigir al detalle de ese videojuego específico.</li>
                <li>Botones/Opciones para filtrar por género, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).</li>
                <li>Botones/Opciones para ordenar tanto ascendentemente como descendentemente los videojuegos por orden alfabético y por rating.</li>
                <li>Paginado: el listado de videojuegos se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 15 videojuegos por página.</li>
            </ul>
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
            {gameByName?.map((gameN) => (    
                <Card           
                   key={gameN.id}
                   id={gameN.id} 
                   backgroundImage={gameN.background_image}
                   name={gameN.name} 
                   genres={gameN.genres}             
                ></Card>
                ))}
            {games.map((game) => (
                <Cards 
                key={game.id}
                id={game.id} 
                backgroundImage={game.background_image}
                name={game.name} 
                genres={game.genres} 
                ></Cards>
            )).slice(firstIndex, lastIndex)}
            <Pagination 
                gamesPerPage={gamesPerPage} 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
                totalGames={totalGames}
                ></Pagination>
        </div>
    )
}