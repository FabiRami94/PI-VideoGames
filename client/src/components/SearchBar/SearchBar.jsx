import React, { useState } from "react";

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
            <label>Search by name:</label>
            <input type='search' placeholder="Write a name..." onChange={handleChange}></input>
            <button onClick={search}>Send</button>
            <button onClick={resetSearch}>Reset Search</button>
        </div>
    )
}