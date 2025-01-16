import express from 'express'
import { createSubscription,DeleteGateaway , getGateaway,createGateaway,getTransaction, captureTransaction, paymentchecker,cancelPaymentAndDeleteUser, getSubscription} from '../controllers/payment.controller';
//import { DeleteAGateway } from '@api/payrexx/schemas';
//import { get } from 'axios';
const paymentRouter = express.Router();

paymentRouter.get('/get-gateway/:id', getGateaway);
paymentRouter.post('/capture-payment/:id', captureTransaction);
paymentRouter.post('/create-gateway', createGateaway);
paymentRouter.get('/transaction/:id',getTransaction);
paymentRouter.post('/subscription',createSubscription)
paymentRouter.delete("/cancel", cancelPaymentAndDeleteUser);
paymentRouter.post("/check", paymentchecker);
paymentRouter.delete("/cancel/:id", DeleteGateaway);
paymentRouter.post('/getSubscription',getSubscription);
export default paymentRouter;