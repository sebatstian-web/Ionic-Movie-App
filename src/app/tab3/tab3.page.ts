import { Component, OnInit } from '@angular/core';

import { Genre, MovieDetail } from '../interfaces/interfaces';
import { StorageService } from '../services/storage.service';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  movies: Array<MovieDetail> = [];
  genres: Array<Genre> = [];
  favoritesGenres: Array<any>;

  constructor(private storage: StorageService, private apis: ApisService) {}

  ngOnInit() {}

  // Se ejecuta cada vez que se entra al tab
  async ionViewWillEnter() {
    this.movies = await this.storage.loadingMovieStorageService();
    this.genres = await this.apis.loadingGenreService();

    this.moviesGenres(this.genres, this.movies);
  }

  // Ordenar las películas de favoritos por género
  moviesGenres(genres: Array<Genre>, movies: Array<MovieDetail>) {
    this.favoritesGenres = [];

    genres.forEach((genre) => {
      this.favoritesGenres.push({
        genre: genre.name,
        movie: movies.filter((m) => {
          return m.genres.find((g) => g.id === genre.id);
        }),
      });
    });
  }
}
