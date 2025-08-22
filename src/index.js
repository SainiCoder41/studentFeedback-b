const express = require('express');
const app =express();
const authRouter = require("./routes/userAuth");
const main = require("./config/DB");
const { promises } = require('dns');
const cors = require('cors');
const Courserouter = require("./routes/courseRoutes")
const Feedback = require("./routes/Feedbaack");
const cookieParser =  require('cookie-parser');
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true 
}))
app.use(express.json());
app.use(cookieParser());

app.use("/user",authRouter);

app.use("/course",Courserouter);
app.use("/feedback",Feedback);

const IntializeConnection =async ()=>{
  try{
    await Promise.all([main()]);
    console.log("DB is connected")
    app.listen(3000,()=>{
  console.log("Lisitin at port 3000");
})

  }catch(err){
console.log("Error"+err);
  }
}

IntializeConnection();