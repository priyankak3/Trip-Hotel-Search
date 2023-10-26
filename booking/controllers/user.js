const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../models/Users");

const updateUser = async (req, res, next) => {
    try {
      if (req.body.password) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
  
        // Update the user with the hashed password
        req.body.password = hash;
      }
  
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
}
const deleteUser = async (req, res, next) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted.");
    } catch (err) {
      next(err);
    }
  };
const getUser = async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
};
const getUsers = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
      const users = await Hotel.find({
        ...others,
        cheapestPrice: { $gt: min | 1, $lt: max || 999 },
      }).limit(req.query.limit);
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
};

module.exports={updateUser,deleteUser,getUser,getUsers}