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


import { EmailContentType } from './email-content-type';
import { Mailbox } from './mailbox';

/**
 * 
 * @export
 * @interface Email
 */
export interface Email {
    /**
     * Unique ID for the object.
     * @type {string}
     * @memberof Email
     */
    'id': string;
    /**
     * 
     * @type {Mailbox}
     * @memberof Email
     */
    'from'?: Mailbox;
    /**
     * The intended recipients\' email addresses.
     * @type {Array<Mailbox>}
     * @memberof Email
     */
    'to'?: Array<Mailbox>;
    /**
     * Recipients who will receive a copy of the email.
     * @type {Array<Mailbox>}
     * @memberof Email
     */
    'cc'?: Array<Mailbox>;
    /**
     * Recipients who will receive a blind carbon copy of the email.
     * @type {Array<Mailbox>}
     * @memberof Email
     */
    'bcc'?: Array<Mailbox>;
    /**
     * If this field exists, then the reply should go to the addresses indicated in that field and not to the address(es) indicated in the `from` field.
     * @type {Array<Mailbox>}
     * @memberof Email
     */
    'replyTo'?: Array<Mailbox>;
    /**
     * The email subject, which contains a short string identifying the topic of the message.
     * @type {string}
     * @memberof Email
     */
    'subject'?: string;
    /**
     * This is a summary of your email. Max length: 70.
     * @type {string}
     * @memberof Email
     */
    'summary'?: string;
    /**
     * 
     * @type {EmailContentType}
     * @memberof Email
     */
    'contentType'?: EmailContentType;
    /**
     * A unique string to reference the object. This can be an order number or similar, and can be used to reconcile the object with your internal systems.
     * @type {string}
     * @memberof Email
     */
    'externalId'?: string;
    /**
     * Delivery report URL. You can provide a URL, and we will push the updated status report to your server in time. e.g., https://httpbin.org/anything?tag=api. Note: We recommend configuring Webhook Endpoints instead.
     * @type {string}
     * @memberof Email
     */
    'callbackUrl'?: string;
    /**
     * The time at which this message was created, formatted in [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). e.g., `2022-06-01T12:00:00.000Z`.
     * @type {string}
     * @memberof Email
     */
    'createTime'?: string;
    /**
     * Total recipients of this message, including `to`, `cc` and `bcc`.
     * @type {number}
     * @memberof Email
     */
    'totalRecipients'?: number;
    /**
     * Total price of this message.
     * @type {number}
     * @memberof Email
     */
    'totalPrice'?: number;
    /**
     * Price currency. [ISO 4217 currency code](https://en.wikipedia.org/wiki/ISO_4217).
     * @type {string}
     * @memberof Email
     */
    'currency'?: string;
}

