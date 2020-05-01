import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Movie } from 'src/app/interfaces/interfaces';
import { DetailComponent } from '../detail/detail.component';

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

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async detail(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }
}
