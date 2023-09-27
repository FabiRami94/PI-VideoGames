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
        background_image: '',
        released: '',
        rating: '',
        genres: [],   
    });

    const [errors, setErrors] = useState({
        name: 'The name is required*',
        description: 'The description is required*',
        platforms: 'The platforms is required*',
        background_image: 'The image is required*',
        released: 'The released is required*',
        rating: 'The rating is required*',
        genres: 'The genres is required*',   
    });

    const handleChange = (event) => {

        const { name, value } = event.target;

        if (name === 'genre') {
          const newGenres = [...newGameData.genres];        
          if (event.target.checked) {
              newGenres.push(value);
          } else {
            newGenres.splice(newGenres.indexOf(value), 1);
          }  
          setNewGameData({ ...newGameData, genres: newGenres },);
        } else if(name === 'platform'){
            const newPlatform = [...newGameData.platforms];
            if (event.target.checked) {
                newPlatform.push(value);
            } else {
              newPlatform.splice(newPlatform.indexOf(value), 1);
            } 
            setNewGameData({ ...newGameData, platforms: newPlatform });
        } else {
          setNewGameData({ ...newGameData, [name]: value });
        }   
        validations({...newGameData, [name]: value}, name, setErrors, errors)
    };
 
    const buttonDisable = () => {
        let isDisable;
        for(let error in errors){
            if(errors[error] === ""){
                isDisable = false
            } else {isDisable = true; 
                break};
        } 
        return isDisable;
    }

    const submitHandler = async (event) => {
        event.preventDefault();    
        try {    
            await axios.post('http://localhost:3001/createvideogame', newGameData).then(res => alert('Juego creado exitosamente'));

            setNewGameData({
                name: '',
                description: '',
                platforms: [],
                background_image: '',
                released: '',
                rating: '',
                genres: [],   
            });
            setErrors({
                name: 'The name is required*',
                description: 'The description is required*',
                platforms: 'The platforms is required*',
                background_image: 'The image is required*',
                released: 'The released is required*',
                rating: 'The rating is required*',
                genres: 'The genres is required*', 
            });
        } catch (error) {
            window.alert('The name of the video game already exists, reresh and try again');
            window.location.reload();
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
                                type="text" 
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
                        <p>{errors.platforms}</p>
                        <div style={{marginTop: '20px'}}>
                            <label className={styles.letters}>Image:</label>
                            <input 
                                type="text" 
                                name="background_image" 
                                onChange={handleChange}       
                                value={newGameData.background_image}
                                style={{width: '250px'}}></input>
                        </div>
                        <p>{errors.background_image}</p>
                        <div style={{marginTop: '20px'}}>
                            <label className={styles.letters}>Released:</label>
                            <input 
                                className={styles.generalInput}
                                onChange={handleChange}  
                                name='released' 
                                value={newGameData.released}
                                type="text" 
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
                                type="text" 
                                placeholder="Choose a number from 1 to 5..." 
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
                        <p>{errors.genres}</p>
                        <div>
                            <button disabled={buttonDisable()} className={styles.generalButton}>CREATE VIDEO GAME</button>
                        </div>
                    </form>
            </div>
            <div className={styles.backgroundForm}>
                <h1>Create AI video game images with clipdrop</h1>
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
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <img src="./images/Imgbb1.png" alt="Step 1" className={styles.stepImages}/>
                        <h3 className={styles.stepText}>Step 4: Go to the link imgbb.com and click 
                        "COMENZAR A SUBIR".</h3>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <img src="./images/Imgbb2.png" alt="Step 2" className={styles.stepImages}/>
                        <h3 className={styles.stepText}>Step 5: The directory will open, you will 
                        search for the image and click "SUBIR", do not set an expiration time</h3>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <img src="./images/Imgbb3.png" alt="Step 2" className={styles.stepImages}/>
                        <h3 className={styles.stepText}>Step 6: copy the indicated link of the 
                        "BBCode completa enlazada" option and mount it in the form, That's all!</h3>
                    </div>
                </div>        
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <a style={{textDecoration: 'none', color: 'purple', fontSize: '25px', paddingLeft: '70px'}} 
                        href="https://clipdrop.co/" target="_blanck">GO TO: Clipdrop.co</a>
                    <div style={{height: '20px'}}></div>
                    <a style={{textDecoration: 'none', color: 'purple', fontSize: '25px'}} 
                        href="https://es.imgbb.com/" target="_blanck">GO TO: Imgbb.com</a>
                    <div style={{height: '20px'}}></div>
                </div>
            </div>
            <div style={{height : '1px'}}></div>
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