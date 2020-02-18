import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Item, emptyItem} from './item';

const BASE_URL = 'https://my-30-x-30-database.herokuapp.com/';

@Injectable({ providedIn: 'root' })
export class ItemsService {

  model = 'items';

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}${this.model}`
  }

  all() {
    return this.httpClient.get(this.getUrl()).pipe(
      // APPEND ANY ADDITIONAL FIELDS ONTO GENERIC 'ITEM'
      map((x: Item[]) => x.map(xx => ({...emptyItem, ...xx})))
    )
  }

  create(model) {
    return this.httpClient.post(this.getUrl(), model);
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  update(model) {
    return this.httpClient.patch(this.getUrlForId(model.id),model)
  }

  delete(modelId) {
    return this.httpClient.delete(this.getUrlForId(modelId))
  }
}
