import { type ResponseStatus } from '@adonisjs/core/http';

export type HttpStatus = (typeof ResponseStatus)[keyof typeof ResponseStatus];
