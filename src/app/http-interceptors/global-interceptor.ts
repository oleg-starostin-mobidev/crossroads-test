import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = environment.githubPat;
        const authReq = req.clone({
            url: `${environment.baseUrl}${req.url}`,
            headers: req.headers.set('Authorization', `token ${token}`)
        });

        return next.handle(authReq);
    }
}
