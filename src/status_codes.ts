import { ResponseStatus } from '@adonisjs/core/http';
import { type HttpStatus } from './types.js';

export const HttpStatusText: Record<HttpStatus, string> = {
  [ResponseStatus.Continue]: 'Continue',
  [ResponseStatus.SwitchingProtocols]: 'Switching Protocols',
  [ResponseStatus.Processing]: 'Processing', // RFC2518
  [ResponseStatus.EarlyHints]: 'Early Hints',
  [ResponseStatus.Ok]: 'OK',
  [ResponseStatus.Created]: 'Created',
  [ResponseStatus.Accepted]: 'Accepted',
  [ResponseStatus.NonAuthoritativeInformation]: 'Non-Authoritative Information',
  [ResponseStatus.NoContent]: 'No Content',
  [ResponseStatus.ResetContent]: 'Reset Content',
  [ResponseStatus.PartialContent]: 'Partial Content',
  [ResponseStatus.MultiStatus]: 'Multi-Status', // RFC4918
  [ResponseStatus.AlreadyReported]: 'Already Reported', // RFC5842
  [ResponseStatus.IMUsed]: 'IM Used', // RFC3229
  [ResponseStatus.MultipleChoices]: 'Multiple Choices',
  [ResponseStatus.MovedPermanently]: 'Moved Permanently',
  [ResponseStatus.Found]: 'Found',
  [ResponseStatus.SeeOther]: 'See Other',
  [ResponseStatus.NotModified]: 'Not Modified',
  [ResponseStatus.UseProxy]: 'Use Proxy',
  [ResponseStatus.TemporaryRedirect]: 'Temporary Redirect',
  [ResponseStatus.PermanentRedirect]: 'Permanent Redirect', // RFC7238
  [ResponseStatus.BadRequest]: 'Bad Request',
  [ResponseStatus.Unauthorized]: 'Unauthorized',
  [ResponseStatus.PaymentRequired]: 'Payment Required',
  [ResponseStatus.Forbidden]: 'Forbidden',
  [ResponseStatus.NotFound]: 'Not Found',
  [ResponseStatus.MethodNotAllowed]: 'Method Not Allowed',
  [ResponseStatus.NotAcceptable]: 'Not Acceptable',
  [ResponseStatus.ProxyAuthenticationRequired]: 'Proxy Authentication Required',
  [ResponseStatus.RequestTimeout]: 'Request Timeout',
  [ResponseStatus.Conflict]: 'Conflict',
  [ResponseStatus.Gone]: 'Gone',
  [ResponseStatus.LengthRequired]: 'Length Required',
  [ResponseStatus.PreconditionFailed]: 'Precondition Failed',
  [ResponseStatus.PayloadTooLarge]: 'Content Too Large', // RFC-ietf-httpbis-semantics
  [ResponseStatus.URITooLong]: 'URI Too Long',
  [ResponseStatus.UnsupportedMediaType]: 'Unsupported Media Type',
  [ResponseStatus.RangeNotSatisfiable]: 'Range Not Satisfiable',
  [ResponseStatus.ExpectationFailed]: 'Expectation Failed',
  [ResponseStatus.ImATeapot]: "I'm a teapot", // RFC2324
  [ResponseStatus.MisdirectedRequest]: 'Misdirected Request', // RFC7540
  [ResponseStatus.UnprocessableEntity]: 'Unprocessable Content', // RFC-ietf-httpbis-semantics
  [ResponseStatus.Locked]: 'Locked', // RFC4918
  [ResponseStatus.FailedDependency]: 'Failed Dependency', // RFC4918
  [ResponseStatus.TooEarly]: 'Too Early', // RFC-ietf-httpbis-replay-04
  [ResponseStatus.UpgradeRequired]: 'Upgrade Required', // RFC2817
  [ResponseStatus.PreconditionRequired]: 'Precondition Required', // RFC6585
  [ResponseStatus.TooManyRequests]: 'Too Many Requests', // RFC6585
  [ResponseStatus.RequestHeaderFieldsTooLarge]: 'Request Header Fields Too Large', // RFC6585
  [ResponseStatus.UnavailableForLegalReasons]: 'Unavailable For Legal Reasons', // RFC7725
  [ResponseStatus.InternalServerError]: 'Internal Server Error',
  [ResponseStatus.NotImplemented]: 'Not Implemented',
  [ResponseStatus.BadGateway]: 'Bad Gateway',
  [ResponseStatus.ServiceUnavailable]: 'Service Unavailable',
  [ResponseStatus.GatewayTimeout]: 'Gateway Timeout',
  [ResponseStatus.HTTPVersionNotSupported]: 'HTTP Version Not Supported',
  [ResponseStatus.VariantAlsoNegotiates]: 'Variant Also Negotiates', // RFC2295
  [ResponseStatus.InsufficientStorage]: 'Insufficient Storage', // RFC4918
  [ResponseStatus.LoopDetected]: 'Loop Detected', // RFC5842
  [ResponseStatus.NotExtended]: 'Not Extended', // RFC2774
  [ResponseStatus.NetworkAuthenticationRequired]: 'Network Authentication Required', // RFC6585
} as const;
