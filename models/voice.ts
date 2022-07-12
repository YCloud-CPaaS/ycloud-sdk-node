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
 * 
 * @export
 * @interface Voice
 */
export interface Voice {
    /**
     * Unique ID for the object.
     * @type {string}
     * @memberof Voice
     */
    'id': string;
    /**
     * The recipient\'s phone number in E.164 format.
     * @type {string}
     * @memberof Voice
     */
    'to': string;
    /**
     * The verification code to be sent, 4 to 6 digits.
     * @type {string}
     * @memberof Voice
     */
    'verificationCode'?: string;
    /**
     * [ISO 639 Language Code](https://www.iso.org/iso-639-language-codes.html).
     * @type {string}
     * @memberof Voice
     */
    'language'?: string;
    /**
     * [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     * @type {string}
     * @memberof Voice
     */
    'regionCode'?: string;
    /**
     * Number of message segments. It\'s always 1 for voice calls.
     * @type {number}
     * @memberof Voice
     */
    'totalSegments'?: number;
    /**
     * Total price of this message.
     * @type {number}
     * @memberof Voice
     */
    'totalPrice'?: number;
    /**
     * [ISO 4217 currency code](https://en.wikipedia.org/wiki/ISO_4217)
     * @type {string}
     * @memberof Voice
     */
    'currency'?: string;
    /**
     * Delivery status. One of `accepted`, `sent`, `delivered`, `undelivered`.
     * @type {string}
     * @memberof Voice
     */
    'status'?: VoiceStatusEnum;
    /**
     * Error code when the message is undeliverable.
     * @type {string}
     * @memberof Voice
     */
    'errorCode'?: string;
    /**
     * The time at which this message was created, formatted in [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). e.g., `2022-03-01T12:00:00.000Z`.
     * @type {string}
     * @memberof Voice
     */
    'createTime'?: string;
    /**
     * The time at which the delivery report for this message was updated, formatted in [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). e.g., `2022-03-01T12:00:00.000Z`.
     * @type {string}
     * @memberof Voice
     */
    'updateTime'?: string;
    /**
     * A unique string to reference the object. This can be an order number or similar, and can be used to reconcile the object with your internal systems.
     * @type {string}
     * @memberof Voice
     */
    'externalId'?: string;
    /**
     * Delivery report URL. You can provide a URL, and we will push the updated status report to your server in time. e.g., https://httpbin.org/anything?tag=api. Note: We recommend configuring Webhook Endpoints instead.
     * @type {string}
     * @memberof Voice
     */
    'callbackUrl'?: string;
}

export const VoiceStatusEnum = {
    Accepted: 'accepted',
    Sent: 'sent',
    Delivered: 'delivered',
    Undelivered: 'undelivered'
} as const;

export type VoiceStatusEnum = typeof VoiceStatusEnum[keyof typeof VoiceStatusEnum];


