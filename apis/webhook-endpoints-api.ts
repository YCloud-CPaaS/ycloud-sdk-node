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
import { ErrorResponse } from '../models';
// @ts-ignore
import { WebhookEndpoint } from '../models';
// @ts-ignore
import { WebhookEndpointCreateRequest } from '../models';
// @ts-ignore
import { WebhookEndpointPage } from '../models';
// @ts-ignore
import { WebhookEndpointUpdateRequest } from '../models';
/**
 * WebhookEndpointsApi - axios parameter creator
 * @export
 */
const WebhookEndpointsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a webhook endpoint listening for specific events.
         * @summary Create a webhook endpoint
         * @param {WebhookEndpointCreateRequest} webhookEndpointCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (webhookEndpointCreateRequest: WebhookEndpointCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webhookEndpointCreateRequest' is not null or undefined
            assertParamExists('create', 'webhookEndpointCreateRequest', webhookEndpointCreateRequest)
            const localVarPath = `/webhookEndpoints`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(webhookEndpointCreateRequest, localVarRequestOptions, configuration)

            return {
                url: localVarPath,
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a webhook endpoint.
         * @summary Delete a webhook endpoint
         * @param {string} id ID of the webhook endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('delete', 'id', id)
            const localVarPath = `/webhookEndpoints/{id}`
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
         * Returns a paginated list of webhook endpoints.
         * @summary List webhook endpoints
         * @param {WebhookEndpointsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (requestParameters: WebhookEndpointsApiListRequest = {}, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            let page = requestParameters['page'];
            let limit = requestParameters['limit'];
            let includeTotal = requestParameters['includeTotal'];
            const localVarPath = `/webhookEndpoints`;
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
         * Retrieves the webhook endpoint with the given ID.
         * @summary Retrieve a webhook endpoint
         * @param {string} id ID of the webhook endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieve: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('retrieve', 'id', id)
            const localVarPath = `/webhookEndpoints/{id}`
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
         * Generates a new secret for a webhook endpoint.
         * @summary Rotate a webhook endpoint secret
         * @param {string} id ID of the webhook endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rotateSecret: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('rotateSecret', 'id', id)
            const localVarPath = `/webhookEndpoints/{id}/rotateSecret`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Updates a webhook endpoint, such as url, events, status.
         * @summary Update a webhook endpoint
         * @param {string} id ID of the webhook endpoint.
         * @param {WebhookEndpointUpdateRequest} webhookEndpointUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update: async (id: string, webhookEndpointUpdateRequest: WebhookEndpointUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('update', 'id', id)
            // verify required parameter 'webhookEndpointUpdateRequest' is not null or undefined
            assertParamExists('update', 'webhookEndpointUpdateRequest', webhookEndpointUpdateRequest)
            const localVarPath = `/webhookEndpoints/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(webhookEndpointUpdateRequest, localVarRequestOptions, configuration)

            return {
                url: localVarPath,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WebhookEndpointsApi - functional programming interface
 * @export
 */
const WebhookEndpointsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WebhookEndpointsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a webhook endpoint listening for specific events.
         * @summary Create a webhook endpoint
         * @param {WebhookEndpointCreateRequest} webhookEndpointCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(webhookEndpointCreateRequest: WebhookEndpointCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookEndpoint>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(webhookEndpointCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a webhook endpoint.
         * @summary Delete a webhook endpoint
         * @param {string} id ID of the webhook endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async delete(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookEndpoint>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.delete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a paginated list of webhook endpoints.
         * @summary List webhook endpoints
         * @param {WebhookEndpointsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: WebhookEndpointsApiListRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookEndpointPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves the webhook endpoint with the given ID.
         * @summary Retrieve a webhook endpoint
         * @param {string} id ID of the webhook endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieve(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookEndpoint>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieve(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Generates a new secret for a webhook endpoint.
         * @summary Rotate a webhook endpoint secret
         * @param {string} id ID of the webhook endpoint.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rotateSecret(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookEndpoint>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.rotateSecret(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a webhook endpoint, such as url, events, status.
         * @summary Update a webhook endpoint
         * @param {string} id ID of the webhook endpoint.
         * @param {WebhookEndpointUpdateRequest} webhookEndpointUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async update(id: string, webhookEndpointUpdateRequest: WebhookEndpointUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookEndpoint>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.update(id, webhookEndpointUpdateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WebhookEndpointsApi - factory interface
 * @export
 */
const WebhookEndpointsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WebhookEndpointsApiFp(configuration)
    return {
        /**
         * Creates a webhook endpoint listening for specific events.
         * @summary Create a webhook endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(webhookEndpointCreateRequest: WebhookEndpointCreateRequest, options?: any): AxiosPromise<WebhookEndpoint> {
            return localVarFp.create(webhookEndpointCreateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a webhook endpoint.
         * @summary Delete a webhook endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete(id: string, options?: any): AxiosPromise<WebhookEndpoint> {
            return localVarFp.delete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a paginated list of webhook endpoints.
         * @summary List webhook endpoints
         * @param {WebhookEndpointsApiListRequest} requestParameters Request parameters.
         * @param {number} [page] Page number of the results to be returned, 1-based.
         * @param {number} [limit] A limit on the number of results to be returned, or number of results per page, between 1 and 100, defaults to 10.
         * @param {boolean} [includeTotal] Return results inside an object that contains the total result count or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: WebhookEndpointsApiListRequest = {}, options?: any): AxiosPromise<WebhookEndpointPage> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the webhook endpoint with the given ID.
         * @summary Retrieve a webhook endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieve(id: string, options?: any): AxiosPromise<WebhookEndpoint> {
            return localVarFp.retrieve(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Generates a new secret for a webhook endpoint.
         * @summary Rotate a webhook endpoint secret
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rotateSecret(id: string, options?: any): AxiosPromise<WebhookEndpoint> {
            return localVarFp.rotateSecret(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a webhook endpoint, such as url, events, status.
         * @summary Update a webhook endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update(id: string, webhookEndpointUpdateRequest: WebhookEndpointUpdateRequest, options?: any): AxiosPromise<WebhookEndpoint> {
            return localVarFp.update(id, webhookEndpointUpdateRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for list operation in WebhookEndpointsApi.
 * @export
 * @interface WebhookEndpointsApiListRequest
 */
export interface WebhookEndpointsApiListRequest {
    /**
     * Page number of the results to be returned, 1-based.
     * @type {number}
     * @memberof WebhookEndpointsApiList
     */
    readonly page?: number

    /**
     * A limit on the number of results to be returned, or number of results per page, between 1 and 100, defaults to 10.
     * @type {number}
     * @memberof WebhookEndpointsApiList
     */
    readonly limit?: number

    /**
     * Return results inside an object that contains the total result count or not.
     * @type {boolean}
     * @memberof WebhookEndpointsApiList
     */
    readonly includeTotal?: boolean
}

/**
 * WebhookEndpointsApi - object-oriented interface
 * @export
 * @class WebhookEndpointsApi
 * @extends {BaseAPI}
 */
export class WebhookEndpointsApi extends BaseAPI {
    /**
     * Creates a webhook endpoint listening for specific events.
     * @summary Create a webhook endpoint
     * @param {WebhookEndpointCreateRequest} webhookEndpointCreateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookEndpointsApi
     */
    public create(webhookEndpointCreateRequest: WebhookEndpointCreateRequest, options?: AxiosRequestConfig) {
        return WebhookEndpointsApiFp(this.configuration).create(webhookEndpointCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a webhook endpoint.
     * @summary Delete a webhook endpoint
     * @param {string} id ID of the webhook endpoint.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookEndpointsApi
     */
    public delete(id: string, options?: AxiosRequestConfig) {
        return WebhookEndpointsApiFp(this.configuration).delete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a paginated list of webhook endpoints.
     * @summary List webhook endpoints
     * @param {WebhookEndpointsApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookEndpointsApi
     */
    public list(requestParameters: WebhookEndpointsApiListRequest = {}, options?: AxiosRequestConfig) {
        return WebhookEndpointsApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the webhook endpoint with the given ID.
     * @summary Retrieve a webhook endpoint
     * @param {string} id ID of the webhook endpoint.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookEndpointsApi
     */
    public retrieve(id: string, options?: AxiosRequestConfig) {
        return WebhookEndpointsApiFp(this.configuration).retrieve(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Generates a new secret for a webhook endpoint.
     * @summary Rotate a webhook endpoint secret
     * @param {string} id ID of the webhook endpoint.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookEndpointsApi
     */
    public rotateSecret(id: string, options?: AxiosRequestConfig) {
        return WebhookEndpointsApiFp(this.configuration).rotateSecret(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a webhook endpoint, such as url, events, status.
     * @summary Update a webhook endpoint
     * @param {string} id ID of the webhook endpoint.
     * @param {WebhookEndpointUpdateRequest} webhookEndpointUpdateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookEndpointsApi
     */
    public update(id: string, webhookEndpointUpdateRequest: WebhookEndpointUpdateRequest, options?: AxiosRequestConfig) {
        return WebhookEndpointsApiFp(this.configuration).update(id, webhookEndpointUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
