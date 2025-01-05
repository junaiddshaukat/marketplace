import express from 'express'
import { createSubscription , getGateaway,createGateaway,getTransaction, captureTransaction, paymentchecker,cancelPaymentAndDeleteUser} from '../controllers/payment.controller';
//import { get } from 'axios';
const paymentRouter = express.Router();

paymentRouter.get('/get-gateway/:id', getGateaway);
paymentRouter.post('/capture-payment/:id', captureTransaction);
paymentRouter.post('/create-gateway', createGateaway);
paymentRouter.get('/transaction/:id',getTransaction);
paymentRouter.post('/subscription',createSubscription)
paymentRouter.delete("/cancel", cancelPaymentAndDeleteUser);
paymentRouter.post("/check", paymentchecker);
export default paymentRouter;