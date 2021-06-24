import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MetaResponse, ActiveActionDetail } from '../api.interfaces';



@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(private http: HttpClient,private router: Router) { }

  createAction(formdata:FormData){
    return this.http.post(`${environment.api}/action/register`, formdata)
  }

  loadActions(){
    const url = `${environment.api}/all/actions`;
    return this.http.get(url).pipe(
      map(response => response as MetaResponse),
      map(response => response.data as ActiveActionDetail[])
    )
  }
}
