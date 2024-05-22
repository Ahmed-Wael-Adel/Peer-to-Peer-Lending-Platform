import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../model/user.model.js';
import Loan from '../model/loan.model.js';
import createError from '../utils/createError.js';

export const getLoans = async (req, res, next) => {
    try {
        const loans = await Loan.find();
        res.status(200).json(loans);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

export const createLoan = async (req, res, next) => {
    try {
        const { amount, interestRate, term, investor } = req.body;
        
        if (!amount || !interestRate || !term || !investor) {
            return next(createError(400, "All fields are required"));
        }

        const newLoan = new Loan({ amount, interestRate, term, investor });
        await newLoan.save();
        res.status(201).json(newLoan);
    } catch (err) {
        console.error(err);
        next(err);
    }
};
