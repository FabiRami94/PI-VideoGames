import React from "react";
import styles from "./Pagination.module.css";

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
        <div>
            <div className={styles.divGeneral}>
                <button            
                    className={styles.letters} 
                    onClick={onPreviusPage} 
                    disabled={currentPage === 1}>Previus</button>
                {pageNumbers.map(noPage => (           
                    <button 
                        className={styles.numbers}
                        key={noPage} 
                        onClick={() => onSpecificPage(noPage)}
                        style={noPage === currentPage ? {backgroundColor: 'rgb(213, 0, 0, 0.9)'} : null}>{noPage}</button>
                ))}
                <button 
                    className={styles.letters}
                    onClick={onNextPage} 
                    disabled={currentPage === pageNumbers.length}>Next Button</button>
            </div>
        </div>
    )
}