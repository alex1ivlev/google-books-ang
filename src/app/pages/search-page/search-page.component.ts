import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../services/search.service";
import {FormControl} from "@angular/forms";
import {Observable, of, switchMap} from "rxjs";
import {GoogleResponse} from "../../models/googleResponse";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit{

  currentUser$: Observable<User>;
  searchFormControl!: FormControl;
  searchResult$: Observable<GoogleResponse> = new Observable<GoogleResponse>();

  constructor(
    private searchService: SearchService,
    private userService: UserService
  ) {}

  ngOnInit(): void{
    this.currentUser$ = this.userService.getUser();
    this.setSearchFormControl();
    this.showResults();
  }

  setSearchFormControl(): void{
    this.searchFormControl = new FormControl<any>('');
  }

  showResults(): void{
    this.searchResult$ = this.searchFormControl.valueChanges
      .pipe(
        switchMap(inputValue => inputValue ?
        this.searchService.getResultByQuery(inputValue) : of (null))
      )
  }
}
