
import { createElement } from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./DetailPage.module.css";

export default function DetailPage () {

    const {id} = useParams();
    const navigate = useNavigate();

    const [videoGame, setVideoGame] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3001/videogame/${id}`)
        .then((response) => {
          const videoGamesData = response.data;
          setVideoGame(videoGamesData);
        })
        .catch((error) => {
          console.error(error);
        });
    },[id]);

    const back = () => {
        navigate(-1);   
    }

    const description = createElement("p", {
        dangerouslySetInnerHTML: {
          __html: videoGame.description
        }
    });

    return( 
      <div>
        <div style={{height: '2px', backgroundColor:'rgb(213, 0, 0)'}}></div>
        <div style={{backgroundImage: 'url(/images/DetailFondo.jpg)'}} className={styles.generalBackground}>
          <div className={styles.secondBackground}>
            <button onClick={back}>Back</button>
            <h2>ID: {id}</h2>
            <h2>Name: {videoGame.name}</h2>
            <img src={videoGame.background_image} alt="videoGamesDetail" style={{ width: '250px' }}/>
            <img src={videoGame.background_image_additional} alt="videoGamesDetail" style={{ width: '250px' }}/>
            <h2>Platforms: {videoGame.platforms}</h2>
            {description}
            <h2>Released: {videoGame.released}</h2>
            <h2>Rating: {videoGame.rating}</h2>
            <h2>Genres: {videoGame.genres}</h2>
            <a href={videoGame.website} target="_blank" rel="noreferrer">Link: {videoGame.website}</a>
          </div>
        </div>
      </div>
    )
}