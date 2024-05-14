const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
require("dotenv").config();

app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8000
const DataBaseConn = process.env.DATABASE_URL

console.log("DataBaseURL" + " " + DataBaseConn)

 mongoose.connect(DataBaseConn,{})
    .then(()=>
        app.listen(port, () =>
            console.log(`server is running at : http://localhost:${port}`)
        )
    )
    .catch((error) => console.error(error));

//routes
const users = require("./routes/users.routes.js");
const loans = require("./routes/loan.routes.js");
app.use('/users', users);
app.use('/loans', loans);
