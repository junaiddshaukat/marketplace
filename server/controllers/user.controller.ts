import { Request,Response,NextFunction } from "express";
import userModel from "../Models/user.model";
import ErroreHandler from "../utils/ErroreHandler";
import { CatchAsyncErrore } from "../middleware/catchAsyncErrors";
import { createGateaway } from "./payment.controller";
import { IUser } from "../Models/user.model";
import jwt, {JwtPayload, Secret } from "jsonwebtoken"
import dotenv from "dotenv"
import ejs from "ejs"
import path from "path";
import sendMailer from "../utils/sendMail";
import { accessTokenOption, sendToken } from "../utils/JWT";
import { redis } from "../utils/redis";
import cloudinary from "cloudinary";

dotenv.config()

cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME ,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_SECREAT_KEY
});



dotenv.config();

interface IRegisterionBody{
    
    name:string,
    email:string,
    password:string,
    avatar?:string,
    contactInformation: {
      sellername:string;
      email: {
        value: string;
        visibility: 'private' | 'public';
    };
    phone: {
        value: string;
        visibility: 'private' | 'public';
    };
        address: string,
        location: string,
        website: string ,
      },

}
export const registrationUser = CatchAsyncErrore(async (req: Request, res: Response, next: NextFunction) => {
  try {
   

      const { name, email, password ,contactInformation} = req.body.user;
      console.log(req.body)

      
 
     
      const isEmailExist = await userModel.findOne({ email });
      if (isEmailExist) {
          return next(new ErroreHandler("Email already exists", 400));
      }

      const user= await userModel.create({name,email,password,contactInformation})
      user.save();
 
      req.user = user as IUser;
      next();


   

  } catch (error: any) {
      return next(new ErroreHandler(error.message, 400));
  }
});

interface Activecodetoken{
    token:string,
    activecode:string;
}


export const createActivationToken =(user:any):Activecodetoken=>{
    const activecode=Math.floor(Math.random()*9000+1000).toString()
    const token = jwt.sign(
        { user, activecode },
        process.env.JWTKEY as Secret,
        { expiresIn: '5m' } // Token will expire after 5 minutes
      );
      
    return {token,activecode}

}


interface Iactivationrequest{
    activation_token:string,
    activation_code:string,
}



export const activateUser=CatchAsyncErrore(async(req:Request,res:Response,next:NextFunction)=>{
    try{
        interface IRegisterionBody{
          
    
            name:string,
            email:string,
            password:string,
            avatar?:string,
            contactInformation: {
              email: {
                value: string;
                visibility: 'private' | 'public';
            };
            phone: {
                value: string;
                visibility: 'private' | 'public';
            };
                address: string,
                location: string,
                website: string ,
              }
        
        }


        const{activation_token,activation_code}=req.body;
        
console.log(req.body)
        const newUser:{user:IUser;activecode:string}=jwt.verify(
            activation_token,
            process.env.JWTKEY as Secret
        ) as {user:IUser;activecode:string}
        if(newUser.activecode!=activation_code)
        {
            return next(new ErroreHandler("Invalid activation code ",400))
        }

        const {name,email,password,contactInformation}=newUser.user;

        const existUser=await userModel.findOne({ email });
        if(existUser)
        {
            return next(new ErroreHandler("Email already exist",400))
        }
        const user= await userModel.create({name,email,password,contactInformation})
        user.save();
   
        req.user = user as IUser;
        next();
    }
    catch(err:any){
        return next(new ErroreHandler(err.message,400))
    }
})





interface IloginUser{
    email:string,
    password:string,
}

export const loginUser=CatchAsyncErrore(
    async (req:Request,res:Response,next:NextFunction)=>{
        try{
              const {email,password}=req.body as IloginUser;
                if(!email||!password)
                {
                    return next(new ErroreHandler("Please enter email and password",400))
                }

                const user=await userModel.findOne({email}).select("+password") as IUser;
                if(!user)
                {
                    return next(new ErroreHandler("Please enter correct  email and password !",400))
                }
                const passwordMatch=await user.comparePassword(password);
                if(!passwordMatch)
                {
                    return next(new ErroreHandler("Please enter correct email and password",400))
                }

                sendToken(user,res,200)
        }
        catch(err:any)
        {
            return next(new ErroreHandler(err.message,400))
        }
    }
)


// Logout User
export const logoutUser = CatchAsyncErrore(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Clear cookies
      res.cookie("access_token", "", { maxAge: 1 });
    //   res.cookie("refresh_token", "", { maxAge: 1 });

      // Retrieve and ensure the user ID is a string
      const userId = req.user?._id?.toString();
      if (!userId) {
        return next(new ErroreHandler("User ID is missing", 400));
      }

      // Remove the user data from Redis
      await redis.del(userId);

      res.status(200).json({
        success: true,
        message: "Logged out successfully",
      });
    } catch (err: any) {
      return next(new ErroreHandler(err.message, 400));
    }
  }
);




//update access token
import { ObjectId } from "mongodb";

export const updateAccessToken=CatchAsyncErrore(
    async(req:Request,res:Response, next:NextFunction)=>{

        try{
            const refreshToken=req.cookies.refresh_token as string;
            const decoded=jwt.verify(refreshToken,process.env.REFRESH_TOKEN as string) as JwtPayload


            if(!decoded)
            {
                return next(new ErroreHandler("Could not refresh token",400))
            }
        
            const session=await redis.get(decoded.id)
            if(!session){
                return next(new ErroreHandler("Could not refresh token",400))

            }

            const user=JSON.parse(session)
            const accessToken=jwt.sign({id:user._id},process.env.ACCESS_TOKEN as string,{expiresIn:"5m"})
    
            res.cookie('access_token', accessToken, accessTokenOption);
   
        }
        catch(err:any)
        {
            return next(new ErroreHandler(err.message,400))
        }
    
}
)



export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Ensure `req.user` is defined and has a valid `_id` property
      const userId = req.user?._id?.toString();
      if (!userId) {
        return next(new ErroreHandler('User ID is missing', 400));
      }
  
      // Attempt to retrieve the session from Redis
      const session = await redis.get(userId);
  
      if (!session) {
        return next(new ErroreHandler('Session not found for the user', 404));
      }
  
      // Respond with the session or relevant user data
      res.status(200).json({
        success: true,
        session: JSON.parse(session),
      });
    } catch (err: any) {
      return next(new ErroreHandler(err.message || 'Internal Server Error', 500));
    }
  };


  interface IUpdateProfilePicture {
    avatar: string;
}
export const updateProfilePicture = CatchAsyncErrore(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { avatar } = req.body as IUpdateProfilePicture;
            const userId = req.user?._id;

            const user = await userModel.findById(userId);

            if (!user) {
                return next(new ErroreHandler("User not found", 404));
            }

            if (avatar) {
                // Delete the old avatar if it exists
                if (user.avatar?.public_id) {
                    await cloudinary.v2.uploader.destroy(user.avatar.public_id);
                }

                // Upload the new avatar
                const myCloud = await cloudinary.v2.uploader.upload(avatar, {
                    folder: "avatar",
                    width: 150,
                });

                // Update user's avatar
                user.avatar = {
                    public_id: myCloud.public_id,
                    url: myCloud.url,
                };

                // Save updated user information
                await user.save();
                await redis.set(userId as string,JSON.stringify(user))
            }

            // Respond to the client
            res.status(200).json({
                success: true,
                 user
            });
        } catch (err: any) {
            return next(new ErroreHandler(err.message, 400));
        }
    }
);


interface IUpdatePassword{
    oldPassword:string,
    newPassword:string,
}

export const  updatePassword=CatchAsyncErrore(
    async (req:Request,res:Response,next:NextFunction)=>{

        try{
            const {oldPassword,newPassword}=req.body as IUpdatePassword;
            if(!oldPassword||!newPassword)
            {
                return next(new ErroreHandler("Please enter old and new password",400))
            }
            const userId=req.user?._id;
            const user=await userModel.findById(userId).select("+password")
            if(user?.password==undefined)
            {
                return next(new ErroreHandler("Invalid user",400))
            }
            const isPasswordValid=await user.comparePassword(oldPassword);
            if(!isPasswordValid)
            {
                return next(new ErroreHandler("Invalid old password",400))  
            }

            user.password=newPassword;
            await user.save();
            return res.status(201).json({
                success:true,
                user,
            })


        }
        catch(err:any)
        {
            return next(new ErroreHandler(err.message,400))

        }
    }
)



interface IUpdateUserInfo{
    name:string,
    email:string,

}

export const updateUserInfo=CatchAsyncErrore(
    async (req:Request,res:Response,next:NextFunction)=>{
        try{
            const {name,email}=req.body as IRegisterionBody;
            const userId=req.user?._id as string;
           
            const  user=await userModel.findById(userId);
            if(user &&email)
            {
                const isEmailExist=await userModel.findOne({email});
                if(isEmailExist)
                {
                    return next(new ErroreHandler("Email is already exist",400))
                }
                user.email=email;
            }

            if(name&& user)
            {
                user.name=name;
            }
            await user?.save();
            redis.set(userId,JSON.stringify(user))
res.status(201).json({
    success:true,
    user
})


        }
        catch(err:any)
        {
            return next(new ErroreHandler(err.message,400))
        }
    }
)





export const getUserById = CatchAsyncErrore(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id; // Assuming the user ID is passed as a URL parameter

      // Find the user by ID
      const user = await userModel.findById(userId);

      if (!user) {
        return next(new ErroreHandler('User not found', 404));
      }

      // Respond with the user data
      res.status(200).json({
        success: true,
        user,
      });
    } catch (err: any) {
      return next(new ErroreHandler(err.message, 500));
    }
  }
);












export const updateUserContactInformation = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const userId = req.user?._id?.toString();
      if (!userId) {
        return next(new ErroreHandler('User ID is missing', 400));
      }
  
      const { contactInformation } = req.body;
  
      const user = await userModel.findById(userId);
      if (!user) {
        return next(new ErroreHandler('User not found', 404));
      }
  
    

      // Update contact information
      user.contactInformation = {
        ...user.contactInformation,
        ...contactInformation,
      };
  
      await user.save();
      redis.set(userId, JSON.stringify(user))
  
      res.status(200).json({
        success: true,
        message: 'Contact information updated successfully',
      });
    } catch (err: any) {
      return next(new ErroreHandler(err.message || 'Internal Server Error', 500));
    }
  };




  export const getAllUsers = CatchAsyncErrore(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await userModel.find().select('-password'); // Exclude password from response
  
      res.status(200).json({
        success: true,
        users,
      });
    } catch (error: any) {
      return next(new ErroreHandler(error.message, 500));
    }
  });



  
// Delete user controller
export const deleteUser = CatchAsyncErrore(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = await userModel.findById(id);
  
      if (!user) {
        return next(new ErroreHandler('User not found', 404));
      }
      if (user.avatar && user.avatar.public_id) {
      
        await cloudinary.v2.uploader.destroy(user.avatar.public_id);
    }
      
  
      await userModel.findByIdAndDelete(id);
  
      res.status(200).json({
        success: true,
        message: 'User deleted successfully',
      });
    } catch (error: any) {
      return next(new ErroreHandler(error.message, 500));
    }
  });





  export const checkSuperAdmin = async (req: Request, res: Response) : Promise<any> => {
    try {
      const user = req.user;
  
      if (!user) {
        return res.status(401).json({ success: false, message: 'User not authenticated' });
      }
  
      // Check if the user's email matches the super admin email
      const isSuperAdmin = user.email === "hello@nicolasgrimm.ch";
  
      if (isSuperAdmin) {
        res.status(200).json({ success: true, message: 'User is a super admin' });
      } else {
        res.status(200).json({ success: false, message: 'User is not a super admin' });
      }
    } catch (error) {
      console.error('Error checking super admin status:', error);
      res.status(500).json({ success: false, message: 'An error occurred while checking super admin status' });
    }
  };



  
  
  interface IResetpassword {
    name: string;
    email: string;
  }
  
  export const forgetpassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, name } = req.body;
  
      // Check if email exists in the database
      const isEmailExist = await userModel.findOne({ email });
      if (!isEmailExist) {
        return next(new ErroreHandler("Please enter a valid email", 400));
      }
  
      const user: IResetpassword = {
        name,
        email,
      };
  
      // Create activation token
      const { token, activecode } = createForgetPasswordToken(user);
  
      // Prepare data for email
      const data = { user: { name: user.name }, activationCode: activecode };
  
      // Render email HTML using EJS
      const html = await ejs.renderFile(path.join(__dirname, "../mail/passwordreset-mailer.ejs"), data);
  
      // Send email
      try {
        await sendMailer({
          email,
          subject: "Reset your Password",
          templete : "passwordreset-mailer.ejs", // Adjust to the actual mailer utility
          data,
        });
  
        res.status(201).json({
          success: true,
          message: `Please check your email: ${email} to reset your password!`,
          activationToken: token,
          user,
        });
      } catch (err: any) {
        return next(new ErroreHandler(err.message, 400));
      }
    } catch (error: any) {
      return next(new ErroreHandler(error.message, 400));
    }
  };
  
  interface ForgetPasswordToken {
    token: string;
    activecode: string;
  }
  
  export const createForgetPasswordToken = (user: IResetpassword): ForgetPasswordToken => {
    const activecode = Math.floor(Math.random() * 9000 + 1000).toString();
    const token = jwt.sign(
      { user, activecode },
      process.env.JWTKEY as Secret,
      { expiresIn: "5m" } // Token will expire after 5 minutes
    );
  
    return { token, activecode };
  };
  
  export const checkResetPasswordOtp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { activation_token, activation_code } = req.body;
  
      // Verify token
      const decode = jwt.verify(activation_token, process.env.JWTKEY as Secret) as {
        user: IResetpassword;
        activecode: string;
      };
     
  
      // Check activation code
      if (decode.activecode !== activation_code) {
        return next(new ErroreHandler("Invalid reset password code", 400));
      }
  

      res.status(201).json({
        success: true,
        message: "Your OTP verify  successfully",
      });
    } catch (err: any) {
      return next(new ErroreHandler(err.message, 400));
    }
  };
  




// Interface for password reset
interface IResetpassword {
  name: string;
  email: string;
}

export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { activation_token, newpassword } = req.body; // Getting the activation token and new password from the request body

    // Verify the token
    const decoded = jwt.verify(activation_token, process.env.JWTKEY as Secret) as {
      user: IResetpassword;
      activecode: string;
    };

    // Retrieve the email from the decoded token
    const email = decoded.user.email;

    // Check if the user exists in the database using the email
    const existingUser = await userModel.findOne({ email });

    if (!existingUser) {
      return next(new ErroreHandler("User not found. Please check your email.", 400));
    }

    // Update the user's password
    existingUser.password = newpassword;
const userId=existingUser._id
    // Save the updated user object to the database
    await existingUser.save();
    await redis.set(userId as string,JSON.stringify(existingUser))

    // Return a response indicating success
    res.status(200).json({
      success: true,
      message: "Password has been updated successfully.",
    });
  } catch (err: any) {
    return next(new ErroreHandler(err.message, 400));
  }
};

  