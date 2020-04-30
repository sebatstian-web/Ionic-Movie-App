import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Movie } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-pairs',
  templateUrl: './slideshow-pairs.component.html',
  styleUrls: ['./slideshow-pairs.component.scss']
})
export class SlideshowPairsComponent implements OnInit {
  @Input() movies: Array<Movie> = [];
  @Output() loadingMore = new EventEmitter();

  slidesOpts: object = {
    slidesPerView: 2.6,
    freeMode: true
  };

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.loadingMore.emit();
  }
}
