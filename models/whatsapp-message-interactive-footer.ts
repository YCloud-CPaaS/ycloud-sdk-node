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
 * Optional. An object with the footer of the message. See also [WhatsApp Footer Object](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/messages#footer-object).
 * @export
 * @interface WhatsappMessageInteractiveFooter
 */
export interface WhatsappMessageInteractiveFooter {
    /**
     * The footer content. Emojis and markdown are supported. Links are supported. Maximum length: 60 characters.
     * @type {string}
     * @memberof WhatsappMessageInteractiveFooter
     */
    'text'?: string;
}

