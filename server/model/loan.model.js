// models/Loan.js
import mongoose from 'mongoose';

const LoanSchema = new mongoose.Schema({
  amount: Number,
  interestRate: Number,
  term: Number,
  investor: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
},{
    timestamps: true
})

const Loan = mongoose.model('Loan', LoanSchema);

export default Loan;
