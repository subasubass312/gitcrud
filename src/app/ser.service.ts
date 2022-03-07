import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor(private http:HttpClient) { }
  getdata(){
    return this.http.get("http://localhost:3000");
  }
  savedata(data:any){
 
  }
}
