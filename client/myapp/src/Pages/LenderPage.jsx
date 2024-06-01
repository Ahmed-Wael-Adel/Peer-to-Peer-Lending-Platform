    import LenderInfo from "../components/LenderInfo";
    import { Link } from 'react-router-dom';
    import { useLocation } from 'react-router-dom';
    import React,{ useState, useEffect } from "react";
    import { useNavigate } from "react-router-dom";
    import axios from "axios"
    import ProvidedLoans from "../components/loans/providedLoans";
    import RequestedLoans from "../components/loans/requestedLoans";

    function LenderPage(){
        const location = useLocation();
        const receivedData = JSON.parse(location.state.data)
        console.log(receivedData)
        const navigate = useNavigate();
        const [loans, setLoan] = useState([]);
        

        /*console.log("--------->" , receivedData)*/
        
        function handlecreateoffer(){
            navigate("/CreateLoan", { state: { data: receivedData.data.email }});
        }
        
        useEffect(() => {
            const response = async () =>await axios.get("http://localhost:5000/loans/get/loans", { params: { email: receivedData.data.email } })
                .then(response => {
                    setLoan(response.data);
                    console.log("=====>", response.data);
                })
                .catch(error => {
                    console.error('Error fetching loans:', error);
                });

            response()
        }, []);
        const [selectedView, setSelectedView] = useState('provided');

        function handleCreateclick(){
            navigate("/CreateLoan", { state: { data: receivedData.data.email }});
        }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="mt-6 flex justify-center">
          <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Profile" className="rounded-full h-24 w-24" />
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold">{receivedData.data.username}</h2>
          <div className="border-t border-gray-200 mt-4 pt-4">
            <div className="flex justify-between">
              <p className="text-gray-600">Total Loans Provided</p>
              <p className="text-gray-800 font-semibold">3</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Total Amount Lent</p>
              <p className="text-gray-800 font-semibold">$10,000</p>
            </div>
            {/* Add more profile details here */}
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <button
              className={`py-2 px-4 rounded ${selectedView === 'provided' ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
              onClick={() => setSelectedView('provided')}
            >
              Loans Provided
            </button>
            <button
              className={`py-2 px-4 rounded ${selectedView === 'requested' ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
              onClick={() => setSelectedView('requested')}
            >
              Requested Loans
            </button>
            <button
              className={`py-2 px-4 rounded bg-green-600 text-white bg-blue-500 text-white hover:bg-blue-600'}`}
              onClick={handleCreateclick}
            >
              Create Loan
            </button>
          </div>
        </div>
      </div>
      {/* Conditionally render components based on selectedView */}
      {selectedView === 'provided' && <ProvidedLoans loans={loans} />}
      {selectedView === 'requested' && <RequestedLoans loans={loans}/>}
    </div>
  );
    }

    export default LenderPage;