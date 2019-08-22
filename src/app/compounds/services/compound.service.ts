import { Injectable } from '@angular/core';
import { ICompound } from '../compound.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable , throwError } from 'rxjs';
import { tap , catchError } from 'rxjs/operators';

@Injectable()
export class CompoundService {
  private _orderUrl = 'api/compounds';

  constructor(private _http: HttpClient) { }

  getCompounds(): Observable<ICompound[]> {
    return this._http.get<ICompound[]>(this._orderUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
catchError(this.handleError));
  }

  getCompound(id: number): Observable<ICompound> {
    return this._http.get<ICompound>(this._orderUrl + '/' + id).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}
}
