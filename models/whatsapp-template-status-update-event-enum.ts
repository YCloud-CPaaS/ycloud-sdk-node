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
 * Used when an event happened on WhatsApp template status updates.
 * @export
 * @enum {string}
 */

export const WhatsappTemplateStatusUpdateEventEnum = {
    /**
    * Pending.
    */
    Pending: 'PENDING',
    /**
    * Approved.
    */
    Approved: 'APPROVED',
    /**
    * Rejected.
    */
    Rejected: 'REJECTED',
    /**
    * In appeal. See also [Template Appeals](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines#appeals).
    */
    InAppeal: 'IN_APPEAL',
    /**
    * Paused. See also [Template Pausing](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines#template-pausing).
    */
    Paused: 'PAUSED',
    /**
    * Flagged. The template is scheduled for disabling.
    */
    Flagged: 'FLAGGED',
    /**
    * Disabled. See also [Template Pausing](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines#template-pausing).
    */
    Disabled: 'DISABLED',
    /**
    * Reinstated.
    */
    Reinstated: 'REINSTATED',
    /**
    * Pending deletion.
    */
    PendingDeletion: 'PENDING_DELETION'
} as const;

export type WhatsappTemplateStatusUpdateEventEnum = typeof WhatsappTemplateStatusUpdateEventEnum[keyof typeof WhatsappTemplateStatusUpdateEventEnum];



