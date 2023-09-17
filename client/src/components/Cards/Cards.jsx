import React from "react";
import Card from "../Card/Card";
// import styles from "./Cards.module.css"

export default function Cards ({id, name, backgroundImage, genres}) {
    return(
        <div>   
            <div>
                <Card 
                    key= {id}
                    id={id}
                    name={name} 
                    backgroundImage={backgroundImage} 
                    genres={genres}
                ></Card>
            </div>
        </div>
    )
};