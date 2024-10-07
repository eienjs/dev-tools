# @eienjs/dev-tools

> Tools for develop fast and easy adonis apps

## Installation

Install and configure the package using the following command :

```bash
node ace add @eienjs/dev-tools
```

## Usage

This library exports helper utility `ResponseStatusText` corresponding text given a `ResponseStatus` code. For example:

```ts
import { ResponseStatus } from '@adonisjs/core/http';
import { ResponseStatusText } from '@eienjs/dev-tools';

const statusAcceptedText = ResponseStatusText[ResponseStatus.Accepted];
console.info(statusAcceptedText); // Accepted
```

### Japa Api Client Helpers

For testing add methods on assert client responses like a check status with corresponding ResponseStatus

```ts
import { test } from '@japa/runner';

test.group('Users list', () => {
  test('get a list of users', async ({ client }) => {
    const response = await client.get('/users');

    // Next is equivalent to response.assertStatus(200);
    response.assertOk();

    response.assertBody({
      data: [
        {
          id: 1,
          email: 'foo@bar.com',
        },
      ],
    });
  });
});
```

Added assertMethods corresponding to ResponseStatus:

```ts
/**
 * Assert response status to match the expected status 100
 */
assertContinue(): void;
/**
 * Assert response status to match the expected status 101
 */
assertSwitchingProtocols(): void;
/**
 * Assert response status to match the expected status 102
 */
assertProcessing(): void;
/**
 * Assert response status to match the expected status 103
 */
assertEarlyHints(): void;
/**
 * Assert response status to match the expected status 200
 */
assertOk(): void;
/**
 * Assert response status to match the expected status 201
 */
assertCreated(): void;
/**
 * Assert response status to match the expected status 202
 */
assertAccepted(): void;
/**
 * Assert response status to match the expected status 203
 */
assertNonAuthoritativeInformation(): void;
/**
 * Assert response status to match the expected status 204
 */
assertNoContent(): void;
/**
 * Assert response status to match the expected status 205
 */
assertResetContent(): void;
/**
 * Assert response status to match the expected status 206
 */
assertPartialContent(): void;
/**
 * Assert response status to match the expected status 207
 */
assertMultiStatus(): void;
/**
 * Assert response status to match the expected status 208
 */
assertAlreadyReported(): void;
/**
 * Assert response status to match the expected status 226
 */
assertIMUsed(): void;
/**
 * Assert response status to match the expected status 300
 */
assertMultipleChoices(): void;
/**
 * Assert response status to match the expected status 301
 */
assertMovedPermanently(): void;
/**
 * Assert response status to match the expected status 302
 */
assertFound(): void;
/**
 * Assert response status to match the expected status 303
 */
assertSeeOther(): void;
/**
 * Assert response status to match the expected status 304
 */
assertNotModified(): void;
/**
 * Assert response status to match the expected status 305
 */
assertUseProxy(): void;
/**
 * Assert response status to match the expected status 307
 */
assertTemporaryRedirect(): void;
/**
 * Assert response status to match the expected status 308
 */
assertPermanentRedirect(): void;
/**
 * Assert response status to match the expected status 400
 */
assertBadRequest(): void;
/**
 * Assert response status to match the expected status 401
 */
assertUnauthorized(): void;
/**
 * Assert response status to match the expected status 402
 */
assertPaymentRequired(): void;
/**
 * Assert response status to match the expected status 403
 */
assertForbidden(): void;
/**
 * Assert response status to match the expected status 404
 */
assertNotFound(): void;
/**
 * Assert response status to match the expected status 405
 */
assertMethodNotAllowed(): void;
/**
 * Assert response status to match the expected status 406
 */
assertNotAcceptable(): void;
/**
 * Assert response status to match the expected status 407
 */
assertProxyAuthenticationRequired(): void;
/**
 * Assert response status to match the expected status 408
 */
assertRequestTimeout(): void;
/**
 * Assert response status to match the expected status 409
 */
assertConflict(): void;
/**
 * Assert response status to match the expected status 410
 */
assertGone(): void;
/**
 * Assert response status to match the expected status 411
 */
assertLengthRequired(): void;
/**
 * Assert response status to match the expected status 412
 */
assertPreconditionFailed(): void;
/**
 * Assert response status to match the expected status 413
 */
assertPayloadTooLarge(): void;
/**
 * Assert response status to match the expected status 414
 */
assertURITooLong(): void;
/**
 * Assert response status to match the expected status 415
 */
assertUnsupportedMediaType(): void;
/**
 * Assert response status to match the expected status 416
 */
assertRangeNotSatisfiable(): void;
/**
 * Assert response status to match the expected status 417
 */
assertExpectationFailed(): void;
/**
 * Assert response status to match the expected status 418
 */
assertImATeapot(): void;
/**
 * Assert response status to match the expected status 421
 */
assertMisdirectedRequest(): void;
/**
 * Assert response status to match the expected status 422
 */
assertUnprocessableEntity(): void;
/**
 * Assert response status to match the expected status 423
 */
assertLocked(): void;
/**
 * Assert response status to match the expected status 424
 */
assertFailedDependency(): void;
/**
 * Assert response status to match the expected status 425
 */
assertTooEarly(): void;
/**
 * Assert response status to match the expected status 426
 */
assertUpgradeRequired(): void;
/**
 * Assert response status to match the expected status 428
 */
assertPreconditionRequired(): void;
/**
 * Assert response status to match the expected status 429
 */
assertTooManyRequests(): void;
/**
 * Assert response status to match the expected status 431
 */
assertRequestHeaderFieldsTooLarge(): void;
/**
 * Assert response status to match the expected status 451
 */
assertUnavailableForLegalReasons(): void;
/**
 * Assert response status to match the expected status 500
 */
assertInternalServerError(): void;
/**
 * Assert response status to match the expected status 501
 */
assertNotImplemented(): void;
/**
 * Assert response status to match the expected status 502
 */
assertBadGateway(): void;
/**
 * Assert response status to match the expected status 503
 */
assertServiceUnavailable(): void;
/**
 * Assert response status to match the expected status 504
 */
assertGatewayTimeout(): void;
/**
 * Assert response status to match the expected status 505
 */
assertHTTPVersionNotSupported(): void;
/**
 * Assert response status to match the expected status 506
 */
assertVariantAlsoNegotiates(): void;
/**
 * Assert response status to match the expected status 507
 */
assertInsufficientStorage(): void;
/**
 * Assert response status to match the expected status 508
 */
assertLoopDetected(): void;
/**
 * Assert response status to match the expected status 510
 */
assertNotExtended(): void;
/**
 * Assert response status to match the expected status 511
 */
assertNetworkAuthenticationRequired(): void;
```

### Response Helpers

Added three methods for follow standard `jsend` more information on https://github.com/omniti-labs/jsend for api responses.

Small example of usage

```ts
import { type HttpContext } from '@adonisjs/core/http';
import User from '#models/user';
import { loginValidator } from '#validators/auth/login';

export default class LoginController {
  public async handle({ request, response, auth }: HttpContext): Promise<void> {
    const { email, password } = await request.validateUsing(loginValidator);
    const user = await User.verifyCredentials(email, password);
    await auth.use('web').login(user);

    response.jsendSuccess({ auth: 'Sesión iniciada' });
  }
}
```

Methods:

```ts
/**
 * Send success response using jsend standard
 *
 */
jsendSuccess(result: unknown, httpCode?: number): void;

/**
 * Send fail response using jsend standard
 *
 */
jsendFail(errors: Record<string, unknown>, httpCode?: number): void;

/**
 * Send error response using jsend standard
 *
 */
jsendError(
  message: string,
  options?: { httpCode?: number; code?: string | number; errors?: unknown },
): void;
```

### Request Helpers

Method helper on request `wantsJSON()` check if current request includes json accept header.
