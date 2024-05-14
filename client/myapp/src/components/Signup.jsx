import React,{ useState } from "react";
import axios from "axios";
function Signup(){
    
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [phone,setPhone] = useState("");

    function handleUsername(e)
    {
        setUsername(e.target.value)
    }

    function handlePassword(e)
    {
        setPassword(e.target.value)
    }

    function handleEmail(e)
    {
        setEmail(e.target.value)
    }

    function handleAddress(e)
    {
        setAddress(e.target.value)
    }

    function handlePhone(e)
    {
        setPhone(e.target.value)
    }

    function handleclick (e){
        e.preventDefault();
        const user = {
            username,
            password,
            email,
            address,
            phone
        };

        console.log(user);
        
        try {
            axios.post("http://localhost:5000/users/add", user)
        } catch (error) {
            console.log(error)
        }

    }

    return(
        <div className="main">
            <label>User Name</label>
            <input value={username} onChange={handleUsername}></input>
            <label>Password</label>
            <input type="password" value={password} onChange={handlePassword}></input>
            <label>Email</label>
            <input value={email} onChange={handleEmail}></input>
            <label>Address</label>
            <input value={address} onChange={handleAddress}></input>
            <label>Phone</label>
            <input type="Number" value={phone} onChange={handlePhone}></input>
            <button onClick={handleclick}>Sign Up</button>
        </div>
    )
}

export default Signup;