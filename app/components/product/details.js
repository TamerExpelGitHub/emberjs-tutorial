import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductDetailsComponent extends Component {
  @service shoppingCart;

  @action
  addToCart() {
    // this.args stemmed from the parameters passed into the details component: app/template/item.hbs
    const { name, color, colors, price } = this.args;
    //addItem method defined in service/shopping-cart.js
    this.shoppingCart.addItem({
      name,
      color,
      image: colors.find((colorInfo) => colorInfo.color === color).image,
      price: price.current,
    });
  }
}
