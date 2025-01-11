import express from "express";
import { webhookController } from "../controllers/webhook.controller";
const webhookRouter = express.Router();

webhookRouter.post("/webhook",webhookController);

export default webhookRouter;