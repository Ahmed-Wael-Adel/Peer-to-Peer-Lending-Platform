import React from 'react';
import axios from 'axios';

const ProvidedLoans = () => {
  // Sample data (replace with actual data from your state or props)
  const providedLoans = [
    { id: 1, amount: 5000, interestRate: 8, term: 12, borrower: 'John Doe' },
    // ... other loans
  ];

  const handleUpdateClick = (loanId) => {
    // Navigate to update loan page or handle update logic here
    console.log(`Update loan with ID: ${loanId}`);
  };

  const handleDeleteClick = async (loanId) => {
    try {
      await axios.delete(`/api/loans/${loanId}`);
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
        <div key={loan.id} className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <h3 className="text-lg font-semibold mb-2">Loan Amount: ${loan.amount}</h3>
          <p className="text-gray-600 mb-2">Interest Rate: {loan.interestRate}%</p>
          <p className="text-gray-600 mb-2">Term: {loan.term} months</p>
          <p className="text-gray-600">Borrower: {loan.borrower}</p>
          <div className="mt-4 flex justify-end space-x-2">
            <button
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
              onClick={() => handleUpdateClick(loan.id)}
            >
              Update
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              onClick={() => handleDeleteClick(loan.id)}
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
