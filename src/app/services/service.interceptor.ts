import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoaderService } from './loader.service';
import { ToasterService } from './toaster.service'
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class ServiceInterceptor implements HttpInterceptor {
  totalRequests = 0;
  requestsCompleted = 0;
  constructor(private loader: LoaderService, private toasterService: ToasterService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.show();
    this.totalRequests++;
    request = request.clone({
      setHeaders :{
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    return next.handle(request).pipe(
      finalize(() => {

        this.requestsCompleted++;

        console.log(this.requestsCompleted, this.totalRequests);

        if (this.requestsCompleted === this.totalRequests) {
          this.loader.hide();
          this.totalRequests = 0;
          this.requestsCompleted = 0;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.toasterService.showToaster(error.message, error.status)
        return throwError(error);
      })

    )
  }
}
