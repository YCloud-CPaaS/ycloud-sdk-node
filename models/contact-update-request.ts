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


import { ContactCreateRequestCustomAttributesInner } from './contact-create-request-custom-attributes-inner';

/**
 * Contains the properties of the contact to be updated.
 * @export
 * @interface ContactUpdateRequest
 */
export interface ContactUpdateRequest {
    /**
     * Contact\'s nickname. Maximum length: 250 characters.
     * @type {string}
     * @memberof ContactUpdateRequest
     */
    'nickname'?: string;
    /**
     * Unique Phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     * @type {string}
     * @memberof ContactUpdateRequest
     */
    'phoneNumber'?: string;
    /**
     * Two-letter country abbreviation. See [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     * @type {string}
     * @memberof ContactUpdateRequest
     */
    'countryCode'?: string;
    /**
     * The contact\'s email address. If present, the email address must be unique.
     * @type {string}
     * @memberof ContactUpdateRequest
     */
    'email'?: string;
    /**
     * Contact\'s tags. Maximum items: 50.
     * @type {Array<string>}
     * @memberof ContactUpdateRequest
     */
    'tags'?: Array<string>;
    /**
     * Contact\'s custom attributes. If present (i.e., not `null`), all previous attributes of this contact will be replaced.
     * @type {Array<ContactCreateRequestCustomAttributesInner>}
     * @memberof ContactUpdateRequest
     */
    'customAttributes'?: Array<ContactCreateRequestCustomAttributesInner>;
}

