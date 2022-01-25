import React,{useEffect, useState} from "react";

//import components
import Search from "./Search";
import MovieTile from "./MovieTile";
import '../AllCss/MovieContainer.css'

function MovieContainer(){

    const [movieData, setMovieData] = useState([])
    const [moviesToDisplay, setMoviesToDisplay] = useState(0)
    useEffect(()=>{
        fetch('http://localhost:3000/movies')
        .then((r)=> r.json())
        .then(data => setMovieData(data))
    },[])
   
    return(
        <>
        <Search/>
        <div className="movie-container">
            {movieData.slice(moviesToDisplay, moviesToDisplay + 48)
            .map(movie => <MovieTile movie={movie}/>)}
        </div>
        </>
    )

}

export default MovieContainer
