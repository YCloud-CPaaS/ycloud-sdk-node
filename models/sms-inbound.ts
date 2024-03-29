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
 * Represents an inbound SMS message, which means a user replies to your message.
 * @export
 * @interface SmsInbound
 */
export interface SmsInbound {
    /**
     * Unique ID of the message.
     * @type {string}
     * @memberof SmsInbound
     */
    'id'?: string;
    /**
     * The user\'s phone number who sent the message to your registered sender ID, formatted in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     * @type {string}
     * @memberof SmsInbound
     */
    'from'?: string;
    /**
     * The receiver\'s phone number, which is one of your registered Sender IDs.
     * @type {string}
     * @memberof SmsInbound
     */
    'to'?: string;
    /**
     * The text of this message.
     * @type {string}
     * @memberof SmsInbound
     */
    'text'?: string;
    /**
     * The time at which this message was sent, formatted in [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). e.g., `2022-06-01T12:00:00.000Z`.
     * @type {string}
     * @memberof SmsInbound
     */
    'sendTime'?: string;
}

