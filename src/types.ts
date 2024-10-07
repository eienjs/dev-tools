import { type ResponseStatus } from '@adonisjs/core/http';

export type ResponseStatusCodes = (typeof ResponseStatus)[keyof typeof ResponseStatus];
