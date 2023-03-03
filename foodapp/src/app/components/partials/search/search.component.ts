import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchTerm = '';

  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.searchTerm = params.searchTerm;
      }
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  public search(term: string): void {
    if (term) {
      this.router.navigateByUrl('/search/' + term);
    }
  }
}
