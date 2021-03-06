import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Contact } from '../interface/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsUrl = ' http://localhost:3000/contacts';


  // Declarative Method Approch below removed code added here
  contacts$ = this.http.get<Contact[]>(this.contactsUrl)
    .pipe(
      tap(data => console.log('Contacts: ', JSON.stringify(data))),
      catchError(this.handleError)
    );

  constructor(
    private http: HttpClient
    ) { }


    private handleError(err: any) {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage: string;
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
      }
      console.error(err);
      return throwError(errorMessage);
    }
}
