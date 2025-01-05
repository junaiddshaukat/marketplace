// import cron from "node-cron";
// import nodemailer from "nodemailer";
// import productModel from "../Models/product.model"; // Update path as needed
// import userModel from "../Models/user.model";
// require("dotenv").config();



// const transporter = nodemailer.createTransport({
//   service: process.env.SMTP_SERVICE,
//   auth: {
//     user: process.env.SMTP_MAIL, // Use environment variables
//     pass: process.env.SMTP_PASSWORD,
//   },
// });

// const sendReminderEmails = async () => {
//   try {
//     const today = new Date();
//     const threeDaysLater = new Date(today);
//     threeDaysLater.setDate(today.getDate() + 3);

//     const expiringAds = await productModel.find({
//       expiryDate: {
//         $gte: today,
//         $lt: threeDaysLater,
//       },
//     });
//     console.log(expiringAds)

//     for (const ad of expiringAds) {
//       const user = await userModel.findById(ad.postedBy);
//       console.log(user)
//       if (user?.email) {
//         await transporter.sendMail({
//           from: process.env.SMTP_MAIL,
//           to: user.email,
//           subject: "Your Product Ad is Expiring Soon",
//           text: `Hi ${user.name}, your ad for "${ad.title}" is expiring on ${ad.expiryDate.toLocaleDateString()}. Please refresh it from your dashboard.`,
//         });
//       }
//     }
//   } catch (error) {
//     console.error("Error sending reminder emails:", error);
//   }
// };

// // Schedule the job to run at midnight daily
// cron.schedule("0 0 * * *", sendReminderEmails);





import cron from "node-cron";
import nodemailer from "nodemailer";
import productModel from "../Models/product.model"; // Update path as needed
import userModel from "../Models/user.model";
require("dotenv").config();

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE,
  auth: {
    user: process.env.SMTP_MAIL, // Use environment variables
    pass: process.env.SMTP_PASSWORD,
  },
});

const deactivateExpiredAdsAndNotifyUsers = async () => {
  try {
    const today = new Date();

    // Find ads that have reached their expiry date
    const expiredAds = await productModel.find({
      expiryDate: { $lte: today },
      status: "Active",
    });

    for (const ad of expiredAds) {
      // Update the ad status to 'InActive'
      ad.status = "InActive";
      await ad.save();

      // Find the user who posted the ad
      const user = await userModel.findById(ad.postedBy);

      // Send an email notification if user email exists
      if (user?.email) {
        await transporter.sendMail({
          from: process.env.SMTP_MAIL,
          to: user.email,
          subject: "Your Mama's Marketplace Ad Has Expired",
          text: `Hi, ${user.name}, your ad for "${ad.title}" has expired. Please visit your dashboard to reactivate it.`,
        });
      }
    }
  } catch (error) {
    console.error("Error processing expired ads:", error);
  }
};

// Schedule the job to run daily at 12 PM
cron.schedule("0 12 * * *", deactivateExpiredAdsAndNotifyUsers);
