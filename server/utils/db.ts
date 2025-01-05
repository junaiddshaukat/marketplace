import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dbUrl: string = "mongodb+srv://root:root@lms.j2ehk.mongodb.net/?retryWrites=true&w=majority&appName=LMS";

const mongodbconnection = async () => {
  try {
    const connection = await mongoose.connect(dbUrl);
    console.log(`Database connected successfully to host: ${connection.connection.host}`);
  } catch (err:any) {
    console.log("Database connection error:", err.message);
    
    setTimeout(mongodbconnection, 5000);
  }
};

export default mongodbconnection;
