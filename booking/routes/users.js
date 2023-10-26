const express= require('express');
const router = express.Router();
const { updateUser,  deleteUser, getUser, getUsers } = require('../controllers/user');
const {verifyToken, verifyUser, verifyAdmin}=require('../utils/verifyToken')

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     console.log("hello user you've logged in");
// })
// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     console.log("hello user you've logged in and can delete your account");
// })
// router.get("/checkadmin",verifyAdmin,(req,res,next)=>{
//     console.log("hello admin you've logged in");
// })
//UPDATE
router.put("/:id",verifyUser,updateUser)
//DELETE
router.delete("/:id",verifyUser,deleteUser)
//Read
router.get("/:id",verifyUser,getUser)
//ALl
router.get("/",verifyAdmin,getUsers);

module.exports=router;