import React,{useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
//import components + css
import NavBar from "./NavBar";
import Search from "./Search";
import MovieTile from "./MovieTile";
import '../AllCss/MovieContainer.css'

function MovieContainer({changeLoaded, moviesLoaded, currentUser, logout}){
    // All States
    const [searchValue, setSearchValue] = useState("")
    const [movieData, setMovieData] = useState([])
    const [moviesToDisplay, setMoviesToDisplay] = useState(0)
    const [tab, setTab] = useState("all")
    const [favorites, setFavorites] = useState(currentUser.favorites)
    
    //gets all movies
    useEffect(()=>{
        fetch('http://localhost:3000/movies')
        .then((r)=> r.json())
        .then(data => {
            setMovieData(data)
            changeLoaded()}
        )},[])

    // Makes the movie tiles displayed == to the search/tab chosen


    const filteredMovies = movieData.filter(item => item.Name.toLowerCase().includes(searchValue.toLowerCase()))

    //get favorite + watchlater info
    


    
    if(moviesLoaded === true){
                return(
                    <>
                        <NavBar setTab={setTab} currentUser={currentUser} logout={logout}/>
                        <Search setSearchValue={setSearchValue}/>
                        <div className="movie-container">
                            {/* {console.log(favorites)} */}
                            {filteredMovies.slice(moviesToDisplay, moviesToDisplay + 48)
                            .map(movie => <MovieTile movie={movie} key={movie.id}/>)}
                        </div>
                        {console.log(tab)}
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
