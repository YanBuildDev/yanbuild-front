import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
@Injectable()
export class OrderService{
  constructor(
    private api: ApiService
  ){}

  path = '/orders'

  create(contact):Observable<{ data }>{
    return this.api.post(`${this.path}/create`,contact)
  }

  get(criteria):Observable<{ data }>{
    return this.api.get(`${this.path}/all`,criteria)
  }
  getById(id:string):Observable<{ data }> {
    if(id === ''){
      id = 'emptyId'
    }
    return this.api.get(`${this.path}/one/${id}`, {})
  }

  updateMany(criteria, updateData):Observable<{ data: { count: number } }>{
    return this.api.patch(`${this.path}/all`,{
      criteria: criteria,
      updateData: updateData
    })
  }

  updateById(id:string, updateData):Observable<{ data: { contact } }> {
    if(id === ''){
      id = 'emptyId'
    }
    return this.api.patch(`${this.path}/one/${id}`,updateData)
  }

  deleteById(id:string):Observable<any> {
    return this.api.delete(`${this.path}/${id}`)
  }

}
