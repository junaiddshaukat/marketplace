import { Request,Response,NextFunction } from "express";
import userModel, { IUser } from "../Models/user.model";
import ErroreHandler from "../utils/ErroreHandler";
import { CatchAsyncErrore } from "../middleware/catchAsyncErrors";
import { redis } from "../utils/redis";
import productModel from "../Models/product.model";

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
          await productModel.findByIdAndDelete(post._id);
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