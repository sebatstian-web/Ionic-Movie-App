import { Component, OnInit, Input } from '@angular/core';

import { Movie } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss']
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() movies: Array<Movie> = [];

  slidesOpts: object = {
    slidesPerView: 1.2,
    freeMode: true
  };

  constructor() {}

  ngOnInit() {}
}
