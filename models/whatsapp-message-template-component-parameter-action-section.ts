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


import { WhatsappMessageTemplateComponentParameterActionSectionProductItem } from './whatsapp-message-template-component-parameter-action-section-product-item';

/**
 * 
 * @export
 * @interface WhatsappMessageTemplateComponentParameterActionSection
 */
export interface WhatsappMessageTemplateComponentParameterActionSection {
    /**
     * Section title text. Maximum 24 characters. Markdown is not supported.
     * @type {string}
     * @memberof WhatsappMessageTemplateComponentParameterActionSection
     */
    'title'?: string;
    /**
     * Array of product SKU numbers. There is a minimum of 1 product per section and a maximum of 30 products across all sections.
     * @type {Array<WhatsappMessageTemplateComponentParameterActionSectionProductItem>}
     * @memberof WhatsappMessageTemplateComponentParameterActionSection
     */
    'product_items'?: Array<WhatsappMessageTemplateComponentParameterActionSectionProductItem>;
}

