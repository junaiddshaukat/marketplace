import { Request,Response,NextFunction } from "express";
import userModel from "../Models/user.model";
import ErroreHandler from "../utils/ErroreHandler";
import { CatchAsyncErrore } from "../middleware/catchAsyncErrors";

export const webhookController = CatchAsyncErrore(async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const data = req.body;
    console.log(JSON.stringify(req.body, null, '\t'));
    console.log("/////////")

    const email = req?.body?.subscription?.contact?.email;
    const status = req?.body?.subscription?.status;
 if(status !== undefined && status !== null){   
    if(status !== "active"){
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