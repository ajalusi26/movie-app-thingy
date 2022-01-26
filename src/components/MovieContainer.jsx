import React,{useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
//import components + css
import NavBar from "./NavBar";
import Search from "./Search";
import MovieTile from "./MovieTile";
import '../AllCss/MovieContainer.css'
import ChangePage from "./ChangePage";

function MovieContainer({changeLoaded, moviesLoaded, currentUser, logout}){
    // All States
    const [searchValue, setSearchValue] = useState("")
    const [movieData, setMovieData] = useState([])
    const [moviesToDisplay, setMoviesToDisplay] = useState(0)
    const [tab, setTab] = useState("all")
    const [favorites, setFavorites] = useState(currentUser.favorites)
    const [watchLater, setWatchLater] = useState(currentUser.watchLater)
    
    //gets all movies
    useEffect(()=>{
        fetch('http://localhost:3000/movies')
        .then((r)=> r.json())
        .then(data => {
            setMovieData(data)
            changeLoaded()}
        )},[])

    // Makes the movies displayed == to the search/tab chosen
   
    const filteredMovies = movieData.filter(item => item.Name.toLowerCase().includes(searchValue.toLowerCase()))

    const favoriteMovies = movieData.filter(item => favorites.includes(item.id))

    const moviesWatchLater = movieData.filter(item => watchLater.includes(item.id))


    
    
    
    
    
            
    

    //get favorite + watchlater info
    


    
    if(moviesLoaded === true ){
                switch (tab){
                    case 'all':
                        return(
                            <>
                                <NavBar setTab={setTab} currentUser={currentUser} logout={logout} setMoviesToDisplay={setMoviesToDisplay}/>
                                <Search setSearchValue={setSearchValue}/>
                                <div className="movie-container">
                                    {filteredMovies.slice(moviesToDisplay, moviesToDisplay + 48)
                                    .map(movie => <MovieTile movie={movie} key={movie.id} currentUser={currentUser} favorites={favorites} setFavorites={setFavorites} setWatchLater={setWatchLater} watchLater={watchLater}/>)}
                                    {console.log(favoriteMovies)}
                                   
                                </div>
                                <ChangePage setMoviesToDisplay={setMoviesToDisplay} moviesToDisplay={moviesToDisplay}/>
                            </>  
                        )
                    case 'favorites':
                        return(
                            <>
                                <NavBar setTab={setTab} currentUser={currentUser} logout={logout} setMoviesToDisplay={setMoviesToDisplay}/>
                                <div className="movie-container">
                                {favoriteMovies.slice(moviesToDisplay, moviesToDisplay + 48)
                                    .map(movie => <MovieTile movie={movie} key={movie.id} currentUser={currentUser} favorites={favorites} setFavorites={setFavorites} setWatchLater={setWatchLater} watchLater={watchLater}/>)}
                                    {console.log(favoriteMovies)}
                                </div>
                                
                            </>
                        )
                    case 'watch-later':
                        return(
                            <>
                               <NavBar setTab={setTab} currentUser={currentUser} logout={logout} setMoviesToDisplay={setMoviesToDisplay}/>
                                <div className="movie-container">
                                {moviesWatchLater.slice(moviesToDisplay, moviesToDisplay + 48)
                                    .map(movie => <MovieTile movie={movie} key={movie.id} currentUser={currentUser} favorites={favorites} setFavorites={setFavorites} setWatchLater={setWatchLater} watchLater={watchLater}/>)}
                                    {console.log(favoriteMovies)}
                                </div>
                            </>
                        )
                }
    }else{
        return(
            <>
            </>
        )
    }
   

}

export default MovieContainer
