const mongoose = require('mongoose')
const {Schema} = mongoose;

const HotelSchema = new mongoose.Schema({
    name:{
        type:String,
        requires:true
    },
    type:{
        type:String,
        requires:true
    },
    city:{
        type:String,
        requires:true
    },
    address:{
        type:String,
        requires:true
    },
    distance:{
        type:String,
        requires:true
    },
    photos:{
        type:[String],
    },
    title:{
        type:String,
    },
    desc:{
        type:String,
        requires:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    rooms:{
        type:[String],
        required:true
    },
    cheapestPrice:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    }
});

module.exports=mongoose.model('Hotels',HotelSchema)