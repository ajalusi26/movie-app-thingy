import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import '../AllCss/ChangePage.css'


function ChangePage({setMoviesToDisplay, moviesToDisplay}){

    function backOnePage(){
        if(moviesToDisplay === 0){
            return
        }else{
            setMoviesToDisplay(moviesToDisplay - 48)
        }
    }
    function upOnePage(){
        if(moviesToDisplay === 192){
            setMoviesToDisplay(0)
        }else{
            setMoviesToDisplay(moviesToDisplay + 48)
        }
    }


    return(
        
        <a href="#header">
            <div className="arrow-container">
                <span className="arrows-span">
                    <FontAwesomeIcon className="arrows" icon={faChevronLeft} onClick={backOnePage}></FontAwesomeIcon>
                    <FontAwesomeIcon className="arrows" icon={faChevronRight} onClick={upOnePage}></FontAwesomeIcon>
                </span>                    
            </div>
        </a> 
                

    )
}

export default ChangePage