/* tslint:disable */
/* eslint-disable */
/**
 * Callchimp Public API
 * ## Introduction👋 Introducing OpenAPI spec for doing almost anything in [callchimp.ai](https://callchimp.ai). CallChimp is a Gen AI Call Center Enhancing telecommunication with GPT-driven bulk calling. It is scalable, user-friendly, and customizable. Optimized for seamless integration and usability. ## API Categories📋 The APIs are divided in 7 categories listed below:   - Campaigns   - Supervisors   - Lists   - Subscribers   - Calls   - Phone Numbers   - Webhooks  ## API Operations✅ ### Campaign Operations    - List all Campaigns   - Create a Campaign   - Get Campaign by Id   - Delete Campaign by Id   - Update Campaign by Id   - Add Supervisors to Campaign by Id   - Remove Supervisors from Campaign by Id   - Upload audio file to Campaign by Id  ### Supervisor Operations    - List all Supervisors   - Create a Supervisor   - Get Supervisor by Id   - Delete Supervisor by Id   - Update Supervisor by Id   - Send OTP to Campaign by Id   - Verify Supervisor OTP by Id  ### List Operations    - List all Lists   - Create a List   - Get List by Id   - Delete List by Id   - Update List by Id  ### Subscriber Operations    - List all Subscribers   - Create one or more Subscriber(s)   - Get Subscriber by Id   - Delete Subscriber by Id   - Update Subscriber by Id  ### Call Operations    - List outbound Calls   - Create a Call   - Get Call by Id   - List Inbound Calls   - Generate Call Reports  ### Phone Number Operations    - List Phone Numbers  ### Webhook Operations    - List all Webhooks   - Create a Webhook   - Get Webhook by Id   - Delete Webhook by Id   - Update Webhook by Id  ## Authentication🔐 CallChimp public API offers authentication with API Keys. All endpoints accepts a header named `x-api-key`. To get started follow the below steps:    1. Login to callchimp dashboard.   2. Click on your profile on the top-right corner.   3. Click on Settings.   4. On the settings page, click on `API Keys` from the left sidebar.   5. Click on `Add new` button, add an expiry date and click on `Add`.   6. An API Key will be generated, please save the key somewhere safe as it won\'t be shown again!   7. You can use the API Key directly here in this playground to test out the APIs. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Model4XXResponse,
  SubscriberListResponse,
  SubscriberRequest,
  SubscriberResponse,
  SubscribersUpdate,
} from '../models/index';
import {
    Model4XXResponseFromJSON,
    Model4XXResponseToJSON,
    SubscriberListResponseFromJSON,
    SubscriberListResponseToJSON,
    SubscriberRequestFromJSON,
    SubscriberRequestToJSON,
    SubscriberResponseFromJSON,
    SubscriberResponseToJSON,
    SubscribersUpdateFromJSON,
    SubscribersUpdateToJSON,
} from '../models/index';

export interface SubscribersDeleteRequest {
    id: number;
}

export interface SubscribersGetRequest {
    id: number;
}

export interface SubscribersListRequest {
    page?: string;
}

export interface SubscribersPostRequest {
    subscriberRequest: SubscriberRequest;
    call?: boolean;
}

export interface SubscribersUpdateRequest {
    id: number;
    subscribersUpdate: SubscribersUpdate;
}

/**
 * 
 */
export class SubscribersApi extends runtime.BaseAPI {

    /**
     * 
     * Delete Subscriber by Id
     */
    async subscribersDeleteRaw(requestParameters: SubscribersDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subscribersDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // x-api-key authentication
        }

        const response = await this.request({
            path: `/subscribers/{Id}`.replace(`{${"Id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * Delete Subscriber by Id
     */
    async subscribersDelete(requestParameters: SubscribersDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.subscribersDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * 
     * Get Subscriber by Id
     */
    async subscribersGetRaw(requestParameters: SubscribersGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriberResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subscribersGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // x-api-key authentication
        }

        const response = await this.request({
            path: `/subscribers/{Id}`.replace(`{${"Id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriberResponseFromJSON(jsonValue));
    }

    /**
     * 
     * Get Subscriber by Id
     */
    async subscribersGet(requestParameters: SubscribersGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriberResponse> {
        const response = await this.subscribersGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * List Subscribers
     */
    async subscribersListRaw(requestParameters: SubscribersListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriberListResponse>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // x-api-key authentication
        }

        const response = await this.request({
            path: `/subscribers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriberListResponseFromJSON(jsonValue));
    }

    /**
     * 
     * List Subscribers
     */
    async subscribersList(requestParameters: SubscribersListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriberListResponse> {
        const response = await this.subscribersListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Create one or more Subscriber(s)
     */
    async subscribersPostRaw(requestParameters: SubscribersPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriberResponse>> {
        if (requestParameters.subscriberRequest === null || requestParameters.subscriberRequest === undefined) {
            throw new runtime.RequiredError('subscriberRequest','Required parameter requestParameters.subscriberRequest was null or undefined when calling subscribersPost.');
        }

        const queryParameters: any = {};

        if (requestParameters.call !== undefined) {
            queryParameters['call'] = requestParameters.call;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // x-api-key authentication
        }

        const response = await this.request({
            path: `/subscribers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriberRequestToJSON(requestParameters.subscriberRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriberResponseFromJSON(jsonValue));
    }

    /**
     * 
     * Create one or more Subscriber(s)
     */
    async subscribersPost(requestParameters: SubscribersPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriberResponse> {
        const response = await this.subscribersPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Update Subscriber by Id
     */
    async subscribersUpdateRaw(requestParameters: SubscribersUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriberResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subscribersUpdate.');
        }

        if (requestParameters.subscribersUpdate === null || requestParameters.subscribersUpdate === undefined) {
            throw new runtime.RequiredError('subscribersUpdate','Required parameter requestParameters.subscribersUpdate was null or undefined when calling subscribersUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // x-api-key authentication
        }

        const response = await this.request({
            path: `/subscribers/{Id}`.replace(`{${"Id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SubscribersUpdateToJSON(requestParameters.subscribersUpdate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriberResponseFromJSON(jsonValue));
    }

    /**
     * 
     * Update Subscriber by Id
     */
    async subscribersUpdate(requestParameters: SubscribersUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriberResponse> {
        const response = await this.subscribersUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
