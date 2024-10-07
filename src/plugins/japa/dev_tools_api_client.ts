import { type PluginFn } from '@japa/runner/types';

declare module '@japa/api-client' {
  export interface ApiResponse {
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
  }
}

/**
 * Find if a given package can be imported.
 */
const canImport = async (pkg: string): Promise<boolean> => {
  try {
    await import(pkg);

    return true;
  } catch {
    return false;
  }
};

export const devToolsApiClient = (): PluginFn => {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const pluginFn: PluginFn = async function () {
    /**
     * Extend "@japa/api-client" plugin
     */
    if (await canImport('@japa/api-client')) {
      const { extendApiClient } = await import('./api_client.js');
      extendApiClient();
    }
  };

  return pluginFn;
};
