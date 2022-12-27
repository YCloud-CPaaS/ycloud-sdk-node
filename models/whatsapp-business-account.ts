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


import { MetaBusinessAccountVerificationStatus } from './meta-business-account-verification-status';
import { WhatsappBusinessAccountBanState } from './whatsapp-business-account-ban-state';
import { WhatsappBusinessAccountRestrictionInfo } from './whatsapp-business-account-restriction-info';
import { WhatsappBusinessAccountReviewStatus } from './whatsapp-business-account-review-status';
import { WhatsappBusinessAccountUpdateEventEnum } from './whatsapp-business-account-update-event-enum';
import { WhatsappReviewDecision } from './whatsapp-review-decision';

/**
 * Represents a specific [WhatsApp Business Account (WABA)](https://www.facebook.com/business/help/1499554293524119).
 * @export
 * @interface WhatsappBusinessAccount
 */
export interface WhatsappBusinessAccount {
    /**
     * ID of the WhatApp Business Account.
     * @type {string}
     * @memberof WhatsappBusinessAccount
     */
    'id'?: string;
    /**
     * User-friendly name to differentiate WhatsApp Business Accounts.
     * @type {string}
     * @memberof WhatsappBusinessAccount
     */
    'name'?: string;
    /**
     * The currency in which the payment transactions for the WhatsApp Business Account will be processed.
     * @type {string}
     * @memberof WhatsappBusinessAccount
     */
    'currency'?: string;
    /**
     * Namespace string for the message templates that belong to the WhatsApp Business Account.
     * @type {string}
     * @memberof WhatsappBusinessAccount
     */
    'messageTemplateNamespace'?: string;
    /**
     * 
     * @type {WhatsappBusinessAccountReviewStatus}
     * @memberof WhatsappBusinessAccount
     */
    'accountReviewStatus'?: WhatsappBusinessAccountReviewStatus;
    /**
     * 
     * @type {MetaBusinessAccountVerificationStatus}
     * @memberof WhatsappBusinessAccount
     */
    'businessVerificationStatus'?: MetaBusinessAccountVerificationStatus;
    /**
     * Country of the WhatsApp Business Account\'s owning Meta Business account.
     * @type {string}
     * @memberof WhatsappBusinessAccount
     */
    'country'?: string;
    /**
     * Ownership type of the WhatsApp Business Account.
     * @type {string}
     * @memberof WhatsappBusinessAccount
     */
    'ownershipType'?: string;
    /**
     * Primary funding ID for the WhatsApp Business Account paid service.
     * @type {string}
     * @memberof WhatsappBusinessAccount
     */
    'primaryFundingId'?: string;
    /**
     * The purchase order number supplied by the business for payment management purposes.
     * @type {string}
     * @memberof WhatsappBusinessAccount
     */
    'purchaseOrderNumber'?: string;
    /**
     * The timezone ID of the WhatsApp Business Account. See [Timezone IDs](https://developers.facebook.com/docs/marketing-api/reference/ad-account/timezone-ids).
     * @type {string}
     * @memberof WhatsappBusinessAccount
     */
    'timezoneId'?: string;
    /**
     * 
     * @type {WhatsappReviewDecision}
     * @memberof WhatsappBusinessAccount
     */
    'decision'?: WhatsappReviewDecision;
    /**
     * 
     * @type {WhatsappBusinessAccountUpdateEventEnum}
     * @memberof WhatsappBusinessAccount
     */
    'updateEvent'?: WhatsappBusinessAccountUpdateEventEnum;
    /**
     * 
     * @type {WhatsappBusinessAccountBanState}
     * @memberof WhatsappBusinessAccount
     */
    'banState'?: WhatsappBusinessAccountBanState;
    /**
     * The date when the WABA is banned.
     * @type {string}
     * @memberof WhatsappBusinessAccount
     */
    'banDate'?: string;
    /**
     * Used to report violations imposed on the WABA. See also [WhatsApp Business Platform Policy Violations](https://developers.facebook.com/docs/whatsapp/overview/policy-enforcement/violations).
     * @type {string}
     * @memberof WhatsappBusinessAccount
     */
    'violationType'?: string;
    /**
     * Used to report restrictions imposed on the WABA, when that WABA violates [WhatsApp Business Platform policies](https://developers.facebook.com/docs/whatsapp/overview/policy-enforcement).
     * @type {Array<WhatsappBusinessAccountRestrictionInfo>}
     * @memberof WhatsappBusinessAccount
     */
    'restrictions'?: Array<WhatsappBusinessAccountRestrictionInfo>;
}

