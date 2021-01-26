import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Card } from './card';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  readonly url = "http://localhost:3000/cards";

  constructor( private http: HttpClient) {}

  get(): Observable<Card[]>{
    return this.http.get<Card[]>(this.url);
  }

  add(d: Card): Observable<Card[]>{
    return this.http.post<Card[]>(this.url, d);
  }

  del(card: Card): Observable<any>{
    return this.http.delete(`${this.url}/${card._id}`);
  }


}
