import React from "react";

export default function Pagination ({gamesPerPage, currentPage, setCurrentPage, totalGames}) {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++){
        pageNumbers.push(i)
    }

    const onPreviusPage = () => {
        setCurrentPage(currentPage - 1);
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1);
    }

    const onSpecificPage = (n) => {
        setCurrentPage(n)
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <button onClick={onPreviusPage} disabled={currentPage === 1}>Previus</button>
            {pageNumbers.map(noPage => (           
                <button key={noPage} onClick={() => onSpecificPage(noPage)}>{noPage}</button>
            ))}
            <button onClick={onNextPage} disabled={currentPage === pageNumbers.length}>Next Button</button>
        </div>
    )
}