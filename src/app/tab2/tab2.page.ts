import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ApisService } from '../services/apis.service';
import { Movie } from '../interfaces/interfaces';
import { DetailComponent } from '../components/detail/detail.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  textSearch: string;
  suggestions: Array<string> = [
    'Matrix',
    'Volver al futuro',
    'Toy Story',
    'Kong',
  ];
  movies: Array<Movie> = [];
  loading: boolean;

  constructor(private apis: ApisService, private modalCtrl: ModalController) {}

  searchMovie(event: CustomEvent) {
    const value: string = event.detail.value;

    if (value.length === 0) {
      this.loading = false;
      this.movies = [];
      return;
    }

    this.loading = true;
    this.apis.searchMovieService(event.detail.value).subscribe((resp) => {
      this.movies = resp.results;
      this.loading = false;
    });
  }

  async detailMovie(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {
        id,
      },
    });

    modal.present();
  }
}
