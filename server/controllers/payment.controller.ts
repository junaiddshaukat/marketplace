import { CatchAsyncErrore } from '../middleware/catchAsyncErrors';
import { Request, Response, NextFunction } from 'express';
import { PayrexxService } from '../utils/payrexxService';
import dotenv from "dotenv"
import ErroreHandler  from '../utils/ErroreHandler';
import userModel, { IUser } from '../Models/user.model';
import mongoose from 'mongoose';
dotenv.config()
const instance = process.env.PAYREXX_INSTANCE;
const secret = process.env.PAYREXX_API_KEY;
if (!instance || !secret) {
  throw new Error("PAYREXX_INSTANCE and PAYREXX_SECRET must be defined in environment variables");
}
const payrexx = new PayrexxService(instance, secret);

export const getGateaway = CatchAsyncErrore(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const gatewayId = parseInt(req.params.id, 10);
      const response = await payrexx.getGateway(gatewayId);
      res.status(200).json(response.data);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }
)

export const createGateaway = CatchAsyncErrore( 
  async (req:Request, res:Response)=>{
    try {
 
      const userId = req.user?._id as string;

     
          
      
      const amount = 2500;
      const currency = 'CHF';
      const successRedirectUrl = `https://mama-marketplace.vercel.app/payment-checking/${userId}`;

   
      const cancelRedirectUrl = `https://mama-marketplace.vercel.app/payment-cancel/${userId}`;
      const failedRedirectUrl = `https://mama-marketplace.vercel.app/payment-cancel/${userId}`;
      // console.log(amount, currency);
      const response = await payrexx.createGateway({ amount, currency,successRedirectUrl,cancelRedirectUrl,failedRedirectUrl });
     

      // Adjust for array or object response

      const gatewayID = response.data.data[0]?.id as string;
      const gatewayLINK = response.data.data[0]?.link as string;

  
    
     await userModel.findByIdAndUpdate(userId, {
      gatewayID,
      gatewayLINK,
    });
    // Send the response
    res.status(201).json({
      success: true,
      message: "Payment gateway created and user updated successfully",
      gateway: {
        id: gatewayID,
        link: gatewayLINK,
        userid:userId
      },
    });
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }
)
/*export const createGateawayF = CatchAsyncErrore( 
    async (req:Request,res:Response,next:NextFunction)=>{
      try {
        const amount = 17500;
        const currency = 'CHF';
        const successRedirectUrl = 'https://www.waqar.live'
        const cancelRedirectUrl = 'https://developers.payrexx.com/docs/payrexx-gateway'
        const failedRedirectUrl = 'https://developers.payrexx.com/docs/payrexx-gateway'
  
  
        console.log(amount, currency);
        const response = await payrexx.createGateway({ amount, currency,successRedirectUrl,cancelRedirectUrl,failedRedirectUrl });
        console.log('i tried ')
        return response.data;
    } catch (error:any) {
        //res.status(500).json({ message: error.message });
        return null;
      }
    }
  ) */
export const getTransaction = CatchAsyncErrore(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const transactionId = parseInt(req.params.id, 10);
      const response = await payrexx.viewTransaction(transactionId);
      res.status(200).json(response.data);
    } catch (error:any) { 
      res.status(500).json({ message: error.message });
    }
  }
)

export const captureTransaction = CatchAsyncErrore(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const transactionId = parseInt(req.params.id, 10);
      const response = await payrexx.captureTransaction(transactionId);
      console.log(response.data);
      res.status(200).json(response.data);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }
)

export const createSubscription = CatchAsyncErrore(
  async (req: Request,res:Response,next:NextFunction)=>{
      try {
        // Extract the required fields from the request body
        const { userId, psp, amount, currency, purpose, paymentInterval, period, cancellationInterval } = req.body;
  
       // if (!userId || !psp || !amount || !currency || !purpose || !paymentInterval || !period || !cancellationInterval) {
         // return res.status(400).json({ message: 'Missing required parameters!' });
       // }
  
        // Create a subscription using the Payrexx service
        const response = await payrexx.createSubscription({
          userId,
          psp,
          amount,
          currency,
          purpose,
          paymentInterval,
          period,
          cancellationInterval,
        });
  
        // Return the response from Payrexx
        res.status(201).json({
          message: 'Subscription created successfully!',
          data: response.data,
        });
    } catch (error:any) {
      // console.error(error.message);
    }
  }
)


import util from 'util'; // For inspecting circular objects

export const paymentchecker = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
  try {
    const userId = req.body.id;
    // console.log('User ID:', userId);

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const gatewayId = user.gatewayID;
    if (!gatewayId) {
      return res.status(400).json({ message: 'Gateway ID is missing' });
    }

    const response = await payrexx.getGateway(parseInt(gatewayId, 10));
    // console.log('API Response:', util.inspect(response, { depth: null, colors: true }));

    const transactions = response?.data?.data?.[0]?.invoices?.[0]?.transactions?.[0];
    if (!transactions) {
      return res.status(400).json({ message: 'Transaction data is missing' });
    }

    const transactionId = transactions.id as string;
    const transactionStatus = transactions.status?.toLowerCase();
    // console.log('Transaction Status:', transactionStatus);

    if (transactionStatus === 'confirmed') {
      const updateResult = await userModel.findByIdAndUpdate(userId, {
        payment_obj_id: transactionId,
        paymentStatus: 'confirmed',
        paymentDate: new Date(),
        paymentExpiryDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      });
      
      // console.log('Update Result:', updateResult);
      if (!updateResult) {
        return res.status(500).json({ message: 'Failed to update user' });
      }
      return res.status(201).json({ success: true, message: 'Payment confirmed' });
    } else {
      // console.log('Payment declined');
      await userModel.findByIdAndDelete(userId);
      return res.status(200).json({ success: false, message: 'Payment declined' });
    }
  } catch (error: any) {
    // console.error('Error occurred:', error);
    res.status(500).json({ message: error.message });
  }
};





export const cancelPaymentAndDeleteUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.body;
    // console.log('User ki  ID:', id);

    if (!id) {
      return res.status(400).json({ success: false, message: "User ID is required." });
    }


    const deletedUser = await userModel.findByIdAndDelete(id) as IUser;

    if (!deletedUser) {
      return res.status(404).json({ success: false, message: "User not found." });
    }

    return res.status(200).json({
      success: true,
      message: "Redirect to Registration ",
    });
  } catch (error) {
 
    return res.status(500).json({
      success: false,
      message: "Internal server error. Unable to delete user.",
    });
  }
};

