import { Component } from '@angular/core';

import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  textSearch: string;
  suggestions: Array<string> = ['SpiderMan', 'Avengers', 'Toy Story'];

  constructor(private apis: ApisService) {}

  searchMovie(event: CustomEvent) {
    this.apis.searchMovieService(event.detail.value).subscribe(console.log);
  }
}
