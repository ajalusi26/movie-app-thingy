import React from "react";
import MovieTile from "./MovieTile";



function DisplayWatchLater({moviesWatchLater, moviesToDisplay, currentUser, favorites, setFavorites, setWatchLater, watchLater, tab}){
    return(
        <div className="movie-container">
                                    {moviesWatchLater.slice(moviesToDisplay, moviesToDisplay + 48)
                                    .map(movie => <MovieTile movie={movie} key={movie.id} currentUser={currentUser} favorites={favorites} setFavorites={setFavorites} setWatchLater={setWatchLater} watchLater={watchLater}tab={tab}/>)}               
                                </div>
    )
}
export default DisplayWatchLater;
