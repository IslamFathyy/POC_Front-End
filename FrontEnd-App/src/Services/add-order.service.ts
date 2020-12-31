import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserView } from 'src/Models/userView';

@Injectable()
export class AddOrderService {

  private rootUrl = environment.rootUrl;
  userviews:[];
  constructor(private http: HttpClient , private router:Router) {
    
   }

  public bookOrder(data):Observable<object>{
    var response = this.http.post(`${this.rootUrl}api/order`,data);
    return response;
  }

  public  getOrder()
  {
    this.http.get<{userview:[]}>(`${this.rootUrl}api/order`)
    .subscribe(p => {this.userviews = p.userview ; return this.userviews}); 

  }
}
