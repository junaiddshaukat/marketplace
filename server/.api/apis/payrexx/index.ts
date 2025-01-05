 import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'payrexx/unknown (api/6.1.2)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Create a Page
   *
   * @throws FetchError<404, types.CreateAPageResponse404> 404
   */
  createAPage(body: types.CreateAPageBodyParam, metadata: types.CreateAPageMetadataParam): Promise<FetchResponse<200, types.CreateAPageResponse200>> {
    return this.core.fetch('/Page/', 'post', body, metadata);
  }

  /**
   * Retrieve Pages
   *
   * @throws FetchError<404, types.RetrievePagesResponse404> 404
   */
  retrievePages(metadata: types.RetrievePagesMetadataParam): Promise<FetchResponse<200, types.RetrievePagesResponse200>> {
    return this.core.fetch('/Page/', 'get', metadata);
  }

  /**
   * Update a Subscription
   *
   */
  updateASubscription(body: types.UpdateASubscriptionBodyParam, metadata: types.UpdateASubscriptionMetadataParam): Promise<FetchResponse<200, types.UpdateASubscriptionResponse200>>;
  updateASubscription(metadata: types.UpdateASubscriptionMetadataParam): Promise<FetchResponse<200, types.UpdateASubscriptionResponse200>>;
  updateASubscription(body?: types.UpdateASubscriptionBodyParam | types.UpdateASubscriptionMetadataParam, metadata?: types.UpdateASubscriptionMetadataParam): Promise<FetchResponse<200, types.UpdateASubscriptionResponse200>> {
    return this.core.fetch('/Subscription/{id}/', 'put', body, metadata);
  }

  /**
   * Remove a Subscription
   *
   */
  removeASubscription(metadata: types.RemoveASubscriptionMetadataParam): Promise<FetchResponse<200, types.RemoveASubscriptionResponse200>> {
    return this.core.fetch('/Subscription/{id}/', 'delete', metadata);
  }

  /**
   * Retrieve a Paylink
   *
   */
  retrieveAPaylink(metadata: types.RetrieveAPaylinkMetadataParam): Promise<FetchResponse<200, types.RetrieveAPaylinkResponse200>> {
    return this.core.fetch('/Invoice/{id}/', 'get', metadata);
  }

  /**
   * Remove a Paylink
   *
   */
  removeAPaylink(metadata: types.RemoveAPaylinkMetadataParam): Promise<FetchResponse<200, types.RemoveAPaylinkResponse200>> {
    return this.core.fetch('/Invoice/{id}/', 'delete', metadata);
  }

  /**
   * Create a Paylink
   *
   */
  createAPaylink(body: types.CreateAPaylinkBodyParam, metadata: types.CreateAPaylinkMetadataParam): Promise<FetchResponse<200, types.CreateAPaylinkResponse200>> {
    return this.core.fetch('/Invoice/', 'post', body, metadata);
  }

  /**
   * Retrieve a Page
   *
   * @throws FetchError<404, types.RetrieveAPageResponse404> 404
   */
  retrieveAPage(metadata: types.RetrieveAPageMetadataParam): Promise<FetchResponse<200, types.RetrieveAPageResponse200>> {
    return this.core.fetch('/Page/{id}/', 'get', metadata);
  }

  /**
   * Login a Subscription Customer
   *
   */
  loginASubscriptionCustomer(body: types.LoginASubscriptionCustomerBodyParam, metadata?: types.LoginASubscriptionCustomerMetadataParam): Promise<FetchResponse<200, types.LoginASubscriptionCustomerResponse200>> {
    return this.core.fetch('/AuthToken/', 'post', body, metadata);
  }

  /**
   * Create a New Subscription
   *
   */
  createANewSubscription(body: types.CreateANewSubscriptionBodyParam, metadata: types.CreateANewSubscriptionMetadataParam): Promise<FetchResponse<200, types.CreateANewSubscriptionResponse200>> {
    return this.core.fetch('/Subscription/', 'post', body, metadata);
  }

  /**
   * Create a Gateway
   *
   */
  createAGateway(body: types.CreateAGatewayBodyParam, metadata: types.CreateAGatewayMetadataParam): Promise<FetchResponse<200, types.CreateAGatewayResponse200>> {
    return this.core.fetch('/Gateway/', 'post', body, metadata);
  }

  /**
   * Retrieve a Gateway
   *
   */
  retrieveAGateway(metadata: types.RetrieveAGatewayMetadataParam): Promise<FetchResponse<200, types.RetrieveAGatewayResponse200>> {
    return this.core.fetch('/Gateway/{id}/', 'get', metadata);
  }

  /**
   * Delete a Gateway
   *
   */
  deleteAGateway(metadata: types.DeleteAGatewayMetadataParam): Promise<FetchResponse<200, types.DeleteAGatewayResponse200>> {
    return this.core.fetch('/Gateway/{id}/', 'delete', metadata);
  }

  /**
   * Check your signature
   *
   */
  signaturecheck(metadata: types.SignaturecheckMetadataParam): Promise<FetchResponse<200, types.SignaturecheckResponse200>> {
    return this.core.fetch('/SignatureCheck/', 'get', metadata);
  }

  /**
   * Charge a Pre-Authorized/Reserved Transaction
   *
   */
  chargeAPreAuthorizedReservedTransaction(body: types.ChargeAPreAuthorizedReservedTransactionBodyParam, metadata: types.ChargeAPreAuthorizedReservedTransactionMetadataParam): Promise<FetchResponse<200, types.ChargeAPreAuthorizedReservedTransactionResponse200>>;
  chargeAPreAuthorizedReservedTransaction(metadata: types.ChargeAPreAuthorizedReservedTransactionMetadataParam): Promise<FetchResponse<200, types.ChargeAPreAuthorizedReservedTransactionResponse200>>;
  chargeAPreAuthorizedReservedTransaction(body?: types.ChargeAPreAuthorizedReservedTransactionBodyParam | types.ChargeAPreAuthorizedReservedTransactionMetadataParam, metadata?: types.ChargeAPreAuthorizedReservedTransactionMetadataParam): Promise<FetchResponse<200, types.ChargeAPreAuthorizedReservedTransactionResponse200>> {
    return this.core.fetch('/Transaction/{id}/', 'post', body, metadata);
  }

  /**
   * Retrieve a Transaction
   *
   */
  retrieveATransaction(metadata: types.RetrieveATransactionMetadataParam): Promise<FetchResponse<200, types.RetrieveATransactionResponse200>> {
    return this.core.fetch('/Transaction/{id}/', 'get', metadata);
  }

  /**
   * Delete a Reserved Transaction
   *
   */
  deleteAReservedTransaction(metadata: types.DeleteAReservedTransactionMetadataParam): Promise<FetchResponse<200, types.DeleteAReservedTransactionResponse200>> {
    return this.core.fetch('/Transaction/{id}/', 'delete', metadata);
  }

  /**
   * Update Pre-Authorization/Tokenization Contact Details
   *
   */
  updateContactDetails(body: types.UpdateContactDetailsBodyParam, metadata: types.UpdateContactDetailsMetadataParam): Promise<FetchResponse<200, types.UpdateContactDetailsResponse200>> {
    return this.core.fetch('/Transaction/{id}/', 'put', body, metadata);
  }

  /**
   * Retrieve all Payment Providers
   *
   */
  retrieveAllPaymentProviders(metadata: types.RetrieveAllPaymentProvidersMetadataParam): Promise<FetchResponse<200, types.RetrieveAllPaymentProvidersResponse200>> {
    return this.core.fetch('/PaymentProvider/', 'get', metadata);
  }

  /**
   * Retrieve Transactions
   *
   */
  retrieveTransactions(body: types.RetrieveTransactionsBodyParam, metadata: types.RetrieveTransactionsMetadataParam): Promise<FetchResponse<200, types.RetrieveTransactionsResponse200>>;
  retrieveTransactions(metadata: types.RetrieveTransactionsMetadataParam): Promise<FetchResponse<200, types.RetrieveTransactionsResponse200>>;
  retrieveTransactions(body?: types.RetrieveTransactionsBodyParam | types.RetrieveTransactionsMetadataParam, metadata?: types.RetrieveTransactionsMetadataParam): Promise<FetchResponse<200, types.RetrieveTransactionsResponse200>> {
    return this.core.fetch('/Transaction/', 'get', body, metadata);
  }

  /**
   * Create a Cash Transaction
   *
   */
  createACashTransaction(body: types.CreateACashTransactionBodyParam, metadata: types.CreateACashTransactionMetadataParam): Promise<FetchResponse<200, types.CreateACashTransactionResponse200>> {
    return this.core.fetch('/Transaction/', 'post', body, metadata);
  }

  /**
   * Refund a Transaction
   *
   */
  refundATransaction(body: types.RefundATransactionBodyParam, metadata: types.RefundATransactionMetadataParam): Promise<FetchResponse<200, types.RefundATransactionResponse200>>;
  refundATransaction(metadata: types.RefundATransactionMetadataParam): Promise<FetchResponse<200, types.RefundATransactionResponse200>>;
  refundATransaction(body?: types.RefundATransactionBodyParam | types.RefundATransactionMetadataParam, metadata?: types.RefundATransactionMetadataParam): Promise<FetchResponse<200, types.RefundATransactionResponse200>> {
    return this.core.fetch('/Transaction/{id}/refund', 'post', body, metadata);
  }

  /**
   * Capture a Transaction
   *
   */
  captureATransaction(metadata: types.CaptureATransactionMetadataParam): Promise<FetchResponse<200, types.CaptureATransactionResponse200>> {
    return this.core.fetch('/Transaction/{id}/capture', 'post', metadata);
  }

  /**
   * Create a Design
   *
   */
  createADesign(body: types.CreateADesignBodyParam, metadata: types.CreateADesignMetadataParam): Promise<FetchResponse<200, types.CreateADesignResponse200>> {
    return this.core.fetch('/Design/', 'post', body, metadata);
  }

  /**
   * Retrieve Designs
   *
   */
  retrieveAllDesigns(body: types.RetrieveAllDesignsBodyParam, metadata: types.RetrieveAllDesignsMetadataParam): Promise<FetchResponse<200, types.RetrieveAllDesignsResponse200>>;
  retrieveAllDesigns(metadata: types.RetrieveAllDesignsMetadataParam): Promise<FetchResponse<200, types.RetrieveAllDesignsResponse200>>;
  retrieveAllDesigns(body?: types.RetrieveAllDesignsBodyParam | types.RetrieveAllDesignsMetadataParam, metadata?: types.RetrieveAllDesignsMetadataParam): Promise<FetchResponse<200, types.RetrieveAllDesignsResponse200>> {
    return this.core.fetch('/Design/', 'get', body, metadata);
  }

  /**
   * Retrieve a Design
   *
   */
  retrieveADesign(metadata: types.RetrieveADesignMetadataParam): Promise<FetchResponse<200, types.RetrieveADesignResponse200>> {
    return this.core.fetch('/Design/{uuid}/', 'get', metadata);
  }

  /**
   * Delete a Design
   *
   */
  deleteADesign(metadata: types.DeleteADesignMetadataParam): Promise<FetchResponse<200, types.DeleteADesignResponse200>> {
    return this.core.fetch('/Design/{uuid}/', 'delete', metadata);
  }

  /**
   * Update a Design
   *
   */
  updateADesign(body: types.UpdateADesignBodyParam, metadata: types.UpdateADesignMetadataParam): Promise<FetchResponse<200, types.UpdateADesignResponse200>> {
    return this.core.fetch('/Design/{uuid}/', 'post', body, metadata);
  }

  /**
   * Create a QR Code
   *
   */
  createAQrCode(body: types.CreateAQrCodeBodyParam, metadata: types.CreateAQrCodeMetadataParam): Promise<FetchResponse<200, types.CreateAQrCodeResponse200>> {
    return this.core.fetch('/QrCode/', 'post', body, metadata);
  }

  /**
   * Delete a QR Code
   *
   */
  deleteAQrCode(metadata: types.DeleteAQrCodeMetadataParam): Promise<FetchResponse<200, types.DeleteAQrCodeResponse200>> {
    return this.core.fetch('/QrCode/{uuid}', 'delete', metadata);
  }

  /**
   * Retrieve a QR Code
   *
   * @throws FetchError<404, types.RetrieveAQrCodeResponse404> 404
   */
  retrieveAQrCode(metadata: types.RetrieveAQrCodeMetadataParam): Promise<FetchResponse<200, types.RetrieveAQrCodeResponse200>> {
    return this.core.fetch('/QrCode/{uuid}', 'get', metadata);
  }

  /**
   * Delete a QR Code Scan
   *
   */
  deleteAQrCodeScan(body: types.DeleteAQrCodeScanBodyParam, metadata: types.DeleteAQrCodeScanMetadataParam): Promise<FetchResponse<200, types.DeleteAQrCodeScanResponse200>> {
    return this.core.fetch('/QrCodeScan/', 'delete', body, metadata);
  }

  /**
   * Get All Active Payment Methods
   *
   * @throws FetchError<400, types.GetAllActivePaymentMethodsResponse400> 400
   */
  getAllActivePaymentMethods(body: types.GetAllActivePaymentMethodsBodyParam, metadata: types.GetAllActivePaymentMethodsMetadataParam): Promise<FetchResponse<200, types.GetAllActivePaymentMethodsResponse200>>;
  getAllActivePaymentMethods(metadata: types.GetAllActivePaymentMethodsMetadataParam): Promise<FetchResponse<200, types.GetAllActivePaymentMethodsResponse200>>;
  getAllActivePaymentMethods(body?: types.GetAllActivePaymentMethodsBodyParam | types.GetAllActivePaymentMethodsMetadataParam, metadata?: types.GetAllActivePaymentMethodsMetadataParam): Promise<FetchResponse<200, types.GetAllActivePaymentMethodsResponse200>> {
    return this.core.fetch('/PaymentMethod/', 'get', body, metadata);
  }

  /**
   * Get One Payment Method
   *
   * @throws FetchError<400, types.GetOnePaymentMethodResponse400> 400
   */
  getOnePaymentMethod(metadata: types.GetOnePaymentMethodMetadataParam): Promise<FetchResponse<200, types.GetOnePaymentMethodResponse200>> {
    return this.core.fetch('/PaymentMethod/{paymentMethod}/', 'get', metadata);
  }

  /**
   * Send Mail Receipt
   *
   */
  sendMailReceipt(body: types.SendMailReceiptBodyParam, metadata: types.SendMailReceiptMetadataParam): Promise<FetchResponse<200, types.SendMailReceiptResponse200>> {
    return this.core.fetch('/Transaction/{id}/receipt', 'post', body, metadata);
  }

  /**
   * Retrieve Payouts
   *
   */
  retrievePayouts(metadata: types.RetrievePayoutsMetadataParam): Promise<FetchResponse<200, types.RetrievePayoutsResponse200>> {
    return this.core.fetch('/Payout/', 'get', metadata);
  }

  /**
   * This is only available if manual payouts have been activated by the Payrexx team.
   *
   * @summary Create Manual Payout
   */
  createManualPayout(body: types.CreateManualPayoutBodyParam, metadata: types.CreateManualPayoutMetadataParam): Promise<FetchResponse<200, types.CreateManualPayoutResponse200>> {
    return this.core.fetch('/Payout/', 'post', body, metadata);
  }

  /**
   * Retrieve a Payout Without Details
   *
   */
  retrievePayout(metadata: types.RetrievePayoutMetadataParam): Promise<FetchResponse<200, types.RetrievePayoutResponse200>> {
    return this.core.fetch('/Payout/{uuid}/', 'get', metadata);
  }

  /**
   * Retrieve a Payout With Details
   *
   */
  retrievePayoutWithDetails(metadata: types.RetrievePayoutWithDetailsMetadataParam): Promise<FetchResponse<200, types.RetrievePayoutWithDetailsResponse200>> {
    return this.core.fetch('/Payout/{uuid}/details', 'get', metadata);
  }

  /**
   * Pre-Authorize a Tokenization
   *
   */
  preAuthorizeATokenization(body: types.PreAuthorizeATokenizationBodyParam, metadata: types.PreAuthorizeATokenizationMetadataParam): Promise<FetchResponse<200, types.PreAuthorizeATokenizationResponse200>>;
  preAuthorizeATokenization(metadata: types.PreAuthorizeATokenizationMetadataParam): Promise<FetchResponse<200, types.PreAuthorizeATokenizationResponse200>>;
  preAuthorizeATokenization(body?: types.PreAuthorizeATokenizationBodyParam | types.PreAuthorizeATokenizationMetadataParam, metadata?: types.PreAuthorizeATokenizationMetadataParam): Promise<FetchResponse<200, types.PreAuthorizeATokenizationResponse200>> {
    return this.core.fetch('/Transaction/{id}/preAuthorize', 'post', body, metadata);
  }

  /**
   * Only works for RS2 Acquiring
   *
   * @summary Update a Pre-Authorization
   */
  updateAPreAuthorization(body: types.UpdateAPreAuthorizationBodyParam, metadata: types.UpdateAPreAuthorizationMetadataParam): Promise<FetchResponse<200, types.UpdateAPreAuthorizationResponse200>>;
  updateAPreAuthorization(metadata: types.UpdateAPreAuthorizationMetadataParam): Promise<FetchResponse<200, types.UpdateAPreAuthorizationResponse200>>;
  updateAPreAuthorization(body?: types.UpdateAPreAuthorizationBodyParam | types.UpdateAPreAuthorizationMetadataParam, metadata?: types.UpdateAPreAuthorizationMetadataParam): Promise<FetchResponse<200, types.UpdateAPreAuthorizationResponse200>> {
    return this.core.fetch('/Transaction/{id}/updatePreAuthorization', 'put', body, metadata);
  }

  /**
   * Cancel a Waiting Transaction
   *
   * @throws FetchError<404, types.CancelAWaitingTransactionResponse404> 404
   */
  cancelAWaitingTransaction(metadata: types.CancelAWaitingTransactionMetadataParam): Promise<FetchResponse<200, types.CancelAWaitingTransactionResponse200>> {
    return this.core.fetch('/Transaction/{id}/cancel', 'patch', metadata);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { CancelAWaitingTransactionMetadataParam, CancelAWaitingTransactionResponse200, CancelAWaitingTransactionResponse404, CaptureATransactionMetadataParam, CaptureATransactionResponse200, ChargeAPreAuthorizedReservedTransactionBodyParam, ChargeAPreAuthorizedReservedTransactionMetadataParam, ChargeAPreAuthorizedReservedTransactionResponse200, CreateACashTransactionBodyParam, CreateACashTransactionMetadataParam, CreateACashTransactionResponse200, CreateADesignBodyParam, CreateADesignMetadataParam, CreateADesignResponse200, CreateAGatewayBodyParam, CreateAGatewayMetadataParam, CreateAGatewayResponse200, CreateANewSubscriptionBodyParam, CreateANewSubscriptionMetadataParam, CreateANewSubscriptionResponse200, CreateAPageBodyParam, CreateAPageMetadataParam, CreateAPageResponse200, CreateAPageResponse404, CreateAPaylinkBodyParam, CreateAPaylinkMetadataParam, CreateAPaylinkResponse200, CreateAQrCodeBodyParam, CreateAQrCodeMetadataParam, CreateAQrCodeResponse200, CreateManualPayoutBodyParam, CreateManualPayoutMetadataParam, CreateManualPayoutResponse200, DeleteADesignMetadataParam, DeleteADesignResponse200, DeleteAGatewayMetadataParam, DeleteAGatewayResponse200, DeleteAQrCodeMetadataParam, DeleteAQrCodeResponse200, DeleteAQrCodeScanBodyParam, DeleteAQrCodeScanMetadataParam, DeleteAQrCodeScanResponse200, DeleteAReservedTransactionMetadataParam, DeleteAReservedTransactionResponse200, GetAllActivePaymentMethodsBodyParam, GetAllActivePaymentMethodsMetadataParam, GetAllActivePaymentMethodsResponse200, GetAllActivePaymentMethodsResponse400, GetOnePaymentMethodMetadataParam, GetOnePaymentMethodResponse200, GetOnePaymentMethodResponse400, LoginASubscriptionCustomerBodyParam, LoginASubscriptionCustomerMetadataParam, LoginASubscriptionCustomerResponse200, PreAuthorizeATokenizationBodyParam, PreAuthorizeATokenizationMetadataParam, PreAuthorizeATokenizationResponse200, RefundATransactionBodyParam, RefundATransactionMetadataParam, RefundATransactionResponse200, RemoveAPaylinkMetadataParam, RemoveAPaylinkResponse200, RemoveASubscriptionMetadataParam, RemoveASubscriptionResponse200, RetrieveADesignMetadataParam, RetrieveADesignResponse200, RetrieveAGatewayMetadataParam, RetrieveAGatewayResponse200, RetrieveAPageMetadataParam, RetrieveAPageResponse200, RetrieveAPageResponse404, RetrieveAPaylinkMetadataParam, RetrieveAPaylinkResponse200, RetrieveAQrCodeMetadataParam, RetrieveAQrCodeResponse200, RetrieveAQrCodeResponse404, RetrieveATransactionMetadataParam, RetrieveATransactionResponse200, RetrieveAllDesignsBodyParam, RetrieveAllDesignsMetadataParam, RetrieveAllDesignsResponse200, RetrieveAllPaymentProvidersMetadataParam, RetrieveAllPaymentProvidersResponse200, RetrievePagesMetadataParam, RetrievePagesResponse200, RetrievePagesResponse404, RetrievePayoutMetadataParam, RetrievePayoutResponse200, RetrievePayoutWithDetailsMetadataParam, RetrievePayoutWithDetailsResponse200, RetrievePayoutsMetadataParam, RetrievePayoutsResponse200, RetrieveTransactionsBodyParam, RetrieveTransactionsMetadataParam, RetrieveTransactionsResponse200, SendMailReceiptBodyParam, SendMailReceiptMetadataParam, SendMailReceiptResponse200, SignaturecheckMetadataParam, SignaturecheckResponse200, UpdateADesignBodyParam, UpdateADesignMetadataParam, UpdateADesignResponse200, UpdateAPreAuthorizationBodyParam, UpdateAPreAuthorizationMetadataParam, UpdateAPreAuthorizationResponse200, UpdateASubscriptionBodyParam, UpdateASubscriptionMetadataParam, UpdateASubscriptionResponse200, UpdateContactDetailsBodyParam, UpdateContactDetailsMetadataParam, UpdateContactDetailsResponse200 } from './types';
