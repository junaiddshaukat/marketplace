import axios, { AxiosResponse } from 'axios';
import qs from 'qs';
import Base64 from 'crypto-js/enc-base64';
import hmacSHA256 from 'crypto-js/hmac-sha256';

const baseUrl = 'https://api.payrexx.com/v1.0/';

interface PayrexxParams {
  [key: string]: any;
  ApiSignature?: string;
}
interface AuthTokenParams {
  userId: number; // Contact ID received from webhook
}
export class PayrexxService {
  private instance: string;
  private secret: string;

  constructor(instance: string, secret: string) {
    this.instance = instance;
    this.secret = secret;
  }

  // Build the signature
  private buildSignature(data?: PayrexxParams): string {
    let queryStr = '';
    if (data) {
      queryStr = qs.stringify(data, { format: 'RFC1738' });
      queryStr = queryStr.replace(/[!'()*~]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
    }
    // Hash the query string with the secret and return Base64 encoded signature
    return Base64.stringify(hmacSHA256(queryStr, this.secret));
  }

  // Build the base URL
  private buildBaseUrl(path: string): string {
    return `${baseUrl}${path}?instance=${this.instance}`;
  }

  // Method to get a gateway by ID
  public async getGateway(id: number): Promise<AxiosResponse> {
    const url = `${this.buildBaseUrl(`Gateway/${id}/`)}&ApiSignature=${this.buildSignature()}`;
    return axios.get(url);
  }
  // Delete Gateway
  public async DeleteSubscription(id: number): Promise<AxiosResponse> {
    const bodyParams = {
      userId: id,
      instance: "nicolasgrimm", // Replace with actual instance fetching logic
  };
  const queryStr = qs.stringify(bodyParams);

  // Construct the final URL
  const url = `${this.buildBaseUrl(`Subscription/${id}/`)}&${queryStr}`;

  try {
      // Send DELETE request with correct content-type and API secret in headers
      return await axios.delete(url, {
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'X-API-KEY': process.env.PAYREXX_API_KEY || 'Vk63GZvmlGAAF9KeNgLzfurXGvxn0s', // Replace with environment variable or securely stored value
          },
      });
  } catch (error) {
      console.error('Error occurred while fetching subscription:', error);
      throw error;
  }   
  }
  // Retrieve a transaction
  public async viewTransaction(id: number): Promise<AxiosResponse> {
    const url = `${this.buildBaseUrl(`Transaction/${id}/`)}&ApiSignature=${this.buildSignature()}`;
    return axios.delete(url);
  }
  public async captureTransaction(id: number): Promise<AxiosResponse> {
    const url = `${this.buildBaseUrl(`Transaction/${id}/capture`)}&ApiSignature=${this.buildSignature()}`;
    console.log(url);
    return axios.post(url);
  }
  public async getSubscription(id: number): Promise<AxiosResponse> {
    if (!id || id <= 0) {
        throw new Error('userId must be a valid positive integer!');
    }

    // Define body parameters for the request
    const bodyParams = {
        userId: id,
        instance: "nicolasgrimm", // Replace with actual instance fetching logic
    };

    // Serialize the parameters to x-www-form-urlencoded format
    const queryStr = qs.stringify(bodyParams);

    // Construct the final URL
    const url = this.buildBaseUrl('AuthToken/');

    try {
        // Send POST request with correct content-type and API secret in headers
        return await axios.post(url, queryStr, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-API-KEY': process.env.PAYREXX_API_KEY || 'Vk63GZvmlGAAF9KeNgLzfurXGvxn0s', // Replace with environment variable or securely stored value
            },
        });
    } catch (error) {
        console.error('Error occurred while fetching subscription:', error);
        throw error;
    }
}


  public async createSubscription(params: PayrexxParams): Promise<AxiosResponse> {
    if (!params.amount) {
      throw new Error('Amount is required!');
    }
    if (!params.subscriptionInterval) {
      throw new Error('Subscription interval is required!');
    }

    const defaultParams = {
      currency: 'CHF',
      subscriptionState: true, 
      subscriptionInterval: 'P12M', // Month interval
      //subscriptionPeriod: 'P12M',// Enable subscription
    };

    const queryParams = { ...defaultParams, ...params };

    const signature = this.buildSignature(queryParams);
    queryParams.ApiSignature = signature;

    const queryStrSigned = qs.stringify(queryParams);
    const url = this.buildBaseUrl('Subscription/');

    return axios.post(url, queryStrSigned, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
}
  
  // Method to create a gateway with parameters
  public async createGateway(params: PayrexxParams): Promise<AxiosResponse> {
    if (!params.amount) {
      throw new Error('Amount is required!');
    }

    // Default parameters, e.g., currency is CHF
    const defaultParams = { currency: 'CHF' };
    const queryParams = { ...defaultParams, ...params };

    // Calculate the signature for the request
    const signature = this.buildSignature(queryParams);
    queryParams.ApiSignature = signature; // Add signature to the queryParams

    // Serialize the parameters to x-www-form-urlencoded format
    const queryStrSigned = qs.stringify(queryParams);

    // Construct the final URL
    const url = this.buildBaseUrl('Gateway/');

    // Send POST request with correct content-type
    return axios.post(url, queryStrSigned, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // Set content type for form submission
      },
    });
  }
}