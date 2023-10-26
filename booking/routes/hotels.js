const express= require('express');
const { updateHotel, createHotel, deleteHotel, getHotel, getHotels, countByCity, countByType, getHotelRooms } = require('../controllers/hotel');

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
router.get("/find/:id",getHotel)
//ALl
router.get("/",getHotels);
router.get("/countByCity",countByCity);
router.get("/countByType",countByType);
router.get("/rooms/:id",getHotelRooms);
module.exports=router;