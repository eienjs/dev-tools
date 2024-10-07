import { ResponseStatus } from '@adonisjs/core/http';
import { ApiResponse } from '@japa/api-client';

/**
 * Extending the "@japa/api-client" plugin with custom methods to
 * status codes.
 */
export const extendApiClient = (): void => {
  ApiResponse.macro('assertContinue', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.Continue);
  });

  ApiResponse.macro('assertSwitchingProtocols', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.SwitchingProtocols);
  });

  ApiResponse.macro('assertProcessing', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.Processing);
  });

  ApiResponse.macro('assertEarlyHints', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.EarlyHints);
  });

  ApiResponse.macro('assertOk', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.Ok);
  });

  ApiResponse.macro('assertCreated', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.Created);
  });

  ApiResponse.macro('assertAccepted', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.Accepted);
  });

  ApiResponse.macro('assertNonAuthoritativeInformation', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.NonAuthoritativeInformation);
  });

  ApiResponse.macro('assertNoContent', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.NoContent);
  });

  ApiResponse.macro('assertResetContent', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.ResetContent);
  });

  ApiResponse.macro('assertPartialContent', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.PartialContent);
  });

  ApiResponse.macro('assertMultiStatus', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.MultiStatus);
  });

  ApiResponse.macro('assertAlreadyReported', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.AlreadyReported);
  });

  ApiResponse.macro('assertIMUsed', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.IMUsed);
  });

  ApiResponse.macro('assertMultipleChoices', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.MultipleChoices);
  });

  ApiResponse.macro('assertMovedPermanently', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.MovedPermanently);
  });

  ApiResponse.macro('assertFound', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.Found);
  });

  ApiResponse.macro('assertSeeOther', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.SeeOther);
  });

  ApiResponse.macro('assertNotModified', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.NotModified);
  });

  ApiResponse.macro('assertUseProxy', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.UseProxy);
  });

  ApiResponse.macro('assertTemporaryRedirect', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.TemporaryRedirect);
  });

  ApiResponse.macro('assertPermanentRedirect', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.PermanentRedirect);
  });

  ApiResponse.macro('assertBadRequest', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.BadRequest);
  });

  ApiResponse.macro('assertUnauthorized', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.Unauthorized);
  });

  ApiResponse.macro('assertPaymentRequired', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.PaymentRequired);
  });

  ApiResponse.macro('assertForbidden', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.Forbidden);
  });

  ApiResponse.macro('assertNotFound', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.NotFound);
  });

  ApiResponse.macro('assertMethodNotAllowed', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.MethodNotAllowed);
  });

  ApiResponse.macro('assertNotAcceptable', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.NotAcceptable);
  });

  ApiResponse.macro('assertProxyAuthenticationRequired', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.ProxyAuthenticationRequired);
  });

  ApiResponse.macro('assertRequestTimeout', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.RequestTimeout);
  });

  ApiResponse.macro('assertConflict', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.Conflict);
  });

  ApiResponse.macro('assertGone', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.Gone);
  });

  ApiResponse.macro('assertLengthRequired', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.LengthRequired);
  });

  ApiResponse.macro('assertPreconditionFailed', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.PreconditionFailed);
  });

  ApiResponse.macro('assertPayloadTooLarge', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.PayloadTooLarge);
  });

  ApiResponse.macro('assertURITooLong', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.URITooLong);
  });

  ApiResponse.macro('assertUnsupportedMediaType', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.UnsupportedMediaType);
  });

  ApiResponse.macro('assertRangeNotSatisfiable', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.RangeNotSatisfiable);
  });

  ApiResponse.macro('assertExpectationFailed', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.ExpectationFailed);
  });

  ApiResponse.macro('assertImATeapot', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.ImATeapot);
  });

  ApiResponse.macro('assertMisdirectedRequest', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.MisdirectedRequest);
  });

  ApiResponse.macro('assertUnprocessableEntity', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.UnprocessableEntity);
  });

  ApiResponse.macro('assertLocked', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.Locked);
  });

  ApiResponse.macro('assertFailedDependency', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.FailedDependency);
  });

  ApiResponse.macro('assertTooEarly', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.TooEarly);
  });

  ApiResponse.macro('assertUpgradeRequired', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.UpgradeRequired);
  });

  ApiResponse.macro('assertPreconditionRequired', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.PreconditionRequired);
  });

  ApiResponse.macro('assertTooManyRequests', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.TooManyRequests);
  });

  ApiResponse.macro('assertRequestHeaderFieldsTooLarge', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.RequestHeaderFieldsTooLarge);
  });

  ApiResponse.macro('assertUnavailableForLegalReasons', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.UnavailableForLegalReasons);
  });

  ApiResponse.macro('assertInternalServerError', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.InternalServerError);
  });

  ApiResponse.macro('assertNotImplemented', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.NotImplemented);
  });

  ApiResponse.macro('assertBadGateway', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.BadGateway);
  });

  ApiResponse.macro('assertServiceUnavailable', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.ServiceUnavailable);
  });

  ApiResponse.macro('assertGatewayTimeout', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.GatewayTimeout);
  });

  ApiResponse.macro('assertHTTPVersionNotSupported', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.HTTPVersionNotSupported);
  });

  ApiResponse.macro('assertVariantAlsoNegotiates', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.VariantAlsoNegotiates);
  });

  ApiResponse.macro('assertInsufficientStorage', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.InsufficientStorage);
  });

  ApiResponse.macro('assertLoopDetected', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.LoopDetected);
  });

  ApiResponse.macro('assertNotExtended', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.NotExtended);
  });

  ApiResponse.macro('assertNetworkAuthenticationRequired', function (this: ApiResponse) {
    this.assertStatus(ResponseStatus.NetworkAuthenticationRequired);
  });
};
