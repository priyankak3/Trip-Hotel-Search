const express= require('express');
const { updateHotel, createHotel, deleteHotel, getHotel, getHotels } = require('../controllers/hotel');

const { createError } = require('../utils/error');
const { verifyAdmin } = require('../utils/verifyToken');
const router = express.Router();

//CREATE
router.post("/",verifyAdmin,createHotel);
//UPDATE
router.put("/:id",verifyAdmin,updateHotel)
//DELETE
router.delete("/:id",verifyAdmin,deleteHotel)
//Read
router.get("/:id",getHotel)
//ALl
router.get("/",getHotels);
router.get("/countByCity",getHotels);
router.get("/countByType",getHotels);
module.exports=router;