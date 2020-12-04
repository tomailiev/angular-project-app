import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './AuthInterceptor';
import { CredentialAttacher } from './CredentialAttacher';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: CredentialAttacher, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];