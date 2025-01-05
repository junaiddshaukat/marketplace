import { Request, Response, NextFunction } from "express";
import productModel from "../Models/product.model";
import ErroreHandler from "../utils/ErroreHandler";
import { v2 as cloudinary } from "cloudinary";
import multer, { StorageEngine } from "multer";
import payrexx from '@api/payrexx';
import dotenv from "dotenv";
import { buffer } from "stream/consumers";
import { CatchAsyncErrore } from "../middleware/catchAsyncErrors";
import userModel, { IUser } from "../Models/user.model";
dotenv.config()



// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECREAT_KEY,
});

// Multer Storage Configuration (store images in memory)
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      return cb(new Error("Only .jpg, .jpeg, and .png files are allowed!"));
    }
    cb(null, true);
  },
});

// Middleware to handle image uploads
export const uploadImages = upload.array("images", 10); // Allow up to 10 images

// Helper function to upload images to Cloudinary
const uploadToCloudinary = async (fileBuffer:any, folder: string) => {

  const result=await cloudinary.uploader.upload(fileBuffer, {
    folder: "images",
  });
   return result.url;
  
};

// Middleware to process uploaded images and attach URLs to req.body
export const processImages = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  // console.log(req.body.images)

  try {
    if (req.body.images && Array.isArray(req.body.images)) {
      const uploadedUrls = await Promise.all(
        (req.body.images as Express.Multer.File[]).map((file) => uploadToCloudinary(file, "ads"))
      );


      req.body.images = uploadedUrls; // Attach Cloudinary URLs to req.body.images
    }
    next();
  } catch (error: any) {
    return next(new ErroreHandler(`Error uploading images: ${error.message}`, 500));
  }
};

// Create Product Ad (Example)
export const createProductAd = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Assuming productModel is set up properly
    const newAd = await productModel.create(req.body); // Create the new product ad
    res.status(201).json({ message: "Product Ad created successfully", ad: newAd });
  } catch (error: any) {
    next(new Error(`Error creating product ad: ${error.message}`)); // Handle errors
  }
};





export const getAllProductAds = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const ads = await productModel.find();
    res.status(200).json({ message: 'Success', ads });
  } catch (error: any) {
    return next(new ErroreHandler(error.message, 400));
  }
};

// Get a single product ad by ID
export const getProductAdById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const ad = await productModel.findById(id);
    if (!ad) {
      return next(new ErroreHandler("Product not found", 400));
    }
    res.status(200).json({ message: 'Success', ad });
  } catch (error: any) {
    return next(new ErroreHandler(error.message, 400));
  }
};

// Update a product ad by ID
export const updateProductAd = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedAd = await productModel.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Run schema validators on the updated data
    });
    if (!updatedAd) {
      return next(new ErroreHandler("Product not found", 400));
    }
    res.status(200).json({ message: 'Product Ad updated successfully', ad: updatedAd });
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      return next(new ErroreHandler("Validation error", 400));
    }
    return next(new ErroreHandler(error.message, 500));
  }
};

// Delete a product ad by ID
export const deleteProductAd = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedAd = await productModel.findByIdAndDelete(id);
    if (!deletedAd) {
      return next(new ErroreHandler("Product not found", 400));
    }
    res.status(200).json({ message: 'Product Ad deleted successfully', ad: deletedAd });
  } catch (error: any) {
    return next(new ErroreHandler(error.message, 500));
  }
};





// Function to fetch ads by the current user
export const getUserAds = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Assuming `req.user` contains the logged-in user info with a type of `{ _id: string }`
    const {userId} = req.params;

    const ads = await productModel.find({ postedBy: userId });

    // Calculate stats, handle the case where no ads are found
    const totalAds = ads.length || 0;
    const activeAds = ads.filter((ad) => ad.status === "Active") || [];

    res.status(200).json({
      success: true,
      stats: {
        totalAds,
        activeAds: activeAds.length,
      },
      ads, // Return all ads for further management (edit, delete, etc.)
      activeAds, // Return the array of active ads for management
    });
  } catch (error: any) {
    return next(new ErroreHandler(error.message, 400));
  }
};





export const get_need_to_refresh_ads = async (req: Request, res: Response,next:NextFunction): Promise<void> => {
  try {
    const postedBy = req.user?._id // Assuming `req.user` is populated by your middleware


    if (!postedBy) {
      return next(new ErroreHandler("Please Login Your Account",400))
    }

    // Fetch inactive ads from the database
    const inactiveAds = await productModel.find({ postedBy, status: "NeedToRefresh" })

    res.status(200).json(inactiveAds)
  } catch (error:any) {
    return next(new ErroreHandler(error.message,400))
  }
}


export const getInActiveAds= async (req: Request, res: Response,next:NextFunction): Promise<void> => {
  try {
    const postedBy = req.user?._id // Assuming `req.user` is populated by your middleware


    if (!postedBy) {
      return next(new ErroreHandler("Please Login Your Account",400))
    }

    // Fetch inactive ads from the database
    const inactiveAds = await productModel.find({ postedBy, status: "InActive" })

    res.status(200).json(inactiveAds)
  } catch (error:any) {
    return next(new ErroreHandler(error.message,400))
  }
}


export const getActiveAds = async (req: Request, res: Response,next:NextFunction): Promise<void> => {
  try {
    const postedBy = req.user?._id // Assuming `req.user` is populated by your middleware


    if (!postedBy) {
      return next(new ErroreHandler("Please Login Your Account",400))
    }

    // Fetch inactive ads from the database
    const inactiveAds = await productModel.find({ postedBy, status: "Active" })

    res.status(200).json(inactiveAds)
  } catch (error:any) {
    return next(new ErroreHandler(error.message,400))
  }
}



export const payrexxSign = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { data } = await payrexx.signaturecheck({ apiKey: process.env.payment_API_KEY || '', instance: process.env.payment_INSTANCE || '' });
  
    res.status(200).json({ message: 'Signature check successful', data });
  } catch (err:any) {
    console.error(err);
    return next(new ErroreHandler(err.message, 500));
  }
};





export const activateAd = async (req: Request, res: Response,next:NextFunction) : Promise<any>  => {
  try {
    const { adId } = req.params;
    const userId = req.user?._id;
    const user=await userModel.findById(userId) as IUser
    const paymentId=user?.payment_obj_id as string
  




    if (!userId) {
      return next(new ErroreHandler("User not authenticated",400))
    }

    if (user.payment_obj_id === null) {
      return res.status(200).json({ 
        success: false, 
        message: 'Please pay for Activate your Add', 
       
      });
    }
    

    const ad = await productModel.findOne({ _id: adId, postedBy: userId });

    if (!ad) {
      return next(new ErroreHandler("Add not Find",400))
    }

    const newExpiryDate = new Date();
    newExpiryDate.setDate(newExpiryDate.getDate() + 30);

    ad.status = 'Active';
    ad.expiryDate = newExpiryDate;
    ad.updatedAt = new Date();

    await ad.save();

    res.status(200).json({ 
      success: true, 
      message: 'Ad activated successfully', 
      ad: {
        _id: ad._id,
        title: ad.title,
        status: ad.status,
        expiryDate: ad.expiryDate,
        updatedAt: ad.updatedAt
      }
    });
  } catch (error) {
    console.error('Error activating ad:', error);
    res.status(500).json({ success: false, message: 'An error occurred while activating the ad' });
  }
};




// export const toggleLike = async (req: Request, res: Response,next:NextFunction) => {
//   try {
//     const { productId } = req.params;
//     const currentUserEmail = req.user?.email as string; // Assume `req.user` is populated by isAuthenticated middleware

//     const product = await productModel.findById(productId);

//     if (!product) {
//       return res.status(404).json({ success: false, message: "Product not found." });
//     }

//     const emailIndex = product.likes.indexOf(currentUserEmail);

//     if (emailIndex !== -1) {
//       // If email exists, remove it (dislike)
//       product.likes.splice(emailIndex, 1);
//       await product.save();
//       return res.status(200).json({ success: false, message: "You disliked successfully." });
//     } else {
//       // If email does not exist, add it (like)
//       product.likes.push(currentUserEmail);
//       await product.save();
//       return res.status(200).json({ success: true, message: "You liked successfully." });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ success: false, message: "Server error." });
//   }
// };

export const toggleLike = async (req: Request, res: Response, next: NextFunction) : Promise<any> => {
  try {
    const { productId } = req.params;
    const currentUserEmail = req.body.email;  // Assume `req.user` is populated by isAuthenticated middleware


    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found." });
    }

    // Fix the issue: search for the actual email, not a string template
    const emailIndex = product.likes.indexOf(currentUserEmail);

    if (emailIndex !== -1) {
      // If email exists, remove it (dislike)
      product.likes.splice(emailIndex, 1);
      await product.save();
      return res.status(200).json({ success: false, message: "You disliked successfully." });
    } else {
      // If email does not exist, add it (like)
      product.likes.push(currentUserEmail);
      await product.save();
      return res.status(200).json({ success: true, message: "You liked successfully." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
};
