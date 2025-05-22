const User = require("../models/userModels");
 
let users = [];
 
exports.getUsers = (req, res) => {
  res.status(200).json(users);
};
 
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const user = new User(name, email);
  users.push(user);
  res.status(201).json(user);
};