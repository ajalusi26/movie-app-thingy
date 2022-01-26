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
                    <li id='all' onClick={(e) => setTab(e.target.id)}>All</li>
                    <li id='favorites' onClick={(e) => setTab(e.target.id)}>My Favorites</li>
                    <li id='watch-later' onClick={(e) => setTab(e.target.id)}>Watch Later</li>
                    <li onClick={logout}>Log Out</li>
                </ul>
            </nav>
        </>
        
    )

}

export default NavBar