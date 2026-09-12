import {Component, computed, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';
import {GifsService} from '../../services/gifs.service';
import {GiftListComponent} from '@components/gif-list/gift-list.component';

@Component({
  selector: 'gifs-history-page',
  imports: [
    GiftListComponent
  ],
  templateUrl: './history-page.component.html',
  styles: ``
})
export default class HistoryPageComponent {

  gifService = inject(GifsService);

  query = toSignal(inject(ActivatedRoute).params.pipe(
    map(params => params['query'])
  ))

  gifs = computed(() => this.gifService.getHistory(this.query()));

/*.subscribe(params => {
    console.log(params['query']);
  })*/
}
