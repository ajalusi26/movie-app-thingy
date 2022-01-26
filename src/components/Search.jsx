import React,{useState, useEffect} from "react";
import '../AllCss/Search.css'

function Search({setSearchValue, currentUser, logout}){


    return(
        <>
            <nav className="nav">
                <div className="username">
                    <h4>{`Hello, ${currentUser.username}`}</h4>
                </div>
                <ul className="nav-links">
                    <li>All</li>
                    <li>My Favorites</li>
                    <li>Watch Later</li>
                    <li>My Account</li>
                </ul>
            </nav>
            <div className="nav">
                <input className="search" type="text" placeholder="search" size="50" onChange={(e) => setSearchValue(e.target.value)}/>
            </div>
        </>
        
    )

}

export default Search