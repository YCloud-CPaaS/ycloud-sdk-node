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
 * Indicates the update event type of the WABA when a notification is sent to you to report a [policy violation](https://developers.facebook.com/docs/whatsapp/overview/policy-enforcement), a WABA has been banned and more.
 * @export
 * @enum {string}
 */

export const WhatsappBusinessAccountUpdateEventEnum = {
    /**
    * WhatsApp Business Account Banned.
    */
    DisabledUpdate: 'DISABLED_UPDATE',
    /**
    * Sandbox Number Upgraded to Verified Account.
    */
    VerifiedAccount: 'VERIFIED_ACCOUNT',
    /**
    * WhatsApp Business Account Restricted Due To Policy Violations.
    */
    AccountRestriction: 'ACCOUNT_RESTRICTION',
    /**
    * WhatsApp Business Account Violates Policy.
    */
    AccountViolation: 'ACCOUNT_VIOLATION',
    /**
    * WhatsApp Business Account Deleted.
    */
    AccountDeleted: 'ACCOUNT_DELETED'
} as const;

export type WhatsappBusinessAccountUpdateEventEnum = typeof WhatsappBusinessAccountUpdateEventEnum[keyof typeof WhatsappBusinessAccountUpdateEventEnum];


