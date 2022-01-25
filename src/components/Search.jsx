import React,{useState, useEffect} from "react";
import '../AllCss/Search.css'

function Search(){
    return(
        <div className="nav">
            <input className="search" type="text" placeholder="search" size="50"/>
        </div>
    )

}

export default Search