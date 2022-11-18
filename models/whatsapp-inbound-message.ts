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


import { WhatsappInboundMessageButton } from './whatsapp-inbound-message-button';
import { WhatsappInboundMessageInteractive } from './whatsapp-inbound-message-interactive';
import { WhatsappInboundMessageLocation } from './whatsapp-inbound-message-location';
import { WhatsappInboundMessageMedia } from './whatsapp-inbound-message-media';
import { WhatsappInboundMessageText } from './whatsapp-inbound-message-text';
import { WhatsappInboundMessageType } from './whatsapp-inbound-message-type';
import { WhatsappMessageContact } from './whatsapp-message-contact';
import { WhatsappProfile } from './whatsapp-profile';

/**
 * WhatsApp inbound message object.
 * @export
 * @interface WhatsappInboundMessage
 */
export interface WhatsappInboundMessage {
    /**
     * Unique ID for the object.
     * @type {string}
     * @memberof WhatsappInboundMessage
     */
    'id': string;
    /**
     * WhatsApp Business Account ID.
     * @type {string}
     * @memberof WhatsappInboundMessage
     */
    'wabaId'?: string;
    /**
     * The customer\'s phone number who sent the message to the business, formatted in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     * @type {string}
     * @memberof WhatsappInboundMessage
     */
    'from'?: string;
    /**
     * 
     * @type {WhatsappProfile}
     * @memberof WhatsappInboundMessage
     */
    'customerProfile'?: WhatsappProfile;
    /**
     * The recipient\'s phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     * @type {string}
     * @memberof WhatsappInboundMessage
     */
    'to'?: string;
    /**
     * The time at which this message is sent, formatted in [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). e.g., `2022-06-01T12:00:00.000Z`.
     * @type {string}
     * @memberof WhatsappInboundMessage
     */
    'sendTime'?: string;
    /**
     * 
     * @type {WhatsappInboundMessageType}
     * @memberof WhatsappInboundMessage
     */
    'type'?: WhatsappInboundMessageType;
    /**
     * 
     * @type {WhatsappInboundMessageText}
     * @memberof WhatsappInboundMessage
     */
    'text'?: WhatsappInboundMessageText;
    /**
     * 
     * @type {WhatsappInboundMessageMedia}
     * @memberof WhatsappInboundMessage
     */
    'image'?: WhatsappInboundMessageMedia;
    /**
     * 
     * @type {WhatsappInboundMessageMedia}
     * @memberof WhatsappInboundMessage
     */
    'video'?: WhatsappInboundMessageMedia;
    /**
     * 
     * @type {WhatsappInboundMessageMedia}
     * @memberof WhatsappInboundMessage
     */
    'audio'?: WhatsappInboundMessageMedia;
    /**
     * 
     * @type {WhatsappInboundMessageMedia}
     * @memberof WhatsappInboundMessage
     */
    'document'?: WhatsappInboundMessageMedia;
    /**
     * 
     * @type {WhatsappInboundMessageMedia}
     * @memberof WhatsappInboundMessage
     */
    'sticker'?: WhatsappInboundMessageMedia;
    /**
     * 
     * @type {WhatsappInboundMessageInteractive}
     * @memberof WhatsappInboundMessage
     */
    'interactive'?: WhatsappInboundMessageInteractive;
    /**
     * 
     * @type {WhatsappInboundMessageLocation}
     * @memberof WhatsappInboundMessage
     */
    'location'?: WhatsappInboundMessageLocation;
    /**
     * 
     * @type {WhatsappInboundMessageButton}
     * @memberof WhatsappInboundMessage
     */
    'button'?: WhatsappInboundMessageButton;
    /**
     * 
     * @type {Array<WhatsappMessageContact>}
     * @memberof WhatsappInboundMessage
     */
    'contacts'?: Array<WhatsappMessageContact>;
}

