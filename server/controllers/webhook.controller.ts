import { Request,Response,NextFunction } from "express";
import userModel, { IUser } from "../Models/user.model";
import ErroreHandler from "../utils/ErroreHandler";
import { CatchAsyncErrore } from "../middleware/catchAsyncErrors";
import { redis } from "../utils/redis";
import productModel from "../Models/product.model";
import { v2 as cloudinary } from "cloudinary";

export const webhookController = CatchAsyncErrore(async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const data = req.body;
    

    const email = req?.body?.subscription?.contact?.email;
    const status = req?.body?.subscription?.status;
    
 if(status !== undefined && status !== null){   
    if(status !== "active"){
    
    const user=await userModel.findOne({email:email}) as IUser
        const userId=user._id as string

        const userPosts = await productModel.find({ postedBy: userId });

        for (const post of userPosts) {
            // Find the product to retrieve the images
            const product = await productModel.findById(post._id);
      
            if (product && product.images && product.images.length > 0) {
              // Delete images from Cloudinary
              const deletionPromises = product.images.map((image) =>
                cloudinary.uploader.destroy(image.public_id)
              );
              await Promise.all(deletionPromises);
          
            }
      
            // Delete the product from the database
            await productModel.findByIdAndDelete(post._id);
            console.log(`Product ${post._id} deleted successfully from the database`);
          }
        await redis.del(userId);

        await userModel.findOneAndDelete({email:email});
       
    }
    else{
        await userModel.findOneAndUpdate({email:email},{paymentStatus:status});
    }
}
    res.status(200).json({success:true})}
    catch(err){
        res.status(400).json({success:false})
    }
})