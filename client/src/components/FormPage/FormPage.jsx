import styles from "./FormPage.module.css";
import { platformsArray, genresArray} from "../../utils/genrPlatfArrays";
import React, { useState } from "react";
import axios from 'axios';
import validations from "../../utils/formValidations";

export default function FormPage () {

    const [newGameData, setNewGameData] = useState({
        name: '',
        description: '',
        platforms: [],
        image: '',
        released: '',
        rating: '',
        genres: [],   
    });

    const [errors, setErrors] = useState({
        name: '',
        description: '',
        platforms: [],
        image: '',
        released: '',
        rating: '',
        genres: [],   
    });

    const handleChange = (event) => {

        const { name, value } = event.target;

        if (name === 'genre') {
          const newGenres = [...newGameData.genres];        
          if (event.target.checked) {
              newGenres.push(value);
              console.log(newGenres)
          } else {
            newGenres.splice(newGenres.indexOf(value), 1);
          }  
          setNewGameData({ ...newGameData, genres: newGenres });
        } else if(name === 'platform'){
            const newPlatform = [...newGameData.platforms];
            if (event.target.checked) {
                newPlatform.push(value);
                console.log(newPlatform)
            } else {
              newPlatform.splice(newPlatform.indexOf(value), 1);
            } 
            setNewGameData({ ...newGameData, platforms: newPlatform });
        } else {
          setNewGameData({ ...newGameData, [name]: value });
        }   
        setErrors(validations({ ...newGameData, [name]: value }));
        console.log(event.target.value); 
      };

    const submitHandler = (event) => {
        event.preventDefault();
        try {    
            axios.post('http://localhost:3001/createvideogame', newGameData).then(res => alert(res));
        } catch (error) {
            window.alert(error)
        }
    }

    return(
        <div style={{backgroundImage: 'url(/images/FormFondo.jpg)'}} className={styles.backGroungImageGeneral}>
            <div style={{height: '2px', backgroundColor:'rgb(213, 0, 0)'}}></div>
            <div style={{position: 'relative'}}>
                <img src="./images/LogoGeneral.webp" alt="LogoGeneral" className={styles.logoGeneral}/>
            </div>
            <div className={styles.backgroundForm}> 
                    <form onSubmit={submitHandler} style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{marginTop: '20px'}}>
                            <label className={styles.letters}>Name:</label>
                            <input 
                                className={styles.generalInput}
                                onChange={handleChange} 
                                name='name' 
                                value={newGameData.name} 
                                placeholder="Write a game name..."></input>
                        </div>
                        <p>{errors.name}</p>
                        <div style={{marginTop: '20px'}}>
                            <label className={styles.letters}>Description:</label>
                            <textarea 
                                rows="5" cols="60"
                                className={styles.generalInput}
                                onChange={handleChange} 
                                type="text" 
                                placeholder="Write a game name..." 
                                name="description"
                                style={{width: '350px'}} 
                                value={newGameData.description}></textarea>
                        </div>
                        <p>{errors.description}</p>
                        <div style={{marginTop: '20px'}}>
                            <label className={styles.letters}>Platforms:</label>
                            {platformsArray.map((platform) => (
                                <label key={platform}> 
                                    <input       
                                        onChange={handleChange}   
                                        type="checkbox" 
                                        name='platform'
                                        value={platform}/>
                                        {platform}</label>
                            ))}
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <label className={styles.letters}>Image:</label>
                            <input 
                                type="file" 
                                name="image" 
                                onChange={handleChange}       
                                value={newGameData.image}></input>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <label className={styles.letters}>Released:</label>
                            <input 
                                className={styles.generalInput}
                                onChange={handleChange}  
                                name='released' 
                                value={newGameData.released}
                                type="date" 
                                style={{width: '150px'}}></input>
                        </div>
                        <p>{errors.released}</p>
                        <div style={{marginTop: '20px'}}>
                            <label className={styles.letters}>Rating:</label>
                            <input 
                                className={styles.generalInput}
                                onChange={handleChange}  
                                name='rating' 
                                value={newGameData.rating} 
                                type="number" min="1" max="5" step="0.5"
                                placeholder="Choose a number..." 
                                style={{width: '200px'}}></input>
                        </div>
                        <p>{errors.rating}</p>
                        <div style={{marginTop: '20px'}}>
                            <label className={styles.letters}>Genres:</label>
                            {genresArray.map((genre) => (
                                <label key={genre}> 
                                <input
                                    onChange={handleChange} 
                                    name='genre' 
                                    value={genre} 
                                    type="checkbox" 
                                    />{genre}</label>
                            ))}
                        </div>
                        <div>
                            <button className={styles.generalButton}>CREATE VIDEO GAME</button>
                        </div>
                    </form>
            </div>
            <div className={styles.backgroundForm}>
                <h1 style={{paddingTop: '10px'}}>Create AI video game images with clipdrop</h1>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <img src="./images/ClipDrop1.png" alt="Step 1" className={styles.stepImages}/>
                        <h3 className={styles.stepText}>Step 1: Scroll down to all tools, then click 
                        on stable diffusion XL to generate high-resolution realistic images with AI.</h3>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <img src="./images/ClipDrop2.png" alt="Step 2" className={styles.stepImages}/>
                        <h3 className={styles.stepText}>Step 2: Write a description of the image you 
                        want to generate, choose a style and click generate</h3>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <img src="./images/ClipDrop3.png" alt="Step 2" className={styles.stepImages}/>
                        <h3 className={styles.stepText}>Step 3: Select your favorite image and 
                        download, you can now mount the image above!</h3>
                    </div>
                </div>
                <a style={{textDecoration: 'none', color: 'white', fontSize: '20px'}} 
                    href="https://clipdrop.co/" target="_blanck">GO TO: Clipdrop.co</a>
                <div style={{height: '20px'}}></div>
            </div>
        </div>
    )
}

// En esta vista se encontrará el formulario para crear un nuevo videojuego.

// Este formulario debe ser controlado completamente con JavaScritp. No se pueden utilizar 
// validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes 
// campos:

// Nombre.
// Imagen
// Descripción.
// Plataformas.
// Fecha de lanzamiento.
// Rating.
// Posibliidad de seleccionar/agregar varios géneros en simultáneo.
// Botón para crear el nuevo videojuego.