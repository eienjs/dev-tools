import { Response } from '@adonisjs/core/http';
import { HttpStatusCode } from '../status_codes.js';

Response.macro(
  'jsendSuccess',
  function (this: Response, result, httpCode = HttpStatusCode.HTTP_OK) {
    this.status(httpCode).json({
      status: 'success',
      data: result === undefined ? null : result,
    });
  },
);

Response.macro(
  'jsendFail',
  function (this: Response, errors, httpCode = HttpStatusCode.HTTP_UNPROCESSABLE_ENTITY) {
    this.status(httpCode).json({
      status: 'fail',
      data: errors,
    });
  },
);

Response.macro('jsendError', function (this: Response, message, options) {
  const httpCode = options?.httpCode ?? HttpStatusCode.HTTP_NOT_FOUND;

  this.status(httpCode).json({
    status: 'error',
    message,
    data: options?.errors ?? undefined,
    code: options?.code,
  });
});
