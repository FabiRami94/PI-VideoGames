import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import {resetGamesByName} from "../../redux/actions/actions";

export default function SearchBar({onSearch}){

    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleChange (event) {
        setName(event.target.value)
    }

    const search = () => {
        onSearch(name)
        setName('')
    }

    const resetSearch = () => {
        dispatch(resetGamesByName());
        setName('');
    }
   
    return(
        <div>
            <div className={styles.divGeneral}>
                <label className={styles.letter}>Search by name:</label>
                <input className={styles.generalInput} type='search' placeholder="Write a name..." value={name} onChange={handleChange}></input>
                <button className={styles.generalButton} onClick={search}>Send</button>
                <button className={styles.generalButton} onClick={resetSearch}>Reset Search</button>
            </div>
        </div>
    )
}