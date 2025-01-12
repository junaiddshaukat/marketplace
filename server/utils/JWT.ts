import dotenv from "dotenv";
dotenv.config();
import Redis from "ioredis";
import { Response } from "express";
import { IUser } from "../Models/user.model";
import { redis } from "./redis";
import { ObjectId } from "mongodb";

interface ITokenOption {
  expires: Date;
  maxAge: number;
  httpOnly: boolean;
  sameSite: "lax" | "strict" | "none" | undefined;
  secure?: boolean;
}

// Access token expiration: 365 days in minutes
export const accessTokenExpire = 365 * 24 * 60; // 365 days in minutes

// Options for the access token cookie
export const accessTokenOption: ITokenOption = {
  expires: new Date(Date.now() + accessTokenExpire * 60 * 1000), // 365 days
  maxAge: accessTokenExpire * 60 * 1000,
  httpOnly: true,
  sameSite: "none", // Needed for cross-origin requests
  secure: process.env.NODE_ENV === "production", // Secure cookies for HTTPS in production
};

// Function to send the token
export const sendToken = async (user: IUser, res: Response, statusCode: number) => {
  try {
    // Generate access token
    const accessToken = user.signaccesstoken();

    // Upload session to Redis
    try {
      const userId = (user._id as ObjectId).toString();
      const userData = JSON.stringify(user);
      await redis.set(userId, userData);
    } catch (error) {
      console.error("Redis set error:", error);
    }

    // Set the access token cookie
    res.cookie("access_token", accessToken, accessTokenOption);

    // Send the response with the access token
    res.status(statusCode).json({
      success: true,
      user,
      accessToken,
    });
  } catch (error) {
    console.error("Error in sendToken:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
