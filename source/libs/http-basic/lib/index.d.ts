/// <reference types="node" />
import { Callback } from './Callback';
import { CachedResponse } from './CachedResponse';
import { HttpVerb } from './HttpVerb';
import { ICache } from './ICache';
import { Options } from './Options';
import Response = require('http-response-object');
import { URL } from 'url';
declare function request(method: HttpVerb, url: string | URL, options: Options | null | void, callback: Callback): void | NodeJS.WritableStream;
declare function request(method: HttpVerb, url: string | URL, callback: Callback): void | NodeJS.WritableStream;
export default request;
export { HttpVerb };
export { Options };
export { Callback };
export { Response };
export { CachedResponse };
export { ICache };