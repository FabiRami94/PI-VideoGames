import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar () {
    return(
        <div>
            <h1>BARRA DE NAVEGACIÓN</h1>
            <NavLink to={'/'}><button>Provisional a landing page</button></NavLink>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/form'}>Create VideoGame</NavLink>
        </div>
    )
}