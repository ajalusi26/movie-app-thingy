import React,{useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
//import components + css
import NavBar from "./NavBar";
import Search from "./Search";
import '../AllCss/MovieContainer.css'
import ChangePage from "./ChangePage";
import DisplayMovies from "./DisplayMovies";
import DisplayFavorites from "./DisplayFavorites";
import DisplayWatchLater from "./DisplayWatchLater";

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


    if(moviesLoaded === true ){
                switch (tab){
                    case 'all':
                        return(
                            <>
                                <NavBar setTab={setTab} currentUser={currentUser} logout={logout} setMoviesToDisplay={setMoviesToDisplay}/>
                                <Search setSearchValue={setSearchValue}/>
                                <DisplayMovies filteredMovies={filteredMovies} moviesToDisplay={moviesToDisplay} currentUser={currentUser} favorites={favorites} setFavorites={setFavorites} watchLater={watchLater} setWatchLater={setWatchLater} tab={tab}/>
                                <ChangePage setMoviesToDisplay={setMoviesToDisplay} moviesToDisplay={moviesToDisplay}/>
                            </>  
                        )
                    case 'favorites':
                        return(
                            <>
                                <NavBar setTab={setTab} currentUser={currentUser} logout={logout} setMoviesToDisplay={setMoviesToDisplay}/>
                               <DisplayFavorites favoriteMovies={favoriteMovies} moviesToDisplay={moviesToDisplay} currentUser={currentUser} favorites={favorites} setFavorites={setFavorites} watchLater={watchLater} setWatchLater={setWatchLater} tab={tab}/>
                                
                            </>
                        )
                    case 'watch-later':
                        return(
                            <>
                               <NavBar setTab={setTab} currentUser={currentUser} logout={logout} setMoviesToDisplay={setMoviesToDisplay}/>
                                <DisplayWatchLater moviesWatchLater={moviesWatchLater} moviesToDisplay={moviesToDisplay} currentUser={currentUser} favorites={favorites} setFavorites={setFavorites} watchLater={watchLater} setWatchLater={setWatchLater} tab={tab}/>
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
