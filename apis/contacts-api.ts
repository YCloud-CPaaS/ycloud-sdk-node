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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, USER_AGENT, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Contact } from '../models';
// @ts-ignore
import { ContactCreateRequest } from '../models';
// @ts-ignore
import { ContactPage } from '../models';
// @ts-ignore
import { ContactUpdateRequest } from '../models';
// @ts-ignore
import { ErrorResponse } from '../models';
/**
 * ContactsApi - axios parameter creator
 * @export
 */
const ContactsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a contact.
         * @summary Create a contact
         * @param {ContactCreateRequest} contactCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (contactCreateRequest: ContactCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contactCreateRequest' is not null or undefined
            assertParamExists('create', 'contactCreateRequest', contactCreateRequest)
            const localVarPath = `/contact/contacts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            // const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            if (USER_AGENT) {
                localVarHeaderParameter['User-Agent'] = USER_AGENT;
            }
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            // setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.params = localVarQueryParameter;
            localVarRequestOptions.data = serializeDataIfNeeded(contactCreateRequest, localVarRequestOptions, configuration)

            return {
                url: localVarPath,
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a contact.
         * @summary Delete a contact
         * @param {string} id ID of the contact.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('delete', 'id', id)
            const localVarPath = `/contact/contacts/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            // const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            if (USER_AGENT) {
                localVarHeaderParameter['User-Agent'] = USER_AGENT;
            }
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration)


    
            // setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.params = localVarQueryParameter;

            return {
                url: localVarPath,
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a paginated list of contacts.
         * @summary List contacts
         * @param {ContactsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (requestParameters: ContactsApiListRequest = {}, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            let page = requestParameters['page'];
            let limit = requestParameters['limit'];
            let includeTotal = requestParameters['includeTotal'];
            let filterTags = requestParameters['filterTags'];
            let filterCountryCode = requestParameters['filterCountryCode'];
            let filterPhoneNumber = requestParameters['filterPhoneNumber'];
            let filterEmail = requestParameters['filterEmail'];
            const localVarPath = `/contact/contacts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            // const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            if (USER_AGENT) {
                localVarHeaderParameter['User-Agent'] = USER_AGENT;
            }
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (includeTotal !== undefined) {
                localVarQueryParameter['includeTotal'] = includeTotal;
            }

            if (filterTags !== undefined) {
                localVarQueryParameter['filter.tags'] = filterTags;
            }

            if (filterCountryCode !== undefined) {
                localVarQueryParameter['filter.countryCode'] = filterCountryCode;
            }

            if (filterPhoneNumber !== undefined) {
                localVarQueryParameter['filter.phoneNumber'] = filterPhoneNumber;
            }

            if (filterEmail !== undefined) {
                localVarQueryParameter['filter.email'] = filterEmail;
            }


    
            // setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.params = localVarQueryParameter;

            return {
                url: localVarPath,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a contact.
         * @summary Retrieve a contact
         * @param {string} id ID of the contact.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieve: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('retrieve', 'id', id)
            const localVarPath = `/contact/contacts/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            // const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            if (USER_AGENT) {
                localVarHeaderParameter['User-Agent'] = USER_AGENT;
            }
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration)


    
            // setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.params = localVarQueryParameter;

            return {
                url: localVarPath,
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a contact.
         * @summary Update a contact
         * @param {string} id ID of the contact.
         * @param {ContactUpdateRequest} [contactUpdateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update: async (id: string, contactUpdateRequest?: ContactUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('update', 'id', id)
            const localVarPath = `/contact/contacts/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            // const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            if (USER_AGENT) {
                localVarHeaderParameter['User-Agent'] = USER_AGENT;
            }
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            // setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.params = localVarQueryParameter;
            localVarRequestOptions.data = serializeDataIfNeeded(contactUpdateRequest, localVarRequestOptions, configuration)

            return {
                url: localVarPath,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ContactsApi - functional programming interface
 * @export
 */
const ContactsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ContactsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a contact.
         * @summary Create a contact
         * @param {ContactCreateRequest} contactCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(contactCreateRequest: ContactCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contact>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(contactCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a contact.
         * @summary Delete a contact
         * @param {string} id ID of the contact.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async delete(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contact>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.delete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a paginated list of contacts.
         * @summary List contacts
         * @param {ContactsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: ContactsApiListRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ContactPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a contact.
         * @summary Retrieve a contact
         * @param {string} id ID of the contact.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieve(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contact>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieve(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a contact.
         * @summary Update a contact
         * @param {string} id ID of the contact.
         * @param {ContactUpdateRequest} [contactUpdateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async update(id: string, contactUpdateRequest?: ContactUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contact>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.update(id, contactUpdateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ContactsApi - factory interface
 * @export
 */
const ContactsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ContactsApiFp(configuration)
    return {
        /**
         * Creates a contact.
         * @summary Create a contact
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(contactCreateRequest: ContactCreateRequest, options?: any): AxiosPromise<Contact> {
            return localVarFp.create(contactCreateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a contact.
         * @summary Delete a contact
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete(id: string, options?: any): AxiosPromise<Contact> {
            return localVarFp.delete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a paginated list of contacts.
         * @summary List contacts
         * @param {ContactsApiListRequest} requestParameters Request parameters.
         * @param {number} [page] Page number of the results to be returned, 1-based.
         * @param {number} [limit] A limit on the number of results to be returned, or number of results per page, between 1 and 100, defaults to 10.
         * @param {boolean} [includeTotal] Return results inside an object that contains the total result count or not.
         * @param {string} [filterTags] Comma-separated list of tags.
         * @param {string} [filterCountryCode] Two-letter country abbreviation. See [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
         * @param {string} [filterPhoneNumber] Phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
         * @param {string} [filterEmail] The contact\&#39;s email address.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: ContactsApiListRequest = {}, options?: any): AxiosPromise<ContactPage> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a contact.
         * @summary Retrieve a contact
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieve(id: string, options?: any): AxiosPromise<Contact> {
            return localVarFp.retrieve(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a contact.
         * @summary Update a contact
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update(id: string, contactUpdateRequest?: ContactUpdateRequest, options?: any): AxiosPromise<Contact> {
            return localVarFp.update(id, contactUpdateRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for list operation in ContactsApi.
 * @export
 * @interface ContactsApiListRequest
 */
export interface ContactsApiListRequest {
    /**
     * Page number of the results to be returned, 1-based.
     * @type {number}
     * @memberof ContactsApiList
     */
    readonly page?: number

    /**
     * A limit on the number of results to be returned, or number of results per page, between 1 and 100, defaults to 10.
     * @type {number}
     * @memberof ContactsApiList
     */
    readonly limit?: number

    /**
     * Return results inside an object that contains the total result count or not.
     * @type {boolean}
     * @memberof ContactsApiList
     */
    readonly includeTotal?: boolean

    /**
     * Comma-separated list of tags.
     * @type {string}
     * @memberof ContactsApiList
     */
    readonly filterTags?: string

    /**
     * Two-letter country abbreviation. See [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     * @type {string}
     * @memberof ContactsApiList
     */
    readonly filterCountryCode?: string

    /**
     * Phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     * @type {string}
     * @memberof ContactsApiList
     */
    readonly filterPhoneNumber?: string

    /**
     * The contact\&#39;s email address.
     * @type {string}
     * @memberof ContactsApiList
     */
    readonly filterEmail?: string
}

/**
 * ContactsApi - object-oriented interface
 * @export
 * @class ContactsApi
 * @extends {BaseAPI}
 */
export class ContactsApi extends BaseAPI {
    /**
     * Creates a contact.
     * @summary Create a contact
     * @param {ContactCreateRequest} contactCreateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactsApi
     */
    public create(contactCreateRequest: ContactCreateRequest, options?: AxiosRequestConfig) {
        return ContactsApiFp(this.configuration).create(contactCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a contact.
     * @summary Delete a contact
     * @param {string} id ID of the contact.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactsApi
     */
    public delete(id: string, options?: AxiosRequestConfig) {
        return ContactsApiFp(this.configuration).delete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a paginated list of contacts.
     * @summary List contacts
     * @param {ContactsApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactsApi
     */
    public list(requestParameters: ContactsApiListRequest = {}, options?: AxiosRequestConfig) {
        return ContactsApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a contact.
     * @summary Retrieve a contact
     * @param {string} id ID of the contact.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactsApi
     */
    public retrieve(id: string, options?: AxiosRequestConfig) {
        return ContactsApiFp(this.configuration).retrieve(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a contact.
     * @summary Update a contact
     * @param {string} id ID of the contact.
     * @param {ContactUpdateRequest} [contactUpdateRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactsApi
     */
    public update(id: string, contactUpdateRequest?: ContactUpdateRequest, options?: AxiosRequestConfig) {
        return ContactsApiFp(this.configuration).update(id, contactUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
