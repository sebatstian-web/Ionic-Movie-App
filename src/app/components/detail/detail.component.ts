import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ApisService } from 'src/app/services/apis.service';
import { MovieDetail, Cast } from 'src/app/interfaces/interfaces';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() id: string;

  movie: MovieDetail;
  textHidden: number = 150;
  cast: Array<Cast> = [];
  starIcon: string = 'star-outline';
  slideOpts: object = {
    slidesPerView: 2.8,
    freeMode: true,
  };

  constructor(
    private apis: ApisService,
    private modalCtrl: ModalController,
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.storage
      .existsMovieService(this.id)
      .then((resp) => (this.starIcon = resp ? 'star' : 'star-outline'));

    this.apis
      .getMovieDetailService(this.id)
      .subscribe((resp) => (this.movie = resp));

    this.apis
      .getMovieActorsService(this.id)
      .subscribe((resp) => (this.cast = resp.cast));
  }

  back() {
    this.modalCtrl.dismiss();
  }

  saveFavorite() {
    const exists = this.storage.moviesSaveService(this.movie);
    this.starIcon = exists ? 'star' : 'star-outline';
  }
}
