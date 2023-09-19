import React, { useEffect, useState } from "react";
import axios from 'axios';
import styles from "./FormPage.module.css";

export default function FormPage () {

    const [genres, setGenres] = useState([]);

    const [newGameData, setNewGameData] = useState({
        name: '',
        description: '',

    });

    const handleChange = (event) => {
        setNewGameData({...newGameData, [event.target.name] : event.target.value});
        console.log(event.target.value)
    }

    // const handleChecked = (event) => {
        
    //     console.log('hey') 
    // }

    useEffect(()=>{
        axios.get('http://localhost:3001/genres')
        .then((response) => {
            const genreData = response.data;
            setGenres(genreData);
        })
    },[]);



    return(
        <div>
            <h1>FORM PAGE     
                </h1>
                <div style={{position: 'relative'}}>
                <img src="./images/LogoGeneral.webp" alt="LogoGeneral" className={styles.logoGeneral}/>
                </div>
                <h3>En esta vista se encontrará el formulario para crear un nuevo videojuego.</h3>
                <h3>Este formulario debe ser controlado completamente con JavaScritp. No se pueden 
                    utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe 
                    contar con los siguientes campos:</h3>
                <ul>
                    <li>Nombre.</li>
                    <li>Imagen.</li>
                    <li>Descripción.</li>
                    <li>Plataformas.</li>
                    <li>Fecha de lanzamiento.</li>
                    <li>Rating.</li>
                    <li>Posibliidad de seleccionar/agregar varios géneros en simultáneo.</li>
                    <li>Botón para crear el nuevo videojuego.</li>
                </ul>
                <div>
                    <form style={{display: 'flex', flexDirection: 'column'}} >
                        <label>Name:</label>
                        <input onChange={handleChange} name='name' value={newGameData.name} placeholder="Write a game name..."></input>
                        <label>Image:</label>
                        <input type="file" placeholder="Upload a game image..."></input>
                        <label>Description:</label>
                        <input onChange={handleChange} type="text" placeholder="Write a game name..." name="description" value={newGameData.description}></input>
                        <label>Platforms:</label>
                        {/* mejorar despues con Map */}
                            <label> 
                                <input type="checkbox" name="opcion1" value="Opción 1" /> PlayStation 5
                            </label>
                            <label>
                                <input  type="checkbox" name="opcion2" value="Opción 2" /> PlayStation 4
                            </label>
                            <label>
                                <input type="checkbox" name="opcion3" value="Opción 3" /> Xbox One
                            </label>
                            <label>
                                <input type="checkbox" name="opcion4" value="Opción 4" /> Pc
                            </label>
                            <label> 
                                <input type="checkbox" name="opcion1" value="Opción 1" /> Xbox Series S/X
                            </label>
                            <label>
                                <input  type="checkbox" name="opcion2" value="Opción 2" /> Nintendo Switch
                            </label>
                            <label>
                                <input type="checkbox" name="opcion3" value="Opción 3" /> iOS
                            </label>
                            <label>
                                <input type="checkbox" name="opcion4" value="Opción 4" /> Android
                            </label>
                        <label>released:</label>
                        <input type="date" ></input>
                        <label>Rating:</label>
                        <input type="number" placeholder="Rating..."></input>
                        <label>Genres:</label>
                        <input placeholder="Write a game name..."></input>
                        {genres.map((genre) => (
                            <label> 
                                <input type="checkbox" name={genre.id} value={genre.id}/> {genre.name}      
                            </label>
                        ))}
                        <button>CREATE VIDEO GAME</button>
                        <h1>Create Video Game Images with clipdrop</h1>
                        <a href="https://clipdrop.co/" target="_blanck">ClipDrop</a>
                    </form>
                </div>
        </div>
    )
}