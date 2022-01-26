import React,{useState, useEffect} from "react";
import '../AllCss/Search.css'

function NavBar({currentUser, logout, setTab}){


    return(
        <>
            <nav className="nav">
                <div className="username">
                    <h4>{`Hello, ${currentUser.username}`}</h4>
                </div>
                <ul className="nav-links">
                    <li value={'all'} onClick={(e) => setTab(e.target.value)}>All</li>
                    <li value={'favorites'} onClick={(e) => setTab(e.target.value)}>My Favorites</li>
                    <li value={'watchLater'} onClick={(e) => setTab(e.target.value)}>Watch Later</li>
                    <li>My Account</li>
                </ul>
            </nav>
        </>
        
    )

}

export default NavBar