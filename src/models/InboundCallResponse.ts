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
import type { InboundCallResponseCallchimpNumber } from './InboundCallResponseCallchimpNumber';
import {
    InboundCallResponseCallchimpNumberFromJSON,
    InboundCallResponseCallchimpNumberFromJSONTyped,
    InboundCallResponseCallchimpNumberToJSON,
} from './InboundCallResponseCallchimpNumber';
import type { InboundCallResponseHangupCause } from './InboundCallResponseHangupCause';
import {
    InboundCallResponseHangupCauseFromJSON,
    InboundCallResponseHangupCauseFromJSONTyped,
    InboundCallResponseHangupCauseToJSON,
} from './InboundCallResponseHangupCause';
import type { InboundCallResponseSupervisor } from './InboundCallResponseSupervisor';
import {
    InboundCallResponseSupervisorFromJSON,
    InboundCallResponseSupervisorFromJSONTyped,
    InboundCallResponseSupervisorToJSON,
} from './InboundCallResponseSupervisor';

/**
 * 
 * @export
 * @interface InboundCallResponse
 */
export interface InboundCallResponse {
    /**
     * 
     * @type {InboundCallResponseCallchimpNumber}
     * @memberof InboundCallResponse
     */
    callchimpNumber?: InboundCallResponseCallchimpNumber;
    /**
     * 
     * @type {Date}
     * @memberof InboundCallResponse
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof InboundCallResponse
     */
    dialStatus?: string | null;
    /**
     * Call duration in seconds
     * @type {number}
     * @memberof InboundCallResponse
     */
    duration?: number;
    /**
     * 
     * @type {InboundCallResponseHangupCause}
     * @memberof InboundCallResponse
     */
    hangupCause?: InboundCallResponseHangupCause;
    /**
     * 
     * @type {number}
     * @memberof InboundCallResponse
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof InboundCallResponse
     */
    inboundCaller?: string;
    /**
     * 
     * @type {boolean}
     * @memberof InboundCallResponse
     */
    isAnswered?: boolean;
    /**
     * 
     * @type {number}
     * @memberof InboundCallResponse
     */
    organization?: number;
    /**
     * 
     * @type {InboundCallResponseSupervisor}
     * @memberof InboundCallResponse
     */
    supervisor?: InboundCallResponseSupervisor | null;
    /**
     * 
     * @type {InboundCallResponseHangupCause}
     * @memberof InboundCallResponse
     */
    supervisorNumber?: InboundCallResponseHangupCause;
}

/**
 * Check if a given object implements the InboundCallResponse interface.
 */
export function instanceOfInboundCallResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InboundCallResponseFromJSON(json: any): InboundCallResponse {
    return InboundCallResponseFromJSONTyped(json, false);
}

export function InboundCallResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InboundCallResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'callchimpNumber': !exists(json, 'callchimp_number') ? undefined : InboundCallResponseCallchimpNumberFromJSON(json['callchimp_number']),
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'dialStatus': !exists(json, 'dial_status') ? undefined : json['dial_status'],
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'hangupCause': !exists(json, 'hangup_cause') ? undefined : InboundCallResponseHangupCauseFromJSON(json['hangup_cause']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'inboundCaller': !exists(json, 'inbound_caller') ? undefined : json['inbound_caller'],
        'isAnswered': !exists(json, 'is_answered') ? undefined : json['is_answered'],
        'organization': !exists(json, 'organization') ? undefined : json['organization'],
        'supervisor': !exists(json, 'supervisor') ? undefined : InboundCallResponseSupervisorFromJSON(json['supervisor']),
        'supervisorNumber': !exists(json, 'supervisor_number') ? undefined : InboundCallResponseHangupCauseFromJSON(json['supervisor_number']),
    };
}

export function InboundCallResponseToJSON(value?: InboundCallResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'callchimp_number': InboundCallResponseCallchimpNumberToJSON(value.callchimpNumber),
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'dial_status': value.dialStatus,
        'duration': value.duration,
        'hangup_cause': InboundCallResponseHangupCauseToJSON(value.hangupCause),
        'id': value.id,
        'inbound_caller': value.inboundCaller,
        'is_answered': value.isAnswered,
        'organization': value.organization,
        'supervisor': InboundCallResponseSupervisorToJSON(value.supervisor),
        'supervisor_number': InboundCallResponseHangupCauseToJSON(value.supervisorNumber),
    };
}

