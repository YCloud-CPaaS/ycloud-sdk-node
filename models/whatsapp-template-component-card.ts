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


import { WhatsappTemplateComponentCardComponent } from './whatsapp-template-component-card-component';

/**
 * Carousel templates support up to 10 carousel cards. Cards must have a media header (image or video) and can optionally include body text and up to 2 quick reply buttons, phone number buttons, or URL buttons (button types can be mixed).
 * @export
 * @interface WhatsappTemplateComponentCard
 */
export interface WhatsappTemplateComponentCard {
    /**
     * **Required.** Card components.
     * @type {Array<WhatsappTemplateComponentCardComponent>}
     * @memberof WhatsappTemplateComponentCard
     */
    'components'?: Array<WhatsappTemplateComponentCardComponent>;
}

