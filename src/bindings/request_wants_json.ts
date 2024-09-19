import { Request } from '@adonisjs/core/http';

Request.macro('wantsJSON', function (this: Request) {
  const firstType = this.types().at(0);
  if (!firstType) {
    return false;
  }

  return firstType.includes('json') || firstType.includes('application/vnd.api+json');
});
