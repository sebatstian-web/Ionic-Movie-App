import { Component, OnInit } from '@angular/core';

import { ApisService } from '../services/apis.service';
import { Movie } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  recentMovies: Array<Movie> = [];
  popularMovies: Array<Movie> = [];

  constructor(private apis: ApisService) {}

  ngOnInit() {
    this.apis
      .getFeatureService()
      .subscribe((resp) => (this.recentMovies = resp.results));

    this.apis
      .getPopularService()
      .subscribe((resp) => (this.popularMovies = resp.results));
  }
}
