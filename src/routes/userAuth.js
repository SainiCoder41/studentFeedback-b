const express = require('express');
const authRouter = express.Router();
const {register,login,logout} = require("../controllers/userAuthentiction");

authRouter.post('/register',register);
authRouter.post("/login",login);
authRouter.post("/logout",logout);
authRouter.get('/check', (req, res) => {
   const reply = {
        firstName: req?.result?.firstName,
        emailId: req?.result?.emailId,
        _id:req?.result?._id,
        premium:req?.result?.premium,
        role:req.result?.role
    }

    res.status(200).json({
        user:reply,
        message:"Valid User"
    });
});
module.exports  = authRouter;