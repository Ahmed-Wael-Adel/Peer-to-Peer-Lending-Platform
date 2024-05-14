const express = require("express");
const router = express.Router();
let Loan = require('../models/loan.model.js');

//add loan
router.route("/add").post((req, res) => {
    const email = req.body.email;
    const amount = req.body.amount;
    const intrest = req.body.intrest;
    const duration = req.body.duration;
    const instulments = req.body.instulments;
    

    const newLoan = new Loan({
        email,
        amount,
        intrest,
        duration,
        instulments,
    });

    newLoan
        .save()
        .then(() => res.json("Loan added Successfully"))
        .catch((err) => res.status(400).json("Error: " + err));
});

//get loans
router.route("/get/loans").get((req, res) => {
    const email = req.query.email;
    Loan.find({ email })
    .then(loanInfo => {
        res.json(loanInfo);
    })
    .catch(error => {
        console.error('Error fetching loans:', error);
        res.status(500).json({ error: 'Internal server error' });
    });
})
module.exports = router;