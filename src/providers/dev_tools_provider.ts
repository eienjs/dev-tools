import { type ApplicationService } from '@adonisjs/core/types';

declare module '@adonisjs/core/http' {
  interface Request {
    wantsJSON(): boolean;
  }

  interface Response {
    jsendSuccess(result: unknown, httpCode?: number): void;
    jsendFail(errors: Record<string, unknown>, httpCode?: number): void;
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
