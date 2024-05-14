import React,{ useState } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
function CreateLoan(){

    const location = useLocation();
    const email = location.state.data

    const [amount, setAmount] = useState("");
    const [intrest, setIntrest] = useState("");
    const [duration, setDuration] = useState("");
    const [instulments, setInstulments] = useState("");

    

    function handleAmount(e){
        setAmount(e.target.value)
    }

    function handleIntrest(e){
        setIntrest(e.target.value)
    }

    function handleDuration(e){

        setDuration(e.target.value)
    }

    function handleInstulments(e){
        setInstulments(e.target.value)
    }

    async function handleSubmit(e){

        e.preventDefault();

        const Loan = {
            email,
            amount,
            intrest,
            duration,
            instulments
        }
        try {
            await axios.post ("http://localhost:5000/loans/add", Loan)
        } catch (error) {
            console.log(error)
        }
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Amount</label>
                <input value={amount} onChange={handleAmount}></input>
                <label>Intrest Rate</label>
                <input value={intrest} onChange={handleIntrest}></input>
                <label>Duration</label>
                <input value={duration} onChange={handleDuration}></input>
                <label>Instalments</label>
                <input value={instulments} onChange={handleInstulments}></input>
                <input type="submit" value={"Create Loan"}></input>
            </form>
        </div>
    )
}

export default CreateLoan;