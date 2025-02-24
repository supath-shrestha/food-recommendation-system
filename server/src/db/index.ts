import mongoose from "mongoose";
import { DB_NAME } from "../constant";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MONGODB connection success");
  } catch (error) {
    console.log("MONGODB Connection failed: ", error);
    process.exit(1);
  }
};

export default connectDB;
