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
 * @interface ContactCreateRequestCustomAttributesInner
 */
export interface ContactCreateRequestCustomAttributesInner {
    /**
     * Name of the attribute that you\'ve previously defined.
     * @type {string}
     * @memberof ContactCreateRequestCustomAttributesInner
     */
    'name'?: string;
    /**
     * Value of the attribute.
     * @type {object}
     * @memberof ContactCreateRequestCustomAttributesInner
     */
    'value'?: object;
}

