import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbUrl: string = "mongodb+srv://root:root@lms.j2ehk.mongodb.net/?retryWrites=true&w=majority&appName=LMS";

const mongodbconnection = async () => {
  try {
    if (!dbUrl) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }
    
    const connection = await mongoose.connect(dbUrl);
    console.log(`Database connected successfully to host: ${connection.connection.host}`);
  } catch (err: any) {
    console.log("Database connection error:", err.message);
    // Retry connection after 5 seconds
    setTimeout(mongodbconnection, 5000);
  }
};

export default mongodbconnection;