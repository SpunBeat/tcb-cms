import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { throwError, of } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginResponse } from 'src/app/api.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,private router: Router) { }

  login(payload: any) {
    const formData = new FormData();
    formData.append('_username', payload.username);
    formData.append('_password', payload.password);
    return this.http.post(`${environment.api}/login`, formData).pipe(
      switchMap((response: LoginResponse) => {
        let { error, token } = response;
        if (error) {
          return throwError(new Error(error));
        }
        token = `Bearer ${token}`;
        window.localStorage.setItem('token', token);

        this.router.navigate(['/main/dashboard']);
        return of({ token });
      })
    );
  }
}
