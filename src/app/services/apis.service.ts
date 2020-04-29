import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  constructor(private http: HttpClient) {}

  getFeatureService() {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-04-01&primary_release_date.lte=2020-04-29&api_key=655a604710ab2753b77cbae3d5fb24ca&language=es&include_image_language=es`
    );
  }
}
