import React, { useState, useEffect } from 'react';
import axios from 'axios';
import newRequest from '../../utils/newRequest';

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [optionalLoans, setOptionalLoans] = useState([]);
    const [selectedLoan, setSelectedLoan] = useState(null);

    useEffect(() => {
        const fetchLoans = async () => {
            try {
                const response = await newRequest.get('loans/getLoans');
                console.log(response.data)
                setOptionalLoans(response.data);
            } catch (error) {
                console.error('Error fetching loans:', error);
            }
        };

        fetchLoans();
    }, []);

    const handleApplyClick = (loan) => {
        setSelectedLoan(loan);
    };

    const handleFormClose = () => {
        setSelectedLoan(null);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {isLoggedIn ? (
                <>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Optional Loans Provided by Investors</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {optionalLoans.map((loan) => (
                            <div key={loan._id} className="bg-white rounded-lg shadow-lg p-6">
                                <h3 className="text-lg font-semibold mb-2">Loan Amount: ${loan.amount}</h3>
                                <p className="text-gray-600 mb-2">Interest Rate: {loan.interestRate}%</p>
                                <p className="text-gray-600 mb-2">Term: {loan.term} months</p>
                                <p className="text-gray-600">Investor: {loan.investor}</p>
                                <div className="mt-4 flex justify-end">
                                    <button
                                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                                        onClick={() => handleApplyClick(loan)}
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {selectedLoan && (
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                                <h3 className="text-xl font-semibold mb-4">Apply for Loan</h3>
                                <p className="mb-2"><strong>Loan Amount:</strong> ${selectedLoan.amount}</p>
                                <p className="mb-2"><strong>Interest Rate:</strong> {selectedLoan.interestRate}%</p>
                                <p className="mb-2"><strong>Term:</strong> {selectedLoan.term} months</p>
                                <p className="mb-4"><strong>Investor:</strong> {selectedLoan.investor}</p>
                                <form>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Your Name</label>
                                        <input type="text" className="w-full px-3 py-2 border rounded" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Your Email</label>
                                        <input type="email" className="w-full px-3 py-2 border rounded" />
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            type="button"
                                            className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
                                            onClick={handleFormClose}
                                        >
                                            Cancel
                                        </button>
                                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className="text-center py-20">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Welcome to Our Loan Application</h2>
                    <p className="text-gray-600 mb-6">Please log in to view and apply for loans provided by our investors.</p>
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        onClick={() => setIsLoggedIn(true)} // Replace with actual login logic
                    >
                        Log In
                    </button>
                </div>
            )}
        </div>
    );
};

export default Home;
