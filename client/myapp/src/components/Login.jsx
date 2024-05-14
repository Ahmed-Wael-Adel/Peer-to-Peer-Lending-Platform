import "../componentsCss/Login.css"
import React,{ useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePassowrd(e){
        setPassword(e.target.value)
    }

    async function getUserInfo(user){
        const userinfo = await axios.get(`http://localhost:5000/users/get/user`, { params: { email: user.email } });
        return userinfo;
    }

    async function handleSubmit(e){
        e.preventDefault();
        const user = {
            email,
            password
        }
        try {
            const response = await axios.post("http://localhost:5000/users/login", user);
            if(response.status === 200){
                console.log("found")
                const userinfo = await getUserInfo(user)
                console.log(userinfo);
                navigate("/LenderProfile", { state: { data: JSON.stringify(userinfo) }});
            }
        
        } catch (error) {
            
            console.log(error);
        }
        
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input value={email} onChange={handleEmail}></input>
                <label>Password</label>
                <input value={password} onChange={handlePassowrd}></input>
                <input type="submit" value={"Log in"}></input>
            </form>
        </div>
    )
}

export default Login;
