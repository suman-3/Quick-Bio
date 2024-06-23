import mongoose from "mongoose";

const connectMongoDB = async () => {
  const dbConnect = process.env.MONGODB_URI;

  if (!dbConnect) {
    throw new Error("MONGODB_URI environment variable is not defined");
  }

  try {
    await mongoose.connect(dbConnect);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectMongoDB;
