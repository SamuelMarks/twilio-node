/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

type VerificationChannel = 'sms'|'call';

/**
 * @description Initialize the VerificationList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 */
declare function VerificationList(version: V1, serviceSid: string): VerificationListInstance;

interface VerificationListInstance {
  /**
   * create a VerificationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: VerificationListInstanceCreateOptions, callback?: (error: Error | null, item: VerificationInstance) => any): Promise<VerificationInstance>;
}

/**
 * Options to pass to create
 *
 * @property channel - sms or call
 * @property customMessage - A custom message for this verification
 * @property locale - Locale used in the sms or call.
 * @property sendDigits - Digits to send when a phone call is started
 * @property to - To phonenumber
 */
interface VerificationListInstanceCreateOptions {
  channel: string;
  customMessage?: string;
  locale?: string;
  sendDigits?: string;
  to: string;
}

interface VerificationPayload extends VerificationResource, Page.TwilioResponsePayload {
}

interface VerificationResource {
  account_sid: string;
  channel: VerificationChannel;
  date_created: Date;
  date_updated: Date;
  service_sid: string;
  sid: string;
  status: string;
  to: string;
  valid: boolean;
}

interface VerificationSolution {
  serviceSid?: string;
}


declare class VerificationInstance extends SerializableClass {
  /**
   * Initialize the VerificationContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - A string that uniquely identifies this Verification.
   * @property serviceSid - Service Sid.
   * @property accountSid - Account Sid.
   * @property to - To phonenumber
   * @property channel - sms or call
   * @property status - pending, approved, denied or expired
   * @property valid - successful verification
   * @property dateCreated - The date this Verification was created
   * @property dateUpdated - The date this Verification was updated
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   */
  constructor(version: V1, payload: VerificationPayload, serviceSid: string);

  accountSid: string;
  channel: VerificationChannel;
  dateCreated: Date;
  dateUpdated: Date;
  serviceSid: string;
  sid: string;
  status: string;
  to: string;
  /**
   * Produce a plain JSON object version of the VerificationInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  valid: boolean;
}


declare class VerificationPage extends Page<V1, VerificationPayload, VerificationResource, VerificationInstance> {
  /**
   * Initialize the VerificationPagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: VerificationSolution);

  /**
   * Build an instance of VerificationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: VerificationPayload): VerificationInstance;
}

export { VerificationInstance, VerificationList, VerificationListInstance, VerificationListInstanceCreateOptions, VerificationPage, VerificationPayload, VerificationResource, VerificationSolution }
