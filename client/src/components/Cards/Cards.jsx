import React from "react";
import Card from "../Card/Card";

export default function Cards ({id, name, backgroundImage, genres}) {
    return(
        <div>
            <Card 
                key= {id}
                id={id}
                name={name} 
                backgroundImage={backgroundImage} 
                genres={genres}
            ></Card>
        </div>
    )
};