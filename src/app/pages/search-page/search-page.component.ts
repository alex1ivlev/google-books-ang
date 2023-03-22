import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SearchService} from "../../services/search.service";
import {FormControl} from "@angular/forms";
import {Observable, of, switchMap} from "rxjs";
import {GoogleResponse} from "../../models/googleResponse";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit{

  currentUser$: Observable<User>;
  searchFormControl!: FormControl;
  searchResult$: Observable<GoogleResponse> = new Observable<GoogleResponse>();

  constructor(
    private searchService: SearchService,
    private userService: UserService,
    private router: Router,
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
  gotoWishList(): void{
    this.router.navigate(['wishlist'])
  }
}
