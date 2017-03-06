import { Injectable, Inject } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';
import { Contact } from './models/contact';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactsService {

  constructor(private http: Http, @Inject('API_ENDPOINT') private apiEndpoint) { }

  getContacts() {
  	return this.http.get(`${this.apiEndpoint}/contacts`)
 		.map(res => res.json())
      	.map(data => data.items);
  }

  getContact(id: string) {
  	return this.http.get(`${this.apiEndpoint}/contacts/${id}`)
 		.map(res => res.json().item);
  }

}
