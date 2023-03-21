import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user$ = new BehaviorSubject<User>(null);

  constructor() { }

  getUser(): Observable<User>{
    return this._user$.asObservable()
  }

  setUser(user: User):void{
  this._user$.next(user);
  }

}
