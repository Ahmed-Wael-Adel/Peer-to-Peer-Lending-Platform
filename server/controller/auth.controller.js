import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../model/user.model.js';
import createError from '../utils/createError.js';

export const register = async (req, res, next) => {

    try {
        const hash = await bcrypt.hashSync(req.body.password, 10);
        const user = await User.findOne({ username: req.body.username });
        if (user) return next(createError(401, "Username already exists"));
        const email = await User.findOne({ email: req.body.email });
        if (email) return next(createError(401, "Email already exists"));
        console.log(req.body)
        const newUser = new User({
            ...req.body,
            password: hash,
        })
        
        await newUser.save();
        res.status(201).send(newUser);
    } catch (err) {
        console.log(err);
        next(err)
    }
}

export const login = async (req, res, next) => {

    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return next(createError(404, "Email not found"));

        const validPassword = await bcrypt.compareSync(req.body.password, user.password);
        if (!validPassword) return next(createError(400, "Invalid credentials"));

        const { password, ...info } = user._doc;
       // res.cookie("accessToken", token, {
        //   httpOnly: true,
        //}).status(200).json(info);
        res.status(200).json("Login")
    } catch (err) {
        console.log(err);
        next(err)
    }
}

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
