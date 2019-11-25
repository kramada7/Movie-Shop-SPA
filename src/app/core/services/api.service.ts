import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http:HttpClient) { }
  
  getAll(path: string): Observable<any[]> {
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp => resp as any[]), //projecting the response into the any array because we are expecting list
      catchError(this.handleError)
    );
  }

  create(path: string, resource: Object = {}, options?): Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`, JSON.stringify(resource), options)
      .pipe(map(response => response), catchError(e => throwError(new Error('SOMETHING BAD HAPPENED'))));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(error.error.errorMessage);
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.message}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(error.error.errorMessage);
  }

}
