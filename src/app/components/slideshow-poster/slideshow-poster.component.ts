import { Component, OnInit, Input } from '@angular/core';

import { Movie } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss']
})
export class SlideshowPosterComponent implements OnInit {
  @Input() movies: Array<Movie> = [];

  slidesOpts: object = {
    slidesPerView: 2.6,
    freeMode: true
  };

  constructor() {}

  ngOnInit() {}
}
