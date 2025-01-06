import nodemailer, { Transporter } from 'nodemailer';
import ejs from 'ejs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

interface EmailOption {
  email: string;
  subject: string;
  templete: string;
  data: { [key: string]: any };
}

const sendMailer = async (option: EmailOption): Promise<void> => {
  try {
    const transporter: Transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Gmail SMTP host
      port: parseInt(process.env.SMTP_PORT || '587'), // Port (465 for SSL, 587 for TLS)
      secure: parseInt(process.env.SMTP_PORT || '587') === 465, // Use SSL for port 465
      auth: {
        user: process.env.SMTP_MAIL, // Gmail username
        pass: process.env.SMTP_PASSWORD, // Gmail app password
      },
    });

    const { email, subject, templete, data } = option;
    const templatePath = path.join(__dirname, '../mail', templete);

    // Render EJS template
    const html: string = await ejs.renderFile(templatePath, data);

    // Email options
    const mailOptions = {
      from: process.env.SMTP_MAIL, // Sender address
      to: email, // Recipient address
      subject, // Subject
      html, // Rendered HTML content
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${email}`);
  } catch (error: any) {
    console.error('Error sending email:', error.message);
    throw new Error('Failed to send email. Please check the SMTP configuration.');
  }
};

export default sendMailer;
