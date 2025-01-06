import { app } from "./App";
import dotenv from "dotenv";
import cors from "cors";
import mongodbconnection from "./utils/db";

dotenv.config();

const PORT = process.env.PORT || 8000;

mongodbconnection()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Database connection error:", err.message);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
