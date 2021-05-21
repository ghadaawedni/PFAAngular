import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/api/test/user';
  private bnUrl = 'http://localhost:8080/api/test/beneficiary';
  private adminUrl = 'http://localhost:8080/api/test/admin';

  constructor(private http: HttpClient) { }

  getBNBoard(): Observable<string> {
    return this.http.get(this.bnUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
}
