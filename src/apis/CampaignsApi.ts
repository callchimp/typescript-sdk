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
  CampaignAddSuperRequest,
  CampaignAddSuperResponse,
  CampaignListResponse,
  CampaignRemoveSuperRequest,
  CampaignRemoveSuperResponse,
  CampaignRequest,
  CampaignResponse,
  CampaignUploadAudioResponse,
} from '../models/index';
import {
    CampaignAddSuperRequestFromJSON,
    CampaignAddSuperRequestToJSON,
    CampaignAddSuperResponseFromJSON,
    CampaignAddSuperResponseToJSON,
    CampaignListResponseFromJSON,
    CampaignListResponseToJSON,
    CampaignRemoveSuperRequestFromJSON,
    CampaignRemoveSuperRequestToJSON,
    CampaignRemoveSuperResponseFromJSON,
    CampaignRemoveSuperResponseToJSON,
    CampaignRequestFromJSON,
    CampaignRequestToJSON,
    CampaignResponseFromJSON,
    CampaignResponseToJSON,
    CampaignUploadAudioResponseFromJSON,
    CampaignUploadAudioResponseToJSON,
} from '../models/index';

export interface CampaignsAddsuperRequest {
    id: number;
    campaignAddSuperRequest: CampaignAddSuperRequest;
}

export interface CampaignsDeleteRequest {
    id: number;
}

export interface CampaignsGetRequest {
    id: number;
}

export interface CampaignsListRequest {
    page?: number;
}

export interface CampaignsPostRequest {
    campaignRequest: CampaignRequest;
}

export interface CampaignsRemovesuperRequest {
    id: number;
    campaignRemoveSuperRequest: CampaignRemoveSuperRequest;
}

export interface CampaignsUpdateRequest {
    id: number;
    campaignRequest: CampaignRequest;
}

export interface CampaignsUploadblastRequest {
    id: number;
    file: Blob;
}

/**
 * 
 */
export class CampaignsApi extends runtime.BaseAPI {

    /**
     * 
     * Add Supervisors to Campaign by Id
     */
    async campaignsAddsuperRaw(requestParameters: CampaignsAddsuperRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CampaignAddSuperResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling campaignsAddsuper.');
        }

        if (requestParameters.campaignAddSuperRequest === null || requestParameters.campaignAddSuperRequest === undefined) {
            throw new runtime.RequiredError('campaignAddSuperRequest','Required parameter requestParameters.campaignAddSuperRequest was null or undefined when calling campaignsAddsuper.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // x-api-key authentication
        }

        const response = await this.request({
            path: `/campaigns/{Id}/add_super`.replace(`{${"Id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CampaignAddSuperRequestToJSON(requestParameters.campaignAddSuperRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CampaignAddSuperResponseFromJSON(jsonValue));
    }

    /**
     * 
     * Add Supervisors to Campaign by Id
     */
    async campaignsAddsuper(requestParameters: CampaignsAddsuperRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CampaignAddSuperResponse> {
        const response = await this.campaignsAddsuperRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Delete Campaign by Id
     */
    async campaignsDeleteRaw(requestParameters: CampaignsDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling campaignsDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // x-api-key authentication
        }

        const response = await this.request({
            path: `/campaigns/{Id}`.replace(`{${"Id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * Delete Campaign by Id
     */
    async campaignsDelete(requestParameters: CampaignsDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.campaignsDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * 
     * Get Campaign by Id
     */
    async campaignsGetRaw(requestParameters: CampaignsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CampaignResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling campaignsGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // x-api-key authentication
        }

        const response = await this.request({
            path: `/campaigns/{Id}`.replace(`{${"Id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CampaignResponseFromJSON(jsonValue));
    }

    /**
     * 
     * Get Campaign by Id
     */
    async campaignsGet(requestParameters: CampaignsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CampaignResponse> {
        const response = await this.campaignsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * List Campaigns
     */
    async campaignsListRaw(requestParameters: CampaignsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CampaignListResponse>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // x-api-key authentication
        }

        const response = await this.request({
            path: `/campaigns`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CampaignListResponseFromJSON(jsonValue));
    }

    /**
     * 
     * List Campaigns
     */
    async campaignsList(requestParameters: CampaignsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CampaignListResponse> {
        const response = await this.campaignsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Create a Campaign
     */
    async campaignsPostRaw(requestParameters: CampaignsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CampaignResponse>> {
        if (requestParameters.campaignRequest === null || requestParameters.campaignRequest === undefined) {
            throw new runtime.RequiredError('campaignRequest','Required parameter requestParameters.campaignRequest was null or undefined when calling campaignsPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // x-api-key authentication
        }

        const response = await this.request({
            path: `/campaigns`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CampaignRequestToJSON(requestParameters.campaignRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CampaignResponseFromJSON(jsonValue));
    }

    /**
     * 
     * Create a Campaign
     */
    async campaignsPost(requestParameters: CampaignsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CampaignResponse> {
        const response = await this.campaignsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Remove Supervisors from Campaign by Id
     */
    async campaignsRemovesuperRaw(requestParameters: CampaignsRemovesuperRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CampaignRemoveSuperResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling campaignsRemovesuper.');
        }

        if (requestParameters.campaignRemoveSuperRequest === null || requestParameters.campaignRemoveSuperRequest === undefined) {
            throw new runtime.RequiredError('campaignRemoveSuperRequest','Required parameter requestParameters.campaignRemoveSuperRequest was null or undefined when calling campaignsRemovesuper.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // x-api-key authentication
        }

        const response = await this.request({
            path: `/campaigns/{Id}/remove_super`.replace(`{${"Id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CampaignRemoveSuperRequestToJSON(requestParameters.campaignRemoveSuperRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CampaignRemoveSuperResponseFromJSON(jsonValue));
    }

    /**
     * 
     * Remove Supervisors from Campaign by Id
     */
    async campaignsRemovesuper(requestParameters: CampaignsRemovesuperRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CampaignRemoveSuperResponse> {
        const response = await this.campaignsRemovesuperRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Update Campaign by Id
     */
    async campaignsUpdateRaw(requestParameters: CampaignsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CampaignResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling campaignsUpdate.');
        }

        if (requestParameters.campaignRequest === null || requestParameters.campaignRequest === undefined) {
            throw new runtime.RequiredError('campaignRequest','Required parameter requestParameters.campaignRequest was null or undefined when calling campaignsUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // x-api-key authentication
        }

        const response = await this.request({
            path: `/campaigns/{Id}`.replace(`{${"Id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CampaignRequestToJSON(requestParameters.campaignRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CampaignResponseFromJSON(jsonValue));
    }

    /**
     * 
     * Update Campaign by Id
     */
    async campaignsUpdate(requestParameters: CampaignsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CampaignResponse> {
        const response = await this.campaignsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Upload audio file to Campaign by Id
     */
    async campaignsUploadblastRaw(requestParameters: CampaignsUploadblastRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CampaignUploadAudioResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling campaignsUploadblast.');
        }

        if (requestParameters.file === null || requestParameters.file === undefined) {
            throw new runtime.RequiredError('file','Required parameter requestParameters.file was null or undefined when calling campaignsUploadblast.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // x-api-key authentication
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.file !== undefined) {
            formParams.append('file', requestParameters.file as any);
        }

        const response = await this.request({
            path: `/campaigns/{Id}/upload_blast_file`.replace(`{${"Id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CampaignUploadAudioResponseFromJSON(jsonValue));
    }

    /**
     * 
     * Upload audio file to Campaign by Id
     */
    async campaignsUploadblast(requestParameters: CampaignsUploadblastRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CampaignUploadAudioResponse> {
        const response = await this.campaignsUploadblastRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
