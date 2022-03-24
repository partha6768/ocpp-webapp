import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable({
	providedIn: 'root'
})
export class LoaderInterceptor implements HttpInterceptor {

	constructor(private readonly loaderService: LoaderService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (req.url.indexOf('/liveStatus') === -1) {
			this.loaderService.show();
			return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
				if (event instanceof HttpResponse) {
					this.loaderService.hide();
				}
			}, (err: any) => {
				this.loaderService.hide();
			}));
		} else {
			return next.handle(req);
		}
	}
}
