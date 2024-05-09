const express = require("express");
const app= express();

PORT = 5000;

//app.use("/doc")

app.listen(PORT,()=>{
    console.log(`App is listaning in port number ${PORT}`);
})