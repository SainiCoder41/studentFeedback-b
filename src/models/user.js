const { timeStamp } = require('console');
const  mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        minLenght:3,
        maxLenght:20
    },

    emailId:{
        type:String,
        required:true,
        unique:true,
        trim:true,

        lowercase:true,
        immutable:true,
    }, role:{
        type:String,
        enum:["user","admin"],
        default:'user'
    }, premium:{
        type:Boolean,
        default:false
    },
    password:{
        type:String,
        required:true

    }

},{timeStamps:true})

const User = mongoose.model("User",userSchema);
module.exports = User