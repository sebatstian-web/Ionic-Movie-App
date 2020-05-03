import { Pipe, PipeTransform } from '@angular/core';

import { MovieDetail } from '../interfaces/interfaces';

@Pipe({
  name: 'filterImg',
})
export class FilterImgPipe implements PipeTransform {
  // Crear el arreglo del slide mientras la imagen de la película exista
  transform(movies: Array<MovieDetail>): Array<MovieDetail> {
    return movies.filter((movie) => {
      return movie.backdrop_path;
    });
  }
}
