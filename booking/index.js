const dotenv=require('dotenv')
const express= require('express');
const { default: mongoose } = require('mongoose');
const authRoute = require('./routes/auth')
const hotelsRoute = require('./routes/hotels')
const usersRoute = require('./routes/users')
const roomsRoute = require('./routes/rooms')
const cookieParser = require('cookie-parser')
const cors=require("cors");
const { searchRegions } = require('./controllers/hotel');
const app = express();
dotenv.config();

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
mongoose.connection.on('disconnected',()=>{
    console.log("Mongo Disconnected")
})

//middlewares
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use("/auth",authRoute);
app.use("/hotels",hotelsRoute);
app.use("/users",usersRoute);
app.use("/rooms",roomsRoute);
// app.use('/hotels', searchRegions);
 
//error handling middleware
app.use((err,req,res,next)=>{
  const errStatus =err.status || 500;
  const errMessage =err.message || "Something went wrong";
  return res.status(errStatus).json({
    success:false,
    status:errStatus,
    message:errMessage,
    stack:err.stack
  })
})
app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(8080,()=>{
    connect()
    console.log("Connected")
})