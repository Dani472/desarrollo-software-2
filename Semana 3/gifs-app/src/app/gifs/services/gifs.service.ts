import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';
import {GiphyResponse} from '../interfaces/giphy-item.interface';
import {Gif} from '../interfaces/gif.interface';
import {GifMapper} from '../mappers/gif.mapper';
import {map, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
  searchHistory = signal<Record<string, Gif[]>>({});
  keys= computed(() => Object.keys(this.searchHistory()))

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.urlGiphy}/gifs/trending`,{
      params: {
        api_key: environment.apiKey,
        limit:20
      }
    }).subscribe((resp) => {
      const gifs = GifMapper.mapGiphyItemsToArrayGif(resp.data);
      this.trendingGifs.set(gifs);
      console.log(gifs);
    });
  }

  searchsGifs(query: string) {
    return this.http.get<GiphyResponse>(`${environment.urlGiphy}/gifs/search/`,{
      params: {
        api_key: environment.apiKey,
        q: query,
        limit: 20
      }
    }).pipe(
      map((res) => GifMapper.mapGiphyItemsToArrayGif(res.data)),
      tap((gifs) => {
        this.searchHistory.update((history) => (
          {
            ...history,
            [query.toLowerCase()]: gifs
          }
        ))
      })
    )
      /*.subscribe((resp) => {
      const gifs = GifMapper.mapGiphyItemsToArrayGif(resp.data);
      console.log(gifs);
    });*/
  }

  getHistory(query:string): Gif[]{
    return this.searchHistory()[query.toLowerCase()];
  }
}
