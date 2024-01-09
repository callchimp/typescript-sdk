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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SubscriberResponse
 */
export interface SubscriberResponse {
    /**
     * 
     * @type {number}
     * @memberof SubscriberResponse
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    status?: string;
    /**
     * 
     * @type {number}
     * @memberof SubscriberResponse
     */
    user?: number;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    vendorLeadCode?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    sourceId?: string;
    /**
     * Integer milisecond offset for call place
     * @type {number}
     * @memberof SubscriberResponse
     */
    gmtOffsetNow?: number;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    calledSinceLastReset?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    phoneCode?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    phoneNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    middleInitial?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    address1?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    address2?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    address3?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    province?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    postalCode?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    countryCode?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    gender?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    dateOfBirth?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    altPhone?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    comments?: string;
    /**
     * 
     * @type {number}
     * @memberof SubscriberResponse
     */
    calledCount?: number;
    /**
     * 
     * @type {number}
     * @memberof SubscriberResponse
     */
    lastLocalCallTime?: number;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    rank?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    customData?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    owner?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriberResponse
     */
    originType?: string;
    /**
     * Leadlist foreign key
     * @type {number}
     * @memberof SubscriberResponse
     */
    leadlist?: number;
    /**
     * Upload foreign key
     * @type {number}
     * @memberof SubscriberResponse
     */
    upload?: number;
    /**
     * Organization foreign key
     * @type {number}
     * @memberof SubscriberResponse
     */
    organization?: number;
}

/**
 * Check if a given object implements the SubscriberResponse interface.
 */
export function instanceOfSubscriberResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriberResponseFromJSON(json: any): SubscriberResponse {
    return SubscriberResponseFromJSONTyped(json, false);
}

export function SubscriberResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriberResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'user': !exists(json, 'user') ? undefined : json['user'],
        'vendorLeadCode': !exists(json, 'vendor_lead_code') ? undefined : json['vendor_lead_code'],
        'sourceId': !exists(json, 'source_id') ? undefined : json['source_id'],
        'gmtOffsetNow': !exists(json, 'gmt_offset_now') ? undefined : json['gmt_offset_now'],
        'calledSinceLastReset': !exists(json, 'called_since_last_reset') ? undefined : json['called_since_last_reset'],
        'phoneCode': !exists(json, 'phone_code') ? undefined : json['phone_code'],
        'phoneNumber': !exists(json, 'phone_number') ? undefined : json['phone_number'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'middleInitial': !exists(json, 'middle_initial') ? undefined : json['middle_initial'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'address1': !exists(json, 'address1') ? undefined : json['address1'],
        'address2': !exists(json, 'address2') ? undefined : json['address2'],
        'address3': !exists(json, 'address3') ? undefined : json['address3'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'province': !exists(json, 'province') ? undefined : json['province'],
        'postalCode': !exists(json, 'postal_code') ? undefined : json['postal_code'],
        'countryCode': !exists(json, 'country_code') ? undefined : json['country_code'],
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
        'dateOfBirth': !exists(json, 'date_of_birth') ? undefined : json['date_of_birth'],
        'altPhone': !exists(json, 'alt_phone') ? undefined : json['alt_phone'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'comments': !exists(json, 'comments') ? undefined : json['comments'],
        'calledCount': !exists(json, 'called_count') ? undefined : json['called_count'],
        'lastLocalCallTime': !exists(json, 'last_local_call_time') ? undefined : json['last_local_call_time'],
        'rank': !exists(json, 'rank') ? undefined : json['rank'],
        'customData': !exists(json, 'custom_data') ? undefined : json['custom_data'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'originType': !exists(json, 'origin_type') ? undefined : json['origin_type'],
        'leadlist': !exists(json, 'leadlist') ? undefined : json['leadlist'],
        'upload': !exists(json, 'upload') ? undefined : json['upload'],
        'organization': !exists(json, 'organization') ? undefined : json['organization'],
    };
}

export function SubscriberResponseToJSON(value?: SubscriberResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'status': value.status,
        'user': value.user,
        'vendor_lead_code': value.vendorLeadCode,
        'source_id': value.sourceId,
        'gmt_offset_now': value.gmtOffsetNow,
        'called_since_last_reset': value.calledSinceLastReset,
        'phone_code': value.phoneCode,
        'phone_number': value.phoneNumber,
        'title': value.title,
        'first_name': value.firstName,
        'middle_initial': value.middleInitial,
        'last_name': value.lastName,
        'address1': value.address1,
        'address2': value.address2,
        'address3': value.address3,
        'city': value.city,
        'state': value.state,
        'province': value.province,
        'postal_code': value.postalCode,
        'country_code': value.countryCode,
        'gender': value.gender,
        'date_of_birth': value.dateOfBirth,
        'alt_phone': value.altPhone,
        'email': value.email,
        'comments': value.comments,
        'called_count': value.calledCount,
        'last_local_call_time': value.lastLocalCallTime,
        'rank': value.rank,
        'custom_data': value.customData,
        'owner': value.owner,
        'origin_type': value.originType,
        'leadlist': value.leadlist,
        'upload': value.upload,
        'organization': value.organization,
    };
}
