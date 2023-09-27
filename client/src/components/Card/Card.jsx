import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Card.module.css";
import {GiAncientSword} from "react-icons/gi"
import { useMemo } from "react";

export default function Card ({id, name, backgroundImage, genres}) {

    const valueGen = useMemo(() => {
        
        switch (genres.length) {
            case 1:
                return styles.backGround2Card
            case 2:
                return styles.backGround2Card
            case 3:
                return styles.backGround3Card
            case 4:
                return styles.backGround4Card       
            default:
                return styles.backGroundMCard
        }
    }, [genres]);

    return(
        <NavLink to={`/detail/${id}`} style={{textDecoration: 'none'}}>
            <div style={{backgroundImage: 'url(/images/CardFondo.jpg)'}} 
                className={valueGen}
                >
                <img className={styles.image} src={backgroundImage} alt="VideoGames"/>
                <h2 className={styles.title}>{name}</h2>
                { genres.map((genre) => 
                (<div key={genre} style={{display: 'flex', flexDirection: 'row'}}>
                    <GiAncientSword size={'30px'} 
                        style={{
                            margin: '10px 10px 0px 10px', 
                            color: 'white',
                            border: '2px solid rgb(213, 0, 0)',
                            borderRadius: '15px'
                            }}></GiAncientSword>
                    <h4 className={styles.text}>{genre}</h4>
                </div>))}           
            </div>
        </NavLink>
    )
};
