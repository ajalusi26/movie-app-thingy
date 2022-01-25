import React,{useState, useEffect} from "react";
import '../AllCss/Search.css'

function Search({setSearchValue}){


    return(
        <div className="nav">
            <input className="search" type="text" placeholder="search" size="50" onChange={(e) => setSearchValue(e.target.value)}/>
        </div>
    )

}

export default Search