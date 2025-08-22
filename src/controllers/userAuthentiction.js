
const User = require("../models/user");
const bcrypt = require('bcrypt');

const register = async(req,res)=>{
try{
   
    const {firstName,emailId,password} = req.body;
    req.body.password = await bcrypt.hash(password,10);
    req.body.role = 'user';
    const user = await User.create(req.body);
const token =  jwt.sign({_id:user._id , emailId:emailId, role:'user'},'0229f2896c494a09b044bca6698883a21f34059eb7419d7553bdf636f1e2c3fb',{expiresIn: 60*60});

    const reply =  {
        firstName : user.firstName,
        emailId : user.emailId,

    }
    res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "None",
  maxAge: 60 * 60 * 1000 // 1 hour
});
    res.status(200).json({
        user:reply,
        message:"Register Successfully"
    })
}catch(err){
res.status(400).send("User Not Register Successfully"+err);
}
}

const login = async(req,res)=>{
    try{
 const {emailId,password} = req.body;
    if(!emailId){
        throw new Error("Invalid Credentails");
    }
    if(!password){
        throw new Error("Invalid Credentails");
    }
    const user = await User.findOne({emailId});
    const match = await bcrypt.compare(password,user.password);

     if(!match)
            throw new Error("Invalid Credentails");

      const reply = {
          firstName:user.firstName,
          emailId:user.emailId,
        
        
        }
     res.status(201).json({
      user:reply,
      message:"Loggin Succesfully"
    });
    }catch(err){
        res.status(401).send("Error : "+err.message);

    }
   
}
const logout = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      secure: true,      // ⚡ must match your register cookie
      sameSite: "None",  // ⚡ must match your register cookie
      expires: new Date(0) // Expire immediately
    });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ message: "Logout failed", error: err.message });
  }
};

module.exports = {register,login,logout};