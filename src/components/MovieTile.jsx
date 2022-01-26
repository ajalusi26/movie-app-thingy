import React,{useState, useEffect} from "react";
import '../AllCss/MovieTile.css'
function MovieTile({movie, currentUser, favorites, setFavorites, watchLater, setWatchLater}){

    function addFavorite(e){
        const isDuplicate = favorites.filter(item => item == e.target.id)
        if(isDuplicate.length > 0){
            return
        }else{
            const patch = {
                favorites: [...favorites, e.target.id],          
            }
            fetch(`http://localhost:3000/users/${currentUser.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(patch),
        })
        .then((r) => r.json())
        .then((articleObj) => setFavorites([...articleObj.favorites]));
        } 
    }

    function addWatchLater(e){
        let isDuplicate = watchLater.filter(item => item == e.target.id)
        if(isDuplicate.length > 0){
            return
        }else{
            const patch = {
                watchLater: [...watchLater, e.target.id]        
             }
             fetch(`http://localhost:3000/users/${currentUser.id}`, {
         method: "PATCH",
         headers: {
             "Content-Type": "application/json",
         },
         body: JSON.stringify(patch),
         })
         .then((r) => r.json())
         .then((articleObj) => setWatchLater([...articleObj.watchLater]));
        }
        
    }


    return(
        <div className="tile">
            <img src={movie.imgUrl}></img>
            <p className="title">{movie.Name}</p>
            <span>
                <button id={movie.id} onClick={addFavorite}>Add to Favorites</button>
                <button id={movie.id} onClick={addWatchLater}>Watch Later</button>
            </span>
        </div>
    )
}

export default MovieTile