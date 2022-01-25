import React,{useState} from "react";
import {useNavigate} from "react-router-dom"

function CreateAccountPage({addNewAccount}){
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    function createAccount(e){
        e.preventDefault()
        let newUser = {
            username: username,
            password: password,
            email: email
        }
    console.log(newUser)

    if(username.length > 7 && password.length > 7 && email.includes('@')){
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
            })
            .then((r) => r.json())
            .then((newUser) => {
                addNewAccount(newUser)
                navigate('/')
            });
        
    }if(email.includes("@") === false){
        alert('please enter valid Email address')
        setEmail("")
        setUsername("")
        setPassword("")
    }else if(username.length < 7 && password.length < 7){
        alert("username and password must be larger than 8 characters")
        setEmail("")
        setUsername("")
        setPassword("")
    }

    }


    return(
        <div className="login">
            <form onSubmit={createAccount}>
                <h1>Create Account</h1>
                <input type={"text"} name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} ></input>
                <input type={"text"} name="username" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} ></input>
                <input type={"password"} name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} ></input>
                <input type={"submit"} value="Create Account"></input>
            </form>
        </div>
    )
}

export default CreateAccountPage