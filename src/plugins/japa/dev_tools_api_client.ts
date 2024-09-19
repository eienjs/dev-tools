import { type PluginFn } from '@japa/runner/types';

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
