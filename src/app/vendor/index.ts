// Import vendor
import '@babel/polyfill';

// Import Vue vendor
import * as bootstrap from './bootstrap';

export const vendor = [
    ...(<any>Object).values(bootstrap)
];
