// Import vendor
import 'babel-polyfill';
import 'reflect-metadata';

// Import Vue vendor
import * as bootstrap from './bootstrap';

export const vendor = [
    ...(<any>Object).values(bootstrap)
];