import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';

import { ContactsService } from './contacts.service';

import { ContactsAppComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';

import { APP_ROUTES } from './app.routes';


@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailComponent],
  providers: [
  	{ provide: ContactsService, useClass: ContactsService },
  	{ provide: 'API_ENDPOINT' , useValue: 'http://localhost:4201/api' }
  	],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
    HttpModule
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
