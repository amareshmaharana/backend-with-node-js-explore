import { User } from "../models/user.model.js";

export const handleGetAllUsers = async (req, res) => {
  const allDBUsers = await User.find({});
  return res.json(allDBUsers);
};

export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ msg: "User not found" });
  }
  return res.json(user);
};

export const updateUserById = async (req, res) => {
  // Edit user with id
  const user = await User.findByIdAndUpdate(req.params.id, req.body);
  return res.json({ status: "Success" });
};

export const deleteUserById = async (req, res) => {
  // Delete user with id
  const user = await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Success" });
};

export const createNewUser = async (req, res) => {
  try {
    // create new user
    const body = req.body;

    if (
      !body ||
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.job_title ||
      !body.gender
    ) {
      return res.status(400).json({ msg: "All fields are required....." });
    }

    const result = await User.create({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.job_title,
    });

    return res.status(201).json({ msg: "Success", id: result._id });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({
      msg: "Failed to create user",
      error: error.message,
    });
  }
};
