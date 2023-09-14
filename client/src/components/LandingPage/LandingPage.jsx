import React from "react";
import { NavLink } from "react-router-dom";


export default function LandingPage () {
    return (
        <div>
            <h1>LANDING PAGE | deberás crear una página de inicio o bienvenida con:</h1>
            <h3>Alguna imagen de fondo representativa al proyecto.
                Botón para ingresar a la home page.</h3>
            <NavLink to={'/home'}>
                <button>Provisional Home</button>
            </NavLink>
            
        </div>
    )
}