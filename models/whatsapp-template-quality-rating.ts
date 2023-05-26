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
 * Quality rating of WhatsApp template. One of `GREEN`, `YELLOW`, `RED`, or `UNKNOWN`. See also [Template Quality Rating](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/#quality-rating). - `GREEN`: High quality. - `YELLOW`: Medium quality. - `RED`: Low quality. - `UNKNOWN`: Unknown quality.
 * @export
 * @enum {string}
 */

export const WhatsappTemplateQualityRating = {
    /**
    * High quality
    */
    Green: 'GREEN',
    /**
    * Medium quality
    */
    Yellow: 'YELLOW',
    /**
    * Low quality
    */
    Red: 'RED',
    /**
    * Unknown quality
    */
    Unknown: 'UNKNOWN'
} as const;

export type WhatsappTemplateQualityRating = typeof WhatsappTemplateQualityRating[keyof typeof WhatsappTemplateQualityRating];



