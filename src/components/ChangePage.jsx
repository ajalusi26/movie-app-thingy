import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import '../AllCss/ChangePage.css'


function ChangePage({setMoviesToDisplay, moviesToDisplay}){
    return(
        
        <a href="#header">
            <div className="arrow-container">
                <span className="arrows-span">
                    <FontAwesomeIcon className="arrows" icon={faChevronLeft} onClick={() => setMoviesToDisplay(moviesToDisplay + 48)}></FontAwesomeIcon>
                    <FontAwesomeIcon className="arrows" icon={faChevronRight} onClick={() => setMoviesToDisplay(moviesToDisplay + 48)}></FontAwesomeIcon>
                </span>                    
            </div>
        </a> 
                

    )
}

export default ChangePage