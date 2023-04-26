import Model, { attr } from '@ember-data/model';

export default class ProductsModel extends Model {
  //This becomes accessible using injection service: `@service store`
  @attr name;
  @attr description;
  @attr price;
  @attr features;
  @attr colors;
}
