import React from "react";


export default function FormPage () {
    return(
        <div>
            <h1>FORM PAGE     
                </h1>
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
                    <form style={{display: 'flex', flexDirection: 'column'}}>
                        <label>Name:</label>
                        <input placeholder="Write a game name..."></input>
                        <label>Image:</label>
                        <input type="file" placeholder="Upload a game image..."></input>
                        <label>Description:</label>
                        <input type="text" placeholder="Write a game name..."></input>
                        <label>Platforms:</label>
                        {/* mejorar despues con Map */}
                            <label> 
                                <input type="checkbox" name="opcion1" value="Opción 1" /> Play 5
                            </label>
                            <label>
                                <input type="checkbox" name="opcion2" value="Opción 2" /> Play 4
                            </label>
                            <label>
                                <input type="checkbox" name="opcion3" value="Opción 3" /> Xbox
                            </label>
                            <label>
                                <input type="checkbox" name="opcion4" value="Opción 4" /> Pc
                            </label>
                        <label>released:</label>
                        <input type="date" ></input>
                        <label>Rating:</label>
                        <input type="number" placeholder="Rating..."></input>
                        <label>Genres:</label>
                        <input placeholder="Write a game name..."></input>
                         {/* mejorar despues con Map */}
                            <label> 
                                <input type="checkbox" name="opcion1" value="Opción 1" /> Adventure
                            </label>
                            <label>
                                <input type="checkbox" name="opcion2" value="Opción 2" /> Shooter
                            </label>
                            <label>
                                <input type="checkbox" name="opcion3" value="Opción 3" /> Cards
                            </label>
                            <label>
                                <input type="checkbox" name="opcion4" value="Opción 4" /> RPG
                            </label>
                        <button>CREATE VIDEO GAME</button>
                    </form>
                </div>
        </div>
    )
}