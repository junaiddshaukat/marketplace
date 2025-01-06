import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbUrl: string = process.env.DB_URL || "";
const mongodbconnection = async () => {
  try {
    if (!dbUrl) {
      throw new Error("DB_URL is not defined in environment variables");
    }
    
    const connection = await mongoose.connect(dbUrl);
    
    // Add connection error handlers
    mongoose.connection.on('error', (err) => {
      console.log('MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });

    console.log(`Database connected successfully to host: ${connection.connection.host}`);
  } catch (err: any) {
    console.log("Database connection error:", err.message);
    setTimeout(mongodbconnection, 5000);
  }
};

export default mongodbconnection;