import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemController extends Controller {
  // app/routes/item.js collected data from data/product.js and fetched in model() hook
  @tracked color = this.model.colors[0].color;
  @tracked isZoomed = false;

  get productImage() {
    return this.model.colors.find(({ color }) => color === this.color).image;
  }

  @action
  onChangeColor(newColor) {
    this.color = newColor;
  }

  @action
  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }
}
