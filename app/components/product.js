import Component from '@glimmer/component';

export default class ProductComponent extends Component {
  // this.args represent the parameter(s) of the product.hbs component where its invoked at: app/templates/index.hbs
  productImage = this.args.product.colors[0].image;

  toggleZoom() {
    return null;
  }
}
