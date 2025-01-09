import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const emailRegexPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    avatar: {
        public_id: string;
        url: string;
    };
    payment_obj_id?: string;
    gatewayID?: string;
    gatewayLINK?: string;
    paymentDate?: Date;
    paymentExpiryDate?: Date;
    paymentStatus?: string;
    contactInformation?: {
        email?: {
            value: string;
            visibility: 'public' | 'private';
        };
        phone?: {
            value: string;
            visibility: 'public' | 'private';
        };
        address?: string;
        location?: string;
        website?: string;
    };
    favorites: string[];
    comparePassword: (password: string) => Promise<boolean>;
    signaccesstoken: () => string;
    signrefreshtoken: () => string;
}

const userSchema: Schema<IUser> = new mongoose.Schema(
    {
        gatewayID: {
            type: String,
            default:"",
        },
        gatewayLINK: {
            type: String,
            default:"",
        },
        name: {
            type: String,
            required: [true, "Please enter your name"],
        },
        email: {
            type: String,
            required: [true, "Please enter your email"],
            validate: {
                validator: function (value: string) {
                    return emailRegexPattern.test(value);
                },
                message: "Please enter a valid email",
            },
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please enter your password"],
            minlength: [6, "Password must be at least 6 characters"],
            select: false,
        },
        avatar: {
            public_id: String,
            url: String,
        },
        payment_obj_id: {
            type: String,
        },
        paymentStatus: {
            type: String,
        },
        paymentDate: {
            type: Date,
        },
        paymentExpiryDate: {
            type: Date,
        },
        contactInformation: {
            email: {
                value: {
                    type: String,
                    required: false,
                    validate: {
                        validator: function (value: string) {
                            return emailRegexPattern.test(value);
                        },
                        message: "Please enter a valid email",
                    },
                },
                visibility: {
                    type: String,
                    enum: ["public", "private"],
                    default: "public",
                },
            },
            phone: {
                value: {
                    type: String,
                    required: false,
                },
                visibility: {
                    type: String,
                    enum: ["public", "private"],
                    default: "public",
                },
            },
            address: {
                type: String,
                required: false,
            },
            location: {
                type: String,
                required: false,
            },
            website: {
                type: String,
                required: false,
            },
           
        },

        favorites: {
            type: [String], // Array of user emails
            default: [],
          },
    },
    { timestamps: true }
);

// Hash password before saving to database
userSchema.pre<IUser>("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Access Token
userSchema.methods.signaccesstoken = function () {
    return jwt.sign(
        { id: this._id.toString() },
        process.env.ACCESS_TOKEN || "",
        { expiresIn: `${365 * 24 * 60 * 60}s` } // 365 days in seconds
    );
};

// Refresh Token
userSchema.methods.signrefreshtoken = function () {
    return jwt.sign({ id: this._id.toString() }, process.env.REFRESH_TOKEN || "", { expiresIn: '5d' });
};

// Compare Password
userSchema.methods.comparePassword = async function (enteredPassword: string): Promise<boolean> {
    return await bcrypt.compare(enteredPassword, this.password);
};

const userModel: Model<IUser> = mongoose.model("User", userSchema);
export default userModel;
