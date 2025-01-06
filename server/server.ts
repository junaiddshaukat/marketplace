import { app } from "./App"
import dotenv from "dotenv";
import cors from "cors";
import mongodbconnection from "./utils/db";

dotenv.config();

const PORT = process.env.PORT || 8000;



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    mongodbconnection();
  });