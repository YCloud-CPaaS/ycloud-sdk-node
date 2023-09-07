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


import { WhatsappMessageInteractiveActionButtonReply } from './whatsapp-message-interactive-action-button-reply';

/**
 * A button object in `interactive` messages.
 * @export
 * @interface WhatsappMessageInteractiveActionButton
 */
export interface WhatsappMessageInteractiveActionButton {
    /**
     * Only supported type is `reply` (for Reply Button).
     * @type {string}
     * @memberof WhatsappMessageInteractiveActionButton
     */
    'type'?: WhatsappMessageInteractiveActionButtonTypeEnum;
    /**
     * 
     * @type {WhatsappMessageInteractiveActionButtonReply}
     * @memberof WhatsappMessageInteractiveActionButton
     */
    'reply'?: WhatsappMessageInteractiveActionButtonReply;
}

export const WhatsappMessageInteractiveActionButtonTypeEnum = {
    Reply: 'reply'
} as const;

export type WhatsappMessageInteractiveActionButtonTypeEnum = typeof WhatsappMessageInteractiveActionButtonTypeEnum[keyof typeof WhatsappMessageInteractiveActionButtonTypeEnum];


