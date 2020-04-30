import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { TheMoviesDb } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  constructor(private http: HttpClient) {}

  private runQuery<T>(query: string) {
    const lang: string = '&language=es&include_image_language=es';
    query = `${environment.urlApi}${query}&api_key=${environment.apiKey}${lang}`;

    return this.http.get<T>(query);
  }

  getFeatureService() {
    // Obteniendo los últimos 30 días para enviar a la API
    // Y así mostrar las películas más recientes
    const nowDay: Date = new Date();
    const lastDay = new Date(
      nowDay.getFullYear(),
      nowDay.getMonth() + 1,
      0
    ).getDate();
    const nowMonth = nowDay.getMonth() + 1;
    let month: any;

    if (nowMonth < 10) {
      month = '0' + nowMonth;
    } else {
      month = nowMonth;
    }

    const startDay = `${nowDay.getUTCFullYear()}-${month}-01`;
    const finalDay = `${nowDay.getUTCFullYear()}-${month}-${lastDay}`;

    return this.runQuery<TheMoviesDb>(
      `/discover/movie?primary_release_date.gte=${startDay}&primary_release_date.lte=${finalDay}`
    );
  }

  getPopularService() {
    const query: string = '/discover/movie?sort_by=popularity.desc';
    return this.runQuery<TheMoviesDb>(query);
  }
}
