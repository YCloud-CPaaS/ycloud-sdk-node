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


import { WhatsappApiError } from './whatsapp-api-error';

/**
 * 
 * @export
 * @interface Error
 */
export interface Error {
    /**
     * HTTP status code, [RFC 7231, Section 6](https://datatracker.ietf.org/doc/html/rfc7231#section-6). It conveys the HTTP status code used for the convenience of the consumer.
     * @type {number}
     * @memberof Error
     */
    'status': number;
    /**
     * One of a server-defined error codes. Some `4xx` errors that could be handled programmatically include an error code that briefly explains the error reported.
     * @type {string}
     * @memberof Error
     */
    'code': string;
    /**
     * A human-readable representation of the error. It is intended as an aid to developers and is not suitable for exposure to end users.
     * @type {string}
     * @memberof Error
     */
    'message'?: string;
    /**
     * The target of the error.
     * @type {string}
     * @memberof Error
     */
    'target'?: string;
    /**
     * A URL to more information about the error.
     * @type {string}
     * @memberof Error
     */
    'docUrl'?: string;
    /**
     * Each API request has an associated request ID. It conveys the response header `YCloud-Request-ID` used for the convenience of the consumer.
     * @type {string}
     * @memberof Error
     */
    'requestId'?: string;
    /**
     * 
     * @type {WhatsappApiError}
     * @memberof Error
     */
    'whatsappApiError'?: WhatsappApiError;
}

