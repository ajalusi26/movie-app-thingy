import React,{useEffect, useState} from "react";

//import components + css
import Search from "./Search";
import MovieTile from "./MovieTile";
import '../AllCss/MovieContainer.css'

function MovieContainer({changeLoaded, moviesLoaded, currentUser, logout}){
    // All States
    const [searchValue, setSearchValue] = useState("")
    const [movieData, setMovieData] = useState([])
    const [moviesToDisplay, setMoviesToDisplay] = useState(0)
    const [favorites, setFavorites] = useState(currentUser.favorites)
    
    //gets all movies
    useEffect(()=>{
        fetch('http://localhost:3000/movies')
        .then((r)=> r.json())
        .then(data => {
            setMovieData(data)
            changeLoaded()}
        )},[])

    // Makes the movie tiles displayed == to the search
    const filteredMovies = movieData.filter(item => item.Name.toLowerCase().includes(searchValue.toLowerCase()))

    //get favorite + watchlater info
    


    
    if(moviesLoaded === true){
        return(
            <>
                <Search setSearchValue={setSearchValue} currentUser={currentUser} logout={logout}/>
                <div className="movie-container">
                    {console.log(favorites)}
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
