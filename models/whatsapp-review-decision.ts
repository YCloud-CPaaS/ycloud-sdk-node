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
 * Used if a decision about WhatsApp accounts or phone numbers has been made.
 * @export
 * @enum {string}
 */

export const WhatsappReviewDecision = {
    Approved: 'APPROVED',
    Rejected: 'REJECTED'
} as const;

export type WhatsappReviewDecision = typeof WhatsappReviewDecision[keyof typeof WhatsappReviewDecision];



