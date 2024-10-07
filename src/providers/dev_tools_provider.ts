import { type ApplicationService } from '@adonisjs/core/types';

declare module '@adonisjs/core/http' {
  interface Request {
    /**
     * Check if request with header accepts json
     */
    wantsJSON(): boolean;
  }

  interface Response {
    /**
     * Send success response using jsend standard
     *
     * More info: https://github.com/omniti-labs/jsend?tab=readme-ov-file#so-how-does-it-work
     */
    jsendSuccess(result: unknown, httpCode?: number): void;
    /**
     * Send fail response using jsend standard
     *
     * More info: https://github.com/omniti-labs/jsend?tab=readme-ov-file#so-how-does-it-work
     */
    jsendFail(errors: Record<string, unknown>, httpCode?: number): void;
    /**
     * Send error response using jsend standard
     *
     * More info: https://github.com/omniti-labs/jsend?tab=readme-ov-file#so-how-does-it-work
     */
    jsendError(
      message: string,
      options?: { httpCode?: number; code?: string | number; errors?: unknown },
    ): void;
  }
}

export default class DevToolsProvider {
  public constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  public register(): void {
    // Empty
  }

  /**
   * The container bindings have booted
   */
  public async boot(): Promise<void> {
    await import('../bindings/request_wants_json.js');
    await import('../bindings/jsend_responses.js');
  }

  /**
   * The application has been booted
   */
  public async start(): Promise<void> {
    // Empty
  }

  /**
   * The process has been started
   */
  public async ready(): Promise<void> {
    // Empty
  }

  /**
   * Preparing to shutdown the app
   */
  public async shutdown(): Promise<void> {
    // Empty
  }
}
