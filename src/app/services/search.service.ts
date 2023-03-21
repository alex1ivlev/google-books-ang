import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../enviroments/environment";
import {GoogleResponse} from "../models/googleResponse";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  getResultByQuery(query:string): Observable<GoogleResponse>{
    return this.http.get<GoogleResponse>(`${environment.booksApi}?q=${query}`)
  }
}
