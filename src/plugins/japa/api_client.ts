import { ApiResponse } from '@japa/api-client';
import { HttpStatusCode } from '../../status_codes.js';

declare module '@japa/api-client' {
  export interface ApiResponse {
    assertContinue(): void;
    assertSwitchingProtocols(): void;
    assertProcessing(): void;
    assertEarlyHints(): void;
    assertOk(): void;
    assertCreated(): void;
    assertAccepted(): void;
    assertNonAuthoritativeInformation(): void;
    assertNoContent(): void;
    assertResetContent(): void;
    assertPartialContent(): void;
    assertMultiStatus(): void;
    assertAlreadyReported(): void;
    assertImUsed(): void;
    assertMultipleChoices(): void;
    assertMovedPermanently(): void;
    assertFound(): void;
    assertSeeOther(): void;
    assertNotModified(): void;
    assertUseProxy(): void;
    assertReserved(): void;
    assertTemporaryRedirect(): void;
    assertPermanentlyRedirect(): void;
    assertBadRequest(): void;
    assertUnauthorized(): void;
    assertPaymentRequired(): void;
    assertForbidden(): void;
    assertNotFound(): void;
    assertMethodNotAllowed(): void;
    assertNotAcceptable(): void;
    assertProxyAuthenticationRequired(): void;
    assertRequestTimeout(): void;
    assertConflict(): void;
    assertGone(): void;
    assertLengthRequired(): void;
    assertPreconditionFailed(): void;
    assertRequestEntityTooLarge(): void;
    assertRequestUriTooLong(): void;
    assertUnsupportedMediaType(): void;
    assertRequestedRangeNotSatisfiable(): void;
    assertExpectationFailed(): void;
    assertIAmATeapot(): void;
    assertMisdirectedRequest(): void;
    assertUnprocessableEntity(): void;
    assertLocked(): void;
    assertFailedDependency(): void;
    assertTooEarly(): void;
    assertUpgradeRequired(): void;
    assertPreconditionRequired(): void;
    assertTooManyRequests(): void;
    assertRequestHeaderFieldsTooLarge(): void;
    assertUnavailableForLegalReasons(): void;
    assertInternalServerError(): void;
    assertNotImplemented(): void;
    assertBadGateway(): void;
    assertServiceUnavailable(): void;
    assertGatewayTimeout(): void;
    assertVersionNotSupported(): void;
    assertVariantAlsoNegotiatesExperimental(): void;
    assertInsufficientStorage(): void;
    assertLoopDetected(): void;
    assertNotExtended(): void;
    assertNetworkAuthenticationRequired(): void;
  }
}

/**
 * Extending the "@japa/api-client" plugin with custom methods to
 * status codes.
 */
export const extendApiClient = (): void => {
  ApiResponse.macro('assertContinue', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_CONTINUE);
  });

  ApiResponse.macro('assertSwitchingProtocols', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_SWITCHING_PROTOCOLS);
  });

  ApiResponse.macro('assertProcessing', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_PROCESSING);
  });

  ApiResponse.macro('assertEarlyHints', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_EARLY_HINTS);
  });

  ApiResponse.macro('assertOk', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_OK);
  });

  ApiResponse.macro('assertCreated', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_CREATED);
  });

  ApiResponse.macro('assertAccepted', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_ACCEPTED);
  });

  ApiResponse.macro('assertNonAuthoritativeInformation', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_NON_AUTHORITATIVE_INFORMATION);
  });

  ApiResponse.macro('assertNoContent', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_NO_CONTENT);
  });

  ApiResponse.macro('assertResetContent', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_RESET_CONTENT);
  });

  ApiResponse.macro('assertPartialContent', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_PARTIAL_CONTENT);
  });

  ApiResponse.macro('assertMultiStatus', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_MULTI_STATUS);
  });

  ApiResponse.macro('assertAlreadyReported', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_ALREADY_REPORTED);
  });

  ApiResponse.macro('assertImUsed', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_IM_USED);
  });

  ApiResponse.macro('assertMultipleChoices', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_MULTIPLE_CHOICES);
  });

  ApiResponse.macro('assertMovedPermanently', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_MOVED_PERMANENTLY);
  });

  ApiResponse.macro('assertFound', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_FOUND);
  });

  ApiResponse.macro('assertSeeOther', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_SEE_OTHER);
  });

  ApiResponse.macro('assertNotModified', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_NOT_MODIFIED);
  });

  ApiResponse.macro('assertUseProxy', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_USE_PROXY);
  });

  ApiResponse.macro('assertReserved', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_RESERVED);
  });

  ApiResponse.macro('assertTemporaryRedirect', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_TEMPORARY_REDIRECT);
  });

  ApiResponse.macro('assertPermanentlyRedirect', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_PERMANENTLY_REDIRECT);
  });

  ApiResponse.macro('assertBadRequest', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_BAD_REQUEST);
  });

  ApiResponse.macro('assertUnauthorized', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_UNAUTHORIZED);
  });

  ApiResponse.macro('assertPaymentRequired', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_PAYMENT_REQUIRED);
  });

  ApiResponse.macro('assertForbidden', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_FORBIDDEN);
  });

  ApiResponse.macro('assertNotFound', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_NOT_FOUND);
  });

  ApiResponse.macro('assertMethodNotAllowed', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_METHOD_NOT_ALLOWED);
  });

  ApiResponse.macro('assertNotAcceptable', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_NOT_ACCEPTABLE);
  });

  ApiResponse.macro('assertProxyAuthenticationRequired', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_PROXY_AUTHENTICATION_REQUIRED);
  });

  ApiResponse.macro('assertRequestTimeout', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_REQUEST_TIMEOUT);
  });

  ApiResponse.macro('assertConflict', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_CONFLICT);
  });

  ApiResponse.macro('assertGone', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_GONE);
  });

  ApiResponse.macro('assertLengthRequired', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_LENGTH_REQUIRED);
  });

  ApiResponse.macro('assertPreconditionFailed', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_PRECONDITION_FAILED);
  });

  ApiResponse.macro('assertRequestEntityTooLarge', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_REQUEST_ENTITY_TOO_LARGE);
  });

  ApiResponse.macro('assertRequestUriTooLong', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_REQUEST_URI_TOO_LONG);
  });

  ApiResponse.macro('assertUnsupportedMediaType', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_UNSUPPORTED_MEDIA_TYPE);
  });

  ApiResponse.macro('assertRequestedRangeNotSatisfiable', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_REQUESTED_RANGE_NOT_SATISFIABLE);
  });

  ApiResponse.macro('assertExpectationFailed', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_EXPECTATION_FAILED);
  });

  ApiResponse.macro('assertIAmATeapot', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_I_AM_A_TEAPOT);
  });

  ApiResponse.macro('assertMisdirectedRequest', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_MISDIRECTED_REQUEST);
  });

  ApiResponse.macro('assertUnprocessableEntity', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_UNPROCESSABLE_ENTITY);
  });

  ApiResponse.macro('assertLocked', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_LOCKED);
  });

  ApiResponse.macro('assertFailedDependency', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_FAILED_DEPENDENCY);
  });

  ApiResponse.macro('assertTooEarly', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_TOO_EARLY);
  });

  ApiResponse.macro('assertUpgradeRequired', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_UPGRADE_REQUIRED);
  });

  ApiResponse.macro('assertPreconditionRequired', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_PRECONDITION_REQUIRED);
  });

  ApiResponse.macro('assertTooManyRequests', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_TOO_MANY_REQUESTS);
  });

  ApiResponse.macro('assertRequestHeaderFieldsTooLarge', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE);
  });

  ApiResponse.macro('assertUnavailableForLegalReasons', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_UNAVAILABLE_FOR_LEGAL_REASONS);
  });

  ApiResponse.macro('assertInternalServerError', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_INTERNAL_SERVER_ERROR);
  });

  ApiResponse.macro('assertNotImplemented', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_NOT_IMPLEMENTED);
  });

  ApiResponse.macro('assertBadGateway', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_BAD_GATEWAY);
  });

  ApiResponse.macro('assertServiceUnavailable', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_SERVICE_UNAVAILABLE);
  });

  ApiResponse.macro('assertGatewayTimeout', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_GATEWAY_TIMEOUT);
  });

  ApiResponse.macro('assertVersionNotSupported', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_VERSION_NOT_SUPPORTED);
  });

  ApiResponse.macro('assertVariantAlsoNegotiatesExperimental', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL);
  });

  ApiResponse.macro('assertInsufficientStorage', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_INSUFFICIENT_STORAGE);
  });

  ApiResponse.macro('assertLoopDetected', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_LOOP_DETECTED);
  });

  ApiResponse.macro('assertNotExtended', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_NOT_EXTENDED);
  });

  ApiResponse.macro('assertNetworkAuthenticationRequired', function (this: ApiResponse) {
    this.assertStatus(HttpStatusCode.HTTP_NETWORK_AUTHENTICATION_REQUIRED);
  });
};
