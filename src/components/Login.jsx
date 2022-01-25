import React,{useState} from "react";
import {Link, useNavigate} from "react-router-dom"

function Login({allUsers, setUser}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    function checkLogin(user){
        if(user[0].password === password && user[0].username === username){
            
            return(
                <>
                    {setUser(user)}
                    {localStorage.setItem("userID", user[0].id)}
                    {navigate(`/frontPage/${localStorage.userID}`)}
                </>
               )
        }else{
            alert("Wrong username or password.")
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        let user = allUsers.filter(user => user.username === username)
        user.length > 0 ? checkLogin(user) : alert("Wrong username or password.")
        setUsername("")
        setPassword("")
       
    }
    if(localStorage.length > 0){
        return(
            <>
                {console.log(localStorage.userID)}
                {navigate(`/frontPage/${localStorage.userID}`)}
            </>
        )
    
    }else{
        return(
            <div className="login">
                <form onSubmit={handleSubmit} >
                    <h1>Login</h1>
                    <input type={"text"} name="username" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)}></input>
                    <input type={"password"} name="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                    <input type={"submit"} value="Login"></input>
                </form>
                <Link to={"/createAccount"}>Dont have an account? Click here to create one!</Link>
            </div>
        )
    }
}

export default Login