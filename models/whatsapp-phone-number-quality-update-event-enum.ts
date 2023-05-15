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
 * Indicates the update event type of WhatsApp phone number quality when a notification is sent to you. Flagged status occurs when the quality rating reaches a low state. If the message quality improves to a high or medium state and maintains this for 7 days, your status will return to Connected. If the quality rating doesn\'t improve, your status will still return to Connected, but you\'ll be placed in a lower messaging limit tier.
 * @export
 * @enum {string}
 */

export const WhatsappPhoneNumberQualityUpdateEventEnum = {
    Flagged: 'FLAGGED',
    Unflagged: 'UNFLAGGED'
} as const;

export type WhatsappPhoneNumberQualityUpdateEventEnum = typeof WhatsappPhoneNumberQualityUpdateEventEnum[keyof typeof WhatsappPhoneNumberQualityUpdateEventEnum];



