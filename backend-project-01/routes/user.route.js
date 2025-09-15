import express from "express";
import {
  createNewUser,
  deleteUserById,
  getUserById,
  handleGetAllUsers,
  updateUserById,
} from "../controllers/user.controller.js";

const router = express.Router();

// getting all users with API
router.route("/").get(handleGetAllUsers).post(createNewUser);

// for userid
router
  .route("/:id")
  .get(getUserById) // GET METHOD
  .patch(updateUserById) // PATCH METHOD
  .delete(deleteUserById); // DELETE METHOD

export default router;
