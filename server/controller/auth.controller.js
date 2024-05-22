import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../model/user.model.js';
import Loan from '../model/loan.model.js';
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

        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller,
        }, process.env.SECRET_KEY, { expiresIn: "6h" });

        const { password, ...info } = user._doc;
        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(info);

    } catch (err) {
        console.log(err);
        next(err)
    }
}

export const checkLogin = async(req,res,next) => {
    try{
        const user = await User.findById(req.userId)
    }catch(err){
        console.log(err)
    }
}

