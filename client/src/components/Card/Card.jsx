import React from "react";
import {NavLink} from "react-router-dom";

export default function Card ({id, name, backgroundImage, genres}) {
    return(
        <div>
            <img src={backgroundImage} alt="VideoGames" style={{ width: '250px' }}/>
            <h1>Name: {name}</h1>
            <h2>Genres: { genres.map((genre) => 
            (<ul>
                <li key={id}>{genre}</li>
            </ul>))}</h2>
            <NavLink to={`/detail/${id}`}><button>Detail</button></NavLink>
        </div>
    )
};