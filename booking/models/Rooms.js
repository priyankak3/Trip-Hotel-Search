const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
    title:{
        type:String,
        requires:true
    },price:{
        type:Number,
        requires:true
    },
    description:{
        type:String,
        requires:true
    },
   
    maxPeople:{
        type:Number,
        default:false
    },
    roomNumbers:[
        {
            number:Number,
            unavailbleDates:
            {type:[Date]}
            
        }
    ],
},{timestamps:true}
);

module.exports=mongoose.model('Room',RoomSchema)