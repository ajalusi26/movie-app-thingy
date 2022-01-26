import React,{useState, useEffect} from "react";
import '../AllCss/MovieTile.css'
function MovieTile({movie}){
    return(
        <div className="tile">
            <img src={movie.imgUrl}></img>
            <p className="title">{movie.Name}</p>
            <span>
                <button id={movie.id}>Add to Favorites</button>
                <button id={movie.id}>Watch Later</button>
            </span>
        </div>
    )
}

export default MovieTile