import express from "express";
import {checkSuperAdmin, activateUser, registrationUser,getUser,loginUser, logoutUser,updateAccessToken ,updateUserInfo,updatePassword,updateProfilePicture,getUserById,updateUserContactInformation,getAllUsers,deleteUser,forgetpassword,checkResetPasswordOtp,resetPassword} from "../controllers/user.controller"; // Ensure logoutUser is imported
import { isAuthenticated } from "../middleware/auth";
import payment from "../middleware/payment";
import { getGateaway,createGateaway } from "../controllers/payment.controller";
const userrouter = express.Router();

userrouter.get('/check-super-admin', isAuthenticated);
userrouter.post('/registration',registrationUser);
userrouter.post("/activate-user",activateUser,createGateaway);
userrouter.post("/login", loginUser);
userrouter.get("/logout",isAuthenticated, logoutUser);
userrouter.get("/me", isAuthenticated,getUser);

userrouter.get("/refreshtoken", updateAccessToken);
userrouter.get("/getseller/:id", getUserById);
userrouter.put("/updateUserContactInformation",isAuthenticated, updateUserContactInformation);
userrouter.put('/update-user-info',isAuthenticated,updateUserInfo );
userrouter.put('/update-user-password',isAuthenticated,updatePassword );
userrouter.put('/update-user-profile-picture',isAuthenticated,updateProfilePicture );

userrouter.get("/admin/get-all-users", isAuthenticated,  getAllUsers);
userrouter.delete("/admin/delete-user/:id", isAuthenticated,deleteUser);
userrouter.post("/forgetpassword",forgetpassword)
userrouter.post("/checkResetPasswordOtp",checkResetPasswordOtp)
userrouter.post("/resetPassword",resetPassword)



export default userrouter;