import React, { useState } from 'react';
import ApprovedLoans from '../components/loans/approvedloans.jsx';
import WaitingLoans from '../components/loans/waitingloans.jsx';

const BorrowerProfile = () => {
  // Sample user data (replace with actual data)
  const user = {
    username: 'john_doe',
    email: 'john@example.com',
    // Add more user data here if needed
  };

  // State to track which view is currently selected
  const [selectedView, setSelectedView] = useState('approved');

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="mt-6 flex justify-center">
          <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-full h-24 w-24" />
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Borrower Profile</h2>
          <div className="border-t border-gray-200 mt-4 pt-4">
            <div className="flex justify-between">
              <p className="text-gray-600">Total Loans</p>
              <p className="text-gray-800 font-semibold">3</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Total Amount Borrowed</p>
              <p className="text-gray-800 font-semibold">$10,000</p>
            </div>
            {/* Add more profile details here */}
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <button
              className={`py-2 px-4 rounded ${selectedView === 'approved' ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
              onClick={() => setSelectedView('approved')}
            >
              Approved Loans
            </button>
            <button
              className={`py-2 px-4 rounded ${selectedView === 'waiting' ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
              onClick={() => setSelectedView('waiting')}
            >
              Waiting Loans
            </button>
          </div>
        </div>
      </div>
      {/* Conditionally render components based on selectedView */}
      {selectedView === 'approved' && <ApprovedLoans />}
      {selectedView === 'waiting' && <WaitingLoans />}
    </div>
  );
};

export default BorrowerProfile;
