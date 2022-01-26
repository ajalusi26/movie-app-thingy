import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'


function ChangePage({setMoviesToDisplay, moviesToDisplay}){
    return(
        <div className="arrow-container">
          <a href="#header">
                    <button onClick={() => setMoviesToDisplay(moviesToDisplay + 48)}> <FontAwesomeIcon icon={faArrowAltCircleLeft} className="arrows"></FontAwesomeIcon></button>
                    <button onClick={() => setMoviesToDisplay(moviesToDisplay + 48)}><FontAwesomeIcon icon={faArrowAltCircleRight} className="arrows"></FontAwesomeIcon></button>
            </a>
                
        </div>
    )
}

export default ChangePage