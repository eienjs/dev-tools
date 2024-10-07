import { Response, ResponseStatus } from '@adonisjs/core/http';

Response.macro('jsendSuccess', function (this: Response, result, httpCode = ResponseStatus.Ok) {
  this.status(httpCode).json({
    status: 'success',
    data: result === undefined ? null : result,
  });
});

Response.macro(
  'jsendFail',
  function (this: Response, errors, httpCode = ResponseStatus.UnprocessableEntity) {
    this.status(httpCode).json({
      status: 'fail',
      data: errors,
    });
  },
);

Response.macro('jsendError', function (this: Response, message, options) {
  const httpCode = options?.httpCode ?? ResponseStatus.NotFound;

  this.status(httpCode).json({
    status: 'error',
    message,
    data: options?.errors ?? undefined,
    code: options?.code,
  });
});
