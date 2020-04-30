import { Component, OnInit, Input } from '@angular/core';

import { Movie } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-pairs',
  templateUrl: './slideshow-pairs.component.html',
  styleUrls: ['./slideshow-pairs.component.scss']
})
export class SlideshowPairsComponent implements OnInit {
  @Input() movies: Array<Movie> = [];

  slidesOpts: object = {
    slidesPerView: 2.6,
    freeMode: true
  };

  constructor() {}

  ngOnInit() {}
}
