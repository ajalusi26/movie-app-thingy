import React,{useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom"

//import components
import MovieContainer from "./MovieContainer";

function FrontPage(){
  //get user
  const {id} = useParams()
  const [userLoaded, setUserLoaded] = useState(false)
  const [currentUser, setCurrentUser] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
      fetch(`http://localhost:3000/users/${id}`)
        .then((r) => r.json())
        .then((user) => {
          setCurrentUser(user)
          setUserLoaded(!userLoaded)
        }
      )},[id])

  function logout(){
      localStorage.clear()
      navigate('/')
  }

  //only show when loaded
  const [moviesLoaded, setLoaded] = useState(false)
  function changeLoaded(){
    setLoaded(!moviesLoaded)
  }

  if(userLoaded){
    return(
      <>
        <h1 style={{color: "white"}}>{currentUser.username}</h1>
        <button onClick={logout}>LOG OUT</button>
        <MovieContainer changeLoaded={changeLoaded} moviesLoaded={moviesLoaded}/>
        
      </>
  )
  }else{
    return(
      <></>
    )
  }
    
    }
  
  
  




export default FrontPage