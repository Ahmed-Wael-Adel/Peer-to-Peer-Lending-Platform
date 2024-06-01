const express = require("express");
const router = express.Router();
let User = require('../models/users.model.js');
const bcrypt = require('bcrypt');


// User login
router.route("/login").post(async (req, res) => {

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
})
/*router.route("/login").post(async (req, res) => {
    
    try {
      // Find user with provided email
      const user = await User.findOne({ email: req.body.email });
  
      // If user doesn't exist, return error
      if (!user) {
        return res.sendStatus(401);
      }
      if(user.password != req.body.password)
      {
        return res.sendStatus(401);
      }
      
      // If user exists and password is correct, send success response
      else
      {
        console.log("found")
        return res.sendStatus(200)
        
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });*/

//get user
router.route("/get/user").get( async (req, res) => {
  const email = req.query.email; // Retrieve email from query parameters
  const userinfo = await User.findOne({ email });
  console.log(userinfo)
  return res.json(userinfo)

    /*User.findOne({email: req.body.email})
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error: " + err));*/
});

// add user
router.route("/add").post( async (req, res) => {

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
})
/*router.route("/add").post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const address = req.body.address;
    const phone = req.body.phone;

    const newUser = new User({
        username,
        password,
        email,
        address,
        phone
    });

    newUser
        .save()
        .then(() => res.json("User added Successfully"))
        .catch((err) => res.status(400).json("Error: " + err));
});*/

module.exports = router;