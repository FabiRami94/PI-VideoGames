
import { createElement } from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function DetailPage () {

    const {id} = useParams();
    const navigate = useNavigate();

    const [videoGame, setVideoGame] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3001/videogames/${id}`)
        .then((response) => {
          const videoGamesData = response.data;
          setVideoGame(videoGamesData);
        })
        .catch((error) => {
          console.error(error);
        });
    },[]);

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
            <h1>DETAIL PAGE</h1>
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
            <a href={videoGame.website} target="_blank">Link: {videoGame.website}</a>
        </div>
    )
}