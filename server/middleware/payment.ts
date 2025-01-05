import { Request, Response, NextFunction } from "express";
import {Transaction} from "../Models/transaction.model";
import qs from 'qs';
import axios from 'axios';
import Base64 from 'crypto-js/enc-base64';
import hmacSHA256 from 'crypto-js/hmac-sha256';
require('dotenv').config();

const baseUrl = 'https://api.payrexx.com/v1.0/';

interface GatewayParams {
  amount?: number;
  currency?: string;
  [key: string]: any;
}
/*
export function init(instance: string, secret: string) {
  function buildSignature(data?: Record<string, any>): string {
    let queryStr = '';
    if (data) {
      queryStr = qs.stringify(data, { format: 'RFC1738' });
      queryStr = queryStr.replace(/[!'()*~]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
    }
    return Base64.stringify(hmacSHA256(queryStr, secret));
  }

  function buildBaseUrl(path: string): string {
    return `${baseUrl}${path}?instance=${instance}`;
  }

  return {
    getGateway: async function (id: string): Promise<any> {
      const gatewayUrl = buildBaseUrl(`Gateway/${id}/`);
      const url = `${gatewayUrl}&ApiSignature=${buildSignature()}`;
      return axios.get(url);
    },
    createGateway: async function (params: GatewayParams): Promise<any> {
      if (!params.amount) {
        throw new Error('Amount required!');
      }

      const defaultParams: Partial<GatewayParams> = {
        currency: 'CHF',
      };

      const queryParams = { ...defaultParams, ...params };

      const signature = buildSignature(queryParams);

      queryParams.ApiSignature = signature;
      const queryStrSigned = qs.stringify(queryParams);

      const gatewayUrl = buildBaseUrl('Gateway/');
      return axios.post(gatewayUrl, queryStrSigned);
    },
  };
}

// Example of how to consume the payrexx module
const instance = process.env.payment_INSTANCE as string; // Replace with your instance
const api_secret = process.env.payment_API_KEY as string; // Replace with your secret

const payrexx = init(instance, api_secret);

(async () => {
  const response = await payrexx.createGateway({
    amount: 100,
    // Add more fields here
  });
  console.log(response.data);
})();
*/

const payment = (req: Request, res: Response, next: NextFunction) => {
    const { userId, billingAddress, paymentDate } = req.body;
      

}

export default payment;