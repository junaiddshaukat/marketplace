import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandlerMiddleware } from "./middleware/errore";
import userrouter from "./routes/user-routr";
import productAdRouter from "./routes/product-router";
import paymentRouter from "./routes/payment-router";
import './jobs/emailReminder';

// Initialize Express app
export const app = express();

// Middleware for parsing JSON and URL-encoded requests
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Middleware for cookie parsing
app.use(cookieParser());

// CORS configuration
const allowedOrigins = ['http://localhost:3000', 'https://mama-marketplace.vercel.app'];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

// Test route
app.get("/test", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "API working successfully",
  });
});

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running and up");
});

// User routes
app.use("/user", userrouter);
app.use("/payment", paymentRouter);

// Product routes
app.use("/product", productAdRouter);

// Handle undefined routes
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Route ${req.originalUrl} not found`);
  next({
    statusCode: 404,
    message: error.message,
  });
});

// Error-handling middleware
app.use(errorHandlerMiddleware);
