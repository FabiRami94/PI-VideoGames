import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./LandingPage.module.css";


export default function LandingPage () {
    return (
        <div style={{backgroundImage: 'url(/images/LandingPagePrincipal.jpg)', backgroundSize: 'cover', height: '910px',  backgroundPosition: 'center'}}>
            <div style={{position: 'relative'}}>
                <img src="./images/LogoGeneral.webp" alt="LogoGeneral" className={styles.logoGeneral}/>
            </div>
            <img src="./images/LandingPageSuperior.jpg" alt="LandingPageSup" className={styles.imageSup}/>
            <NavLink to={'/home'} style={{textDecoration: 'none'}}>
                <h1 className={styles.start}>PRESS START</h1>
            </NavLink>
            <div style={{position: 'relative'}}>
                <NavLink to={'/home'}>
                    <img src='./images/LandingPageStart.webp' alt="LandingPageControl" className={styles.control}/>
                </NavLink>         
            </div>
        </div>
    )
}