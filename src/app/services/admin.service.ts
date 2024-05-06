import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable, tap } from "rxjs";



@Injectable()
export class AdminService {
  constructor(
    private api: ApiService
  ) { }

  path = '/admin'

  createAdmin(payload:{
    name?: string,
    phone?: string,
    email: string,
    password: string
  }):Observable<{ data: { user } }> {
    return this.api.post(`${this.path}/create`,payload)
  }

  login(payload):Observable<{ data: { accessToken: string } }>{
    return this.api.post(`${this.path}/login`,payload).pipe(
      tap((resp) => {
        if(resp.data.accessToken){
          localStorage.setItem('jwt',resp.data.accessToken)
        }
      })
    )
  }

  loginViaAccessToken():Observable<{ data: { user } }> {
    return this.api.post(`${this.path}/loginViaAccessToken`)
  }

  logout():Observable<{ data: { success: boolean } }> {
    return this.api.post(`${this.path}/logout`)
  }

  scan(id:string):Observable<{ data: { contact } }>{
    if(id === ''){
      id = 'emptyId'
    }
    return this.api.post(`${this.path}/scan/${id}`)
  }
}
