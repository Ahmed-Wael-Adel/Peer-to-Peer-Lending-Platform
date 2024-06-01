import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const CreateLoan = () => {
    const location = useLocation();
    const receivedData = location.state.data
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        amount: '',
        interestRate: '',
        term: '',
        email: receivedData
    });
   // console.log(receivedData)

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/loans/add', formData)
            setMessage('Loan created successfully!');
            navigate(-1)
        } catch (error) {
            setMessage('Error creating loan: ' + error.response?.data.message || error.message);
            console.log(error)
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Create a New Loan</h2>
            {/* {message && <div className="mb-4 text-red-500">{message}</div>} */}
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-4">
                    <label className="block text-gray-700">Loan Amount</label>
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Interest Rate (%)</label>
                    <input
                        type="number"
                        name="interestRate"
                        value={formData.interestRate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Term (months)</label>
                    <input
                        type="number"
                        name="term"
                        value={formData.term}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                
                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                        Create Loan
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateLoan;
