import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ProvidedLoans = ({loans = []}) => {
  // Sample data (replace with actual data from your state or props)
  const providedLoans = loans
  
  const navigate = useNavigate();
  console.log(loans)

  const handleUpdateClick = (loan) => {
    navigate("/Update", { state: { data: loan }});
  };

  const handleDeleteClick = async (loanId) => {
    try {
      await axios.delete(`http://localhost:5000/loans/delete/${loanId}`);
      console.log(`Deleted loan with ID: ${loanId}`);
      // Update the state to remove the deleted loan
    } catch (error) {
      console.error('Error deleting loan:', error);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Loans Provided</h3>
      {providedLoans.map((loan) => (
        <div key={loan._id} className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <h3 className="text-lg font-semibold mb-2">Loan Amount: ${loan.amount}</h3>
          <p className="text-gray-600 mb-2">Interest Rate: {loan.interestRate}%</p>
          <p className="text-gray-600 mb-2">Term: {loan.term} months</p>
          <p className="text-gray-600">Lender: {loan.email}</p>
          <div className="mt-4 flex justify-end space-x-2">
            <button
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
              onClick={() => handleUpdateClick(loan._id)}
            >
              Update
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              onClick={() => handleDeleteClick(loan._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProvidedLoans;
