import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css"
import {IoCaretBackCircle} from "react-icons/io5"

export default function NavBar () {

    return(
        <div style={{backgroundColor: 'black'}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <NavLink to={'/'}><IoCaretBackCircle className={styles.buttonBack} size={'50px'}/></NavLink>
                <figure style={{margin: '0px'}}>
                    <img src="/images/NavBarGaming.jpg" alt="NavBarGaming" style={{height: '100px'}}/>
                </figure>
                <figure style={{margin: '0px'}}>
                    <img src="/images/NavBarControls.jpg" alt="NavBarControls" style={{height: '100px'}}/>
                </figure>
                <div style={{width: '250px'}}></div>
                <NavLink to={'/home'} className={({isActive}) => (isActive) ? styles.lettersActive : styles.letters}>Home</NavLink>
                <NavLink to={'/form'} className={({isActive}) => (isActive) ? styles.lettersActive : styles.letters}>Create VideoGame</NavLink>
                <figure style={{margin: '0px'}}>
                    <img src="/images/NavBarPacMan.gif" alt="NavBarPacMan" style={{height: '100px'}}/>
                </figure>
            </div>
        </div>
    )
}