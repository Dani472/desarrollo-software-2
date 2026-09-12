import {GiphyItem} from '../interfaces/giphy-item.interface';
import {Gif} from '../interfaces/gif.interface';

export class GifMapper {

  static mapGiphyItemToGif(giphyItem: GiphyItem): Gif {
    return {
      id: giphyItem.id,
      title: giphyItem.title,
      url: giphyItem.images.original.url
    }
  }

  static mapGiphyItemsToArrayGif(giphyItems: GiphyItem[]): Gif[] {
    return giphyItems.map(this.mapGiphyItemToGif)
  }


}
