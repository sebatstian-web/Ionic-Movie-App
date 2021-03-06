import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

import { MovieDetail } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  movies: Array<MovieDetail> = [];

  constructor(private storage: Storage, private toastCtrl: ToastController) {
    this.loadingMovieStorageService();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500,
    });

    toast.present();
  }

  moviesSaveService(movie: MovieDetail) {
    let exists: boolean = false;
    let message: string;

    // Buscando si ya existe una película con el mismo ID en el storage
    this.movies.find((m) => {
      if (m.id === movie.id) return (exists = true);
    });

    // En caso de haber el mismo ID se devuelve un nuevo arreglo
    // Excluyendo la película existente
    if (exists) {
      this.movies = this.movies.filter((m) => m.id !== movie.id);
      message = 'Película eliminada de favoritos';
    } else {
      this.movies.push(movie);
      message = 'Película agregada a favoritos';
    }

    // Guardando en el storage las películas favoritas
    this.presentToast(message);
    this.storage.set('movies', this.movies);

    // El retorno permite saber si exisite o no la película en el storage
    // Para manipular el icono star
    return !exists;
  }

  async loadingMovieStorageService() {
    // Obteniendo las películas guardadas en el storage
    const movies = await this.storage.get('movies');
    return (this.movies = movies || []);
  }

  async existsMovieService(id: any): Promise<boolean> {
    await this.loadingMovieStorageService();
    const exists = this.movies.find((m) => m.id === id);

    // En vez de retornar todo el objecto, solo se devuelve true o false
    // Si es un objecto es true
    return exists ? true : false;
  }
}
