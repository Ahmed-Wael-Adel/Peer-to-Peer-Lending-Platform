import React from 'react';

const ApprovedLoans = () => {
  // Sample data for approved loans (replace with actual data)
  const approvedLoans = [
    { id: 1, amount: 5000, interestRate: 8, status: 'Approved', lender: { name: 'John Doe', profileUrl: '/lender/john_doe' } },
    { id: 2, amount: 8000, interestRate: 6, status: 'Approved', lender: { name: 'Jane Smith', profileUrl: '/lender/jane_smith' } },
    { id: 3, amount: 10000, interestRate: 7, status: 'Approved', lender: { name: 'Michael Johnson', profileUrl: '/lender/michael_johnson' } },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">Approved Loans</h2>
      <div className="mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest Rate</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lender</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {approvedLoans.map(loan => (
              <tr key={loan.id}>
                <td className="px-6 py-4 whitespace-nowrap">{loan.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">${loan.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">{loan.interestRate}%</td>
                <td className="px-6 py-4 whitespace-nowrap">{loan.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href={loan.lender.profileUrl} className="text-blue-500 hover:underline">{loan.lender.name}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedLoans;
