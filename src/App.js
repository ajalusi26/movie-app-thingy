import React,{useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Login from './components/Login';
import CreateAccountPage from './components/CreateAccountPage';
import FrontPage from './components/FrontPage'

function App() {
  const [allUsers, setAllUsers] = useState([])
  const [currentUser, setCurrentUser] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/users")
  .then((r) => r.json())
  .then((allUsers) =>{
    setAllUsers(allUsers)
  });
  },[])

  function setUser(user) {
    setCurrentUser(user)
  }
  function addNewAccount(newUser) {
    setAllUsers([...allUsers, newUser])
  }

  return(
    <>
      <Routes>
        <Route exact path="/" element={<Login  allUsers={allUsers} setUser={setUser}/>}/> 
        <Route exact path="/createAccount" element={ <CreateAccountPage  addNewAccount={addNewAccount}/>}/> 
        <Route path="/frontPage/:id" element={<FrontPage/>}/>
      </Routes>
    </>
  )
}

export default App;
