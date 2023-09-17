import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./LandingPage.module.css";


export default function LandingPage () {

    let controlTypes = [
        { src: './images/LandingPageStart.webp', style: styles.playControl},
        { src: './images/LandingPagePC.png', style: styles.pcControl}, 
        { src: './images/LandingPageNintendo.png', style: styles.nintendoControl}, 
        { src: './images/LandingPageXbox.png', style: styles.xboxControl},
    ]

    return (
        <div className={styles.backGroungImageGeneral} style={{backgroundImage: 'url(/images/LandingPagePrincipal.jpg)'}}>
            <div style={{position: 'relative'}}>
                <img src="./images/LogoGeneral.webp" alt="LogoGeneral" className={styles.logoGeneral}/>
            </div>
            <img src="./images/LandingPageSuperior.jpg" alt="LandingPageSup" className={styles.imageSup}/>
            <NavLink to={'/home'} style={{textDecoration: 'none'}}>
                <h1 className={styles.start}>PRESS START</h1>
            </NavLink>
            <div style={{position: 'relative'}}>
                {controlTypes.map((controlType) => (
                    <NavLink to={'/home'}>
                        <img src={controlType.src} alt="LandingPageControls" className={controlType.style}/>
                    </NavLink>         
                ))}
            </div>
        </div>
    )
}