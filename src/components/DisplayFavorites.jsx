import React from "react";
import MovieTile from "./MovieTile";

function DisplayFavorites({favoriteMovies, moviesToDisplay, currentUser, favorites, setFavorites, setWatchLater, watchLater, tab}){
    return(
        <div className="movie-container">
                                    {favoriteMovies.slice(moviesToDisplay, moviesToDisplay + 48)
                                    .map(movie => <MovieTile movie={movie} key={movie.id} currentUser={currentUser} favorites={favorites} setFavorites={setFavorites} setWatchLater={setWatchLater} watchLater={watchLater} tab={tab}/>)}               
                                </div>
    )
}

export default DisplayFavorites;
