// models/Loan.js
import mongoose from 'mongoose';

const AppliedLoanSchema = new mongoose.Schema({
  boroower: String,
  LoanID: String,
},{
    timestamps: true
})

const AppliedLoan = mongoose.model('AppliedLoan', AppliedLoanSchema);

export default AppliedLoan;
