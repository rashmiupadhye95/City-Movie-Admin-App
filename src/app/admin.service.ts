import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class AdminService {

  constructor(private http: HttpClient) { }
  admins = [];
  private adminUrl = 'http://192.168.0.93:3000/api/admins';

  getRemoteAdmins(): Observable<[]> {
    return this.http.get<[]>(this.adminUrl);
  }

  addRemoteAdmin(admin): Observable<any> {
    return this.http.post(this.adminUrl, admin);
  }
}
