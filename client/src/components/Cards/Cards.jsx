
import Card from "../Card/Card";
import styles from "./Cards.module.css"
import Pagination from "../Pagination/Pagination";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Cards () {

    const [games, setGames] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    
    const totalGames = games.length;
    const gamesPerPage = 15;
    const lastIndex =  currentPage * gamesPerPage;
    const firstIndex = lastIndex - gamesPerPage;

    const videoGames = useSelector(state => state.videoGames);

    useEffect(()=>{
        setGames(videoGames);
    },[videoGames]);

    return(
        <div>
            <div>
                <Pagination 
                    gamesPerPage={gamesPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalGames={totalGames}>
                </Pagination>       
            </div>  
            <div className={styles.Tarjetas}>
                {videoGames.map((game)=> (
                    <Card
                        key= {game.id}
                        id={game.id}
                        name={game.name} 
                        backgroundImage={game.background_image} 
                        genres={game.genres}
                    ></Card>
                )).slice(firstIndex, lastIndex)
                }  
            </div>
            <div>
                <Pagination 
                    gamesPerPage={gamesPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalGames={totalGames}>
                </Pagination>       
            </div>
        </div>
    )
};
