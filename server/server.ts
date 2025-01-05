import { app } from "./App"
import dotenv from "dotenv";
import cors from "cors";
import mongodbconnection from "./utils/db";

dotenv.config();





app.listen(8000,()=>{
    console.log(`server is running on the port 8000`)
    mongodbconnection();

})