const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const loanSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    intrest: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    instulments: {
        type: Number,
        required: true
    }
},
{
    timestamps: true

}
);

const Loan = mongoose.model("Loan", loanSchema);
module.exports = Loan;