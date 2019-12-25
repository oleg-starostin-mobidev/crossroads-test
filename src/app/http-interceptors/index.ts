import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { GlobalInterceptor } from './global-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: GlobalInterceptor, multi: true },
];
