const express = require("express");
const createError = require('../utils/createError.js');
const router = express.Router();
let Loan = require('../models/loan.model.js');

//add loan
router.route("/add").post(async (req, res, next) => {
    try {
        const { amount, interestRate, term, email } = req.body;
        console.log(req.body)

        if (!amount || !interestRate || !term || !email) {
            return next(createError(400, "All fields are required"));
        }

        const newLoan = new Loan({ amount, interestRate, term, email });
        await newLoan.save();
        res.status(201).json(newLoan);
    } catch (err) {
        console.error(err);
        next(err);
    }
});
/*router.route("/add").post((req, res) => {
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
});*/

//get loans
router.route("/get/loans").get((req, res) => {
    const email = req.query.email;
    Loan.find({ email })
        .then(loanInfo => {
            console.log(loanInfo)
            res.json(loanInfo);
        })
        .catch(error => {
            console.error('Error fetching loans:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
})

//getOneLoan
router.route("/get/loanbyid/:id").get(async (req, res, next) => {
    try {// Retrieve email from query parameters
        const { id } = req.params
        console.log(id)
        const loaninfo = await Loan.findById(id);
        res.status(201).json(loaninfo)
    } catch (err) {
        console.log(err)
    }
    // if (!loan) next(createError(404, "Not found"))
    // console.log(loaninfo)
    // res.status(201).json(loaninfo)

    /*User.findOne({email: req.body.email})
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error: " + err));*/
});

router.route("/update").put(async (req, res) => {
    try {
        const { amount, interestRate, term, email } = req.body;
        console.log(req.body)

        if (!amount || !interestRate || !term || !email) {
            return next(createError(400, "All fields are required"));
        }
        const updatedLoan = await Loan.findOneAndUpdate(
            { email: email }, // Find loan by email
            { amount, interestRate, term }, // Fields to update
            { new: true } // Return the updated document
        );

        if (!updatedLoan) {
            return next(createError(404, "Loan not found"));
        }

        res.status(200).json(updatedLoan);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.route('/delete/:id').delete(async (req, res) => {
    try {
        const { id } = req.params;

        // Use await to ensure the deletion is complete before sending the response
        const loan = await Loan.findByIdAndDelete(id);

        // Check if the loan was found and deleted
        if (!loan) {
            return res.status(404).json({ error: 'Loan not found' });
        }

        res.status(200).json({ message: 'Loan deleted successfully' });
    } catch (err) {
        console.log(err)
    }
})

router.route('/getAllLoans').get(async (req, res) => {
    try {
        const loans = await Loan.find();
        res.status(200).json(loans);
    } catch (err) {
        console.log(err);
        next(err);
    }
})
module.exports = router;