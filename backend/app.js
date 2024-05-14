require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');

//Routes
//const clinicRouter= require("./routes/clinic")
const doctorRouter= require("./routes/doctor");
//const bloodBankRouter= require("./routes/bloodBank")
//const addsRouter= require("./routes/adds")


const PORT = 5000;
const mongourl = process.env.DB_URL;
//console.log(mongourl)

mongoose.connect(mongourl);
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

app.use("/doctor",doctorRouter);
//app.use("/clinic",clinicRouter);
//app.use("/bloodBank",bloodBankRouter);
//app.use("/adds",addsRouter);


app.listen(PORT, () => {
  console.log(`App is listening on port number ${PORT}`);
});
