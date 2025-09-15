import mongoose from "mongoose";

export const connectDB = async (url) => {
  try {
    const db = await mongoose.connect(url);
    console.log("MongoDB Connected without any errors!! :)");
    return db;
  } catch (error) {
    console.log("ALERT!! :( MongoDB ERRROR formed :: ", error);
  }
};
