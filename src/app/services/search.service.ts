import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

/*interface McDonalds {
  key: string,
  lat: string,
  long: string,
  address: string
};*/

@Injectable({
  providedIn: 'root'
})
export class SearchService {
	
  constructor(private http: HttpClient) { }
  findMc(search: string){
	return this.http.get('http://localhost:3000/'+search); 
 }

 /*getMc(search: string): Observable<McDonalds> {
    return this.http.get<McDonalds>('http://localhost:3000/'+search)
  }*/
}