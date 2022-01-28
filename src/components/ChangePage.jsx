import React from "react";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import '../AllCss/ChangePage.css'


function ChangePage({setMoviesToDisplay, moviesToDisplay}){

    return(
        
        <a href="#header" >
            <div className="arrow-container">
                    <li className="num-page" onClick={()=> setMoviesToDisplay(0)}>1</li>
                    <li className="num-page" onClick={()=> setMoviesToDisplay(48)}>2</li>
                    <li className="num-page" onClick={()=> setMoviesToDisplay(96)}>3</li>
                    <li className="num-page" onClick={()=> setMoviesToDisplay(144)}>4</li>
                    <li className="num-page" onClick={()=> setMoviesToDisplay(192)}>5</li>
                       
            </div>
        </a> 
                

    )
}

export default ChangePage