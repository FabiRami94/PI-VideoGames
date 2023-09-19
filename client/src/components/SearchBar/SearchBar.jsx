import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({onSearch, setGameByName}){

    const [name, setName] = useState('');

    function handleChange (event) {
        setName(event.target.value)
    }

    const search = () => {
        onSearch(name)
        setName('')
    }

    const resetSearch = () => {
        setGameByName([])
    }
   
    return(
        <div>
            <div className={styles.divGeneral}>
                <label className={styles.letter}>Search by name:</label>
                <input className={styles.generalInput} type='search' placeholder="Write a name..." onChange={handleChange}></input>
                <button className={styles.generalButton} onClick={search}>Send</button>
                <button className={styles.generalButton} onClick={resetSearch}>Reset Search</button>
            </div>
        </div>
    )
}