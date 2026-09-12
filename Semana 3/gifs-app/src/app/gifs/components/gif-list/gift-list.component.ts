import {Component, input} from '@angular/core';
import {GifListItemComponent} from '@components/gif-list/gif-list-item/gif-list-item.component';
import {Gif} from '../../interfaces/gif.interface';

@Component({
  selector: 'gift-list',
  imports: [
    GifListItemComponent
  ],
  templateUrl: './gift-list.component.html',
  styles: ``
})
export class GiftListComponent {
  gifs = input.required<Gif[]>()
}
