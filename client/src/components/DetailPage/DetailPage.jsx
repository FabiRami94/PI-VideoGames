
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
      <div style={{backgroundImage: 'url(/images/DetailFondo.jpg)'}} className={styles.generalBackground}>
        <div style={{height: '2px', backgroundColor:'rgb(213, 0, 0)'}}></div>
        <div>
          <div className={styles.secondBackground}>
            <button className={styles.buttonBack} onClick={back}>Back</button>
            <h4>ID: {id}</h4>
            <h1>Name: {videoGame.name}</h1>
            <img src={videoGame.background_image} alt="videoGamesDetail" style={{ width: '400px', borderRadius: '30px'}}/>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <h2>Platforms: {videoGame.platforms?.map((ele) =>(
                <ul>
                  <li className={styles.letters1}>{ele}</li>
                </ul>
              ))}</h2>
              <h2>Genres: {videoGame.genres?.map((ele) =>(
                <ul>
                  <li className={styles.letters1}>{ele}</li>
                </ul>
              ))}</h2>
            </div>
            <div style={{margin: '5px 50px 5px 50px'}}>
              {description}
            </div>
            <h2>Released: {videoGame.released}</h2>
            <h2 style={{paddingBottom: '20px'}}>Rating: {videoGame.rating}</h2>
          </div>
          <div style={{height: '1px'}}></div>
        </div>
      </div>
    )
}