import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  private apiUrl = 'https://es.wikipedia.org/w/api.php';

  constructor(private http: HttpClient) { }

  getBiographyOfMessi() {
    const params = {
      action: 'query',
      format: 'json',
      prop: 'extracts',
      exintro: '',
      titles: 'Lionel Messi'
    };

    return this.http.get(this.apiUrl, { params });
  }
}
