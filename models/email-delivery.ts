/* tslint:disable */
/* eslint-disable */
/**
 * YCloud API
 * The [YCloud](https://ycloud.com) API is organized around [REST](https://en.wikipedia.org/wiki/Representational_state_transfer). Our API is designed to have predictable, resource-oriented URLs, return [JSON](https://www.json.org) responses, and use standard HTTP response codes and verbs.
 *
 * The version of the OpenAPI document: v2
 * Contact: service@ycloud.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Represents an email delivery report.
 * @export
 * @interface EmailDelivery
 */
export interface EmailDelivery {
    /**
     * Unique ID for the related email you\'ve previously sent.
     * @type {string}
     * @memberof EmailDelivery
     */
    'emailId': string;
    /**
     * A recipient\'s email address.
     * @type {string}
     * @memberof EmailDelivery
     */
    'recipientAddress': string;
    /**
     * Delivery status of the email to the specific recipient address.
     * @type {string}
     * @memberof EmailDelivery
     */
    'status'?: EmailDeliveryStatusEnum;
    /**
     * Error code when the email is undeliverable.
     * @type {string}
     * @memberof EmailDelivery
     */
    'errorCode'?: string;
    /**
     * Error message when the email is undeliverable.
     * @type {string}
     * @memberof EmailDelivery
     */
    'errorMessage'?: string;
    /**
     * The `externalId` you specified when you sent the email.
     * @type {string}
     * @memberof EmailDelivery
     */
    'externalId'?: string;
}

export const EmailDeliveryStatusEnum = {
    Sending: 'sending',
    Sent: 'sent',
    Delivered: 'delivered',
    Failed: 'failed'
} as const;

export type EmailDeliveryStatusEnum = typeof EmailDeliveryStatusEnum[keyof typeof EmailDeliveryStatusEnum];


