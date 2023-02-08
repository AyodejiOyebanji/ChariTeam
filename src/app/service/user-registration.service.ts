import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"
 import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  public url= environment.url

  constructor(private http: HttpClient) {}




}
