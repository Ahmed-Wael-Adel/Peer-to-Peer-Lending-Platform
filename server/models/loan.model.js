const mongoose  = require('mongoose') ;

const LoanSchema = new mongoose.Schema({
  amount:{
    type: Number
  },
  interestRate:{
    type: Number
  },
  term:{
     type: Number,
  },
  email:{
     type: String
  }
},{
    timestamps: true
})

const Loan = mongoose.model('Loan', LoanSchema);

module.exports =  Loan;