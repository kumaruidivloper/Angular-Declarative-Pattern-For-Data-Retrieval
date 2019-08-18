import { Component, ChangeDetectionStrategy  } from '@angular/core';

import { ContactService } from './service/contact.service';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Angular-Declarative-pattern-for-data-retrieval';

  public errorMessage = '';

  // Declarative Approch
  contacts$ = this.contactService.contacts$
  .pipe(
    catchError(err => {
      console.log(err);
      this.errorMessage = err;
      return EMPTY;
    })
  );

  constructor(private contactService: ContactService) { }
}
