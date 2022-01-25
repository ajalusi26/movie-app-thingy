import React,{useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom"

//import components
import MovieContainer from "./MovieContainer";

function FrontPage(){
  //get user
  const {id} = useParams()
  const [currentUser, setCurrentUser] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
      fetch(`http://localhost:3000/users/${id}`)
        .then((r) => r.json())
        .then((user) => setCurrentUser(user)
      )},[id])
  function logout(){
      localStorage.clear()
      navigate('/')
  }


  return(
      <>
      
      <h1>{currentUser.username}</h1>
      <button onClick={logout}>LOG OUT</button>
      <MovieContainer/>
    
      </>
  )


}

export default FrontPage