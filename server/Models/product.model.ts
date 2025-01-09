import express from "express";
import mongoose, {Types, Document, Schema } from "mongoose";

// Define the ProductAd interface
 export interface IProductAd extends Document {
  
  _id: string | Types.ObjectId;

  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  postedBy: mongoose.Types.ObjectId;
  status: 'Active' | 'NeedToRefresh' | 'InActive';
  expiryDate: Date;
  views: number;
  contactDetailsVisible: boolean;
  location?: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  likes: string[]; // Array to store emails of users who liked the product

}

// Define the schema
const productAdSchema = new mongoose.Schema<IProductAd>({

  title: {
    type: String,
    required: true,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    validate: [arrayLimit, 'You can upload up to 5 images only.'],
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['Active', 'NeedToRefresh', 'InActive'],
    default: 'Active',
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  contactDetailsVisible: {
    type: Boolean,
    default: false,
  },
  location: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  tags: {
    type: [String],
  },
  likes: {
    type: [String], // Array of user emails
    default: [],
  },

});

// Validation function
function arrayLimit(val: string[]): boolean {
  return val.length <= 5;
}

// Create the model
const productModel = mongoose.model<IProductAd>('ProductAd', productAdSchema);

export default productModel;
