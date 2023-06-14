import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { environment } from 'src/environments/environment';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { Observable, map } from 'rxjs';
import { AuthResponseInterface } from '../types/authResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiURL}/users`;
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response) => response.user));
  }
}
