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


import { WhatsappPhoneNumberProfileVertical } from './whatsapp-phone-number-profile-vertical';

/**
 * WhatsApp Phone Number Business Profile. Customers can view your business profile by clicking your business\'s name or number in a conversation thread. See also [Business Profiles](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/business-profiles).
 * @export
 * @interface WhatsappPhoneNumberProfile
 */
export interface WhatsappPhoneNumberProfile {
    /**
     * The business\'s **About** text. This text appears in the business\'s profile, beneath its profile image, phone number, and contact buttons.
     * @type {string}
     * @memberof WhatsappPhoneNumberProfile
     */
    'about'?: string;
    /**
     * Address of the business. Character limit 256.
     * @type {string}
     * @memberof WhatsappPhoneNumberProfile
     */
    'address'?: string;
    /**
     * Description of the business. Character limit 512.
     * @type {string}
     * @memberof WhatsappPhoneNumberProfile
     */
    'description'?: string;
    /**
     * The contact email address (in valid email format) of the business. Character limit 128.
     * @type {string}
     * @memberof WhatsappPhoneNumberProfile
     */
    'email'?: string;
    /**
     * URL of the profile picture used to upload to Meta.
     * @type {string}
     * @memberof WhatsappPhoneNumberProfile
     */
    'profilePictureUrl'?: string;
    /**
     * 
     * @type {WhatsappPhoneNumberProfileVertical}
     * @memberof WhatsappPhoneNumberProfile
     */
    'vertical'?: WhatsappPhoneNumberProfileVertical;
    /**
     * The URLs associated with the business. For instance, a website, Facebook Page, or Instagram. You must include the http:// or https:// portion of the URL. There is a maximum of 2 websites with a maximum of 256 characters each.
     * @type {Array<string>}
     * @memberof WhatsappPhoneNumberProfile
     */
    'websites'?: Array<string>;
}
