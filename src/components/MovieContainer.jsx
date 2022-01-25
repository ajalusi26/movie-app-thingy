import React,{useEffect, useState} from "react";

//import components
import Search from "./Search";
import MovieTile from "./MovieTile";
import '../AllCss/MovieContainer.css'

function MovieContainer({changeLoaded, moviesLoaded}){
    const [searchValue, setSearchValue] = useState("")
    const [movieData, setMovieData] = useState([])
    const [moviesToDisplay, setMoviesToDisplay] = useState(0)
    useEffect(()=>{
        fetch('http://localhost:3000/movies')
        .then((r)=> r.json())
        .then(data => {
            setMovieData(data)
            changeLoaded()}
        )},[])

    const filteredMovies = movieData.filter(item => item.Name.toLowerCase().includes(searchValue.toLowerCase()))
    
    if(moviesLoaded === true){
        return(
            <>
                <Search setSearchValue={setSearchValue}/>
                <div className="movie-container">
                    {console.log(movieData)}
                    {filteredMovies.slice(moviesToDisplay, moviesToDisplay + 48)
                    .map(movie => <MovieTile movie={movie} key={movie.id}/>)}
                </div>
            </>
        )
    }else{
        return(
            <>
            </>
        )
    }
   

}

export default MovieContainer
