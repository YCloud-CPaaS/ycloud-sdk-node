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


import { WhatsappInboundMessageOrderProductItem } from './whatsapp-inbound-message-order-product-item';

/**
 * When a customer places an order, the message type is set to `order`, and this field is included.
 * @export
 * @interface WhatsappInboundMessageOrder
 */
export interface WhatsappInboundMessageOrder {
    /**
     * The catalog ID.
     * @type {string}
     * @memberof WhatsappInboundMessageOrder
     */
    'catalog_id'?: string;
    /**
     * 
     * @type {Array<WhatsappInboundMessageOrderProductItem>}
     * @memberof WhatsappInboundMessageOrder
     */
    'product_items'?: Array<WhatsappInboundMessageOrderProductItem>;
    /**
     * Text message sent along with the order.
     * @type {string}
     * @memberof WhatsappInboundMessageOrder
     */
    'text'?: string;
}

