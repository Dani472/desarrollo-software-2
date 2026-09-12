import {Component, computed, inject, signal} from '@angular/core';
import {GiftListComponent} from '@components/gif-list/gift-list.component';
import {GifsService} from '../../services/gifs.service';
import {GifMapper} from '../../mappers/gif.mapper';
import {Gif} from '../../interfaces/gif.interface';
/*
{
  'happy': [res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11, res12, res13, res14, res15, res16, res17, res18, res19, res20]
  'avengers': [res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11, res12, res13, res14, res15, res16, res17, res18, res19, res20]
}
*/

@Component({
  selector: 'app-search-page',
  imports: [
    GiftListComponent
  ],
  templateUrl: './search-page.component.html'
})
export default class SearchPageComponent {
  gifService = inject(GifsService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifService.searchsGifs(query).subscribe(
      (resp) => {
        this.gifs.set(resp);
    });
  }
}
