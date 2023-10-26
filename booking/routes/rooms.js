const express= require('express');
const { updateRoom, createRoom, deleteRoom, getRoom, getRooms, updateRoomAvailability } = require('../controllers/room');
const { verifyAdmin } = require('../utils/verifyToken');
const router = express.Router();

// CREATE
router.post("/:hotelid",verifyAdmin,createRoom);
//UPDATE
router.put("/:id",verifyAdmin,updateRoom)
router.put("/availability/:id",updateRoomAvailability);
//DELETE
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom)
//Read
router.get("/:id",getRoom)
//ALl
router.get("/",getRooms);

module.exports=router;