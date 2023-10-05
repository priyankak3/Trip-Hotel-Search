const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        requires:true,
        unique:true
    },email:{
        type:String,
        requires:true,
        unique:true
    },
    password:{
        type:String,
        requires:true
    },
   
    isAdmin:{
        type:Boolean,
        default:false
    }, 
},{timestamps:true}
);

module.exports=mongoose.model('User',UserSchema)