import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utills/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return next(errorHandler(400, "All fields are required"));
  }

  try {
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashPassword }); 

    await newUser.save(); // Save the user to the database
    res.status(201).json({ message: "Signup success! Please signin." });
  } catch (err) {
    next(err);
  }
};
