    import LenderInfo from "../components/LenderInfo";
    import "../componentsCss/LenderPage.css"
    import { Link } from 'react-router-dom';
    import { useLocation } from 'react-router-dom';
    import React,{ useState, useEffect } from "react";
    import { useNavigate } from "react-router-dom";
    import axios from "axios"

    function LenderPage(){
        const location = useLocation();
        const receivedData = JSON.parse(location.state.data)
        const navigate = useNavigate();
        const [loans, setLoan] = useState([]);
        

        /*console.log("--------->" , receivedData)*/
        
        function handlecreateoffer(){
            navigate("/CreateLoan", { state: { data: receivedData.data.email }});
        }
        
        useEffect(() => {
            axios.get("http://localhost:5000/loans/get/loans", { params: { email: receivedData.data.email } })
                .then(response => {
                    setLoan(response.data);
                    console.log("=====>", response.data);
                })
                .catch(error => {
                    console.error('Error fetching loans:', error);
                });
        }, []);
        return(
            <div className="LenderPage">
                <LenderInfo username={receivedData.data.username} email={receivedData.data.email}/>
                <div className="Loan-Offer">
                    <button onClick={handlecreateoffer}> Create New Loan</button>
                </div>
                {loans.map((loan, index) => (
                    <div className="loan-list" key={index}>
                        <span className="lender-email">{loan.email}</span>
                        <span className="loan-amount">{loan.amount}$</span>
                        <span className="loan-intrest">{loan.intrest}%</span>
                        <span className="loan-duration">{loan.duration}</span>
                        <span className="loan-instulments">{loan.instulments} instulments</span>
                    </div>
                ))}
            </div>
        )
    }

    export default LenderPage;