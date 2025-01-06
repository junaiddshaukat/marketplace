import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbUrl: string = "mongodb+srv://root:root@lms.j2ehk.mongodb.net/?retryWrites=true&w=majority&appName=LMS";
const mongodbconnection = async () => {
  try {
    if (!dbUrl) {
      throw new Error("DB_URL is not defined in environment variables");
    }
    
    const connection = await mongoose.connect(dbUrl, {
      serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
      socketTimeoutMS: 45000,          // Increase socket timeout
      connectTimeoutMS: 30000,         // Connection timeout
      maxPoolSize: 10,                 // Maximum number of connections
      minPoolSize: 5,                  // Minimum number of connections
      retryWrites: true,
      w: 'majority'
    });
    
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