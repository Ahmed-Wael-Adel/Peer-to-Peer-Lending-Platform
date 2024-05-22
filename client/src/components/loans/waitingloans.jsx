import React from 'react';

const WaitingLoans = () => {
  // Sample data for waiting loans (replace with actual data)
  const waitingLoans = [
    { id: 1, amount: 6000, interestRate: 7, status: 'Waiting', lender: { name: 'Alice Brown', profileUrl: '/lender/alice_brown' } },
    { id: 2, amount: 9000, interestRate: 5, status: 'Waiting', lender: { name: 'David Wilson', profileUrl: '/lender/david_wilson' } },
    { id: 3, amount: 12000, interestRate: 6.5, status: 'Waiting', lender: { name: 'Emma Davis', profileUrl: '/lender/emma_davis' } },
  ];

  const handleAccept = (loanId) => {
    // Implement the accept logic here
    console.log(`Accepted loan with ID: ${loanId}`);
  };

  const handleReject = (loanId) => {
    // Implement the reject logic here
    console.log(`Rejected loan with ID: ${loanId}`);
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">Waiting Loans</h2>
      <div className="mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest Rate</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lender</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {waitingLoans.map(loan => (
              <tr key={loan.id}>
                <td className="px-6 py-4 whitespace-nowrap">{loan.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">${loan.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">{loan.interestRate}%</td>
                <td className="px-6 py-4 whitespace-nowrap">{loan.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href={loan.lender.profileUrl} className="text-blue-500 hover:underline">{loan.lender.name}</a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 mr-2"
                    onClick={() => handleAccept(loan.id)}
                  >
                    Accept
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    onClick={() => handleReject(loan.id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WaitingLoans;
