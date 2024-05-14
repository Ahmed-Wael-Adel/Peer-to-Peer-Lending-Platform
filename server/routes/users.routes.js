const express = require("express");
const router = express.Router();
let User = require('../models/users.model.js');


// User login
router.route("/login").post(async (req, res) => {
    
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
  });

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
router.route("/add").post((req, res) => {
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
});

module.exports = router;