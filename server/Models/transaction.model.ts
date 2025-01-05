import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for TypeScript
interface ITransaction extends Document {
  userId: mongoose.Types.ObjectId; 
  transactionId: string; // Unique ID for the transaction
  billingAddress: {
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string; // Optional
    city: string;
    state?: string; // Optional
    postalCode: string;
    country: string;
    phone: string;
  };
  paymentDate: Date; // Date of payment
  expirationDate: Date; // Expiration date (1 year after paymentDate)
  createdAt: Date; // Timestamp for record creation
}

// Define the schema
const TransactionSchema: Schema<ITransaction> = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    transactionId: { type: String, required: true, unique: true },
    billingAddress: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      address1: { type: String, required: true },
      address2: { type: String },
      city: { type: String, required: true },
      state: { type: String },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
      phone: { type: String, required: true },
    },
    paymentDate: { type: Date, required: true },
    expirationDate: { type: Date,default:Date.now, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { collection: 'transactions' }
);

// Middleware to set expirationDate automatically
 TransactionSchema.pre('save', function (next) {
  if (!this.expirationDate && this.paymentDate) {
    this.expirationDate = new Date(this.paymentDate);
    this.expirationDate.setFullYear(this.expirationDate.getFullYear() + 1); // Add 1 year
  }
  next();
}); 

export const Transaction = mongoose.model<ITransaction>('Transaction', TransactionSchema);
