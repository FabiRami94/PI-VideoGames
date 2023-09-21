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
            <div>
                <button            
                    className={styles.generalButton} 
                    onClick={onPreviusPage} 
                    disabled={currentPage === 1}>Previus</button>
                {pageNumbers.map(noPage => (           
                    <button 
                        className={styles.generalButton}
                        key={noPage} 
                        onClick={() => onSpecificPage(noPage)}
                        style={noPage === currentPage ? {backgroundColor: 'rgb(213, 0, 0, 0.9)'} : null}>{noPage}</button>
                ))}
                <button 
                    className={styles.generalButton}
                    onClick={onNextPage} 
                    disabled={currentPage === pageNumbers.length}>Next Button</button>
            </div>
        </div>
    )
}