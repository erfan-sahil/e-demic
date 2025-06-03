import mongoose from "mongoose";

require("dotenv").config();

const mongoURI: string = process.env.MONGO_URI || "";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI).then((data: any) => {
      console.log(`MongoDB connected successfully ${data.connection.host}`);
    });
  } catch (error: any) {
    console.log(error.message);
    console.log("MongoDB connection failed", error.message);
  }
};

export default connectDB;
