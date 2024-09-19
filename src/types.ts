import { type HttpStatusCode } from './status_codes.js';

export type HttpStatus = (typeof HttpStatusCode)[keyof typeof HttpStatusCode];
